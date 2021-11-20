import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ErrorBanner from "src/components/ErrorBanner";
import ThreadView, { PAGE_SIZE } from "src/components/forum/ThreadListView";
import { apiSSP, SSP } from "src/fetcher/fetcher";
import { Post } from "src/types/_generated_Forum";
import { queryToParams } from "src/utils/query";

type Props = SSP<Post[]>;

const Page: NextPage<Props> = (props) => {
  const {
    query: { query, tags, page },
  } = useRouter();

  if (!props.success) {
    return <ErrorBanner {...props.error} />;
  }

  return (
    <ThreadView
      initialPosts={props.data}
      initialTags={tags !== "" ? (tags as string)?.split(",") : []}
      initialText={query as string}
      initialPage={parseInt(page?.toString() ?? "0")}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Pages start at 1 and are not negative.
  const page = Math.min(parseInt(ctx.query?.page?.toString() ?? "1"), 1);
  const offset = (page - 1) * PAGE_SIZE;
  return {
    props: await apiSSP("/forum/threads", ctx, {
      query: queryToParams({ ...ctx.query, offset }),
    }),
  };
};

export default Page;
