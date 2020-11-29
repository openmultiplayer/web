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
  const path_mdx = path + ".mdx";
  const path_md = path + ".md";
  if (exists(path_mdx)) {
    return readFileSync(path_mdx).toString();
  } else if (exists(path_md)) {
    return readFileSync(path_md).toString();
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
