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
import visit from "unist-util-visit";

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
) {
  // TODO: support .md as well?
  const path: string = resolve("docs", ...context.params.path) + ".mdx";

  const source = readFileSync(path).toString();

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(source, {
    mdxOptions: {
      remarkPlugins: [remarkColour],
    },
  });

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
