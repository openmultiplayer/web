import { default as Translate, translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { ReactNode, useEffect, useState } from "react";
import { showToast, ToastContainer } from "../components/Toast";

const createUID = (): string => {
  const rnd = randomBytes(8);

  function toHex(number: number): string {
    return ("00" + number.toString(16)).slice(-2).toUpperCase();
  }

  return `0x${toHex(rnd[0])}${toHex(rnd[1])}${toHex(rnd[2])}${toHex(
    rnd[3]
  )}${toHex(rnd[4])}${toHex(rnd[5])}${toHex(rnd[6])}${toHex(rnd[7])}`;
};

const Page = (): ReactNode => {
  const [uid, setUID] = useState<string>("");

  useEffect(() => {
    setUID(createUID());
  }, []);

  const generatedMacro = `PROVIDE_UID(${uid});`;

  const copyUID = () => {
    if (!navigator.clipboard || !uid) {
      return;
    }

    navigator.clipboard.writeText(generatedMacro);
    showToast({
      type: "success",
      title: translate({
        id: "uid.toast.copiedTitle",
        message: "Copied",
        description: "UID copy success toast title",
      }),
      message: translate({
        id: "uid.toast.copiedMessage",
        message: "UID macro copied to clipboard.",
        description: "UID copy success toast message",
      }),
    });
  };

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
          <header className="uid-page-header">
            <h1 className="uid-page-title">
              <Translate
                id="uid.heading"
                description="UID generator page heading"
              >
                Component UID Generator
              </Translate>
            </h1>
            <p className="uid-page-subtitle">
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
                  "Generate a unique {provideUid} macro for a new component or extension."
                }
              </Translate>
            </p>
          </header>

          <div className="uid-panel">
            <p className="uid-panel-intro">
              <Translate
                id="uid.instructions.panelIntro"
                description="UID generator panel explanation"
                values={{
                  provideUid: <code>PROVIDE_UID</code>,
                  uniqueLetter: <em>U</em>,
                  uidInitials: <em>UID</em>,
                  uniqueIdentifier: <em>Unique IDentifier</em>,
                }}
              >
                {
                  "Use this when creating a new component from a template. The default {provideUid} placeholder is invalid on purpose, so every component gets its own {uidInitials} ({uniqueIdentifier})."
                }
              </Translate>
            </p>

            <div className="uid-step">
              <p className="uid-step-label">
                <Translate
                  id="uid.instructions.findPlaceholder"
                  description="UID generator instruction before the placeholder macro"
                >
                  Find this placeholder:
                </Translate>
              </p>
              <pre className="uid-code-block">
                <code>PROVIDE_UID(/* UID GOES HERE */);</code>
              </pre>
            </div>

            <div className="uid-step">
              <p className="uid-step-label">
                <Translate
                  id="uid.instructions.replaceWith"
                  description="UID generator instruction before the generated replacement macro"
                >
                  And replace it with:
                </Translate>
              </p>
              <pre className="uid-code-block uid-code-block-generated">
                <code>{generatedMacro}</code>
              </pre>
            </div>

            <div className="uid-actions">
              <button
                type="button"
                className="button button--primary uid-action-button"
                onClick={copyUID}
                disabled={!uid}
              >
                <Translate id="uid.copy" description="Copy generated UID macro button">
                  Copy Macro
                </Translate>
              </button>
              <button
                type="button"
                className="button button--secondary uid-action-button"
                onClick={() => setUID(createUID())}
              >
                <Translate id="uid.regenerate" description="Regenerate UID button">
                  Regenerate
                </Translate>
              </button>
            </div>

            <p className="uid-note">
              <Translate
                id="uid.instructions.existingComponent"
                description="UID generator note for modifying an existing component"
              >
                Each component should have a unique UID. If you are modifying an
                existing component, replace its current UID rather than the
                placeholder shown above.
              </Translate>
            </p>
          </div>
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
