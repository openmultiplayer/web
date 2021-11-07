import {
  CheckIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { WEB_ADDRESS } from "src/config";
import { Post } from "src/types/_generated_Forum";
import { useDeleteThread, useUpdateThread } from "./hooks";

type Props = {
  post: Post;
};

const ThreadMenu: FC<Props> = ({ post }) => {
  const toast = useToast();
  const admin = useIsAdmin();

  const updateThread = useUpdateThread();
  const deleteThread = useDeleteThread();

  const { hasCopied, onCopy } = useClipboard(
    `${WEB_ADDRESS}/discussion/${post.slug}#${post.id}`
  );
  const permalink = useCallback(() => {
    onCopy();
    toast({ status: "success", title: "Post link copied to clipboard!" });
  }, [onCopy, toast]);

  const onClickPin = useCallback(
    () => updateThread({ ...post, pinned: !post.pinned }),
    [updateThread, post]
  );
  const onClickDelete = useCallback(
    () => deleteThread(post.id),
    [deleteThread, post]
  );

  return (
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
          <MenuItem
            icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            onClick={permalink}
          >
            Copy Link
          </MenuItem>
        </MenuOptionGroup>
        {admin && (
          <>
            <MenuDivider />
            <MenuOptionGroup>
              <MenuItem icon={<EditIcon />} onClick={onClickPin}>
                {post.pinned ? "Unpin" : "Pin"}
              </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={onClickDelete}>
                Delete
              </MenuItem>
            </MenuOptionGroup>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default ThreadMenu;
