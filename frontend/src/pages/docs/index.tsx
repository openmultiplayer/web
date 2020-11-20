import hydrate from "next-mdx-remote/hydrate";

import { DocsSidebar } from "src/components/Sidebar";

type Props = {
  content: any;
};

const Page = ({ content }) => {
  return (
    <article className="flex flex-column flex-row-ns flex-auto justify-center-ns">
      <DocsSidebar />
      <section className="mw7 pa3">{hydrate(content)}</section>
    </article>
  );
};

import { readFileSync } from "fs";
import { join } from "path";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  let content: Buffer;
  try {
    content = readFileSync(join("content", locale, "docs.mdx"));
  } catch (e) {
    content = readFileSync(join("content", "en", "docs.mdx"));
  }

  return {
    props: {
      content: await renderToString(content),
    },
  };
}

export default Page;
