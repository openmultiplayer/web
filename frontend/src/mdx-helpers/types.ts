import { Components } from "@mdx-js/react";

export type MarkdownContent = {
  compiledSource: string;
  renderedOutput?: string;
  scope?: any;
};

export type MarkdownRenderConfig = {
  components: Components;
  mdxOptions?: any;
  scope?: any;
};
