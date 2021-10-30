import { Button } from "@chakra-ui/button";
import { Box, Flex, Grid, ListItem, UnorderedList } from "@chakra-ui/layout";
import { FC, useCallback } from "react";
import { Post } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import ProfilePicture from "../ProfilePicture";
import { useDeletePost } from "./hooks";
import LinkedTag from "./LinkedTag";

type CategoryNameProps = { value: string; color?: string };
export const CategoryName: FC<CategoryNameProps> = ({
  value,
  color = "lightblue",
}) => (
  <>
    <span>{value}</span>

    <style jsx>{`
      span {
        border-left: 0.25em solid ${color};
        padding-left: 0.25em;
        height: min-content;
      }
    `}</style>
  </>
);

type AdminToolsProps = { show: boolean; post: Post };
export const AdminTools: FC<AdminToolsProps> = ({ show, post }) => {
  const onDelete = useDeletePost();
  const onClick = useCallback(() => {
    onDelete(post.id);
  }, [post, onDelete]);

  if (!show) {
    return null;
  }

  return (
    <div>
      {post.deletedAt === null ? (
        <Button colorScheme="red" size="xs" onClick={onClick}>
          Delete
        </Button>
      ) : (
        <span>{`Deleted ${niceDate(post.deletedAt as string)}`}</span>
      )}
    </div>
  );
};

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
          <LinkedTag name={t} />
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
    <Flex gridGap="1em" justifyContent="space-between">
      <Flex gridGap="0.4em" alignItems="center">
        <ProfilePicture id={post.author.id} />

        <span>
          <em className="author">{post.author.name}</em>
        </span>

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
      </Flex>

      <TagList tags={post.tags} />

      <style jsx>{`
        em.author {
          font-style: normal;
          color: var(--chakra-colors-black);
        }
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
    </Flex>
  );
};
