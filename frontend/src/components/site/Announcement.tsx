import { Box, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Anchor from "src/components/generic/Anchor";

const Announcement: FC = () => {
  return (
    <Box maxWidth="48em" mx="auto" px="0.5em">
      <Box
        padding="0.8em"
        borderColor="blackAlpha.100"
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="0.5em"
        backgroundColor="blue.50"
      >
        <Heading m="0" fontSize="1.5em">
          New Forums!
        </Heading>

        <Text>
          Please check out our{" "}
          <Anchor href="/discussion">brand new forums</Anchor> and help test!
        </Text>

        <Text>
          More information is available{" "}
          <Anchor href="/discussion/ckwf1z1o900698rw556q3p9e0-a-post">
            here!
          </Anchor>
        </Text>
      </Box>
    </Box>
  );
};

export default Announcement;
