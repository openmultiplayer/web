import { DeleteIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  useToast,
  Button,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { map } from "lodash/fp";
import NextLink from "next/link";
import React, { FC, forwardRef, useCallback, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useIsAdmin } from "src/auth/hooks";
import { Category } from "src/types/_generated_Forum";
import CategorySelect from "./CategorySelect";
import { PostLink } from "./common";
import { useDeleteCategory, useUpdateCategories } from "./hooks";

type Props = {
  categories: Category[];
};

type CategoryListItemMenuProps = {
  category: Category;
};
const CategoryListItemMenu: FC<CategoryListItemMenuProps> = ({ category }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newCategory, setNewCategory] = useState<Category | undefined>();
  const onSelectNewCategory = useCallback((_name, cat) => {
    setNewCategory(cat);
  }, []);

  const deleteCategory = useDeleteCategory();
  const onDelete = useCallback(() => {
    if (newCategory === undefined) {
      toast({
        status: "error",
        title: "Please select a new category to move posts to",
      });
    } else if (newCategory.name === category.name) {
      toast({
        status: "error",
        title: "Please select a different new category to move posts to",
      });
    } else {
      deleteCategory(category.id, newCategory.id);
      onClose();
    }
  }, [toast, category, newCategory, deleteCategory, onClose]);

  return (
    <>
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
          <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              To delete category {category.name} please choose a category to
              move posts to:
            </Text>
            <CategorySelect
              onSelect={onSelectNewCategory}
              includeAllOption={false}
              exclude={category.name}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const CategoryListItem: FC<{ category: Category }> = ({ category }) => {
  const admin = useIsAdmin();
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
            {admin && (
              <Flex alignItems="center">
                <CategoryListItemMenu category={category} />
                <DragHandleIcon className="drag-handle" cursor="grab" />
              </Flex>
            )}
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
