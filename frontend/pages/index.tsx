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
        <div className="center measure pa4">{hydrate(content)}</div>
      </article>

      <article className="pa0 ma0 bg-white">
        <div className="center measure">
          <h1>more text</h1>

          <p>
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
          </p>

          <p>
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
            XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD
          </p>
        </div>
      </article>

      <div className="background">
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
      }
      .foreground {
        grid-row: 1/2;
        grid-column: 1/2;
        z-index: 2;
      }
      .background {
        grid-row: 1/2;
        grid-column: 1/2;
        z-index: 0;
        height: 100%;
        width: 100%;
        position: fixed;
        max-height: 80vh;
        overflow: clip;
        top: 1;
      }
      article {
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

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      content: await renderToString(
        readFileSync(join("content", locale, "index.mdx"))
      ),
    },
  };
}

export default Page;
