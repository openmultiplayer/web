import { Button } from "@chakra-ui/button";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { FC } from "react";

const NewThreadLink: FC = () => {
  return (
    <NextLink passHref href="/discussion/new">
      <Link>
        <Button colorScheme="green" size="xs" leftIcon={<PlusSquareIcon />}>
          New Thread
        </Button>
      </Link>
    </NextLink>
  );
};

export default NewThreadLink;
