import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import NextLink from "next/link";
import { FC } from "react";
import { useAuth } from "src/auth/hooks";
import LanguageSelect from "./LanguageSelect";

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
  const { user } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const isCurrent = (path: string) => path === route;

  return (
    <Box p="2">
      <Flex gridGap={1} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gridGap={1} display={ON_DESKTOP}>
          {items.map((link) => (
            <NavLink
              key={link.path}
              item={link}
              current={isCurrent(link.path)}
            />
          ))}

          <IconButton as="div" size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          </IconButton>
        </Flex>

        <IconButton display={ON_MOBILE} size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
           {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </IconButton>

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
                <MenuItem
                  key={path}
                  display={ON_MOBILE}
                  current={isCurrent(path).toString()}
                >
                  <Link href={path}>{name}</Link>
                </MenuItem>
              ))}
            </MenuGroup>

            <MenuDivider display={ON_MOBILE} />

            <MenuGroup>
              {user ? (
                <MenuItem>
                  <Link href="/dashboard">Dashboard</Link>
                </MenuItem>
              ) : (
                <MenuItem>
                  <Link href="/login">Login</Link>
                </MenuItem>
              )}

              <MenuItem>
                <LanguageSelect>Language</LanguageSelect>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

type NavLinkProps = { item: NavItem; current: boolean };
const NavLink: FC<NavLinkProps> = ({ item, current }) => (
  <Button
    // HACK: We want the button styling here but semantically, this is not a
    // button, it's a link. So render this as a <div> only.
    as="div"
    variant={current ? "outline" : "ghost"}
    size="sm"
  >
    <NextLink href={item.path} passHref>
      <Link>{item.name}</Link>
    </NextLink>
  </Button>
);

export default NavMenu;
