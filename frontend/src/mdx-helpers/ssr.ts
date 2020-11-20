import { readFileSync } from "fs";
import { join } from "path";
import renderToString from "next-mdx-remote/render-to-string";

import { MDX_COMPONENTS } from "src/components/typography";
import { Content } from "./content";

export const markdownSSR = async (
  locale: string,
  file: string
): Promise<Content> => {
  let content: Buffer;

  try {
    content = readFileSync(join("content", locale, file));
  } catch (e) {
    content = readFileSync(join("content", "en", file));
  }

  return await renderToString(content, {
    components: MDX_COMPONENTS,
  });
};
