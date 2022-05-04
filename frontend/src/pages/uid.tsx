//Chakra Imports
import {
	Box,
	Flex,
	Text,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import Announcement from "src/components/site/Announcement";
// Server side
import { markdownSSR } from "src/mdx-helpers/ssr";
import { MarkdownContent } from "src/mdx-helpers/types";
//Styles
import heroStyles from "../styles/Hero.module.css";

const crypto: Crypto | undefined = self.crypto ?? (self as { msCrypto?: Crypto }).msCrypto; // eslint-disable-line no-restricted-globals

const getRandomBytes: (n: number) => Uint8Array = (crypto ?
  function () { // Browsers
    return function (n: number): Uint8Array {
      var a = new Uint8Array(n);
      for (var i = 0; i < n; i += 65536) {
        crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, 65536)));
      }
      return a;
    };
  } :
  function () { // Node
    return require("crypto").randomBytes as (n: number) => Uint8Array;
  }
)();

const UID = () => {
  const rnd = getRandomBytes(8);
  return (
    <Box>
      <NextSeo title="Downloads" />

      <main>
        <Box className={heroStyles.hero} py="2em" px="1em">
          {/*
            NOTE: Temporary announcement for new forum.
          */}

          <Announcement />

          {/*
            Remove once feedback and testing is done.
          */}

          <Flex
            align="center"
            justifyContent={{ base: "center", md: "space-between" }}
            margin="0 auto"
            py="2em"
            px={{ base: "0em", md: "2em" }}
            maxW={"80em"}
            gridGap="2em"
          >
            <Text
              fontSize="xl"
              fontWeight="500"
              textAlign={{ base: "center", md: "left" }}
              maxW="30em"
            >
              Copy the UID provider macro in to your component in place of the default provider,
              which is not valid to avoid duplicates.  Each component should have a unique UID,
              hence the <em>U</em> in <em>UID</em> (<em>Unique IDentifier</em>).  The placeholder
              you must find and replace is:
              <br />
              <br />
              <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
            </Text>
            <Text
              fontSize="xl"
              fontWeight="500"
              textAlign={{ base: "center", md: "left" }}
              maxW="30em"
            >
              {`PROVIDE_UID(0x${rnd[0].toString(16).toUpperCase()}${rnd[1].toString(16).toUpperCase()}${rnd[2].toString(16).toUpperCase()}${rnd[3].toString(16).toUpperCase()}${rnd[4].toString(16).toUpperCase()}${rnd[5].toString(16).toUpperCase()}${rnd[6].toString(16).toUpperCase()}${rnd[7].toString(16).toUpperCase()});`}
            </Text>
          </Flex>
        </Box>
      </main>
    </Box>
  );
};

type Props = {
  content: MarkdownContent;
};

const Page = ({ content }: Props) => <UID />;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: { content: await markdownSSR(locale || "en", "index") },
});

export default Page;
