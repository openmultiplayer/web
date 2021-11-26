import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React, { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import { deriveError, oauth } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";

type Props = {
  error?: APIError;
};

const Page: FC<Props> = ({ error }) => <ErrorBanner {...error} />;

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  try {
    const cookie = await oauth("github", ctx);

    ctx.res.setHeader("set-cookie", cookie);
    ctx.res.writeHead(302, { Location: "/dashboard" });
    ctx.res.end();
    return { props: {} };
  } catch (e) {
    console.error(e);
    return { props: { error: deriveError(e) } };
  }
};

export default Page;
