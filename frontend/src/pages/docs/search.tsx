import { last, map } from "lodash/fp";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Link from "next/link";
import React, { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import LoadingBanner from "src/components/LoadingBanner";
import { apiSSP, apiSWR, mapSSP, SSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Hit, SearchResults } from "src/types/_generated_SearchResult";
import useSWR from "swr";

import { useRouter } from 'next/router';
const translateText = require('src/components/translates/Translate');

type Params = {
  q: string;
};

type Data = {
  query: string;
  results: SearchResults | null;
};
type Props = SSP<Data>;

const clean = (path: string): string =>
  noExtension(last(path.split("/")) ?? path);

const noExtension = (path: string) => path.replace(".md", "");

const resultToItem = (h: Hit) => (
  <li key={h.url}>
    <Link href={h.url}>
      <a>{clean(h.url)}</a>
    </Link>
  </li>
);

const Results: FC<Partial<Data>> = ({ query, results }) => {
  const { data, error } = useSWR<SearchResults, APIError>(
    `/docs/search`,
    apiSWR({ query: new URLSearchParams({ q: query ?? "" }) }),
    {
      fallbackData: results || undefined,
    }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return <ul>{map(resultToItem)(data.hits)}</ul>;
};

const Form: FC = () => (
  <form className="flex justify-between">
    <input
      className="w-100 b--solid b--black-10 br2 br--left"
      type="text"
      name="q"
      required
    />
    <button
      className="br2 b--solid b--black-10 b--black br--right"
      type="submit"
    >
      Search
    </button>
  </form>
);

const Page: FC<Props> = (props) => {
  if (props.success === false) {
    return <ErrorBanner {...props.error} />;
  }

  const { query, results } = props.data;

  const router = useRouter();
  const locale = router.locale || "en";

  return (
    <section className="center measure-wide pa4">
      <Form />
      {query && (
        <>
          <h1>{translateText(locale, "Search", "search-results", { total: results?.total })}</h1>
          <Results query={query} results={results} />
        </>
      )}
    </section>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<Params>
): Promise<GetServerSidePropsResult<Props>> => {
  const query = (context.query as Params).q || "";

  return {
    props: await apiSSP<SearchResults>(`/docs/search?q=${query}`, context).then(
      mapSSP<SearchResults, Data>(async (results) => ({ results, query }))
    ),
  };
};

export default Page;
