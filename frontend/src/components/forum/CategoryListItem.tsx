import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  HamburgerIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, useCallback, useState } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { Category } from "src/types/_generated_Forum";
import CategorySelect from "./CategorySelect";
import { PostLink } from "./common";
import { useDeleteCategory, useUpdateCategory } from "./hooks";
import NewThreadLink from "./NewThreadLink";
import { SliderPicker, ColorResult } from "react-color";

export type MoveCategoryFn = (idx: number, start: boolean) => void;

const DeleteMenuItem: FC<{ category: Category }> = ({ category }) => {
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
      <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
        Delete
      </MenuItem>

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

const RenameMenuItem: FC<{ category: Category }> = ({ category }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(category.name);

  const update = useUpdateCategory();

  const onChange = useCallback((e) => setName(e.target.value), [setName]);
  const onRename = useCallback(() => {
    if (name.length === 0) {
      toast({
        status: "error",
        title: `Please enter a new name for category ${category.name}`,
      });
    } else {
      update({ ...category, name });
      onClose();
    }
  }, [toast, update, category, name, onClose]);

  return (
    <>
      <MenuItem icon={<EditIcon />} onClick={onOpen}>
        Rename
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Enter a new name for category {category.name}:</Text>
            <Input
              placeholder="Category name"
              value={name}
              onChange={onChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onRename}>
              Submit
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

const ColourMenuItem: FC<{ category: Category }> = ({ category }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [colour, setColour] = useState(category.colour);

  const update = useUpdateCategory();

  const onChange = useCallback(
    (colour: ColorResult) => setColour(colour.hex),
    [setColour]
  );
  const onColour = useCallback(() => {
    if (colour.length === 0) {
      toast({
        status: "error",
        title: `Please enter a new name for category ${category.name}`,
      });
    } else {
      update({ ...category, colour });
      onClose();
    }
  }, [toast, update, category, colour, onClose]);

  return (
    <>
      <MenuItem icon={<SunIcon />} onClick={onOpen}>
        Colour
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Select a new colour for category {category.name}:</Text>
            <SliderPicker color={colour} onChangeComplete={onChange} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onColour}>
              Submit
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

type CategoryListItemMenuProps = {
  category: Category;
  onMove: MoveCategoryFn;
};
export const CategoryListItemMenu: FC<CategoryListItemMenuProps> = ({
  category,
  onMove,
}) => {
  const onMoveToStart = useCallback(
    () => onMove(category.sort, true),
    [onMove, category]
  );

  const onMoveToEnd = useCallback(
    () => onMove(category.sort, false),
    [onMove, category]
  );

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
          <DeleteMenuItem category={category} />
          <RenameMenuItem category={category} />
          <ColourMenuItem category={category} />

          <MenuItem icon={<ArrowUpIcon />} onClick={onMoveToStart}>
            Move to Start
          </MenuItem>
          <MenuItem icon={<ArrowDownIcon />} onClick={onMoveToEnd}>
            Move to End
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export const CategoryListItem: FC<{
  category: Category;
  onMove: MoveCategoryFn;
}> = ({ category, onMove }) => {
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
            <Flex gridGap="0.5em">
              {category.postCount === 0 ? (
                <>
                  <Heading as="h3" size="md" m="0">
                    No posts
                  </Heading>
                  <NewThreadLink />
                </>
              ) : (
                <Heading as="h3" size="md" m="0">
                  {category.postCount === 1
                    ? `1 Post`
                    : `${category.postCount} Posts`}
                </Heading>
              )}
            </Flex>

            {admin && (
              <Flex alignItems="center">
                <CategoryListItemMenu category={category} onMove={onMove} />
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
