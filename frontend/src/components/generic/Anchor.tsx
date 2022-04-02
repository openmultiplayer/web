import { FC } from "react";
import NextLink, { LinkProps } from "next/link";
import { Link } from "@chakra-ui/layout";

type Props = LinkProps;
const Anchor: FC<Props> = (props) => {
  return (
    <>
      <NextLink {...props} passHref>
        <Link
          sx={{
            color: "hsl(252.2, 30.8%, 59.2%)",
            fontWeight: 600,
          }}
          _hover={{
            color: "#9689db",
            textDecor: "none",
          }}
        >
          {props.children}
        </Link>
      </NextLink>
    </>
  );
};

export default Anchor;
