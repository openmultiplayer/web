import {
  AtSignIcon,
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useCallback, useState } from "react";
import { useAuth } from "src/auth/hooks";
import { Post } from "src/types/_generated_Forum";
import { PostMetadata } from "./common";
import { useDeletePost, useEditPost } from "./hooks";
import PostEditor, { PostPayload } from "./PostEditor";

type Props = {
  thread: Partial<Post>;
  post: Post;
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
  showAdminTools: boolean;
  onSetReply: (post: Post) => void;
};

type PostHeadStripProps = {
  editing: boolean;
  post: Post;
  admin?: boolean;
  onReply: (post: Post) => void;
  onEdit: (id: string) => void;
  onTitleChange: (title: string) => void;
};

const PostHeadStrip: FC<PostHeadStripProps> = ({
  editing,
  post,
  admin,
  onEdit,
  onReply,
  onTitleChange,
}) => {
  const deletePost = useDeletePost();
  const onClickDelete = useCallback(
    () => deletePost(post.id),
    [deletePost, post]
  );
  const onClickEdit = useCallback(() => onEdit(post.id), [onEdit, post]);
  const [title, setTitle] = useState(post.title);
  const onChange = useCallback(
    (event) => {
      setTitle(event.target.value);
      onTitleChange(event.target.value);
    },
    [setTitle, onTitleChange]
  );
  const onSetReply = useCallback(() => onReply(post), [onReply, post]);

  return (
    <Flex justifyContent="space-between">
      {title && editing ? (
        <Input onChange={onChange} defaultValue={post.title ?? undefined} />
      ) : (
        <Heading margin="0" fontSize="1.9em">
          <Link href={`/discussion/${post.slug}`}>
            <a>{title}</a>
          </Link>
        </Heading>
      )}

      <Flex alignItems="center" gridGap="0.5em">
        {/* {admin && <Checkbox size="md" />} */}

        <Menu placement="left-start">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            boxSize="1.5em"
            borderWidth="0"
          ></MenuButton>
          <MenuList>
            <MenuOptionGroup>
              <MenuItem icon={<AtSignIcon />} onClick={onSetReply}>
                Reply
              </MenuItem>
              {/* <MenuItem icon={<ChatIcon />}>Quote</MenuItem> */}
            </MenuOptionGroup>
            {admin && (
              <>
                <MenuDivider />
                <MenuOptionGroup>
                  <MenuItem icon={<EditIcon />} onClick={onClickEdit}>
                    Edit
                  </MenuItem>
                  <MenuItem icon={<DeleteIcon />} onClick={onClickDelete}>
                    Delete
                  </MenuItem>
                </MenuOptionGroup>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

const PostListItem: FC<Props> = ({
  thread,
  post,
  markdown,
  showAdminTools,
  onSetReply,
}) => {
  const router = useRouter();
  const { user } = useAuth();
  const owned = user?.id === post.author.id;
  const showTools = showAdminTools || owned;

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title ?? undefined);
  const onEdit = useCallback(() => setEditing(true), [setEditing]);

  const editPost = useEditPost();
  const onSubmitEdit = useCallback(
    (p: PostPayload) => {
      editPost(p);
      setEditing(false);
      // TODO: Edit markdown contents directly and re-render
      router.push(`/discussion/${thread.slug}`);
    },
    [editPost, router, thread]
  );

  const onTitleChange = useCallback((t: string) => setTitle(t), [setTitle]);

  return (
    <li>
      <article>
        <div>
          <header>
            <Flex direction="column" width="100%">
              <PostHeadStrip
                editing={editing}
                onTitleChange={onTitleChange}
                post={post}
                admin={showTools}
                onReply={onSetReply}
                onEdit={onEdit}
              />
              <PostMetadata post={post} />
            </Flex>
          </header>

          <Box as="main">
            {editing ? (
              <Box paddingTop="0.5em">
                <PostEditor
                  initialPostID={post.id}
                  initialTitle={title}
                  initialBody={post.body}
                  onSubmit={onSubmitEdit}
                  postButtonText="Save Edits"
                  disableThreadCreationOptions
                />
              </Box>
            ) : (
              <MDXRemote {...markdown}></MDXRemote>
            )}
          </Box>
        </div>
      </article>

      <style jsx>{`
        article {
          background-color: var(
            ${post.deletedAt
              ? "--chakra-colors-red-100"
              : "--chakra-colors-white"}
          );

          padding: 0.5em 1em;
          border: 1px solid hsla(0, 100%, 0%, 10%);
          border-radius: 0.5em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
        .category {
          display: flex;
          justify-content: space-between;
          line-height: 1;
          font-size: 0.9em;
        }
        .category span {
          border-left: 0.25em solid lightblue;
          padding-left: 0.25em;
          height: min-content;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          font-size: 0.9em;
          color: var(--chakra-colors-gray-400);
        }
      `}</style>
    </li>
  );
};

export default PostListItem;
