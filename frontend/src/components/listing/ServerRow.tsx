import {
  Box,
  Button, Flex, Heading,
  HStack, Link, Text,
  useClipboard, VStack
} from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import NextLink from "next/link";
import { FC, useCallback } from "react";
import { useIsAdmin } from "src/auth/hooks";
import { useDeleteServer } from "src/components/listing/hooks";
import { Essential } from "src/types/_generated_Server";

type CopyBadgeProps = { text: string };
const CopyBadge: FC<CopyBadgeProps> = ({ text }) => {
  const { onCopy, hasCopied } = useClipboard(text);
  return (
    <HStack>
      <Text fontSize="xl" fontWeight="bold" marginTop="0">
        {text}
      </Text>
      <Button
        size="xs"
        onClick={onCopy}
        style={hasCopied ? { backgroundColor: "#81C784", color: "white" } : {}}
      >
        {hasCopied ? "COPIED" : "COPY"}
      </Button>
    </HStack>
  );
};

type ServerRowProps = { server: Essential };
const ServerRow: FC<ServerRowProps & ChakraProps> = ({ server, sx }) => {
  const deleteServer = useDeleteServer();
  const onDelete = useCallback(
    () => deleteServer(server.ip),
    [deleteServer, server]
  );
  const admin = useIsAdmin();

  return (
    <Box sx={sx}>
      <Box>
        <NextLink href={"/servers/" + server.ip} passHref>
          <Link>
            <Heading
              fontSize={"xl"}
              style={{ marginTop: "0" }}
              _hover={{ textDecor: "underline", cursor: "pointer" }}
            >
              {server.hn}
            </Heading>
          </Link>
        </NextLink>

        <Flex
          justifyContent="space-between"
          alignItems="start"
          my="0.4em"
          flexWrap="wrap"
        >
          <VStack align="left">
            <Text style={{ marginTop: "0" }}>{server.gm}</Text>
            {/* <Text style={{ marginTop: "0" }}>{"website"}</Text> */}
            <CopyBadge text={server.ip} />
          </VStack>
          <VStack align="end">
            <Flex
              flexDirection="row"
              alignItems="center"
              gridGap=".5em"
              flexWrap="wrap"
            >
              <Text
                fontWeight={"bold"}
                fontSize="2xl"
                style={{ marginTop: "0" }}
              >
                {server.pc}/{server.pm}
              </Text>
              <Text style={{ marginTop: "0" }}>players</Text>
            </Flex>

            <Box display={admin ? "block" : "none"}>
              <Button onClick={onDelete}>Delete</Button>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServerRow;
