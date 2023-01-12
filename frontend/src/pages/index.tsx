//Icons
import { ArrowDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
//Chakra Imports
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Announcement from "src/components/site/Announcement";
// Server side
import { markdownSSR } from "src/mdx-helpers/ssr";
import { MarkdownContent } from "src/mdx-helpers/types";
//Components
import Card from "../components/site/Card";
//Styles
import heroStyles from "../styles/Hero.module.css";
import Roads from "src/components/icons/Roads";

const DownloadButton = () => {
  return (
    <Link
      href="https://github.com/openmultiplayer/open.mp/releases"
      _hover={{ textDecoration: "none" }}
      isExternal
    >
      <Button
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
        title="open.mp is released"
      >
        Download open.mp (server)
      </Button>
    </Link>
  );
};

const DocumentationButton = () => {
  return (
    <NextLink href="/docs" passHref>
      <Link _hover={{ textDecoration: "none" }}>
        <Button
          rightIcon={<ChevronRightIcon />}
          border="1px solid #9083D2"
          bg="transparent"
          color="#9083D2F2"
          _hover={{
            backgroundColor: "#9083D240",
          }}
          _active={{
            backgroundColor: "#9083D240",
          }}
          _focus={{
            outline: "2px solid #695AD3",
            transition: "outline 0.3s",
          }}
        >
          Documentation
        </Button>
      </Link>
    </NextLink>
  );
};

const Home = () => {
  const { colorMode } = useColorMode();

  const features = [
    {
      heading: "Fully backwards compatible to make switching a breeze",
      bodyText:
        "The open.mp team have put in extra effort to make sure open.mp stays fully backwards compatible i.e all your existing sa-mp server code will work out of the box.",
      buttonLink: "/docs",
      buttonText: "Getting Started",
      img: "/images/assets/f1.png",
      imgAlt: "open.mp logo",
    },
    {
      heading: "Community driven development",
      bodyText:
        "Once fully released, the server will be fully open source. For now you can help by contributing to the wiki, Or by testing the beta server software.",
      buttonLink: "https://github.com/openmultiplayer",
      buttonText: "Visit the GitHub repo",
      img: "/images/assets/f2.png",
      imgAlt: "Github stats illustration",
    },
    {
      heading: "Age old SAMP bugs fixed",
      bodyText:
        "Many well known SAMP bugs have been fixed - no more hacky workarounds, you have all the proper tools in your hands now.",
      buttonLink: "/blog",
      buttonText: "Read the blog post",
      img: "/images/assets/f3.png",
      imgAlt: "pawn code screen",
    },
    {
      heading: "Extensible C++ API",
      bodyText:
        "Build upon the extensible C++ API with the open.mp Software Development kit.",
      buttonLink: "/docs",
      buttonText: "Getting Started",
      img: "/images/assets/f4.png",
      imgAlt: "C++ logo",
    },
  ];

  const socials = [
    {
      alt: "discord icon",
      src: "/images/assets/discord-icon.svg",
      href: "https://discord.com/invite/samp",
    },
    {
      alt: "facebook icon",
      src: "/images/assets/facebook.svg",
      href: "https://www.facebook.com/openmultiplayer",
    },
    {
      alt: "instagram icon",
      src: "/images/assets/instagram.svg",
      href: "https://instagram.com/openmultiplayer/",
    },
    {
      alt: "twitch icon",
      src: "/images/assets/twitch.svg",
      href: "https://twitch.tv/openmultiplayer",
    },
    {
      alt: "twitter icon",
      src: "/images/assets/twitter.svg",
      href: "https://twitter.com/openmultiplayer",
    },
    {
      alt: "youtube icon",
      src: "/images/assets/youtube.svg",
      href: "https://youtube.com/openmultiplayer",
    },
  ];

  return (
    <Box fontFamily="Manrope, sans-serif">
      <Head>
        <title>open.mp | Open Multiplayer</title>
      </Head>

      <main>
        <Box className={heroStyles.hero} py="2em" px="1em">
          {/*
            NOTE: Temporary announcement for new forum.
          */}

          <Announcement />

          {/*
            Remove once feedback and testing is done.
          */}

          {/* <Box
            className={cardStyles.announcement}
            align="center"
            maxW="50em"
            margin="auto"
          >
            Open.mp is under beta testing now, Read this{" "}
            <strong>
              <span style={{ color: "#5944EC" }}>
                <Link>blog post</Link>
              </span>
            </strong>{" "}
            to learn how to help us with testing.
          </Box> */}

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
                A multiplayer mod for Grand Theft Auto: San Andreas that is{" "}
                <span style={{ fontWeight: 800 }}>
                  fully backwards compatible
                </span>{" "}
                with{" "}
                <span style={{ fontWeight: 800 }}>San Andreas Multiplayer</span>
                .
              </Text>
              <HStack spacing="1em" my="1.2em" align="top">
                <Flex flexWrap="wrap" justifyContent="center" gridGap="1em">
                  <DownloadButton />
                  <DocumentationButton />
                </Flex>
              </HStack>
            </VStack>
            <Box display={{ base: "none", md: "block" }} py="2em">
              <Roads width="400" height="400" dark={colorMode === "dark"} />
            </Box>
          </Flex>
          <Center>
            <HStack
              gridGap="1.2em"
              color="#7466D4"
              mt={{ base: "3em", md: "0" }}
            >
              {socials.map((social, index) => (
                <a key={index} href={social.href} target="__blank">
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width="24px"
                    height="24px"
                  />
                </a>
              ))}
            </HStack>
          </Center>
        </Box>
        <Box align="center" my="4em">
          <Text color={useColorModeValue("#281685", "white")} fontSize="md">
            Updates & Features
          </Text>
          <Text fontSize="3xl" fontWeight="900" mt="0">
            What is improved and new?
          </Text>
          <VStack spacing="6em" my="3em" px="1em">
            {features.map((feature, index) => (
              <Card key={index} {...feature} />
            ))}

            <Box maxW="60em">
              <Heading>Ready to get started?</Heading>
              <HStack spacing="1em" my="1.2em" align="top">
                <Flex flexWrap="wrap" justifyContent="center" gridGap="1em">
                  <Box align="center">
                    <DownloadButton />
                  </Box>
                  <DocumentationButton />
                </Flex>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </main>
    </Box>
  );
};

type Props = {
  content: MarkdownContent;
};

const Page = ({ content }: Props) => (
  <>
    <Home />
  </>
  // <section className="pa0 ma0 center">
  //   <div className="mw8 center">
  //     <Image
  //       src="https://assets.open.mp/assets/images/assets/wordmark-light-mono.png"
  //       alt="The open.mp wordmark"
  //       width={1660}
  //       height={560}
  //       unoptimized={true}
  //     />
  //   </div>

  //   <article className="pa0 ma0">
  //     <div className="center measure pa4">{markdownCSR(content)}</div>
  //   </article>
  // </section>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: { content: await markdownSSR(locale || "en", "index") },
});

export default Page;
