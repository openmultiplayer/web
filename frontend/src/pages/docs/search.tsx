import React, { FC } from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Error from "next/error";
import useSWR from "swr";
import { last, map } from "lodash/fp";

import { apiSSP, apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Hit, SearchResults } from "src/types/searchResult";
import Link from "next/link";

type Params = {
  q: string;
};

type Props = {
  query: string;
  results: SearchResults | null;
  error?: string;
};

const clean = (path: string): string =>
  noExtension(last(path.split("/")) ?? path);

const noExtension = (path: string) => path.replace(".md", "");

const resultToItem = (h: Hit) => (
  <li>
    <Link href={h.id}>
      <a>{clean(h.id)}</a>
    </Link>
  </li>
);

const Results: FC<Partial<Props>> = ({ query, results }) => {
  const { data, error } = useSWR<SearchResults, APIError>(
    `/docs/search?q=${query}`,
    apiSWR(),
    {
      initialData: results || undefined,
    }
  );
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    return <p>"Loading..."</p>;
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

const Page: FC<Props> = ({ query, results, error }) => {
  if (error) {
    return <Error statusCode={500} title={error} />;
  }

  return (
    <section className="center measure-wide pa4">
      <Form />
      {query && (
        <>
          <h1>{results?.total_hits} Search Results</h1>
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
  try {
    const response = await apiSSP<SearchResults>(`/docs/search?q=${query}`);
    return { props: { query, results: response, error: "" } };
  } catch (e) {
    const err = e as APIError;
    return { props: { query, results: null, error: err.message } };
  }
};

export default Page;
