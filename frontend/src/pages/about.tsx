import { FC } from "react";
import { GetServerSideProps } from "next";

import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import ErrorBanner from "src/components/ErrorBanner";

type Props = {
  data: { version: string };
  error: APIError;
};

const Page: FC<Props> = ({ data: { version }, error }) => {
  if (error) {
    return <ErrorBanner {...error} />;
  }

  return (
    <section className="center measure-wide">
      <h1>{`About`}</h1>
      <h2>API Version</h2>
      <p>{version}</p>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await apiSSP<Props>("/version", ctx),
});

export default Page;
