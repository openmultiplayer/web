import { Button } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { FC } from "react";

type Props = {
  to: string;
};

const BackLink: FC<Props> = ({ to }) => {
  return (
    <NextLink href={to}>
      <Link className="black-80 hover-blue">
        <Button leftIcon={<ArrowBackIcon />} variant="outline">
          Back
        </Button>
      </Link>
    </NextLink>
  );
};

export default BackLink;
