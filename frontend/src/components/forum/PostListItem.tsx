import {
  AtSignIcon,
  CheckIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Stack,
  useClipboard,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { FC, useCallback, useState } from "react";
import { useAuth } from "src/auth/hooks";
import { WEB_ADDRESS } from "src/config";
import { Post } from "src/types/_generated_Forum";
import { PostMetadata, PostTitle } from "./common";
import { useDeletePost, useEditPost } from "./hooks";
import PostEditor, { PostPayload } from "./PostEditor";
import PostReacts from "./PostReacts";
import IsomorphicMarkdown from "./IsomorphicMarkdown";

export type PostWithMarkdown = Post & {
  serverSideMarkdown?: MDXRemoteSerializeResult<Record<string, unknown>>;
};

type Props = {
  thread: Partial<Post>;
  post: PostWithMarkdown;
  onSetReply: (post: Post) => void;
} & ChakraProps;

type PostHeadStripProps = {
  editing: boolean;
  thread: Partial<Post>;
  post: Post;
  admin?: boolean;
  onReply: (post: Post) => void;
  onEdit: (id: string) => void;
  onTitleChange: (title: string) => void;
};

const PostHeadStrip: FC<PostHeadStripProps> = ({
  editing,
  thread,
  post,
  admin,
  onEdit,
  onReply,
  onTitleChange,
}) => {
  const deletePost = useDeletePost(thread.slug ?? "");
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
  const { hasCopied, onCopy } = useClipboard(
    `${WEB_ADDRESS}/discussion/${thread.slug}#${post.id}`
  );
  const toast = useToast();
  const permalink = useCallback(() => {
    onCopy();
    toast({ status: "success", title: "Post link copied to clipboard!" });
  }, [onCopy, toast]);

  return (
    <Flex justifyContent="space-between" alignItems="start">
      {title && editing ? (
        <Input onChange={onChange} defaultValue={post.title ?? undefined} />
      ) : post.first ? (
        <PostTitle
          title={post.title ?? "(No title)"}
          slug={post.slug ?? "/"}
          clamp={false}
        />
      ) : (
        // Empty div to fill the flex. Kind of a hack... but meh
        <div />
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
              <MenuItem
                icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
                onClick={permalink}
              >
                Copy Link
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

type EditingProps = {
  post: Post;
  title?: string;
  onSubmitEdit: (p: PostPayload) => Promise<boolean>;
};
const Editing: FC<EditingProps> = ({ post, title, onSubmitEdit }) => {
  return (
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
  );
};

const PostListItem: FC<Props> = ({
  thread,
  post,
  onSetReply,
  sx,
}) => {
  const { user } = useAuth();
  const [owned, admin] = [user?.id === post.author.id, user?.admin];
  const showTools = owned || admin;

  // The post.markdown field NEVER changes, it's serialised server side only
  // for next-mdx-remote and used only for server side renders. Once the client
  // takes over, this value is used instead which is the value that is mutated
  // by the post editing flow.
  const [csrMarkdown, setCSRMarkdown] = useState(post.body);

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title ?? undefined);
  const onEdit = useCallback(() => setEditing(true), [setEditing]);

  const editPost = useEditPost(thread.slug ?? "");
  const onSubmitEdit = useCallback(
    async (p: PostPayload) => {
      if (await editPost(p)) {
        setEditing(false);
        p.body && setCSRMarkdown(p.body);
        return true;
      } else {
        return false;
      }
    },
    [editPost]
  );

  const onTitleChange = useCallback((t: string) => setTitle(t), [setTitle]);

  const deletedPostColour = "red.50";
  const deletedBoxShadow = `inset 0 0 0.5em var(--chakra-colors-red-100)`;

  const postListItemColorDark = useColorModeValue('white', 'gray.700');
  const backgroundColor = post.deletedAt ? deletedPostColour : postListItemColorDark;
  const boxShadow = post.deletedAt ? deletedBoxShadow : "white";

  return (
    <Box id={post.id} sx={{ ...sx, backgroundColor, boxShadow }}>
      <Stack spacing="0.5em">
        <header>
          <Flex direction="column" width="100%">
            <PostHeadStrip
              editing={editing}
              onTitleChange={onTitleChange}
              thread={thread}
              post={post}
              admin={showTools}
              onReply={onSetReply}
              onEdit={onEdit}
            />
            <PostMetadata post={post} />
          </Flex>
        </header>

        <Divider />

        <Box as="main">
          {editing ? (
            <Editing post={post} title={title} onSubmitEdit={onSubmitEdit} />
          ) : (
            <IsomorphicMarkdown
              ssr={post.serverSideMarkdown}
              csr={csrMarkdown}
            />
          )}
        </Box>

        <Box as="footer" mt="0.5em">
          <PostReacts post={post} />
        </Box>
      </Stack>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          font-size: 0.9em;
        }
      `}</style>
    </Box>
  );
};

export default PostListItem;
