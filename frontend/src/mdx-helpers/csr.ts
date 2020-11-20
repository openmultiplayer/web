import { DetailedReactHTMLElement } from "react";
import hydrate from "next-mdx-remote/hydrate";

import { MDX_COMPONENTS } from "src/components/typography";
import { Content } from "./content";

export const markdownCSR = (
  content: Content
): DetailedReactHTMLElement<
  { dangerouslySetInnerHTML: { __html: any } },
  HTMLElement
> =>
  hydrate(content, {
    components: MDX_COMPONENTS,
  });
