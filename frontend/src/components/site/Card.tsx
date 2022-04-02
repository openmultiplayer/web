import { Box, HStack, Stack, VStack, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";
import cardStyles from "../../styles/Card.module.css";
import React, { VFC } from "react";

type CardProps = {
  heading: string;
  bodyText: string;
  buttonLink: string;
  buttonText: string;
  img: string;
  imgAlt: string;
};
const Card: VFC<CardProps> = ({
  heading,
  bodyText,
  buttonLink,
  buttonText,
  img,
  imgAlt,
}) => {
  return (
    <Box
      maxW="60em"
      className={cardStyles.card}
      px={{ base: "1em", md: "4em" }}
      py={{ base: "3em", md: "4em" }}
    >
      <HStack
        spacing="2em"
        justify={{ base: "center", md: "space-between" }}
        wrap="wrap-reverse"
        gridGap={{ base: "1em", md: "6em" }}
      >
        <Stack
          maxW={{ base: "34em", md: "20em" }}
          textAlign={{ base: "center", md: "left" }}
          align="left"
          spacing="1em"
          mt={{ base: "1em", md: "0" }}
        >
          <VStack align="left" spacing="0.6em">
            <Text fontWeight="700" fontSize="xl">
              {heading}
            </Text>
            <Text color="#505050">{bodyText}</Text>
          </VStack>

          <NextLink href={buttonLink} passHref>
            <HStack
              align="center"
              spacing="0.2em"
              justify={{ base: "center", md: "left" }}
            >
              <Link
                href={buttonLink}
                style={{
                  color: "rgba(40, 22, 133, 1)",
                  fontSize: "md",
                  fontWeight: 800,
                }}
              >
                {buttonText}
              </Link>
              <ExternalLinkIcon w={4} h={4} color="rgba(40, 22, 133, 1)" />
            </HStack>
          </NextLink>
        </Stack>
        <Box>
          <Image
            src={img}
            alt={imgAlt}
            width="180"
            height="160"
            quality="100"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Card;
