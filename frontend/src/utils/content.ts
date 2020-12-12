import { statSync, readFileSync } from "fs";
import { resolve } from "path";

export const exists = (path: string): boolean => {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
};

export const readMd = async (path: string): Promise<string> => {
  const stripped = path.slice("../docs/".length, path.length);
  const path_mdx = stripped + ".mdx";
  const path_md = stripped + ".md";

  let response: Response;

  // TODO: Perform the md/mdx differentiation on the API, instead of here.

  response = await fetch("https://api.open.mp/docs/" + path_md);
  if (response.status !== 404) {
    return response.text();
  }

  response = await fetch("https://api.open.mp/docs/" + path_mdx);
  if (response.status !== 404) {
    return response.text();
  }

  return undefined;
};

export const readLocaleContent = async (name: string, locale: string) => {
  let source = await readMd(resolve("content", locale, name));
  if (source !== undefined) {
    return { source, fallback: false };
  }

  source = await readMd(resolve("content", "en", name));
  if (source !== undefined) {
    return { source, fallback: true };
  }

  throw new Error("Not found");
};

export const readLocaleDocs = async (name: string, locale?: string) => {
  let fullName = name;
  if (locale && locale != "en") {
    fullName = `translations/${locale}/${name}`;
  }

  let fullPath = `../docs/${fullName}`;
  let source = await readMd(fullPath);
  if (source !== undefined) {
    return { source, fallback: false, fullPath };
  }

  fullPath = `../docs/${name}`;
  source = await readMd(fullPath);
  if (source !== undefined) {
    return { source, fallback: true, fullPath };
  }

  throw new Error("Not found");
};
