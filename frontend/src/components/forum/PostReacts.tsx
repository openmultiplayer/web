import { Button, IconButton } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, ListItem, OrderedList } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { TagLabel } from "@chakra-ui/tag";
import { BaseEmoji, Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { entries, filter, flow, groupBy, head, map } from "lodash/fp";
import { FC, useCallback } from "react";
import { useAuth } from "src/auth/hooks";
import { Post, React } from "src/types/_generated_Forum";
import twemoji from "twemoji";
import { useReaction } from "./hooks";
import { Portal, useColorModeValue } from "@chakra-ui/react";

type Props = {
  post: Post;
};

type ReactGroup = {
  reacts: React[];
  count: number;
  emoji: string;
};

const getUsersReact = (userID: string) =>
  flow(
    filter((r: React) => r.user === userID),
    head
  );

type PostReactProps = {
  group: ReactGroup;
  postId: string;
  userId?: string;
  addReact: (id: string, react: string) => void;
  deleteReact: (id: string) => void;
};
const PostReact: FC<PostReactProps> = ({
  group,
  userId,
  postId,
  addReact,
  deleteReact,
}) => {
  // scan the react group for reacts by the current user
  const hasReacted = userId && getUsersReact(userId)(group.reacts);
  const hasReactedColor = useColorModeValue('var(--chakra-colors-gray-300)', 'var(--chakra-colors-gray-500)');

  // If the user clicks a reaction, they add one if they haven't already
  // reacted or they remove their own reaction.
  const eventHandler = useCallback(() => {
    if (hasReacted) {
      deleteReact(hasReacted?.id);
    } else {
      addReact(postId, group.emoji);
    }
  }, [hasReacted, deleteReact, addReact, postId, group]);

  const emoji = twemoji.parse(group.emoji, {
    folder: "svg",
    ext: ".svg",
    className: "reacts-list-emoji",
  });

  return (
    <ListItem listStyleType="none">
      <Button
        display="flex"
        gridGap="0.25em"
        alignItems="center"
        size="auto"
        px="0.5em"
        py="0.2em"
        onClick={eventHandler}
        boxShadow={
          hasReacted && `inset 0px 0px 3px 2px ${hasReactedColor}`
        }
      >
        <span
          dangerouslySetInnerHTML={{
            __html: emoji,
          }}
        />

        <TagLabel color={useColorModeValue('blackAlpha.600', 'gray.400')}>{group.count}</TagLabel>
      </Button>

      {/* NOTE: This style is global - hence the unique class name. */}
      <style jsx global>{`
        .reacts-list-emoji {
          display: inline-block;
          width: auto;
          height: 1em;
          vertical-align: -0.125em;
        }
      `}</style>
    </ListItem>
  );
};

const groupReacts = flow(
  groupBy<React>((r: React) => r.emoji),
  entries,
  map(
    ([emoji, reacts]): ReactGroup => ({ reacts, emoji, count: reacts.length })
  )
);

const PostReacts: FC<Props> = ({ post }) => {
  const { user } = useAuth();
  const { addReact, deleteReact, reacts } = useReaction(post, user);
  const reactGroups = groupReacts(reacts);

  const onSelect = useCallback(
    (emoji: BaseEmoji) => addReact(post.id, emoji.native),
    [addReact, post]
  );
  const onAdd = useCallback(
    (id: string, react: string) => addReact(id, react),
    [addReact]
  );
  const onRemove = useCallback(
    (reactId: string) => deleteReact(reactId),
    [deleteReact]
  );

  const list = map((group: ReactGroup) => (
    <PostReact
      key={group.emoji}
      group={group}
      postId={post.id}
      userId={user?.id}
      addReact={onAdd}
      deleteReact={onRemove}
    />
  ));

  return (
    <Flex gridGap="0.5em" alignItems="center">
      <OrderedList
        m="0"
        p="0"
        display="flex"
        flexWrap="wrap"
        gridGap="0.5em"
        alignItems="center"
      >
        {list(reactGroups)}

        <ListItem listStyleType="none">
          <Popover matchWidth={false} isLazy>
            <PopoverTrigger>
              <IconButton
                aria-label="React to post"
                size="xs"
                variant="outline"
                icon={<AddIcon />}
              />
            </PopoverTrigger>
            <Portal>
              <PopoverContent width="fit-content">
                <PopoverArrow />
                <Picker set="twitter" onSelect={onSelect} autoFocus />
              </PopoverContent>
            </Portal>
          </Popover>
        </ListItem>
      </OrderedList>
    </Flex>
  );
};

export default PostReacts;
