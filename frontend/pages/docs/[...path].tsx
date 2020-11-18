// import components from "../../components/templates";

const components = {
  VersionWarn: ({ version, name = "function" }) =>
    `:::warning

This ${name} was added in ${version} and will not work in earlier versions!

:::`,
  LowercaseNote: ({ version, name = "function" }) => <p>LowercaseNote</p>,
  TipNPCCallbacks: ({ version, name = "function" }) => <p>TipNPCCallbacks</p>,
  VersionWarnID: ({ version, name = "function" }) => <p>VersionWarnID</p>,
  LowercaseNoteID: ({ version, name = "function" }) => <p>LowercaseNoteID</p>,
  TipNPCCallbacksID: ({ version, name = "function" }) => (
    <p>TipNPCCallbacksID</p>
  ),
};

// -
// Client side
// -

import renderToString from "next-mdx-remote/render-to-string";

type Props = {
  source?: any;
  error?: string;
  data?: { [key: string]: any };
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

  // TODO: contents of each page
  return (
    <section className="mw7 center pv3">
      <h1>{props?.data?.title}</h1>
      {content}
    </section>
  );
};

// -
// Server side
// -

import { readFileSync, statSync } from "fs";
import { resolve, extname } from "path";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import hydrate from "next-mdx-remote/hydrate";
import visit from "unist-util-visit";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";

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

const exists = (path): boolean => {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ path: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  // TODO: support .md as well?
  const path_mdx: string = resolve("docs", ...context.params.path) + ".mdx";
  const path_md: string = resolve("docs", ...context.params.path) + ".md";

  let source: string;
  if (exists(path_mdx)) {
    source = readFileSync(path_mdx).toString();
  } else if (exists(path_md)) {
    source = readFileSync(path_md).toString();
  } else {
    return { props: { error: "Not found" } };
  }

  const { content, data } = matter(source);

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      components,
      remarkPlugins: [admonitions],
    },
  });

  return { props: { source: mdxSource, data } };
}

export async function getStaticPaths() {
  const paths = glob
    .sync("docs/**/*.md")
    .map((v: string) => "/" + v.slice(0, v.length - extname(v).length));

  return {
    paths: paths,
    fallback: true,
  };
}

export default Page;
