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
import Fuse from "fuse.js";
import { filter, flow, map, reverse, sortBy, sum } from "lodash/fp";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import NProgress from "nprogress";
import { FormEvent, useState } from "react";
import { toast } from "react-nextjs-toast";
import ErrorBanner from "src/components/ErrorBanner";
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

const Row = ({ s }: { s: Essential }) => {
  const { onCopy, hasCopied } = useClipboard(s.ip);

  return (
    <Box
      style={{
        border: "1px solid #8477B7",
        borderRadius: "8px",
        padding: "1em",
        marginBottom: "1em",
      }}
      boxShadow="base"
    >
      <Box>
        <Link href={"/servers/" + s.ip}>
          <Heading
            fontSize={"xl"}
            style={{ marginTop: "0" }}
            _hover={{ textDecor: "underline", cursor: "pointer" }}
          >
            {s.hn}
          </Heading>
        </Link>

        <Flex justifyContent="space-between" alignItems="center" my="0.4em">
          <VStack align="left">
            <Text style={{ marginTop: "0" }}>{s.gm}</Text>
            {/* <Text style={{ marginTop: "0" }}>{"website"}</Text> */}
          </VStack>
          <Flex flexDirection="row" alignItems="center" gridGap=".5em">
            <Text fontWeight={"bold"} fontSize="2xl" style={{ marginTop: "0" }}>
              {s.pc}/{s.pm}
            </Text>
            <Text style={{ marginTop: "0" }}>players</Text>
          </Flex>
        </Flex>
        <HStack>
          <Text fontSize="2xl" fontWeight="bold" marginTop="0">
            {s.ip}
          </Text>
          <Button
            size="xs"
            onClick={onCopy}
            style={
              hasCopied ? { backgroundColor: "#81C784", color: "white" } : {}
            }
          >
            {hasCopied ? "COPIED" : "COPY"}
          </Button>
        </HStack>
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
    map((s: Essential) => <Row key={s.ip} s={s} />)
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
      className="flex items-center justify-center pa0 f7"
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
        <Flex gridGap={2}>
          <Select
            placeholder="Sort by"
            maxW="10em"
            name="sortBy"
            id="sortBy"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="pc">Players</option>
          </Select>

          <Input
            type="text"
            placeholder="Search by IP or Name"
            maxW="30em"
            name="search"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Button
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
                  <AddServer onAdd={onAdd} />
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

      <ul className="list pl0 mt0 center">
        {dataToList(data, {
          search,
          showFull,
          showEmpty,
          sort: sort as SortBy,
        })}
      </ul>
    </>
  );
};

const Page = ({ initialData, errorMessage }: Props) => {
  const { data, error, mutate } = useSWR<Array<Essential>, TypeError>(
    API_SERVERS,
    getServers,
    {
      fallbackData: initialData,
    }
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return (
    <section style={{ maxWidth: "50em", margin: "auto", padding: "1em 2em" }}>
      <NextSeo
        title="SA-MP Servers Index"
        description="Live indexing and data for all SA-MP servers."
      />

      <Heading mb={"1em"}>Servers</Heading>

      <List
        data={data}
        onAdd={(server: All) => mutate([...data!, server.core], false)}
      />
    </section>
  );
};

export const getServerSideProps = async (
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  let servers: Array<Essential>;
  try {
    servers = await getServers();
  } catch (e) {
    return { props: { errorMessage: (e as any)?.message } };
  }
  return {
    props: {
      initialData: servers,
    },
  };
};

export default Page;
