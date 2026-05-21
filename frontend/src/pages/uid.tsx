import { default as Translate, translate } from "@docusaurus/Translate";
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
        title={translate({
          id: "uid.page.title",
          message: "UID Generator",
          description: "UID generator page title",
        })}
        description={translate({
          id: "uid.page.description",
          message:
            "Generate UID to use for IComponent or IExtension unique identifiers",
          description: "UID generator page description",
        })}
      >
        <section className="uid-container">
          <h1>
            <Translate
              id="uid.heading"
              description="UID generator page heading"
            >
              Component UID Generator
            </Translate>
          </h1>
          <Translate
            id="uid.instructions.intro"
            description="UID generator instructions explaining how to use the generated macro"
            values={{
              provideUid: <code>PROVIDE_UID</code>,
              uniqueLetter: <em>U</em>,
              uidInitials: <em>UID</em>,
              uniqueIdentifier: <em>Unique IDentifier</em>,
            }}
          >
            {
              "Copy the {provideUid} macro below in to your new component, in place of the default UID provider macro. Each component should have a unique UID, hence the {uniqueLetter} in {uidInitials} ({uniqueIdentifier}). The default {provideUid} is invalid and will not compile, to avoid duplicates when creating new components from templates."
            }
          </Translate>
          <br />
          <br />
          <Translate
            id="uid.instructions.findPlaceholder"
            description="UID generator instruction before the placeholder macro"
          >
            Find this placeholder:
          </Translate>
          <pre>PROVIDE_UID(/* UID GOES HERE */);</pre>
          <br />
          <Translate
            id="uid.instructions.replaceWith"
            description="UID generator instruction before the generated replacement macro"
          >
            And replace it with:
          </Translate>
          <pre>{`PROVIDE_UID(${uid});`}</pre>
          <br />
          <Translate
            id="uid.instructions.existingComponent"
            description="UID generator note for modifying an existing component"
          >
            If you are modifying an existing component still do remember to
            replace the existing UID, which will be a valid value not a
            placeholder.
          </Translate>
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
