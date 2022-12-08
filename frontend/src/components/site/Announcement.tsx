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
          open.mp beta!
        </Heading>

        <Text>
          Please check out our{" "}
          <a href="https://github.com/openmultiplayer/server-beta">beta test</a>{" "}
          today!
        </Text>
      </Box>
    </Box>
  );
};

export default Announcement;
