import Error from "next/error";
import { NextSeo } from "next-seo";

import { hydrate } from "src/mdx-helpers/csr";
import Admonition from "src/components/Admonition";
import components from "src/components/templates";

type Props = {
  source?: any;
  error?: string;
  data?: { [key: string]: any };
  fallback?: boolean;
};

const Page = ({ source, error, data, fallback }: Props) => {
  if (error) {
    return (
      <section>
        <Error statusCode={404} title={error} />
      </section>
    );
  }

  const content = source && hydrate(source, { components });

  return (
    <div className="flex flex-column flex-row-ns flex-auto justify-center-ns">
      <NextSeo title={data?.title} />
      <section className="mw7 pa3 flex-auto">
        {fallback && (
          <Admonition type="warning" title="Not Translated">
            This page has not been translated into the language that your
            browser requested.
          </Admonition>
        )}
        <h1>{data?.title}</h1>
        {content}
      </section>
    </div>
  );
};

import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import matter from "gray-matter";
import { flow, map } from "lodash/fp";

import { readLocaleContent } from "src/utils/content";
import { renderToString } from "src/mdx-helpers/ssr";
import { Post } from "src/types/blogPost";

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const { locale } = context;
  const route = context?.params.slug || ["index"];

  let result: { source: string; fallback: boolean };
  try {
    result = await readLocaleContent(route.join("/"), locale);
  } catch (e) {
    return { props: { error: "Not found: " + e.message } };
  }

  const { content, data } = matter(result.source);

  const mdxSource = await renderToString(content, {
    mdxOptions: { components },
  });

  return { props: { source: mdxSource, data, fallback: result.fallback } };
}

const getPostPaths = flow(
  map((v: Post) => v.slug),
  map((v: string) => `/blog/${v}`)
);

export async function getStaticPaths() {
  const posts: Post[] = (process.env.BLOG_POST_LIST as unknown) as Post[];
  return {
    paths: getPostPaths(posts),
    fallback: true,
  };
}

export default Page;
