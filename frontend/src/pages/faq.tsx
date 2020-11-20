import { Wordmark } from "src/components/Branding";
import { Content } from "src/mdx-helpers/content";
import { markdownCSR } from "src/mdx-helpers/csr";

type Props = {
  content: Content;
};

const Page = ({ content }: Props) => (
  <section className="pa0 ma0 center">
    <div className="mw8 center">
      <Wordmark />
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
