import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { apiSSP } from "src/fetcher/fetcher";

type Props = {
  error?: Error;
};

const Page = ({ error }: Props) => (
  <section className="center measure-wide">
    <h1>An Error Occurred</h1>
    <p>{error?.error_description}</p>
    <pre>Error code: {error?.error}</pre>
  </section>
);

type Payload = {
  code: string;
  state: string;
};

type Error = {
  error: string;
  error_description: string;
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> => {
  if ("error" in ctx.query) {
    const error: Error = {
      error: ctx.query["error"] as string,
      error_description: ctx.query["error_description"] as string,
    };
    return { props: { error } };
  }

  const payload: Payload = {
    code: ctx.query["code"] as string,
    state: ctx.query["state"] as string,
  };

  const result = await apiSSP<{ headers: Headers }>(
    "/auth/github/callback",
    {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Cookie: ctx?.req?.headers?.cookie ?? "",
      },
      credentials: "include",
    },
    undefined,
    true
  );
  if (result.isError()) {
    return {
      props: {
        error: {
          error: result.error().error!,
          error_description: result.error().message!,
        },
      },
    };
  }
  const response = result.value();

  ctx.res.setHeader("set-cookie", response.headers.get("set-cookie")!);
  ctx.res.writeHead(302, { Location: "/dashboard" });
  ctx.res.end();
  return { props: {} };
};

export default Page;
