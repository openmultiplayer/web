import Image from "next/image";
import { NextSeo } from "next-seo";

import { markdownCSR } from "src/mdx-helpers/csr";
import { MarkdownContent } from "src/mdx-helpers/types";

type Props = {
  content: MarkdownContent;
};

const Page = ({ content }: Props) => (
  <section className="pa0 ma0 center">
    <NextSeo
      title="Frequently Asked Questions"
      description="Common questions and answers about the open.mp project and its relationship to SA-MP."
    />

    <div className="mw8 center">
      <Image
        src="https://assets.open.mp/assets/images/assets/wordmark-light-mono.png"
        width={1660}
        height={560}
      />
    </div>

    <article className="pa0 ma0">
      <div className="center measure pa4">{markdownCSR(content)}</div>
    </article>
  </section>
);

// Server side
import { markdownSSR } from "src/mdx-helpers/ssr";
export const getStaticProps = async ({ locale }) => ({
  props: { content: await markdownSSR(locale, "faq.mdx") },
});

export default Page;
