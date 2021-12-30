import { Box, Button, Flex } from "@chakra-ui/react";
import map from "lodash/fp/map";
import Link from "next/link";
import React, { FC } from "react";
import ThreadSearch from "src/components/forum/ThreadSearch";
import { Post } from "src/types/_generated_Forum";
import { CardList } from "../generic/CardList";
import CategorySelect from "./CategorySelect";
import ThreadListItem from "./ThreadListItem";

type HeaderProps = {
  category: string;
  tags: string[];
  query: string;
  onSelectCategory: (c: string | undefined) => void;
  onSearch: (tags: string[], query: string) => void;
};

const NewThreadButton = () => (
  <Link href="/discussion/new" passHref>
    <Button colorScheme="green">New Thread</Button>
  </Link>
);

const ListHeader: FC<HeaderProps> = ({
  category,
  tags,
  query,
  onSelectCategory,
  onSearch,
}) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gridGap="0.5em">
      <Box className="categories">
        <CategorySelect category={category} onSelect={onSelectCategory} />
      </Box>

      <Box className="search" flexGrow={1}>
        <ThreadSearch
          onSearch={onSearch}
          initialTags={tags}
          initialQuery={query}
        />
      </Box>

      <Box className="new" alignSelf="end">
        <NewThreadButton />
      </Box>
    </Flex>
  );
};

type Props = {
  data: Post[];
  category: string;
} & HeaderProps;

const ThreadList: FC<Props> = ({
  data,
  category,
  tags,
  query,
  onSelectCategory,
  onSearch,
}) => {
  const mapping = map((post: Post) => (
    <ThreadListItem post={post} key={post.id} />
  ));

  return (
    <div>
      <ListHeader
        category={category}
        tags={tags}
        query={query}
        onSelectCategory={onSelectCategory}
        onSearch={onSearch}
      />

      <CardList as="ol">{mapping(data)}</CardList>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default ThreadList;
