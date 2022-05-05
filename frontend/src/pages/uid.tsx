import { Box } from "@chakra-ui/react";
import { randomBytes } from "crypto";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { VFC } from "react";

const UID: VFC<Props> = ({ serialised }) => {
  return (
    <Box as="section" maxWidth="50em" margin="auto" padding="1em 2em">
      <NextSeo title="UID" />

      <main>
        <h1>Component UID Generator</h1>
        Copy the UID provider macro in to your component in place of the default
        provider, which is not valid to avoid duplicates. Each component should
        have a unique UID, hence the <em>U</em> in <em>UID</em> (
        <em>Unique IDentifier</em>).
        <br />
        Find this placeholder:
        <br />
        <pre>{`PROVIDE_UID(${serialised});`}</pre>
        And replace it with:
        <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
      </main>
    </Box>
  );
};

type Props = {
  serialised: string;
};

const Page: NextPage<Props> = ({ serialised }: Props) => (
  <UID serialised={serialised} />
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const a = new Uint8Array(8);
  // for (let i = 0; i < 8; i += 65536) {
  //   crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, 65536)));
  // }

  const rnd = randomBytes(8);

  const serialised = `0x${rnd[0].toString(16).toUpperCase()}${rnd[1]
    .toString(16)
    .toUpperCase()}${rnd[2].toString(16).toUpperCase()}${rnd[3]
    .toString(16)
    .toUpperCase()}${rnd[4].toString(16).toUpperCase()}${rnd[5]
    .toString(16)
    .toUpperCase()}${rnd[6].toString(16).toUpperCase()}${rnd[7]
    .toString(16)
    .toUpperCase()}`;

  return {
    props: {
      serialised,
    },
  };
};

export default Page;
