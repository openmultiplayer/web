import { Button } from "@chakra-ui/button";
import { AtSignIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { FC, useCallback, useState } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post, PostSchema } from "src/types/_generated_Forum";
import useSWR from "swr";
import LoadingBanner from "../LoadingBanner";
import Measured from "../Measured";
import BackLink from "./BackLink";
import { useCreatePost } from "./hooks";
import PostEditor from "./PostEditor";
import PostList from "./PostList";
import { PostWithMarkdown } from "./PostListItem";

type Props = {
  slug: string;
  initialPosts?: PostWithMarkdown[];
};

type ReplyToPostProps = {
  post: Post;
  onCancel: () => void;
};
const ReplyToPost: FC<ReplyToPostProps> = ({ post, onCancel }) => {
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

type ReplyProps = {
  id: string;
  slug: string;
  post?: Post;
  onCancelReply: () => void;
};
const Reply: FC<ReplyProps> = ({ id, slug, post, onCancelReply }) => {
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

const PostListView: FC<Props> = ({ slug, initialPosts }) => {
  const [reply, setReply] = useState<Post | undefined>(undefined);
  const onCancelReply = useCallback(() => setReply(undefined), [setReply]);
  const onSetReply = useCallback((post: Post) => setReply(post), [setReply]);

  const { data, error } = useSWR<Post[], APIError>(
    `/forum/posts/${slug}`,
    apiSWR({ schema: PostSchema.array() }),
    { fallbackData: initialPosts }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  const id = data[0].id;

  return (
    <Measured>
      <Stack spacing={2}>
        <BackLink to="/discussion" />

        <PostList thread={{ id, slug }} posts={data} onSetReply={onSetReply} />

        <Reply id={id} slug={slug} post={reply} onCancelReply={onCancelReply} />
      </Stack>
    </Measured>
  );
};

export default PostListView;
