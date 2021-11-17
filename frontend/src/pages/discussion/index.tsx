import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadView from "src/components/forum/ThreadListView";
import { apiSSP, SSP } from "src/fetcher/fetcher";
import { Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";

type Props = SSP<Post[]>;

const Page: NextPage<Props> = (props) => {
  const {
    query: { query, tags },
  } = useRouter();

  if (!props.success) {
    return <ErrorBanner {...props.error} />;
  }

  return (
    <ThreadView
      initialPosts={props.data}
      initialTags={tags !== "" ? (tags as string)?.split(",") : []}
      initialText={query as string}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: await apiSSP("/forum/threads", ctx, {
      query: queryToParams(ctx.query),
    }),
  };
};

export default Page;
