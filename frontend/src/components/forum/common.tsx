import { Button } from "@chakra-ui/button";
import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/layout";
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
  <UnorderedList display="flex" gridGap="0.5em" listStyleType="none">
    {tags.map((t) => (
      <ListItem key={t}>
        <LinkedTag name={t} />
      </ListItem>
    ))}
  </UnorderedList>
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
    <Flex justifyContent="space-between">
      <Flex gridGap="0.4em" alignItems="center">
        <ProfilePicture id={post.author.id} />

        <span>
          <em className="author">{post.author.name}</em>
        </span>

        <span className="posted">
          {"posted "}
          <em>{createdAt}</em>
        </span>
        {isUpdated && (
          <>
            <span>•</span>
            <span className="updated">
              {"updated "}
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
        }
        span {
          color: var(--chakra-colors-gray-500);
        }
      `}</style>
    </Flex>
  );
};
