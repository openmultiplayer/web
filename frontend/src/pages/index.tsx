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
  VStack
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
import React from "react";
import Roads from "src/components/icons/Roads";
import heroStyles from "../styles/Hero.module.css";

const DownloadButton = (props: { link: string; title: string; tooltip: string}) => {
  return (
    <Link href={props.link} _hover={{ textDecoration: "none" }} isExternal>
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
        title={props.tooltip}
      >
      {props.title}
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
      heading: "Fully backwards compatible with existing scripts and clients",
      bodyText:
        "Got an old AMX lying about?  Load it up on the open.mp server straight out the box and join you friends playing on the SA:MP client.  Then when you want to enhance your code try our...",
      buttonLink: "/docs",
      buttonText: "Getting Started",
      img: "/images/assets/f1.png",
      imgAlt: "open.mp logo",
    },
    {
      heading: "New and improved scripting system",
      bodyText:
        "We've stuck with pawn, but with a new compiler engineered to make your code more robust, and more functions to manipulate the server and client.  If that's still not enough there's an...",
      buttonLink:
        "https://github.com/openmultiplayer/omp-stdlib/#openmp-includes",
      buttonText: "Learn about the improvements",
      img: "/images/assets/f5.png",
      imgAlt: "pawn logo",
    },
    {
      heading: "Extensible C++ API",
      bodyText:
        "Get access to all the server features available in pawn, plus the universe of C++ libraries and frameworks.  Once you've mastered this why not help improve the server via our...",
      buttonLink: "/docs",
      buttonText: "Getting Started",
      img: "/images/assets/f4.png",
      imgAlt: "C++ logo",
    },
    {
      heading: "Community driven development",
      bodyText:
        "The server is fully open source, and we welcome all contributions big or small.  Help write the next version, or just post about any problems you find; despite our attempts to have...",
      buttonLink: "https://github.com/openmultiplayer/open.mp",
      buttonText: "Visit the GitHub repo",
      img: "/images/assets/f2.png",
      imgAlt: "Github stats illustration",
    },
    {
      heading: "Age old SAMP bugs fixed",
      bodyText:
        "Many SA:MP bugs, well known and obscure, have been fixed.  No more hacky work-arounds; no more community bug-fix projects; you have all the proper tools in your hands now.",
      buttonLink: "/blog",
      buttonText: "Read the blog post",
      img: "/images/assets/f3.png",
      imgAlt: "pawn code screen",
    },
  ];

  const socials = [
    {
      alt: "discord icon",
      src: "/images/assets/discord-icon.svg",
      href: "https://discord.com/invite/samp",
      size: 45,
    },
    {
      alt: "facebook icon",
      src: "/images/assets/facebook.svg",
      href: "https://www.facebook.com/openmultiplayer",
      size: 33,
    },
    {
      alt: "instagram icon",
      src: "/images/assets/instagram.svg",
      href: "https://instagram.com/openmultiplayer/",
      size: 33,
    },
    {
      alt: "twitch icon",
      src: "/images/assets/twitch.svg",
      href: "https://twitch.tv/openmultiplayer",
      size: 29,
    },
    {
      alt: "x icon",
      src: "/images/assets/x.svg",
      href: "https://x.com/openmultiplayer",
      size: 29,
      background: false,
    },
    {
      alt: "youtube icon",
      src: "/images/assets/youtube.svg",
      href: "https://youtube.com/openmultiplayer",
      size: 35,
    },
  ];

  return (
    <Box fontFamily="Manrope, sans-serif">
      <Head>
        <title>open.mp | Open Multiplayer</title>
      </Head>

      <main>
        <Box className={heroStyles.hero} py="2em" px="1em">
          <Announcement />

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
                  <DownloadButton
                    title={"Download open.mp (server)"}
                    tooltip="open.mp is released!"
                    link={"https://github.com/openmultiplayer/open.mp/releases"}
                  />
                  <DownloadButton
                    title={"Download SA-MP client"}
                    tooltip="Download SA-MP client"
                    link={"https://sa-mp.mp/downloads/"}
                  />
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
              gridGap="0.5em"
              color="#7466D4"
              mt={{ base: "3em", md: "0" }}
              style={{ justifyContent: "space-around" }}
            >
              {socials.map((social, index) => {
                const iconSize = `${social.size}px`;
                const style: React.CSSProperties = {
                  display: "flex",
                  justifyContent: "center",
                  ...(social.background && {
                    backgroundColor: "#7466d4",
                    width: `${social.size + 12}px`,
                    height: `${social.size + 12}px`,
                    borderRadius: 5,
                  }),
                };

                return (
                  <Box
                    boxSize={10}
                    alignItems="center"
                    justifyContent={"center"}
                    display="flex"
                  >
                    <a
                      key={index}
                      href={social.href}
                      style={style}
                      target="__blank"
                    >
                      <Image
                        src={social.src}
                        alt={social.alt}
                        width={iconSize}
                        height={iconSize}
                      />
                    </a>
                  </Box>
                );
              })}
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
                    <DownloadButton
                      title={"Download open.mp (server)"}
                      tooltip="open.mp is released!"
                      link={
                        "https://github.com/openmultiplayer/open.mp/releases"
                      }
                    />
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
