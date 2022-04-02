import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Tag, TagLabel, TagLeftIcon, useColorModeValue } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import { opacify } from "polished";
import React, { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import ClampedParagraph from "../generic/ClampedParagraph";
import { CategoryName, PostMetadata, PostTitle } from "./common";
import ThreadAdminMenu from "./ThreadMenu";

type Props = {
  post: Post;
} & ChakraProps;

const ThreadListItem: FC<Props> = ({ post, sx }) => {
  const categoryColour = post.category.colour;
  const categoryColourBadge = opacify(-0.6, categoryColour);
  const categoryColourBack = opacify(-0.99, categoryColour);
  const categoryColourEdge = opacify(-0.8, categoryColour);
  const categoryColorDark = useColorModeValue('white', 'gray.700');

  const deletedPostColour = "red.50";
  const pinnedPostColour = post.pinned ? categoryColourBack : categoryColorDark;
  const backgroundColor = post.deletedAt ? deletedPostColour : pinnedPostColour;

  const deletedBoxShadow = `inset 0 0 0.5em var(--chakra-colors-red-100)`;
  const pinnedPostBoxShadow = post.pinned
    ? `inset 0 0 0.5em ${categoryColourEdge}`
    : "none";
  const boxShadow = post.deletedAt ? deletedBoxShadow : pinnedPostBoxShadow;

  const pinnedThreadColor = useColorModeValue('blackAlpha.800', 'brand.white');

  return (
    <>
      <Box
        as="article"
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        display="flex"
        flexDirection="column"
        gridGap="0.5em"
        sx={sx}
      >
        <div>
          <header>
            <div className="category">
              {post.pinned ? (
                <Tag size="sm" variant="subtle" color={categoryColourBadge}>
                  <TagLeftIcon as={WarningTwoIcon} color={pinnedThreadColor} />
                  <TagLabel color={pinnedThreadColor}>Pinned Thread</TagLabel>
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
              <ClampedParagraph lines={2}>{post.short}</ClampedParagraph>
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
    </>
  );
};

export default ThreadListItem;
