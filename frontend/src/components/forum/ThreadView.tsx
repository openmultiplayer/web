import { Button } from "@chakra-ui/button";
import { AtSignIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { map } from "lodash/fp";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC, useCallback, useState } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import { APIError } from "src/types/_generated_Error";
import { Post } from "src/types/_generated_Forum";
import { CardList } from "../generic/CardList";
import LoadingBanner from "../LoadingBanner";
import Measured from "../Measured";
import BackLink from "./BackLink";
import { useCreatePost } from "./hooks";
import PostEditor from "./PostEditor";
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

const PostList: FC<{
  thread: Partial<Post>;
  posts: PostWithMarkdown[];
  onSetReply: (post: Post) => void;
}> = ({ thread, posts, onSetReply }) => {
  return (
    <CardList>
      {map((post: PostWithMarkdown) => (
        <PostListItem
          key={post.post.id}
          thread={thread}
          post={post.post}
          markdown={post.markdown}
          showAdminTools={true}
          onSetReply={onSetReply}
        />
      ))(posts)}
    </CardList>
  );
};

const ReplyToPost: FC<{ post: Post; onCancel: () => void }> = ({
  post,
  onCancel,
}) => {
  const onClick = useCallback(() => onCancel(), [onCancel]);

  return (
    <Flex
      mx="1em"
      px="1em"
      py="0.2em"
      borderTopRadius="md"
      borderTop="solid 1px var(--chakra-colors-blackAlpha-200)"
      borderLeft="solid 1px var(--chakra-colors-blackAlpha-200)"
      borderRight="solid 1px var(--chakra-colors-blackAlpha-200)"
      color="blackAlpha.600"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <AtSignIcon px="0.1em" mx="0.3em" />
        Replying to <em>{post.short}</em> by <em>{post.author.name}</em>
      </Box>

      <Button size="xs" rightIcon={<SmallCloseIcon />} onClick={onClick}>
        Cancel Reply
      </Button>
    </Flex>
  );
};

const Reply: FC<{
  id: string;
  slug: string;
  post?: Post;
  onCancelReply: () => void;
}> = ({ id, slug, post, onCancelReply }) => {
  const onSubmit = useCreatePost(id, slug, post);

  return (
    <Box>
      {post && <ReplyToPost post={post} onCancel={onCancelReply} />}
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
  const [reply, setReply] = useState<Post | undefined>(undefined);
  const onCancelReply = useCallback(() => setReply(undefined), [setReply]);
  const onSetReply = useCallback((post: Post) => setReply(post), [setReply]);

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

        <PostList
          thread={{ id, slug }}
          posts={initialPosts}
          onSetReply={onSetReply}
        />

        <Reply id={id} slug={slug} post={reply} onCancelReply={onCancelReply} />
      </Stack>
    </Measured>
  );
};

export default ThreadView;
