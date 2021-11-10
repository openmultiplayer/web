import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { opacify } from "polished";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { CategoryName, PostMetadata, PostTitle } from "./common";
import ThreadAdminMenu from "./ThreadMenu";

type Props = {
  post: Post;
};

const ThreadListItem: FC<Props> = ({ post }) => {
  const categoryColour = post.category.colour;
  const categoryColourBadge = opacify(-0.6, categoryColour);
  const categoryColourBack = opacify(-0.99, categoryColour);
  const categoryColourEdge = opacify(-0.8, categoryColour);

  const deletedPostColour = "red.50";
  const pinnedPostColour = post.pinned ? categoryColourBack : "white";
  const backgroundColor = post.deletedAt ? deletedPostColour : pinnedPostColour;

  const deletedBoxShadow = `inset 0 0 0.5em var(--chakra-colors-red-100)`;
  const pinnedPostBoxShadow = post.pinned
    ? `inset 0 0 0.5em ${categoryColourEdge}`
    : "none";
  const boxShadow = post.deletedAt ? deletedBoxShadow : pinnedPostBoxShadow;

  return (
    <li>
      <Box
        as="article"
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        padding="0.5em 1em"
        border="1px solid hsla(0, 100%, 0%, 10%)"
        borderRadius="0.5em"
        display="flex"
        flexDirection="column"
        gridGap="0.5em"
      >
        <div>
          <header>
            <div className="category">
              {post.pinned ? (
                <Tag size="sm" variant="subtle" color={categoryColourBadge}>
                  <TagLeftIcon as={WarningTwoIcon} color="blackAlpha.800" />
                  <TagLabel color="blackAlpha.800">Pinned Thread</TagLabel>
                </Tag>
              ) : (
                <CategoryName category={post.category} />
              )}
              <ThreadAdminMenu post={post} />
            </div>

            <PostTitle
              title={post.title ?? "(No title)"}
              slug={post.slug ?? "/"}
            />
          </header>

          {!post.pinned && (
            <main>
              <p>{post.short}</p>
            </main>
          )}
        </div>

        <footer>
          <PostMetadata post={post} showReplies={true} />
        </footer>
      </Box>

      <style jsx>{`
        .category {
          display: flex;
          justify-content: space-between;
          line-height: 1;
          font-size: 0.9em;
        }
        h1 {
          margin: 0;
          font-size: 1.6em;
        }
      `}</style>
    </li>
  );
};

export default ThreadListItem;
