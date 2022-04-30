import { Button } from "@chakra-ui/button";
import { AtSignIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FC, useCallback, useState } from "react";
import { useAuth } from "src/auth/hooks";
import ErrorBanner from "src/components/ErrorBanner";
import { apiSWR } from "src/fetcher/fetcher";
import { APIError } from "src/types/_generated_Error";
import { Post, PostSchema } from "src/types/_generated_Forum";
import useSWR from "swr";
import Measured from "../generic/Measured";
import Pagination from "../generic/Pagination";
import LoadingBanner from "../LoadingBanner";
import BackLink from "./BackLink";
import { useCreatePost } from "./hooks";
import PostEditor from "./PostEditor";
import PostList from "./PostList";
import { PostWithMarkdown } from "./PostListItem";

const PAGE_SIZE = 20;

type Props = {
  slug: string;
  initialPosts?: PostWithMarkdown[];
  initialPage?: number;
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

const SignInToReply = () => {
  return (
    <NextLink href={`/login`} passHref>
      <Link _hover={{ textDecoration: "none" }} isExternal>
        <Button
          bg="#9083D2"
          color="white"
          _hover={{
            bgColor: "#7466D4",
          }}
          _active={{
            bgColor: "#5A4CBB",
          }}
          _focus={{
            outline: "2px solid #695AD3",
            transition: "outline 0.3s",
          }}
          title="Sign In to reply"
        >
          Sign In to reply
        </Button>
      </Link>
    </NextLink>
  )
};

type ReplyProps = {
  id: string;
  slug: string;
  post?: Post;
  onCancelReply: () => void;
};

const Reply: FC<ReplyProps> = ({ id, slug, post, onCancelReply }) => {
  const onSubmit = useCreatePost(id, slug, post);
  const { isAuthenticated } = useAuth();

  return <>
    {isAuthenticated ? <Box>
      {post && <ReplyToPost post={post} onCancel={onCancelReply} />}
      <PostEditor
        onSubmit={onSubmit}
        disableThreadCreationOptions
        postButtonText="Post Reply"
        placeholder="Your reply content..."
      />
    </Box> : <SignInToReply />}
  </>
};

const PostListView: FC<Props> = ({ slug, initialPosts, initialPage }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const [reply, setReply] = useState<Post | undefined>(undefined);
  const onCancelReply = useCallback(() => setReply(undefined), [setReply]);
  const onSetReply = useCallback((post: Post) => setReply(post), [setReply]);

  const [page, setPage] = useState(initialPage ?? 1);
  const onPage = useCallback(
    (p: number) => {
      router.push({ pathname, query: { ...query, page: `${p}` } });
      setPage(p);
    },
    [router, pathname, query, setPage]
  );

  const { data, error } = useSWR<Post[], APIError>(
    `/forum/posts/${slug}`,
    apiSWR({
      schema: PostSchema.array(),
      query: new URLSearchParams({
        //
        // NOTE: This code currently does paging on the client, so ALL posts are
        // fetched and rendered, but paging keeps things fast. This may change.
        //
        // offset: `${page * PAGE_SIZE}`,
        // max: `${PAGE_SIZE}`,
      }),
    }),
    { fallbackData: initialPosts }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  const id = data[0].id;
  const totalItems = data.length;
  const paged = data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageIndex = page - 1;

  return (
    <Measured>
      <Stack spacing={2}>
        <BackLink to="/discussion" />

        <Pagination
          totalItems={totalItems}
          initialPaginationIndex={pageIndex}
          pageSize={PAGE_SIZE}
          onPage={onPage}
        />

        <PostList thread={{ id, slug }} posts={paged} onSetReply={onSetReply} />

        <Reply id={id} slug={slug} post={reply} onCancelReply={onCancelReply} />
      </Stack>
    </Measured>
  );
};

export default PostListView;
