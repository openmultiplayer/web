import { Button } from "@chakra-ui/button";
import { FC, useCallback } from "react";
import { Post } from "src/types/_generated_Forum";
import { niceDate } from "src/utils/dates";
import { useDeletePost } from "./hooks";

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
