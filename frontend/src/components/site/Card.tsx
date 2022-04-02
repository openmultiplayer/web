import { Box, HStack, Stack, VStack, Text, useColorModeValue, Link } from "@chakra-ui/react";
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
      bgGradient={useColorModeValue('linear(to-r, #f7f7f7, rgba(247, 247, 247, 0))', 'linear(to-r, gray.800, gray.700)')}
      border={useColorModeValue('1px solid rgba(134, 119, 206, 0.185)', '1px solid rgba(134, 119, 206, 0.15)')}
      boxShadow={useColorModeValue('0px 0px 40px 8px rgba(134, 119, 206, 0.05)', '')}
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
            <Text color={useColorModeValue('#505050', 'gray.500')}>{bodyText}</Text>
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
                  color: "#9083D2",
                  fontSize: "md",
                  fontWeight: 700,
                }}
              >
                {buttonText}
              </Link>
              <ExternalLinkIcon w={4} h={4} color="#9083D2" />
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
