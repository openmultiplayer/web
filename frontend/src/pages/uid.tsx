import { Box } from "@chakra-ui/react";
import { randomBytes } from "crypto";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { VFC } from "react";

const UID: VFC<Props> = ({ serialized }) => {
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
        <br />
        Find this placeholder:
        <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
        <br />
        And replace it with:
        <pre>{`PROVIDE_UID(${serialized});`}</pre>
      </main>
    </Box>
  );
};

type Props = {
  serialized: string;
};

const Page: NextPage<Props> = ({ serialized }: Props) => (
  <UID serialized={serialized} />
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const rnd = randomBytes(8);

  function toHex(number: number) {
    return ('00' + number.toString(16)).slice(-2).toUpperCase();
  }

  const serialized = `0x${toHex(rnd[0])}${toHex(rnd[1])
    }${toHex(rnd[2])}${toHex(rnd[3])}${toHex(rnd[4])
    }${toHex(rnd[5])}${toHex(rnd[6])}${toHex(rnd[7])}`;

  return {
    props: {
      serialized,
    },
  };
};

export default Page;
