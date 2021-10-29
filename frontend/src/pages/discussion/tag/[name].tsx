import { GetServerSideProps, NextPage } from "next";
import ThreadView from "src/components/forum/ThreadListView";

type Props = {
  name?: string;
};

const Page: NextPage<Props> = ({ name }) => {
  return <ThreadView initialTags={[name as string]} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const name = ctx.params?.["name"] as string;

  if (!name) {
    ctx.res.writeHead(302, { Location: "/discussion" });
    ctx.res.end();
    return { props: {} };
  }

  return { props: { name } };
};

export default Page;
