// This page is a catch-all ([...slug]) for all pages (including sub-routes)
// it will take the slug and use it to locate content in the "content" directory
// in the frontend directory. The user's locale from Next.js is used to pick a
// directory.
//
// For example, if the user visits /blog/somepost and their Locale is French,
// the server render code will serve the content from content/fr/blog/somepost.
// If there is none available, a fallback from content/en/blog/somepost will be
// displayed with a warning that the content is unavailable in their language.

import Error from "next/error";
import { NextSeo } from "next-seo";

// -
// Client side
// -

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
      <NextSeo title={data?.title} description={data?.description} />
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

// -
// Server side
// -

import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import matter from "gray-matter";

import { getContentPaths, readLocaleContent } from "src/utils/content";
import { renderToString } from "src/mdx-helpers/ssr";
import { RawContent } from "src/types/content";

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const { locale } = context;
  const route = context?.params.slug || ["index"];

  let result: RawContent;
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

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: getContentPaths(),
    fallback: true,
  };
}

export default Page;
