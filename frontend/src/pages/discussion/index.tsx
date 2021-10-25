import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ThreadView from "src/components/forum/ThreadView";

const Page: NextPage = () => {
  const {
    query: { query, tags },
  } = useRouter();

  return (
    <ThreadView
      initialTags={tags !== "" ? (tags as string)?.split(",") : []}
      initialText={query as string}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tags = ctx.query?.["tags"] as string;
  const query = ctx.query?.["query"] as string;

  return {
    props: {
      tags: tags !== undefined && tags !== "" ? tags.split(",") : [],
      query: query ?? "",
    },
  };
};

export default Page;
