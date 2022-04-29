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
import { FC, useRef } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
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
  const languageRef = useRef<{ open: () => void }>(null);
  const router = useRouter()

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

          <IconButton cursor="pointer" as="div" size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          </IconButton>
        </Flex>

        <IconButton cursor="pointer" display={ON_MOBILE} size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
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
                  onClick={() => router.push(path)}
                >
                  {name}
                </MenuItem>
              ))}
            </MenuGroup>

            <MenuDivider display={ON_MOBILE} />

            <MenuGroup>
              {user ? (
                <MenuItem onClick={() => router.push('/dashboard')}>
                  Dashboard
                </MenuItem>
              ) : (
                <MenuItem onClick={() => router.push('/login')}>
                  Login
                </MenuItem>
              )}

              <MenuItem onClick={()=> languageRef.current?.open()}>
                <LanguageSelect title="Language" ref={languageRef} />
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
  <NextLink href={item.path} passHref>
    <Link _hover={undefined} _focus={{ outline: 'none', border: 'none' }}>
      <Button as="div" variant={current ? "outline" : "ghost"} size="sm">
        {item.name}
      </Button>
    </Link>
  </NextLink>
);

export default NavMenu;
