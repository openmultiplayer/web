import { Button } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { FC } from "react";

const translateText = require('src/components/translates/Translate');
import { useRouter } from 'next/router';

type Props = {
  to: string;
};

const BackLink: FC<Props> = ({ to }) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  return (
    <NextLink href={to}>
      <Link className="black-80 hover-blue">
        <Button leftIcon={<ArrowBackIcon />} variant="outline">
        {translateText(locale, "General", "Back")}
        </Button>
      </Link>
    </NextLink>
  );
};

export default BackLink;
