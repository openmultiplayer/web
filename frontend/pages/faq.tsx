import hydrate from "next-mdx-remote/hydrate";

type Props = {
  content: { compiledSource: any; renderedOutput: any; scope: any };
};

const Page = ({ content }: Props) => (
  <section className="pa2 measure-wide center">{hydrate(content)}</section>
);

import { readFileSync } from "fs";
import { join } from "path";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      content: await renderToString(
        readFileSync(join("content", locale, "faq.mdx"))
      ),
    },
  };
}

export default Page;
