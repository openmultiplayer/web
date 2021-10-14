import { FC } from "react";
import { GetServerSideProps } from "next";

import { apiSSP } from "src/fetcher/fetcher";

type Props = {
  version: string;
};

const Page: FC<Props> = ({ version }) => (
  <section className="center measure-wide">
    <h1>{`About`}</h1>
    <h2>API Version</h2>
    <p>{version}</p>
  </section>
);

export const getServerSideProps: GetServerSideProps = async () => ({
  props: await apiSSP<Props>("/version"),
});

export default Page;
