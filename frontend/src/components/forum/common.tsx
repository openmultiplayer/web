import { LinkIcon, RepeatClockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import React, { FC } from "react";
import { WEB_ADDRESS } from "src/config";
import { Category, Post, PostMeta } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import MemberLink from "../member/MemberLink";
import LinkedTag from "./LinkedTag";

type PostTitleProps = {
  title: string;
  slug: string;
  clamp?: boolean;
};
export const PostTitle: FC<PostTitleProps> = ({
  title,
  slug,
  clamp = true,
}) => {
  return (
    <Heading
      as="h1"
      size="md"
      overflow={clamp ? "hidden" : ""}
      textOverflow="ellipsis"
      whiteSpace={clamp ? "nowrap" : "normal"}
      wordBreak={clamp ? "initial" : "break-word"}
    >
      <NextLink href={`/discussion/${slug}`} passHref>
        <Link>{title}</Link>
      </NextLink>
    </Heading>
  );
};

type CategoryNameProps = { category: Category };
export const CategoryName: FC<CategoryNameProps> = ({ category }) => (
  <NextLink
    passHref
    href={`${WEB_ADDRESS}/discussion/category/${category.name}`}
  >
    <Link
      borderLeftWidth="0.25em"
      borderStyle="solid"
      borderLeftColor={category.colour}
      paddingLeft="0.25em"
      paddingRight="0.5em"
      borderRadius="0.25em"
      height="min-content"
      _hover={{
        backgroundColor: "blackAlpha.100",
        textDecor: "none",
      }}
    >
      {category.name}
    </Link>
  </NextLink>
);

type TagListProps = { tags: string[] };
export const TagList: FC<TagListProps> = ({ tags }) => (
  <Grid templateColumns="1fr" templateRows="1fr">
    <UnorderedList
      margin="0"
      padding="0"
      display="flex"
      gridGap="0.5em"
      listStyleType="none"
      overflowX="hidden"
      gridColumn="1/2"
      gridRow="1/2"
    >
      {tags.map((t) => (
        <ListItem key={t}>
          <LinkedTag name={t} coloured />
        </ListItem>
      ))}
    </UnorderedList>

    <Box
      display={tags.length > 3 ? "block" : "none"}
      width="2em"
      pointerEvents="none"
      gridColumn="1/2"
      gridRow="1/2"
      justifySelf="end"
      background="linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%)"
    />
  </Grid>
);

type PostMetadataProps = { post: Post; showReplies?: boolean };
export const PostMetadata: FC<PostMetadataProps> = ({
  post,
  showReplies = false,
}) => {
  const createdAt = niceDate(post.createdAt);
  const updatedAt = niceDate(post.updatedAt);
  const isUpdated = createdAt !== updatedAt && post.deletedAt === null;
  const posts = post.posts ?? 0;

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing="1em"
      justifyContent="space-between"
    >
      <Flex
        gridGap="0.4em"
        alignItems="center"
        flexWrap="wrap"
        overflowX="hidden"
      >
        <MemberLink user={post.author} />

        <span className="posted">
          posted&nbsp;
          <em>{createdAt}</em>
        </span>
        {isUpdated && (
          <>
            <span>•</span>
            <span className="updated">
              updated&nbsp;
              <em>{updatedAt}</em>
            </span>
          </>
        )}
        {showReplies && (
          <>
            <span>•</span>
            <span className="replies">
              <em>{posts}</em> replies
            </span>
          </>
        )}
        {post.replyTo && (
          <>
            <span>•</span>
            <span>
              <a href={`#${post.replyTo.postId}`}>
                <RepeatClockIcon />
                &nbsp;replying&nbsp;to&nbsp;<em>{post.replyTo.author}</em>
              </a>
            </span>
          </>
        )}
      </Flex>

      <TagList tags={post.tags} />

      <style jsx>{`
        em {
          font-style: normal;
          color: var(--chakra-colors-black-500);
          white-space: nowrap;
        }
        span {
          color: var(--chakra-colors-gray-500);
          white-space: nowrap;
        }
      `}</style>
    </Stack>
  );
};

type PostLinkProps = { post: PostMeta };
export const PostLink: FC<PostLinkProps> = ({ post }) => {
  return (
    <NextLink passHref href={`${WEB_ADDRESS}/discussion/${post.slug}`}>
      <Link
        display="flex"
        gridGap="0.25em"
        alignItems="center"
        backgroundColor="blackAlpha.50"
        borderRadius="0.25em"
        px="0.25em"
      >
        <LinkIcon p="0.1em" />
        <span>{post.title}</span>

        <style jsx>{`
          span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        `}</style>
      </Link>
    </NextLink>
  );
};
