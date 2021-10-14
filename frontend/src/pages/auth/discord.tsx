import React, { FC } from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";

type Props = {
  error?: Error;
};

const Page: FC<Props> = ({ error }) => (
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
): Promise<GetServerSidePropsResult<Props>> => {
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

  try {
    const response: { headers: Headers } = await apiSSP(
      "/auth/discord/callback",
      {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Cookie: ctx?.req?.headers?.cookie ?? "",
        },
        credentials: "include",
        responseHeaders: true,
      }
    );

    const cookie = response.headers.get("set-cookie");
    if (cookie == null) {
      return {
        props: {
          error: {
            error: "No cookie in authentication response",
            error_description:
              "The server did not respond with an authentication cookie.",
          },
        },
      };
    }

    ctx.res.setHeader("set-cookie", cookie);
    ctx.res.writeHead(302, { Location: "/dashboard" });
    ctx.res.end();
    return { props: {} };
  } catch (e) {
    const err = e as APIError;
    return {
      props: {
        error: {
          error: err.error ?? "Unknown",
          error_description: err.message ?? "Unknown",
        },
      },
    };
  }
};

export default Page;
