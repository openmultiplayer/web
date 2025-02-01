import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";

const Announcement: FC = () => {
  return (
    <Box maxWidth="48em" mx="auto" px="0.5em">
      <Box
        padding="0.8em"
        borderColor={useColorModeValue("blackAlpha.100", "gray.700")}
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="0.5em"
        backgroundColor={useColorModeValue("blue.50", "gray.800")}
      >
        <Heading m="0" fontSize="1.5em">
          A new version of open.mp server and launcher is out now!
        </Heading>

        <Text>
          Version 1.4.0.2779 of open.mp server is finally out, there has been a lot
          of fixes, bunch of performance improvements, and a few additions!{" "}
          <a href="https://www.open.mp/docs/changelog">
            Check out the changelog.
          </a>{" "}
          <br />
          Our launcher also received a new update and more features!{" "}
          <a href="https://github.com/openmultiplayer/launcher/releases/latest">
            Check out the changelog and download it from here.
          </a>{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Announcement;
