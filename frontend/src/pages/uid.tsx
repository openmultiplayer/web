import { GetStaticPropsContext } from "next";

// Server side
import { markdownSSR } from "src/mdx-helpers/ssr";
import { MarkdownContent } from "src/mdx-helpers/types";

const crypto: Crypto | undefined = self.crypto ?? (self as { msCrypto?: Crypto }).msCrypto; // eslint-disable-line no-restricted-globals

const getRandomBytes: (n: number) => Uint8Array = (crypto ?
  function () { // Browsers
    return function (n: number): Uint8Array {
      var a = new Uint8Array(n);
      for (var i = 0; i < n; i += 65536) {
        crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, 65536)));
      }
      return a;
    };
  } :
  function () { // Node
    return require("crypto").randomBytes as (n: number) => Uint8Array;
  }
)();

const UID = () => {
  const rnd = getRandomBytes(8);
  return `0x${rnd[0].toString(16).toUpperCase()}${rnd[1].toString(16).toUpperCase()}${rnd[2].toString(16).toUpperCase()}${rnd[3].toString(16).toUpperCase()}${rnd[4].toString(16).toUpperCase()}${rnd[5].toString(16).toUpperCase()}${rnd[6].toString(16).toUpperCase()}${rnd[7].toString(16).toUpperCase()}`;
};

type Props = {
  content: MarkdownContent;
};

const Page = ({ content }: Props) => <UID />;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: { content: await markdownSSR(locale || "en", "index") },
});

export default Page;
