import components from "src/components/templates";

// -
// Client side
// -

import hydrate from "next-mdx-remote/hydrate";
import { DocsSidebar } from "src/components/Sidebar";
import Admonition from "src/components/Admonition";

type Props = {
  source?: any;
  error?: string;
  data?: { [key: string]: any };
  fallback?: boolean;
};

const Page = (props: Props) => {
  if (props.error) {
    return (
      <section>
        <h1>Error!</h1>
        <p>{props.error}</p>
      </section>
    );
  }

  const content = props.source && hydrate(props.source, { components });

  return (
    <div className="flex flex-column flex-row-ns flex-auto justify-center-ns">
      <DocsSidebar />
      <section className="mw7 pa3 flex-auto">
        {props.fallback && (
          <Admonition type="warning" title="Not Translated">
            <p>
              This page has not been translated into the language that your
              browser requested. The English content is being shown as a
              fallback.
            </p>
            <p>
              If you want to contribute a translation for this page then please
              click <a href="https://github.com/openmultiplayer/web">here</a>.
            </p>
          </Admonition>
        )}
        <h1>{props?.data?.title}</h1>
        {content}
      </section>
      <nav>{/* TODO: Table of contents */}</nav>
    </div>
  );
};

// -
// Server side
// -

import { extname } from "path";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import visit from "unist-util-visit";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";

import { readLocaleDocs } from "src/utils/content";

// Remark plugin for colours.
// Usage:
//
// {text}(#hexcode)
//
// This is {yellow}(#ffff00) text!
//

const colourPattern = /{(.+?)}\(#([a-f0-9]{6})\)/gm;

const remarkColour = function attacher() {
  return (tree) => {
    visit(tree, "paragraph", (node) => {
      let children: Array<any> = node.children as Array<any>;
      let newChildren: Array<any> = node.children as Array<any>;

      children.map((v: { value: string }, i: number) => {
        let match: RegExpExecArray;
        let insertions: number = 0;
        let lastIndex = 0;
        do {
          match = colourPattern.exec(v.value);
          if (match?.length !== 3) {
            continue;
          }

          newChildren.splice(
            i + insertions,
            0,
            {
              type: "text",
              value: v.value.slice(lastIndex, match.index),
            },
            {
              type: "jsx",
              value: `<span style={{color: "#${match[2]}"}}>`,
            },
            {
              type: "text",
              value: match[1],
            },
            {
              type: "jsx",
              value: `</span>`,
            }
          );
          insertions += 4;

          lastIndex = match.index + match[0].length;
        } while (match);

        if (insertions > 0) {
          // remove the original text node and insert the remaining text
          newChildren.splice(i + insertions, 1, {
            type: "text",
            value: v.value.slice(lastIndex, v.value.length),
          });
        }
      });
      node.children = newChildren;
    });
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ path: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const { locale } = context;
  const route = context?.params.path || ["index"];

  let result: { source: string; fallback: boolean };
  try {
    result = await readLocaleDocs(route.join("/"), locale);
  } catch (e) {
    return { props: { error: "Not found" } };
  }

  const { content, data } = matter(result.source);

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      components,
      remarkPlugins: [admonitions],
    },
  });

  return {
    props: {
      source: mdxSource,
      data,
      fallback: result.fallback,
    },
  };
}

export async function getStaticPaths() {
  const paths = glob
    .sync("../docs/**/*.md") // read docs from the repo root
    .map((v: string) => "/" + v.slice(3, v.length - extname(v).length));

  return {
    paths: paths,
    fallback: true,
  };
}

export default Page;
