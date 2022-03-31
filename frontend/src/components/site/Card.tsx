import { Box, HStack, Stack, VStack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
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
      px={{ base: "1em", md: "2em" }}
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
          <VStack align="left" spacing="0.2em">
            <Text fontWeight="700" fontSize="xl">
              {heading}
            </Text>
            <Text color="#505050">{bodyText}</Text>
          </VStack>
          <HStack alignSelf={{ base: "center", md: "start" }}>
            <Link href="/" passHref>
              <a
                href={buttonLink}
                style={{
                  color: "rgba(40, 22, 133, 1)",
                  fontSize: "md",
                  fontWeight: 800,
                }}
              >
                {buttonText}
                <ExternalLinkIcon w={4} h={4} />
              </a>
            </Link>
          </HStack>
        </Stack>
        <Box>
          <Image
            src={img}
            alt={imgAlt}
            width="190"
            height="180"
            quality="100"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Card;
