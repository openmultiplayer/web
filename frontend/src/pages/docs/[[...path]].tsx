import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

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
};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (props.error) {
    return (
      <section>
        <h1>Error!</h1>
        <p>{props.error}</p>
      </section>
    );
  }

  const content =
    props.source &&
    hydrate(props.source, { components: components as Components });

  return (
    <div className="flex flex-column flex-auto items-center">
      <NextSeo
        title={props?.data?.title}
        description={props?.data?.description}
      />

      <div className="flex flex-row-ns justify-center-ns">
        <div className="flex flex-column flex-grow">
          <Search />
          {isMounted && <DocsSidebar />}
        </div>

        <section className="mw7 pa3 flex-auto">
          {props.fallback && (
            <Admonition type="warning" title="Not Translated">
              <p>
                This page has not been translated into the language that your
                browser requested. The English content is being shown as a
                fallback.
              </p>
              <p>
                If you want to contribute a translation for this page then
                please click{" "}
                <a href="https://github.com/openmultiplayer/web">here</a>.
              </p>
            </Admonition>
          )}
          <h1>{props?.data?.title}</h1>
          {content}
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
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import matter from "gray-matter";
import glob from "glob";
import admonitions from "remark-admonitions";
import { Components } from "@mdx-js/react";
import { statSync } from "fs";
import { execSync } from "child_process";
import { flow, indexOf, map } from "lodash/fp";

import { renderToString } from "src/mdx-helpers/ssr";
import { readLocaleDocs } from "src/utils/content";
import Search from "src/components/Search";

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
      props: { error: `File ${path} (${locale}) not found: ${e.message}` },
    };
  }

  const { content, data } = matter(result.source);

  // TODO: plugins for admonitions and frontmatter etc
  // also, pawn syntax highlighting
  const mdxSource = await renderToString(content, {
    components: components as Components,
    mdxOptions: { remarkPlugins: [admonitions] },
  });

  return {
    props: {
      source: mdxSource,
      data,
      fallback: result.fallback,
    },
  };
}

// all this code is kept inside this function in order to ensure it's bundled
// for server/client split correctly. Putting buildOnlyChangedPages in global
// scope results in the build process adding import "fs" on client side code.
export async function getStaticPaths() {
  type FilterFn = (v: string) => boolean;

  const buildOnlyLargePages = (size: number): FilterFn => (v: string) =>
    statSync(v).size > size;

  const buildOnlyChangedPages = (): FilterFn => {
    console.debug("Statically building any new/changed docs pages...");

    // get changed files
    // the result is relative from the root, regardless of CWD so the `../`
    // path element is not present in results.
    const changes = execSync("git diff master HEAD --name-only -- ../docs")
      .toString()
      .split("\n");

    // combine the two lists and remove duplicates/empty
    const files = flow(
      map((v: string) => v.replace("../", "")), // strip ../ from changed files
      map((v: string) => "../" + v) // add ../ prefix to all files in the list
    )(changes);

    // return a filter function that only returns true when the given file being
    // visited is present in the list of files that were modified or added.
    return (v: string): boolean => indexOf(v)(files) !== -1;
  };

  let filterFn: FilterFn;

  // If the environment is "preview", the app is running for a Pull Request and
  // thus should statically build all the pages that were changed or added in
  // the pull request. This simply passes the new/changed file paths to the
  // build-time process. Some additional checks are required in the Markdown
  // rendering code to bypass the standard behaviour of getting the content from
  // the API. See the `readLocaleDocs` function above for this logic.
  if (process.env.VERCEL_ENV === "preview") {
    filterFn = buildOnlyChangedPages();
  } else {
    filterFn = buildOnlyLargePages(60000);
  }

  console.log("ENV:", process.env); // TODO: Remove!

  const paths = glob
    .sync("../docs/meta/*.md") // read docs from the repo root
    .filter(filterFn)
    .map((v: string) => "/" + v.slice(3, v.length - extname(v).length))
    .map((v: string) => (v.endsWith("index") ? v.slice(0, v.length - 5) : v));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default Page;
