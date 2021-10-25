import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ThreadView from "src/components/forum/ThreadView";

const Page: NextPage = () => {
  const {
    query: { text, tags },
  } = useRouter();

  return (
    <ThreadView
      initialTags={tags !== "" ? (tags as string)?.split(",") : []}
      initialText={text as string}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tags = ctx.query?.["tags"] as string;
  const text = ctx.query?.["text"] as string;

  return {
    props: {
      tags: tags !== undefined && tags !== "" ? tags.split(",") : [],
      text: text ?? "",
    },
  };
};

export default Page;
