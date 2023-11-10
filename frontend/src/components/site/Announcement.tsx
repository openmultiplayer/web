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
          open.mp launcher is out now and open source!
        </Heading>

        <Text>
          open.mp released its own launcher to browse servers using a reliable
          internet list and join your favorite servers!{" "}
          <a href="https://github.com/openmultiplayer/launcher">
            check out our github repository
          </a>{" "}
          <br />
          <a href="https://github.com/openmultiplayer/launcher/releases/latest">
            Download it from here.
          </a>{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default Announcement;
