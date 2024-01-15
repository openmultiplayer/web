import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
// import { MDXRemote } from "next-mdx-remote";
// import remarkGfm from "remark-gfm";

import components from "src/components/templates";

// -
// Client side
// -

import { hydrate } from "src/mdx-helpers/csr";
import { DocsSidebar } from "src/components/Sidebar";
import Admonition from "src/components/Admonition";

type Props = {
  source?: any;
  error?: string;
  data?: { [key: string]: any };
  fallback?: boolean;
  ghUrl?: string;
};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  // hydrate contains hook calls, and hooks must always be called
  // unconditionally. Because they are called from a regular function here and
  // not a nested component, the unconditionality applies to the call stack of
  // *this* component, so the content must be hydrated regardless of whether or
  // not there was an error in the following if-statement.
  const content =
    props.source &&
    hydrate(props.source, { components: components as Components });

  const codeColor = useColorModeValue(
    "var(--chakra-colors-gray-200)",
    "var(--chakra-colors-gray-700)"
  );
  const tableRowBgColor = useColorModeValue(
    "var(--chakra-colors-gray-50)",
    "var(--chakra-colors-gray-700)"
  );

  useEffect(() => setIsMounted(true), []);

  if (props.error) {
    return (
      <section className="mw7 pa3 measure-wide center">
        <h1>Error!</h1>
        <p>{props.error}</p>
      </section>
    );
  }

  const contributeCallToAction = props.fallback ? (
    <Admonition type="warning" title="Not Translated">
      <p>
        This page has not been translated into the language that your browser
        requested yet. The English content is being shown as a fallback.
      </p>
      <p>
        If you want to contribute a translation for this page then please click{" "}
        <a href={props.ghUrl}>here</a>.
      </p>
    </Admonition>
  ) : (
    // TODO: would we want to translate this into the locale selected?
    <Admonition type="note" title="Help Needed">
      <p>
        This wiki is the result of an ongoing community effort — thank you all
        for helping!
      </p>
      <p>
        If you want to provide changes to this page then please click{" "}
        <a href={props.ghUrl}>here</a>.
      </p>
    </Admonition>
  );

  return (
    <div className="flex flex-column flex-auto items-stretch">
      <NextSeo
        title={props?.data?.title}
        description={props?.data?.description}
      />

      <div className="flex flex-column flex-row-ns justify-center-ns">
        <div className="flex flex-column flex-grow">
          <Search />
          {isMounted && <DocsSidebar />}
        </div>

        <section className="mw7 pa3 flex-auto">
          {!props.error && contributeCallToAction}
          <h1>{props?.data?.title}</h1>
          {/* <MDXRemote {...props.source} components={components} /> */}
          {content}
          <style global jsx>{`
            pre,
            code {
              background: ${codeColor};
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
              display: block;
              margin-bottom: 1rem;
              margin-top: 0;
              overflow: auto;
              width: 100%;
            }

            table tr {
              background-color: transparent;
              border-top: 1px solid #dadde1;
            }

            table tr:nth-child(2n) {
              background-color: ${tableRowBgColor};
            }

            table td,
            table th {
              border: 1px solid #dadde1;
              padding: 0.75rem;
            }

            table th {
              background-color: inherit;
              color: inherit;
              font-weight: 700;
            }

            table td {
              color: inherit;
            }
          `}</style>
        </section>
        <nav>{/* TODO: Table of contents */}</nav>
      </div>
    </div>
  );
};

// -
// Server side
// -

import { extname } from "path";
import { readdirSync, statSync } from "fs";
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";
import { concat, filter, flatten, flow, map } from "lodash/fp";
// import { serialize } from "next-mdx-remote/serialize";
import rehypeStarryNight from "@microflash/rehype-starry-night";

import { getDocsGithubUrl, readLocaleDocs } from "src/utils/content";
import Search from "src/components/Search";
import { deriveError } from "src/fetcher/fetcher";
import { renderToString } from "src/mdx-helpers/ssr";
import { Components } from "@mdx-js/react";
import { useColorModeValue } from "@chakra-ui/react";

export async function getStaticProps(
  context: GetStaticPropsContext<{ path: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const { locale } = context;
  const route = context?.params?.path || ["index"];

  let result: { source: string; fallback: boolean };
  const path = route.join("/");
  try {
    result = await readLocaleDocs(path, locale);
  } catch (e) {
    return {
      props: {
        error: `File ${path} (${locale}) not found: ${deriveError(e).error}`,
      },
    };
  }

  const { content, data } = matter(result.source);

  // TODO: plugin for frontmatter
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        admonitions,
        // remarkGfm,
      ],
      rehypePlugins: [
        [rehypeStarryNight, { showHeader: false, showLines: false }],
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      data,
      fallback: result.fallback,
      ghUrl: getDocsGithubUrl(path, !result.fallback, locale),
    },
  };
}

export async function getStaticPaths(
  ctx: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
  type P = { path: string[] };
  type Path = { params: P; locale?: string };

  // read docs from the repo root
  const all = glob.sync("../docs/**/*.md");

  // Function to get the directory tree as a list of paths. This is recursive.
  const walk = (root: string): string[] =>
    flow(
      // Prefix the directory item name with the root directory path
      map((path: string) => root + "/" + path),

      // Filter out non-directories.
      filter((path: string) => statSync(path).isDirectory()),

      // Mix in the paths being iterated with their children, the pipeline is
      // now dealing with string[][]
      map((path: string) => concat(path)(walk(path))),

      // Flatten string[][] back to string[] for yielding
      flatten
    )(readdirSync(root));

  const paths: Array<Path> = flow(
    // Mix in the flat list of directories from the above recursive function
    concat(walk("../docs")),

    // Filter out translations directory - these are handled separately
    filter((v: string) => v.indexOf("translations") === -1),

    // Filter out category content pages
    filter((v: string) => !v.endsWith("_.md")),

    // Chop off the `../docs/` base path
    map((v: string) => v.replace("../docs/", "")),

    // Chop off the file extension
    map((v: string) => v.slice(0, v.length - extname(v).length)),

    // slices off "index" from pages so they lead to the base path
    map((v: string) => (v.endsWith("index") ? v.slice(0, v.length - 5) : v)),

    // Add the docs base path (open.mp/docs)
    concat([""]),

    // Transform the paths into Path objects for "en" locale
    map((v: string) => ({
      params: {
        path: v.split("/"),
      },
      locale: "en",
    }))
  )(all);

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Page;
