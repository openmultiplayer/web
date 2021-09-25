import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import { chakra } from "@chakra-ui/system";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { FC } from "react";
import { APIError } from "src/types/_generated_Error";
import { All } from "src/types/_generated_Server";
import useSWR from "swr";

const API_PATH = (ip: string) => `/server/${ip}`;

const API_SERVER = (ip: string) => `https://api.open.mp${API_PATH(ip)}`;

const getServer = async (ip: string) => {
  const r: Response = await fetch(API_SERVER(ip));
  const servers: All = await r.json();
  return servers;
};

type Props = {
  ip: string;
  initialData?: All;
};

const Item = ({ k, v }: { k: string; v: string }) => {
  return (
    <>
      <dt className="f6 pt2 b">{k}</dt>
      <dd className="ml0 lh-copy black-50">{v}</dd>
    </>
  );
};

type ServerProp = { server: All };

const Rules = ({ server }: ServerProp) => {
  if (!server.ru) {
    return null;
  }
  return (
    <>
      <h4>Game Rules:</h4>
      <dl className="lh-title ph4 mt0">
        {Object.keys(server.ru).map((v) => (
          <Item key={v} k={v} v={server.ru[v]} />
        ))}
      </dl>
    </>
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
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Stack spacing="4">
          <Flex justifyContent="space-between" alignItems="center">
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
              <Text color="teal">This server has no description</Text>
            )}
          </Box>

          <Stack
            spacing="4"
            direction={["column", "row"]}
            justifyContent="space-around"
          >
            <Flex direction="column" justify="space-around" align="center">
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
            </Flex>

            <Box>
              {data.ru ? (
                <Table variant="striped" width="full" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Rule</Th>
                      <Th>Value</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Object.keys(data.ru).map((v) => (
                      <Tr key={v}>
                        <Td>{v}</Td>
                        <Td>{data.ru[v]}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ) : null}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  </article>
);

const Content = ({ ip, initialData }: Props) => {
  const { data, error } = useSWR<All, TypeError>(ip, getServer, {
    initialData,
  });
  if (error) {
    return <Error error={error} />;
  }
  if (!data) {
    return (
      <Flex justify="center" width="full">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return <Info data={data} />;
};

const Error: FC<{ error: APIError }> = ({ error }) => (
  <p>
    Unfortunately there was an error while getting the server list! The error
    message is below: <pre>{error.message}</pre>
  </p>
);
const Page: NextPage<Props> = ({ ip, initialData }) => {
  return (
    <>
      <section className="center mv3">
        <Stack direction={["column"]} spacing="4">
          <NextLink href="/servers">
            <Link className="black-80 hover-blue">
              <Button leftIcon={<ArrowBackIcon />} variant="outline">
                Back
              </Button>
            </Link>
          </NextLink>

          <Content ip={ip} initialData={initialData} />
        </Stack>
      </section>

      <style jsx>{`
        section {
          max-width: 50em;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const ip: string = context.params?.ip as string;
  return {
    props: {
      ip: ip,
      initialData: await getServer(ip),
    },
  };
};

export default Page;
