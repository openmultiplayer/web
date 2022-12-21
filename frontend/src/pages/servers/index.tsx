import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useClipboard,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import Fuse from "fuse.js";
import { filter, flow, map, reverse, sortBy, sum } from "lodash/fp";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import NProgress from "nprogress";
import { FC, FormEvent, useCallback, useState } from "react";
import { toast } from "react-nextjs-toast";
import { useIsAdmin } from "src/auth/hooks";
import ErrorBanner from "src/components/ErrorBanner";
import { CardList } from "src/components/generic/CardList";
import { useDeleteServer } from "src/components/listing/hooks";
import LoadingBanner from "src/components/LoadingBanner";
import { API_ADDRESS } from "src/config";
import { All, Essential } from "src/types/_generated_Server";
import useSWR from "swr";

const API_SERVERS = `${API_ADDRESS}/server/`;

type Props = {
  initialData?: Array<Essential>;
  errorMessage?: string;
};

const getServers = async (): Promise<Array<Essential>> => {
  const r: Response = await fetch(API_SERVERS);
  const servers: Array<Essential> = await r.json();
  return servers;
};

type Stats = {
  players: number;
  servers: number;
};

const getStats = (servers: Array<Essential>): Stats => ({
  players: flow(
    map((s: Essential) => s.pc), // get just the player count (pc)
    sum // sum all player counts
  )(servers),
  servers: servers.length,
});

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

type RowProps = { server: Essential };
const Row: FC<RowProps & ChakraProps> = ({ server, sx }) => {
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

type SortBy = "relevance" | "pc";

type Query = {
  search?: string;
  showFull: boolean;
  showEmpty: boolean;
  sort: SortBy;
};

const dataToList = (data: Essential[], q: Query) => {
  const fuse = new Fuse(data, {
    threshold: 0.2,
    shouldSort: true,
    includeScore: true,
    ignoreLocation: true,
    keys: ["ip", "hn", "gm"],
  });

  const items = q.search
    ? map((r: Fuse.FuseResult<Essential>) => r.item)(fuse.search(q.search))
    : data;

  return flow(
    filter((s: Essential) => (!q.showEmpty ? s.pc > 0 : true)),
    filter((s: Essential) => (!q.showFull ? s.pc !== s.pm : true)),
    q.sort != "relevance" ? sortBy(q.sort) : sortBy(""),
    reverse,
    map((s: Essential) => <Row key={s.ip} server={s} />)
  )(items);
};

const Stats = ({ stats: { players, servers } }: { stats: Stats }) => {
  return (
    <Center>
      <Text my={4}>
        <strong>{players}</strong> players on <strong>{servers}</strong> servers
        with an average of <strong>{(players / servers).toFixed(1)}</strong>{" "}
        players per server.
      </Text>
    </Center>
  );
};

const AddServer = ({ onAdd }: { onAdd: (server: All) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    NProgress.start();
    e.preventDefault();
    const response = await fetch(API_SERVERS, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ip: value }),
    });
    NProgress.inc();
    if (response.status === 200) {
      const server = (await response.json()) as All;
      onAdd(server);
      toast.notify(
        `${server.core.hn} (${server.core.gm}) submitted to the index!`,
        {
          title: "Server Submitted!",
        }
      );
    } else {
      const error = (await response.json()) as { error: string };
      toast.notify(`Status ${response.statusText}: ${error?.error}`, {
        title: "Submission failed!",
        type: "error",
      });
    }
    NProgress.done();
  };

  return (
    <form
      action={API_SERVERS}
      target="_self"
      method="post"
      onSubmit={handleSubmit}
    >
      <Flex gridGap={2} width="100%">
        <Input
          type="text"
          name="address"
          placeholder="IP/Domain"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="blue" mr={3} type="submit">
          Add
        </Button>
      </Flex>
    </form>
  );
};

const List = ({
  data,
  onAdd,
}: {
  data: Array<Essential>;
  onAdd: (server: All) => void;
}) => {
  const [search, setSearch] = useState("");
  const [showFull, setShowFull] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [sort, setSort] = useState("relevance");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <form action="">
        <Flex gridGap={2} flexDir={{ base: "column", md: "row" }}>
          <Select
            flexShrink={2}
            placeholder="Sort by"
            name="sortBy"
            id="sortBy"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="pc">Players</option>
          </Select>

          <Input
            flexGrow={2}
            type="text"
            placeholder="Search by IP or Name"
            name="search"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Button
            flexGrow={1}
            px="3em"
            onClick={onOpen}
            rightIcon={<AddIcon boxSize="0.8em" />}
          >
            Add server
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent top={10}>
              <ModalHeader>Add a server</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>IP or Domain</FormLabel>
                  <AddServer
                    onAdd={(server: All) => {
                      onAdd(server);
                      onClose();
                    }}
                  />
                  <FormHelperText>
                    IP must be in format <strong>ip:port</strong>
                  </FormHelperText>
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </form>
      <Stats stats={getStats(data)} />

      <CardList>
        {dataToList(data, {
          search,
          showFull,
          showEmpty,
          sort: sort as SortBy,
        })}
      </CardList>
    </>
  );
};

const Page = () => {
  const { data, error, mutate } = useSWR<Array<Essential>, TypeError>(
    API_SERVERS,
    getServers
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return (
    <Box as="section" maxWidth="50em" margin="auto" padding="1em 2em">
      <NextSeo
        title="SA-MP Servers Index"
        description="Live indexing and data for all SA-MP servers."
      />

      <Heading mb={"1em"}>Servers</Heading>

      <List
        data={data}
        onAdd={(server: All) => mutate([...data!, server.core], false)}
      />
    </Box>
  );
};

export default Page;
