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
        Copy the <code>PROVIDE_UID</code> macro below in to your new component,
        in place of the default UID provider macro.  Each component should have
        a unique UID, hence the <em>U</em> in <em>UID</em> (<em>Unique
        IDentifier</em>).  The default <code>PROVIDE_UID</code> is invalid and
        will not compile, to avoid duplicates when creating new components from
        templates.
        <br />
        <br />
        Find this placeholder:
        <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
        <br />
        And replace it with:
        <pre>{`PROVIDE_UID(${serialised});`}</pre>
        <br />
        If you are modifying an existing component still do remember to replace
        the existing UID, which will be a valid value not a placeholder.
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
  const rnd = randomBytes(8);

  function toHex(number: number): string {
    return ('00' + number.toString(16)).slice(-2).toUpperCase();
  }

  const serialised = `0x${toHex(rnd[0])}${toHex(rnd[1])
    }${toHex(rnd[2])}${toHex(rnd[3])}${toHex(rnd[4])
    }${toHex(rnd[5])}${toHex(rnd[6])}${toHex(rnd[7])}`;

  return {
    props: {
      serialised,
    },
  };
};

export default Page;
