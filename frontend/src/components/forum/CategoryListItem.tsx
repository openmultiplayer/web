import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  HamburgerIcon,
  SunIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Center,
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
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, useCallback, useState } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { Category } from "src/types/_generated_Forum";
import CategorySelect from "./CategorySelect";
import { PostLink } from "./common";
import { useDeleteCategory, useUpdateCategory } from "./hooks";
import { SliderPicker, ColorResult } from "react-color";
import ClampedParagraph from "../generic/ClampedParagraph";

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
              category={category.name}
              onSelect={onSelectNewCategory}
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

const EditMenuItem: FC<{ category: Category }> = ({ category }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(category.name);
  const [description, setDesc] = useState(category.description);

  const update = useUpdateCategory();

  const onChangeName = useCallback((e) => setName(e.target.value), [setName]);
  const onChangeDesc = useCallback((e) => setDesc(e.target.value), [setDesc]);
  const onSubmit = useCallback(() => {
    if (name.length === 0) {
      toast({
        status: "error",
        title: `Please enter a new name for category ${category.name}`,
      });
    } else {
      update({ ...category, name, description });
      onClose();
    }
  }, [toast, update, category, name, description, onClose]);

  return (
    <>
      <MenuItem icon={<EditIcon />} onClick={onOpen}>
        Edit
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input
                title="Category name"
                placeholder="Category name"
                value={name}
                onChange={onChangeName}
              />
              <Input
                title="Category description"
                placeholder="Category description"
                value={description}
                onChange={onChangeDesc}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onSubmit}>
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
          <ModalHeader>Set category colour</ModalHeader>
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

const HiddenMenuItem: FC<{ category: Category }> = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateCategory = useUpdateCategory();
  const onUpdate = useCallback(() => {
    updateCategory({ ...category, admin: !category.admin });
    onClose();
  }, [updateCategory, category, onClose]);

  return (
    <>
      <MenuItem
        icon={category.admin ? <ViewOffIcon /> : <ViewIcon />}
        onClick={onOpen}
      >
        {category.admin ? "Make Public" : "Make Hidden"}
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Category Visibility</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Confirm setting visibility of {category.name} to{" "}
              {category.admin ? "public" : "admin only"}.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onUpdate}>
              {category.admin ? "Public" : "Hidden"}
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
          <EditMenuItem category={category} />
          <ColourMenuItem category={category} />
          <HiddenMenuItem category={category} />

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
  const postCountColor = useColorModeValue('blackAlpha.800', 'gray.400');

  return (
    <ListItem
      key={category.id}
      listStyleType="none"
      borderWidth="1px"
      borderRadius="0.5em"
      borderStyle="solid"
      borderColor={useColorModeValue('blackAlpha.100', 'blackAlpha.300')}
      padding="1em"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        as="article"
        borderLeftColor={category.colour}
        borderLeftStyle="solid"
        borderLeftWidth="0.5em"
        borderRadius="0.25em"
        paddingLeft="0.5em"
        justifyContent="space-between"
        color={category.admin ? "blackAlpha.400" : ""}
      >
        <Box flexBasis={0} flexShrink={1} flexGrow={10} minWidth={0}>
          <HStack justifyContent="space-between">
            <Heading size="m" margin="0">
              <NextLink passHref href={`/discussion/category/${category.name}`}>
                <Link>{category.name}</Link>
              </NextLink>
            </Heading>

            {admin && (
              <Flex alignItems="center" display={{ base: "flex", md: "none" }}>
                <CategoryListItemMenu category={category} onMove={onMove} />
                <DragHandleIcon className="drag-handle" cursor="grab" />
              </Flex>
            )}
          </HStack>
          <main>
            <ClampedParagraph lines={5}>
              {category.description}
            </ClampedParagraph>
          </main>
        </Box>

        <Center height="auto" px="1em">
          <Divider orientation="vertical" />
        </Center>

        <Box flexBasis={0} flexShrink={1} flexGrow={10} minWidth={0}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gridGap="0.5em"
          >
            <Flex gridGap="0.5em">
              {category.postCount === 0 ? (
                <>
                  <Heading
                    as="h3"
                    size="sm"
                    color="blackAlpha.800"
                    fontWeight={400}
                    m="0"
                  >
                    no posts
                  </Heading>
                </>
              ) : (
                <Heading
                  as="h3"
                  size="sm"
                  color={postCountColor}
                  fontWeight={400}
                  m="0"
                >
                  {category.postCount === 1
                    ? `1 post`
                    : `${category.postCount} posts`}
                </Heading>
              )}
            </Flex>

            {admin && (
              <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
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
      </Stack>
    </ListItem>
  );
};
