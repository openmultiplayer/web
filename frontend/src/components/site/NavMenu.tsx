import NextLink from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  MenuGroup,
  MenuDivider,
  Link,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";

export type NavItem = {
  name: string;
  path: string;
  exact?: boolean;
  extra?: string;
};

export type Props = {
  items: NavItem[];
  route: string;
};

const ON_DESKTOP = { base: "none", md: "flex" };
const ON_MOBILE = { base: "flex", md: "none" };

const NavMenu: FC<Props> = ({ items, route }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isCurrent = (path: string) => path === route;

  return (
    <Box p="2">
      <Flex gridGap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gridGap={1} display={ON_DESKTOP}>
          {items.map((link) => (
            <NavLink key={link.path} item={link} />
          ))}
        </Flex>

        <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <MenuButton
            as={IconButton}
            aria-label="Navigation Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size="sm"
            variant="ghost"
          />
          <MenuList>
            <MenuGroup>
              {items.map(({ path, name }) => (
                <MenuItem key={path} display={ON_MOBILE}>
                  {name}
                </MenuItem>
              ))}
            </MenuGroup>

            <MenuDivider display={ON_MOBILE} />

            <MenuGroup>
              <MenuItem>Language</MenuItem>
            </MenuGroup>

            <Menu>
              <MenuList>
                <MenuGroup>
                  {items.map(({ path, name }) => (
                    <MenuItem key={path} display={ON_MOBILE}>
                      {name}
                    </MenuItem>
                  ))}
                </MenuGroup>
                {/*
                <MenuDivider display={ON_MOBILE} />

                <MenuGroup>
                  <MenuItem>Language</MenuItem>
                </MenuGroup>
                */}
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

const NavLink = ({ item }: { item: NavItem }) => (
  <Button variant="ghost" size="sm">
    <NextLink href={item.path} passHref>
      <Link>{item.name}</Link>
    </NextLink>
  </Button>
);

export default NavMenu;
