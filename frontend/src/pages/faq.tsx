import Image from "next/image";
import { Content } from "src/mdx-helpers/content";
import { markdownCSR } from "src/mdx-helpers/csr";

type Props = {
  content: Content;
};

const Page = ({ content }: Props) => (
  <section className="pa0 ma0 center">
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
