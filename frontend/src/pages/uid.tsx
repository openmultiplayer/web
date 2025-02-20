import Layout from "@theme/Layout";
import { ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "../components/Toast";

const Page = (): ReactNode => {
  const [uid, setUID] = useState<string>("");

  useEffect(() => {
    const rnd = randomBytes(8);

    function toHex(number: number): string {
      return ("00" + number.toString(16)).slice(-2).toUpperCase();
    }

    const serialised = `0x${toHex(rnd[0])}${toHex(rnd[1])}${toHex(
      rnd[2]
    )}${toHex(rnd[3])}${toHex(rnd[4])}${toHex(rnd[5])}${toHex(rnd[6])}${toHex(
      rnd[7]
    )}`;

    setUID(serialised);
  }, []);

  return (
    <div>
      <Layout
        title={`UID Generator`}
        description="Generate UID to use for IComponent or IExtension unique identifiers"
      >
        <section className="servers-container">
          <h1>Component UID Generator</h1>
          Copy the <code>PROVIDE_UID</code> macro below in to your new
          component, in place of the default UID provider macro. Each component
          should have a unique UID, hence the <em>U</em> in <em>UID</em> (
          <em>Unique IDentifier</em>). The default <code>PROVIDE_UID</code> is
          invalid and will not compile, to avoid duplicates when creating new
          components from templates.
          <br />
          <br />
          Find this placeholder:
          <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
          <br />
          And replace it with:
          <pre>{`PROVIDE_UID(${uid});`}</pre>
          <br />
          If you are modifying an existing component still do remember to
          replace the existing UID, which will be a valid value not a
          placeholder.
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;

function randomBytes(size: number): Uint8Array {
  // Input validation
  if (!Number.isInteger(size) || size < 0) {
    throw new TypeError("Size must be a non-negative integer");
  }

  // Use Web Crypto API which provides cryptographically secure random values
  if (typeof window !== "undefined" && window.crypto) {
    // Browser environment
    const buffer = new Uint8Array(size);
    window.crypto.getRandomValues(buffer);
    return buffer;
  } else if (typeof global !== "undefined" && global.crypto) {
    // Node.js environment with Web Crypto API
    const buffer = new Uint8Array(size);
    global.crypto.getRandomValues(buffer);
    return buffer;
  } else {
    // Fallback for environments without Web Crypto API
    const buffer = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      // Generate random bytes using Math.random()
      // Note: This is NOT cryptographically secure!
      buffer[i] = Math.floor(Math.random() * 256);
    }
    console.warn(
      "Warning: Using non-cryptographically secure random number generation"
    );
    return buffer;
  }
}
