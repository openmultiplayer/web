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

type Props = SSP<Post[]>;

const Page: NextPage<Props> = (props) => {
  const {
    query: { slug, page },
  } = useRouter();
  if (!props.success) {
    return <ErrorBanner {...props.error} />;
  }

  return (
    <PostListView
      slug={slug as string}
      initialPosts={props.data}
      initialPage={parseInt(page as string)}
    />
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
  const slug = ctx?.params?.slug?.toString();
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
