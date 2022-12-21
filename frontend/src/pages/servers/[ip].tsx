import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import { chakra } from "@chakra-ui/system";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { formatDistance } from "date-fns";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FC } from "react";
import ErrorBanner from "src/components/ErrorBanner";
import BackLink from "src/components/forum/BackLink";
import Measured from "src/components/generic/Measured";
import LoadingBanner from "src/components/LoadingBanner";
import { API_ADDRESS } from "src/config";
import { All } from "src/types/_generated_Server";
import useSWR from "swr";

const API_PATH = (ip: string) => `/server/${ip}`;

const API_SERVER = (ip: string) => `${API_ADDRESS}${API_PATH(ip)}`;

const getServer = async (ip: string) => {
  const r: Response = await fetch(API_SERVER(ip));
  const servers: All = await r.json();
  return servers;
};

type Props = {
  ip: string;
  initialData?: All;
};

type ServerLinkProps = { address: string };
const ServerLink: FC<ServerLinkProps> = ({ address }) => {
  return (
    <Link href={address} isExternal _hover={{ textDecor: "none" }}>
      <Button
        mt={"1em"}
        bgColor="#8477B7"
        color="white"
        border="solid 3px transparent"
        _hover={{ bgColor: "#AEA0E1" }}
        _active={{ bgColor: "#AEA0E1" }}
        _focus={{ border: "solid 3px #BEB5DF" }}
        rightIcon={<ArrowForwardIcon />}
      >
        Quick Join
      </Button>
    </Link>
  );
};

const Info = ({ data }: { data: All }) => (
  <article>
    <NextSeo
      title={`${data.core.hn} | SA-MP Servers Index`}
      canonical={`https://www.open.mp/servers/${data.core.ip}`}
      description={`${data.core.pc}/${data.core.pm} players currently online at ${data.core.hn} (${data.core.gm}). View more information on open.mp servers list.`}
    />

    <Flex alignItems="center" justifyContent="center">
      <Box
        width="50em"
        px={8}
        py={8}
        rounded="lg"
        shadow="base"
        bg={useColorModeValue("white", "gray.800")}
        border="1px solid #8477B7"
      >
        <Stack spacing="4">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            wrap="wrap"
            gridGap="0.5em"
          >
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {data.core.gm}
            </chakra.span>
            <Link
              href={`samp://${data.dm ?? data.ip}`}
              isExternal
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: "gray.500" }}
            >
              {data.dm ?? data.ip}
            </Link>
          </Flex>

          <Box mt={2}>
            <Link
              fontSize="2xl"
              color={useColorModeValue("gray.700", "white")}
              fontWeight="700"
              _hover={{
                color: useColorModeValue("gray.600", "gray.200"),
                textDecor: "underline",
              }}
            >
              {data.core.hn}
            </Link>
          </Box>

          <Box>
            {data.description ? (
              <Text>{data.description}</Text>
            ) : (
              <Text color="#9083D2">This server has no description</Text>
            )}
          </Box>

          <Stack
            spacing="4"
            direction={["column", "row"]}
            justifyContent="space-between"
            alignItems="start"
          >
            <Flex direction="column" justify="space-around" align="start">
              <Stat>
                <StatLabel>Players Online</StatLabel>
                <StatNumber>
                  {data.core.pc}/{data.core.pm}
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Mod Version</StatLabel>
                <StatNumber>{data.core.vn}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Language</StatLabel>
                <StatNumber>{data.core.la}</StatNumber>
              </Stat>
              <ServerLink address={`samp://${data.dm ?? data.ip}`} />
            </Flex>

            <Box>
              {data.ru !== undefined ? (
                <Table variant="striped" width="full" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Rule</Th>
                      <Th>Value</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Object.keys(data.ru).map((v: string) => (
                      <Tr key={v}>
                        <Td>{v}</Td>
                        <Td>{(data.ru as any)[v]}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ) : null}
            </Box>
          </Stack>
          <Divider style={{ marginTop: "1.2em" }} />
          <Flex justifyContent="start" m="0">
            <Text color="#9083D2" m="0">
              <time>
                {`Last updated ${formatDistance(
                  new Date(data.lastUpdated),
                  Date.now()
                )} ago`}
              </time>
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  </article>
);

const Content = ({ ip, initialData }: Props) => {
  const { data, error } = useSWR<All, TypeError>(ip, getServer, {
    fallbackData: initialData,
  });
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return <Info data={data} />;
};

const Page: NextPage<Props> = () => {
  const router = useRouter();
  const ip = router.query["ip"] as string | undefined;
  if (!ip) {
    return <LoadingBanner />;
  }
  return (
    <Measured>
      <section className="center mv3">
        <Stack direction={["column"]} spacing="4">
          <BackLink to="/servers" />

          <Content ip={ip} />
        </Stack>
      </section>

      <style jsx>{`
        section {
          max-width: 50em;
        }
      `}</style>
    </Measured>
  );
};

export default Page;
