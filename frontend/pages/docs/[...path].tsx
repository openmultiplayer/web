// -
// Client side
// -

import renderToString from "next-mdx-remote/render-to-string";

type Props = {
  source?: any;
};

const Page = (props: Props) => {
  const content = props.source && hydrate(props.source);

  // TODO: sidebar and contents
  return <section className="measure-wide center">{content}</section>;
};

// -
// Server side
// -

import { readFileSync } from "fs";
import { resolve } from "path";
import { GetStaticPropsContext } from "next";
import hydrate from "next-mdx-remote/hydrate";

export async function getStaticProps(
  context: GetStaticPropsContext<{ path: string[] }>
) {
  // TODO: support .md as well?
  const path: string = resolve("docs", ...context.params.path) + ".mdx";

  const source = readFileSync(path).toString();

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(source);

  return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
  // TODO: make this dynamic for all files in ./docs/
  return {
    paths: ["/docs/test"],
    fallback: true,
  };
}

export default Page;
