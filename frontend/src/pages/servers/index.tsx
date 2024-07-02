import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Fuse from "fuse.js";
import { filter, flow, map, reverse, sortBy, sum } from "lodash/fp";
import { NextSeo } from "next-seo";
import NProgress from "nprogress";
import { FormEvent, useState } from "react";
import { toast } from "react-nextjs-toast";
import ErrorBanner from "src/components/ErrorBanner";
import { CardList } from "src/components/generic/CardList";
import ServerRow from "src/components/listing/ServerRow";
import LoadingBanner from "src/components/LoadingBanner";
import { API_ADDRESS } from "src/config";
import { All, Essential } from "src/types/_generated_Server";
import useSWR from "swr";

const translateText = require('src/components/translates/Translate');
import { useRouter } from 'next/router';

const API_SERVERS = `${API_ADDRESS}/servers/`;

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

type SortBy = "relevance" | "pc";

type Query = {
  search?: string;
  showEmpty: boolean;
  showPartnersOnly: boolean;
  showOmpOnly: boolean;
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
    filter((s: Essential) => (q.showPartnersOnly ? s.pr === true : true)),
    filter((s: Essential) => (q.showOmpOnly ? s.omp === true : true)),
    q.sort != "relevance" ? sortBy(q.sort) : sortBy(""),
    reverse,
    map((s: Essential) => <ServerRow key={s.ip} server={s} />)
  )(items);
};

const Stats = ({ stats: { players, servers }, locale }: { stats: Stats, locale: string }) => {
  return (
    <Center>
      <Text my={4}>
        {translateText(locale, "Servers", "servers-stats", { averagePlayers: (players / servers).toFixed(1), serverCount: servers, totalPlayers: players })}
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
      translateText(locale, 'Servers', 'server-sumbitted', { serverCodeHn: server.core.hn }),
      {
        title: translateText(locale, 'Servers', 'Server Submitted!')
      }
    );

    } else {
      const error = (await response.json()) as { error: string };
      toast.notify(
        translateText(locale, 'Servers', 'server-submissionfail', { responseStatusText: translateText(locale, 'Servers', response.statusText), responseError: translateText(locale, 'Servers', error?.error) }),
        {
          title: translateText(locale, 'Servers', 'Submission failed!'),
          type: "error",
        }
      );
    }
    NProgress.done();
    
  };

  const router = useRouter();
  const locale = router.locale || 'en';

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
          placeholder={translateText(locale, "Servers", "IP/Domain")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="blue" mr={3} type="submit">
        {translateText(locale, "Servers", "Add")}
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
  const [showEmpty, setShowEmpty] = useState(true);
  const [showPartnersOnly, setShowPartnersOnly] = useState(false);
  const [showOmpOnly, setShowOmpOnly] = useState(false);
  const [sort, setSort] = useState("relevance");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const locale = router.locale || 'en';

  return (
    <>
      <form action="">
        <Flex gridGap={2} flexDir={{ base: "column", md: "row" }}>
          <Select
            flexShrink={2}
            placeholder={translateText(locale, "Servers", "Sort by")}
            name="sortBy"
            id="sortBy"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevance">{translateText(locale, "Servers", "Relevance")}</option>
            <option value="pc">{translateText(locale, "Servers", "Players")}</option>

          </Select>

          <Input
            flexGrow={2}
            type="text"
            placeholder={translateText(locale, "Servers", "Search by IP or Name")}
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
            {translateText(locale, "Servers", "Add server")}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent top={10}>
              <ModalHeader>{translateText(locale, "Servers", "Add server")}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>{translateText(locale, "Servers", "IP or Domain")}</FormLabel>
                  <AddServer
                    onAdd={(server: All) => {
                      onAdd(server);
                      onClose();
                    }}
                  />
                 <FormHelperText 
                 dangerouslySetInnerHTML={{ __html: translateText(locale, "Servers", "IP must be in format <strong>ip:port</strong>") }}/>
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
        <Flex marginTop={2} gridGap={2} flexDir={{ base: "column", md: "row" }}>
          <Checkbox
            isChecked={showEmpty}
            onChange={(e) => setShowEmpty(e.target.checked)}
          >
            {translateText(locale, "Servers", "Show empty servers")}
          </Checkbox>
          <Checkbox
            isChecked={showOmpOnly}
            onChange={(e) => setShowOmpOnly(e.target.checked)}
          >
            {translateText(locale, "Servers", "Show only open.mp servers")}
          </Checkbox>
          <Checkbox
            isChecked={showPartnersOnly}
            onChange={(e) => setShowPartnersOnly(e.target.checked)}
          >
            {translateText(locale, "Servers", "Show only partners")}
          </Checkbox>
        </Flex>
      </form>
      <Stats stats={getStats(data)} locale={locale} />
      

      <CardList>
        {dataToList(data, {
          search,
          showEmpty,
          showPartnersOnly,
          showOmpOnly,
          sort: sort as SortBy,
        })}
      </CardList>
    </>
  );
};

const Page = () => {

  const router = useRouter();
  const locale = router.locale || 'en';
  
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

      <Heading mb={"1em"}>{translateText(locale, "Servers", "Servers")}</Heading>

      <List
        data={data}
        onAdd={(server: All) => mutate([...data!, server.core], false)}
      />
    </Box>
  );
};

export default Page;
