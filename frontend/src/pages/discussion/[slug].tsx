import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import PostListView from "src/components/forum/PostListView";
import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post, PostSchema } from "src/types/_generated_Forum";
import { serialize } from "next-mdx-remote/serialize";
import { PostWithMarkdown } from "src/components/forum/PostListItem";
import ErrorBanner from "src/components/ErrorBanner";

type Props = {
  id: string;
  slug: string;
  initialPosts?: PostWithMarkdown[];
  error?: APIError;
};

const Page: NextPage<Props> = ({ id, slug, initialPosts, error }: Props) => {
  if (error) {
    return <ErrorBanner {...error} />;
  }

  return <PostListView id={id} slug={slug} initialPosts={initialPosts} />;
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
    ctx.res.writeHead(301, undefined, { Location: "/discussion" });
    ctx.res.end();
    return { props: { id: "", slug: "" } };
  }

  try {
    const posts = await apiSSP<Post[]>(`/forum/posts/${slug}`, ctx, {
      schema: PostSchema.array(),
    });

    if (posts.length === 0) {
      return {
        props: {
          id: "",
          slug: "",
          error: {
            message: "No posts returned",
          },
        },
      };
    }

    return {
      props: {
        id: posts[0].id,
        slug,
        initialPosts: await serializePostList(posts),
      },
    };
  } catch (e) {
    const err = e as APIError;
    console.error(err.error);
    return {
      props: {
        id: "",
        slug,
        error: {
          error: err.error ?? "",
          message: err.message ?? "",
          suggested: err.suggested ?? "",
        },
      },
    };
  }
}

export default Page;
