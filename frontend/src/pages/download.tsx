//Icons
import { ArrowDownIcon } from "@chakra-ui/icons";
//Chakra Imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import Roads from "src/components/icons/Roads";
import Announcement from "src/components/site/Announcement";
// Server side
import { markdownSSR } from "src/mdx-helpers/ssr";
import { MarkdownContent } from "src/mdx-helpers/types";
//Styles
import heroStyles from "../styles/Hero.module.css";

interface DownloadButtonProps {
  link: string;
  title: string;
  text: string;
  disabled?: boolean;
}

const DownloadButton = ({ link, title, text, disabled = false }: DownloadButtonProps) => {
  return (
    <Link href={disabled ? '#' : link} _hover={{ textDecoration: "none" }} isExternal>
      <Button
        disabled={disabled}
        bg="#9083D2"
        color="white"
        rightIcon={<ArrowDownIcon />}
        _hover={{
          bgColor: "#7466D4",
        }}
        _active={{
          bgColor: "#5A4CBB",
        }}
        _focus={{
          outline: "2px solid #695AD3",
          transition: "outline 0.3s",
        }}
        title={title}
      >
        {text}
      </Button>
    </Link>
  );
};

const Downloads = () => {
  const { colorMode } = useColorMode();
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
            <VStack
              maxW={{ base: "100%", md: "50em" }}
              mt={{ base: "3em", md: "none" }}
              align={{ base: "center", md: "start" }}
            >
              <Text
                fontSize="xl"
                fontWeight="500"
                textAlign={{ base: "center", md: "left" }}
                maxW="30em"
              >
                Download the server package below. Despite being out of beta,
                still run in production environments at your own risk.
              </Text>
              <HStack spacing="1em" my="1.2em" align="top">
                <Flex flexWrap="wrap" justifyContent="center" gridGap="1em">
                  <DownloadButton
                    link="https://github.com/openmultiplayer/open.mp/releases"
                    title="Server package download"
                    text="Server"
                  />
                  <DownloadButton
                    link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    title="Client installer download"
                    text="Client"
                    disabled={true}
                  />
                </Flex>
              </HStack>
            </VStack>
            <Box display={{ base: "none", md: "block" }} py="2em">
              <Roads width="400" height="400" dark={colorMode === "dark"} />
            </Box>
          </Flex>
        </Box>
      </main>
    </Box>
  );
};

type Props = {
  content: MarkdownContent;
};

const Page = ({ content }: Props) => <Downloads />;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: { content: await markdownSSR(locale || "en", "index") },
});

export default Page;
