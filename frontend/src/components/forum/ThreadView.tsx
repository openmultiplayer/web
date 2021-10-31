import { Box, OrderedList, Stack } from "@chakra-ui/layout";
import { map } from "lodash/fp";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import LoadingBanner from "../LoadingBanner";
import Measured from "../Measured";
import BackLink from "./BackLink";
import PostEditor from "./PostEditor";
import PostListItem from "./PostListItem";
import { useCreatePost } from "./hooks";

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

const PostList: FC<{ thread: Partial<Post>; posts: PostWithMarkdown[] }> = ({
  thread,
  posts,
}) => {
  return (
    <OrderedList spacing={2} margin={0} listStyleType="none">
      {map((post: PostWithMarkdown) => (
        <PostListItem
          key={post.post.id}
          thread={thread}
          post={post.post}
          markdown={post.markdown}
          showAdminTools={true}
        />
      ))(posts)}
    </OrderedList>
  );
};

const Reply: FC<{ id: string; slug: string }> = ({ id, slug }) => {
  const onSubmit = useCreatePost(id, slug);

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

        <PostList thread={{ id, slug }} posts={initialPosts} />

        <Reply id={id} slug={slug} />
      </Stack>
    </Measured>
  );
};

export default ThreadView;
