import { Wordmark } from "../components/logo";
import hydrate from "next-mdx-remote/hydrate";

type Props = {
  content: { compiledSource: any; renderedOutput: any; scope: any };
};

const Page = ({ content }: Props) => (
  <>
    <section className="pa0 ma0">
      <div className="mw8 center">
        <Wordmark />
      </div>

      <article className="pa0 ma0">
        <div className="center measure pa4">
          {hydrate(content, { components: MDX_COMPONENTS })}
        </div>
      </article>
    </section>
  </>
);

import { readFileSync } from "fs";
import { join } from "path";
import renderToString from "next-mdx-remote/render-to-string";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { MDX_COMPONENTS } from "../components/typography";

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      content: await renderToString(
        readFileSync(join("content", locale, "index.mdx")),
        { components: MDX_COMPONENTS }
      ),
    },
  };
}

export default Page;
