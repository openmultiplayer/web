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
      ip: "193.203.39.36:7777",
      hn: "ruby.nephrite.ro - battlepass season 10",
    },
    {
      ip: "82.65.202.73:7777",
      hn: "The Matrix™ Stunting© - Races and Minigames!",
    },
    {
      ip: "51.89.19.31:7777",
      hn: "Skill Arena | SA:RP [Dupli Respekti, 3x za igrace <level 20]"
    },
    {
      ip: "193.203.39.46:7777",
      hn: "B-HOOD RPG | BROTHERHOOD RPG"
    },
    {
      ip: "15.235.160.99:7777",
      hn: "open.mp | City of Manila Roleplay"
    },
    {
      ip: "146.59.35.252:7777",
      hn: "Macedonia RolePlay | www.macedonia-rp.com"
    },
    {
      ip: "37.187.77.206:7777",
      hn: "Los Santos Roleplay/Cops/Robbers [0.3.7]",
    },
    {
      ip: "51.178.185.229:7777",
      hn: "DG Freeroam | beckzy's RPG [0.3.7 | 0.3.DL] (eLg)"
    },
    {
      ip: "37.230.228.164:7777",
      hn: "GHW Project | Autumn Festival Event"
    },
    {
      ip: "51.38.115.171:7777",
      hn: "City of Angels Roleplay | [0.3.DL]"
    },
    {
      ip: "152.70.186.35:7777",
      hn: "[HUN/ENG] Welcome to San Andreas",
    },
    {
      ip: "45.67.156.96:7777",
      hn: "[HUN] NORTH RPG [PC/ANDROID]",
    },
    {
      ip: "15.235.197.147:7777",
      hn: "PSA-RP ~ New Update [OMP/0.3 DL]",
    },
    {
      ip: "51.222.11.204:7777",
      hn: "SkR SA-MP Freeroam/Roleplay[open.mp]",
    },
    {
      ip: "159.65.158.139:7777",
      hn: "Mallu Gamers Community Roleplay"
    },
    {
      ip: "51.222.12.92:7777",
      hn: "[R7] Revela7ion RP",
    },
    {
      ip: "138.3.241.127:7777",
      hn: "rpg.game-time.lol (beta) || open.mp",
    },
  ];

  return (
    <Box as="section" maxWidth="50em" margin="auto" padding="1em 2em">
      <NextSeo
        title="SA-MP Servers Index"
        description="open.mp partners and beta testers"
      />

      <Heading mb={"1em"}>Partners (BETA TESTERS)</Heading>

      <Box py={4}>
        <p>
          Servers helping us in beta testing by running open.mp and reporting bugs and issues are listed here.
          You can do the same by running your server using open.mp and help us with finding bugs and issues; Then tell us about your servers on <a href="https://discord.gg/samp">our discord</a> so we can list them here.
        </p>
        <p>Those who are contributing to our community will have permanent perks in future when we are releasing for public use and when our server listing is ready.</p>
        <p><b>Note: Partners are not paid listed servers, only available to those helping us with beta testing open.mp</b></p>
      </Box>

      <List data={data} />
    </Box>
  );
};

export default Page;
