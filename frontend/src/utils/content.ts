// Content acquisition helper APIs for retrieving Markdown text from various
// sources. The helpers here wrap various fallbacks and different extensions
// and list files/locales.
import { statSync, readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import glob from "glob";
import { RawContent } from "src/types/content";
import { flow, map, join as ldjoin, filter } from "lodash/fp";

// relative to the `frontend/` directory, the app's working directory.
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

// A helper for checking if a file exists because it's easier than exceptions.
export const exists = (path: string): boolean => {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
};

// Reads a markdown content file from the local filesystem. Only works at build
// time. Will not work in production on Vercel at request-time.
export const readMdFromLocal = async (
  path: string
): Promise<string | undefined> => {
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

// Reads a markdown content file from the API. This is suitable for runtime use
// and is used to build docs pages at request-time.
export const readMdFromAPI = async (
  path: string
): Promise<string | undefined> => {
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

// Reads "content" (not docs) based on the given name and locale. It first
// attempts the given locale and if that isn't found, it attempts the "en"
// version. If the English version is used as a fallback, `fallback` is `true`.
export const readLocaleContent = async (
  name: string,
  locale: string
): Promise<RawContent> => {
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

// Reads docs with the given name and locale. Attempts the locale version first
// (if not English) and falls back to the English if not found.
export const readLocaleDocs = async (
  name: string,
  locale?: string
): Promise<RawContent> => {
  const dir = "../docs/" + name;
  if (statSync(dir).isDirectory()) {
    const list = readdirSync(dir);

    // Attempt to read a file named _.md from the directory
    let source = await readMdFromLocal(dir + "/_");
    if (source === undefined) {
      source = "";
    }

    // Generate some content for this category page. A heading, some content
    // from the index.md if it exists and a list of pages inside it.
    const additional = flow(
      filter((v: string) => v !== "index.md"), // filter out the special index page
      map((v: string) => `- [${v.replace(".md", "")}](${name + "/" + v})`), // generate a ul element
      ldjoin("\n")
    )(list);

    return {
      source: source + additional,
      fallback: false,
    };
  }

  if (name === "") {
    name = "index";
  }

  let withLocale = "../docs/" + name;
  if (locale && locale != "en") {
    withLocale = `../docs/translations/${locale}/${name}`;
  }

  let source = await readMdFromLocal(withLocale);
  if (source !== undefined) {
    return { source, fallback: false };
  }

  const fallbackPath = "../docs/" + name;
  source = await readMdFromLocal(fallbackPath);
  if (source !== undefined) {
    return { source, fallback: true };
  }

  // Only attempt to find translated copies on the API. These aren't built
  // statically at build-time because the traffic is lower than the English
  // (default) pages so it's fine to sacrifice a bit of performance here.
  withLocale = name;
  if (locale && locale != "en") {
    withLocale = `translations/${locale}/${name}`;
  }
  source = await readMdFromAPI(withLocale);
  if (source !== undefined) {
    return { source, fallback: false };
  }

  throw new Error(`Not found (${name})`);
};
