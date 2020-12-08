import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import api from "src/fetcher/fetcher";

const Page = () => {
  return <></>;
};

type Payload = {
  code: string;
  state: string;
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{}>> => {
  const payload: Payload = {
    code: ctx.query["code"] as string,
    state: ctx.query["state"] as string,
  };

  const response = (
    await api<{ headers: Headers }>(
      "/auth/discord/callback",
      {
        method: "post",
        body: JSON.stringify(payload),
      },
      undefined,
      true
    )
  ).unwrap();

  ctx.res.setHeader("set-cookie", response.headers.get("set-cookie"));
  ctx.res.writeHead(302, { Location: "/dashboard" });
  ctx.res.end();
  return { props: {} };
};

export default Page;
