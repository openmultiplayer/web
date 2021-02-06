import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

const Page = () => (
  <section className="center measure-wide">
    <h1>{`>:(`}</h1>
  </section>
);

export const getServerSideProps = async (
  _: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> => {
  throw new Error(">:(");
};

export default Page;
