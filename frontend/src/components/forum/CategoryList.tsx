import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/layout";
import { map } from "lodash/fp";
import NextLink from "next/link";
import React, { FC } from "react";
import { Category } from "src/types/_generated_Forum";
import { PostLink } from "./common";

type Props = {
  categories: Category[];
};

const CategorListItem: FC<{ category: Category }> = ({ category }) => {
  return (
    <ListItem
      key={category.id}
      listStyleType="none"
      borderWidth="1px"
      borderRadius="0.5em"
      borderStyle="solid"
      borderColor="blackAlpha.100"
      padding="1em"
    >
      <Flex
        as="article"
        borderLeftColor={category.colour}
        borderLeftStyle="solid"
        borderLeftWidth="0.5em"
        borderRadius="0.25em"
        paddingLeft="0.5em"
        justifyContent="space-between"
      >
        <Box width="50%">
          <header>
            <Heading margin="0">
              <NextLink passHref href={`/discussion/category/${category.name}`}>
                <Link>{category.name}</Link>
              </NextLink>
            </Heading>
          </header>
          <main>
            <p>{category.description}</p>
          </main>
        </Box>

        <Box height="auto" px="1em">
          <Divider orientation="vertical" />
        </Box>

        <Box width="50%">
          <Heading as="h3" size="md">
            Recent posts
          </Heading>
          <OrderedList
            margin="0"
            display="flex"
            gridGap="0.25em"
            flexDir="column"
          >
            {category.recent?.map((p) => (
              <ListItem key={p.postId} listStyleType="none">
                <PostLink post={p} />
              </ListItem>
            ))}
          </OrderedList>
        </Box>
      </Flex>
    </ListItem>
  );
};

const categoriesToList = map((c: Category) => <CategorListItem category={c} />);

const CategoryList: FC<Props> = ({ categories }) => {
  return (
    <UnorderedList margin="0" display="flex" gridGap="0.5em" flexDir="column">
      {categoriesToList(categories)}
    </UnorderedList>
  );
};

export default CategoryList;
