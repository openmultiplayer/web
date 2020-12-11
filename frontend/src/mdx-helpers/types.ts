export type MarkdownContent = {
  compiledSource: string;
  renderedOutput?: string;
  scope?: any;
};

export type MarkdownRenderConfig = {
  components?: any;
  mdxOptions?: any;
  scope?: any;
};
