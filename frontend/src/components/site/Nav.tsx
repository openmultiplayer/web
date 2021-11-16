import { Box } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NavMenu, { NavItem } from "./NavMenu";

type Props = {
  items: NavItem[];
  route: string;
};

const Logo = () => (
  <Box p="1">
    <Link href="/">
      <a>
        <Image
          src="https://assets.open.mp/assets/images/assets/logo-dark-trans.png"
          alt="The open.mp logo"
          width={50}
          height={50}
          unoptimized={true}
        />
      </a>
    </Link>
  </Box>
);

const Nav: FC<Props> = ({ items, route }) => {
  return (
    <>
      <Box
        role="main"
        as="nav"
        minH="4em"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Logo />
        <NavMenu items={items} route={route} />
      </Box>
    </>
  );
};

export default Nav;
