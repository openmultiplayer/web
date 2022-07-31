import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import { map } from "lodash/fp";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { FC } from "react";
import { CardList } from "src/components/generic/CardList";
import { z } from "zod";

export const ServerSchema = z.object({
  ip: z.string(),
  hn: z.string(),
});
export type Server = z.infer<typeof ServerSchema>;

type Props = {
  initialData?: Array<Server>;
  errorMessage?: string;
};

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

type RowProps = { server: Server };
const Row: FC<RowProps & ChakraProps> = ({ server, sx }) => {
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
            <CopyBadge text={server.ip} />
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

const dataToList = (items: Server[]) => {
  return map((s: Server) => <Row key={s.ip} server={s} />)(items);
};

const List = ({ data }: { data: Array<Server> }) => {
  return <CardList>{dataToList(data)}</CardList>;
};

const Page = ({ initialData, errorMessage }: Props) => {
  const data: Server[] = [
    {
      //
      ip: "82.65.202.73:7777",
      hn: "The Matrix™ Stunting© - Races and Minigames!",
    },
  ];

  return (
    <Box as="section" maxWidth="50em" margin="auto" padding="1em 2em">
      <NextSeo
        title="SA-MP Servers Index"
        description="Live indexing and data for all SA-MP servers."
      />

      <Heading mb={"1em"}>Servers</Heading>

      <Box py={4}>
        <p>This is the partnership page.</p>
      </Box>

      <List data={data} />
    </Box>
  );
};

export default Page;
