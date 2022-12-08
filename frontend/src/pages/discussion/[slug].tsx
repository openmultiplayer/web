import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import ErrorBanner from "src/components/ErrorBanner";
import { PostWithMarkdown } from "src/components/forum/PostListItem";
import PostListView from "src/components/forum/PostListView";
import { apiSSP, mapSSP, SSP } from "src/fetcher/fetcher";
import { Post, PostSchema } from "src/types/_generated_Forum";
import { z } from "zod";

type Props = SSP<Post[]>;

const QuerySchema = z.object({
  page: z.number().default(1),
});
const ParamsSchema = z.object({
  slug: z.string(),
});

const Page: NextPage<Props> = (props) => {
  const router = useRouter();
  const { page } = QuerySchema.parse(router.query);
  const { slug } = ParamsSchema.parse(router.query);

  if (props.success === false) {
    return <ErrorBanner {...props.error} />;
  }

  return (
    <PostListView slug={slug} initialPosts={props.data} initialPage={page} />
  );
};

const serializePostList = async (posts: Post[]): Promise<PostWithMarkdown[]> =>
  Promise.all(
    posts.map(
      async (post): Promise<PostWithMarkdown> => ({
        ...post,
        serverSideMarkdown: await serialize(post.body),
      })
    )
  );

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<{ slug: string[] }>
): Promise<GetServerSidePropsResult<Props>> {
  const params = ParamsSchema.parse(ctx.params);
  const { slug } = params;
  if (!slug) {
    return { redirect: { destination: "/discussion", permanent: false } };
  }

  return {
    props: await apiSSP<Post[]>(`/forum/posts/${slug}`, ctx, {
      schema: PostSchema.array(),
    }).then(mapSSP<Post[], PostWithMarkdown[]>(serializePostList)),
  };
}

export default Page;
