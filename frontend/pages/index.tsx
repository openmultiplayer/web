import Image from "next/image";
import { WordmarkInverse } from "../components/logo";
import hydrate from "next-mdx-remote/hydrate";

type Props = {
  content: { compiledSource: any; renderedOutput: any; scope: any };
};

const Page = ({ content }: Props) => (
  <>
    <section className="pa0 ma0">
      <div className="foreground flex">
        <WordmarkInverse />
      </div>

      <article className="pa0 ma0 bg-white">
        <div className="center measure pa4">
          {hydrate(content, { components: MDX_COMPONENTS })}
        </div>
      </article>

      <div className="background gradient">
        <Image
          className="fixed"
          src="/img/hero-bg.jpg"
          width={1660}
          height={560}
          layout="responsive"
        />
      </div>
    </section>

    <style jsx>{`
      section {
        display: grid;
        grid-template-rows: 4em auto;
      }
      .foreground {
        grid-row: 2/3;
        grid-column: 1/2;
        z-index: 2;
      }
      .background {
        z-index: 0;
        height: 100%;
        width: 100%;
        position: fixed;
        max-height: 80vh;
        overflow: clip;
        top: 1;
      }

      .gradient {
        background: rgb(0, 0, 0);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 1) 60%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      article {
        grid-row: 3/4;
        grid-column: 1/2;
        z-index: 2;
      }
    `}</style>
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
