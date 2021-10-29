import { Box, OrderedList, Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { map } from "lodash/fp";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import { apiSSP } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post, PostSchema } from "src/types/_generated_Forum";
import LoadingBanner from "../LoadingBanner";
import Measured from "../Measured";
import BackLink from "./BackLink";
import PostEditor, { PostPayload } from "./PostEditor";
import PostListItem from "./PostListItem";

export type PostWithMarkdown = {
  post: Post;
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
};

type Props = {
  id: string;
  slug: string;
  initialPosts?: PostWithMarkdown[];
  initialError?: APIError;
};

const PostList: FC<{ posts: PostWithMarkdown[] }> = ({ posts }) => {
  const onDelete = useCallback(() => {
    console.log("delete");
  }, []);

  return (
    <OrderedList spacing={2} margin={0} listStyleType="none">
      {map((post: PostWithMarkdown) => (
        <PostListItem
          post={post.post}
          markdown={post.markdown}
          showAdminTools={true}
          onDelete={onDelete}
        />
      ))(posts)}
    </OrderedList>
  );
};

const Reply: FC<{ id: string; slug: string }> = ({ id }) => {
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: PostPayload) => {
    if (data?.body?.length === 0 || data?.body === "\\n") {
      toast({
        title: "Post has no content",
        status: "error",
      });
      return;
    }

    try {
      await apiSSP<Post>(`/forum/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
        schema: PostSchema,
      });
      toast({
        title: "Post created!",
        status: "success",
      });
      router.push(`/discussion/${id}`);
    } catch (e) {
      const err = e as APIError;
      console.error(err);
      toast({
        title: "An error occurred",
        description: err?.message ?? "Unexpected error occurred",
        status: "error",
      });
    }
  };

  return (
    <Box>
      <PostEditor
        onSubmit={onSubmit}
        disableThreadCreationOptions
        postButtonText="Post Reply"
        placeholder="Your reply content..."
      />
    </Box>
  );
};

const ThreadView: FC<Props> = ({ id, slug, initialPosts, initialError }) => {
  if (initialError) {
    return <ErrorBanner {...initialError} />;
  }
  if (!initialPosts) {
    return <LoadingBanner />;
  }

  return (
    <Measured>
      <Stack spacing={2}>
        <BackLink to="/discussion" />

        <PostList posts={initialPosts} />

        <Reply id={id} slug={slug} />
      </Stack>
    </Measured>
  );
};

export default ThreadView;
