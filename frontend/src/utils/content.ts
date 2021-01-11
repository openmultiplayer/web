import { statSync, readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import glob from "glob";

const CONTENT_PATH = "content";

// Gets a list of all content. English is the default and all other languages
// will be a subset of the English content so it's essentially the master copy.
// Because of this, the "en" directory is where to source the list of content.
//
// It returns essentially a matrix of all combinations of all locales and all
// content pages. The result is a flattened list.
export const getContentPaths = (subdir: string = ""): string[] => {
  const contents = getContentPathsForLocale(subdir);
  return getAllContentLocales()
    .map((locale: string) => contents.map((content) => `/${locale}${content}`))
    .flat();
};

// Gets a list of all content for a specific language
export const getContentPathsForLocale = (
  subdir: string = "",
  locale: string = "en"
) =>
  glob
    .sync(join(CONTENT_PATH, locale, subdir, "**", "*.mdx"))
    .map(
      (path: string) =>
        path.substring(
          ("content/" + locale).length, // strip off "content/en/"
          path.indexOf(".mdx") // strip off ".mdx"
        ) // result: only the path bit, relative to locale directory without ext
    )
    .filter((path: string) => path !== "/index"); // ignore index page, this is automatic

// Get all possible locales by simply listing the content directory. Each
// subdirectory in here is a locale. There should be no other files or
// directories in here.
export const getAllContentLocales = () =>
  readdirSync(CONTENT_PATH).filter((path: string) => !path.startsWith(".")); // ignore dotfiles

export const exists = (path: string): boolean => {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
};

export const readMdFromLocal = async (path: string): Promise<string> => {
  if (path === "") {
    path = "index";
  }

  const path_mdx = path + ".mdx";
  const path_md = path + ".md";

  if (exists(path_mdx)) {
    return readFileSync(path_mdx).toString();
  }

  if (exists(path_md)) {
    return readFileSync(path_md).toString();
  }

  return undefined;
};

export const readMdFromAPI = async (path: string): Promise<string> => {
  if (path === "") {
    path = "index";
  }

  const path_mdx = path + ".mdx";
  const path_md = path + ".md";

  let response: Response;

  // TODO: Perform the md/mdx differentiation on the API, instead of here.

  response = await fetch("https://api.open.mp/docs/" + path_md);
  if (response.status === 200) {
    return await response.text();
  }

  response = await fetch("https://api.open.mp/docs/" + path_mdx);
  if (response.status === 200) {
    return await response.text();
  }

  return undefined;
};

export const readLocaleContent = async (name: string, locale: string) => {
  let source = await readMdFromLocal(resolve("content", locale, name));
  if (source !== undefined) {
    return { source, fallback: false };
  }

  source = await readMdFromLocal(resolve("content", "en", name));
  if (source !== undefined) {
    return { source, fallback: true };
  }

  throw new Error(`Not found (${name} - ${locale})`);
};

export const readLocaleDocs = async (name: string, locale?: string) => {
  let fullName = name;
  if (locale && locale != "en") {
    fullName = `translations/${locale}/${name}`;
  }

  let source = await readMdFromLocal(fullName);
  if (source !== undefined) {
    return { source, fallback: false, fullName };
  }

  source = await readMdFromLocal(name);
  if (source !== undefined) {
    return { source, fallback: true, name };
  }

  throw new Error(`Not found (${name})`);
};
