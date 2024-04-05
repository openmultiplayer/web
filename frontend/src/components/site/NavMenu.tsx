import { Box, Button, Flex, IconButton, Link, useColorMode, useDisclosure, Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList, } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC, useRef } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
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
  const { colorMode, toggleColorMode } = useColorMode();
  const languageRef = useRef<{ open: () => void }>(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isCurrent = (path: string) => path === route;

  const handleImageClick = () => {
    languageRef.current?.open();
  };

  const locale = router.locale || "en";

  return (
    <Box p="2">
      <Flex gridGap={0.5} alignItems="center" justifyContent="space-between">
        <Flex gridGap={0.5} display={ON_DESKTOP}>
          {items.map((link) => (
            <NavLink
              key={link.path}
              item={link}
              current={isCurrent(link.path)}
            />
          ))}

          <IconButton cursor="pointer" as="div" size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>

          <IconButton
            cursor="pointer"
            size="sm"
            aria-label="Change Language"
            onClick={handleImageClick}
          >
            <img
              src={`/images/assets/${locale}.svg`}
              width="15"
              height="15"
              alt="Language"
            />
          </IconButton>

          <LanguageSelect ref={languageRef} />
        </Flex>

        <IconButton cursor="pointer" display={ON_MOBILE} size="sm" aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        <IconButton
          cursor="pointer"
          size="sm"
          display={ON_MOBILE}
          aria-label="Change Language"
          onClick={handleImageClick}
        >
          <img
            src={`/images/assets/${locale}.svg`}
            width="13"
            height="13"
            alt="Language"
          />
        </IconButton>


        <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <MenuButton
            display={ON_MOBILE}
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
