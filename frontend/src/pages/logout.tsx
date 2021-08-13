import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

const Page = () => null;

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<unknown>> => {
  ctx.res.setHeader("clear-site-data", '"cookies"');
  ctx.res.writeHead(302, { Location: "/dashboard" });
  ctx.res.end();

  return { props: {} };
};

export default Page;
