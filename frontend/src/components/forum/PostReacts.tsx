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
import { entries, flow, groupBy, map } from "lodash/fp";
import { FC, useCallback } from "react";
import { Post, React } from "src/types/_generated_Forum";
import twemoji from "twemoji";
import { useReaction } from "./hooks";

type Props = {
  post: Post;
};

type ReactWithCount = Pick<React, "emoji"> & { count: number };

const reactsToList = (post: Post) =>
  map((r: ReactWithCount) => {
    const { addReact } = useReaction();
    const onAdd = useCallback(() => {
      addReact(post.id, r.emoji);
    }, [addReact, r]);

    const emoji = twemoji.parse(r.emoji, {
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
          onClick={onAdd}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: emoji,
            }}
          />

          <TagLabel color="blackAlpha.600">{r.count}</TagLabel>
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
  });

const groupReacts = flow(
  groupBy<React>((r: React) => r.emoji),
  entries,
  map(([emoji, data]): ReactWithCount => ({ emoji, count: data.length }))
);

const PostReacts: FC<Props> = ({ post }) => {
  const reacts = groupReacts(post.reacts);
  const { addReact } = useReaction();

  const onSelect = useCallback(
    (emoji: BaseEmoji) => {
      addReact(post.id, emoji.native);
    },
    [addReact, post]
  );

  const list = reactsToList(post);

  return (
    <Flex gridGap="0.5em" alignItems="center">
      <OrderedList
        m="0"
        p="0"
        // hide if there are no reacts in order for the grid-gap property to
        // not add an empty space to the left of the Add React button.
        display={reacts ? "flex" : "none"}
        gridGap="0.5em"
        alignItems="center"
        maxHeight="1.5em"
      >
        {list(reacts)}
      </OrderedList>
      <Flex>
        <Popover matchWidth={false}>
          <PopoverTrigger>
            <IconButton
              aria-label="React to post"
              size="xs"
              variant="outline"
              icon={<AddIcon />}
            />
          </PopoverTrigger>
          <PopoverContent width="fit-content">
            <PopoverArrow />

            <Picker set="twitter" onSelect={onSelect} />
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};

export default PostReacts;
