import { DeleteIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { map } from "lodash/fp";
import NextLink from "next/link";
import React, { FC, forwardRef, useCallback, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Category } from "src/types/_generated_Forum";
import { PostLink } from "./common";
import { useUpdateCategories } from "./hooks";

type Props = {
  categories: Category[];
};

const CategoryListItemMenu = () => {
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
        <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

const CategoryListItem: FC<{ category: Category }> = ({ category }) => {
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
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gridGap="0.5em"
          >
            <Heading as="h3" size="md" m="0">
              Recent posts
            </Heading>
            <Flex alignItems="center">
              <CategoryListItemMenu />
              <DragHandleIcon className="drag-handle" cursor="grab" />
            </Flex>
          </Flex>
          <OrderedList
            my="0.2em"
            mx="0"
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

const categoriesToList = map((c: Category) => (
  <CategoryListItem key={c.id} category={c} />
));

// eslint-disable-next-line react/display-name
const ListContainer = forwardRef<HTMLUListElement>((props, ref) => {
  return (
    <UnorderedList
      ref={ref}
      margin="0"
      padding="0"
      display="flex"
      gridGap="0.5em"
      flexDir="column"
    >
      {props.children}
    </UnorderedList>
  );
});

const CategoryList: FC<Props> = ({ categories }) => {
  const [list, setList] = useState(categories);
  const updateCategories = useUpdateCategories();
  const onSort = useCallback(() => {
    const listWithSortField = list.map((c, i) => ({ ...c, sort: i }));
    updateCategories(listWithSortField);
  }, [updateCategories, list]);

  return (
    <ReactSortable
      tag={ListContainer}
      list={list}
      setList={setList}
      animation={200}
      delayOnTouchOnly={true}
      handle=".drag-handle"
      onSort={onSort}
    >
      {categoriesToList(list)}
    </ReactSortable>
  );
};

export default CategoryList;
