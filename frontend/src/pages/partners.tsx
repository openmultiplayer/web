import { default as Translate, translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

import LoadingBanner from "../components/LoadingBanner";
import ServerList, { getServers } from "../components/ServerList";
import { ToastContainer } from "../components/Toast";
import { Notice } from "../components/ui/Notice";
import { NoScriptNotice, Page, PageHeader } from "../components/ui/Page";
import { CoreServerData } from "../types";

const PartnerNotice = ({
  onDismiss,
  isClosing,
}: {
  onDismiss: () => void;
  isClosing: boolean;
}): ReactNode => (
  <Notice
    type="info"
    title={
      <Translate id="partners.note.title" description="Partner note title">
        Partnership Program
      </Translate>
    }
    onDismiss={onDismiss}
    dismissDisabled={isClosing}
    dismissLabel={translate({
      id: "partners.note.dismissAria",
      message: "Dismiss partnership note",
      description: "Accessible label for dismissing the partner note",
    })}
  >
    <Translate id="partners.note">
      The partnership program is currently closed for applications, as
      promised. Servers that already reserved a slot can still join, but
      we are not accepting new requests at this time. For other questions,
      please ask in our Discord.
    </Translate>
  </Notice>
);

// Remembers the dismissal in this browser, so the note doesn't come back on every visit.
const NOTE_KEY = "omp-partners-note-dismissed";

const PartnersPage = (): ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoreServerData[]>([]);
  const [showPartnerNote, setShowPartnerNote] = useState<boolean>(true);
  const [isClosingPartnerNote, setIsClosingPartnerNote] = useState<boolean>(false);

  const dismissPartnerNote = () => {
    if (isClosingPartnerNote) {
      return;
    }

    setIsClosingPartnerNote(true);
    try {
      window.localStorage.setItem(NOTE_KEY, "1");
    } catch {
      // Storage can be blocked; the note just comes back next time.
    }
    window.setTimeout(() => {
      setShowPartnerNote(false);
    }, 260);
  };

  useEffect(() => {
    try {
      if (window.localStorage.getItem(NOTE_KEY)) setShowPartnerNote(false);
    } catch {
      // Storage can be blocked; keep showing the note.
    }
  }, []);

  useEffect(() => {
    getServers().then((servers) => {
      setLoading(false);
      setData(servers.filter((server) => server.pr));
    });
  }, []);

  return (
    <div>
      <Layout
        title={translate({
          id: "partners.page.title",
          message: "Partner Servers",
          description: "Partner servers page title",
        })}
        description={translate({
          id: "partners.page.description",
          message: "List of San Andreas servers using open.mp or SA-MP",
          description: "Partner servers page description",
        })}
      >
        <Page>
          <PageHeader
            title={
              <Translate id="partners.page.heading" description="Partner servers page main heading">
                Partner Servers
              </Translate>
            }
            subtitle={
              <Translate id="partners.page.subtitle" description="Partner servers page subtitle">
                Browse official partner servers.
              </Translate>
            }
          />
          {showPartnerNote && (
            <div
              className={clsx(
                "dismissible-admonition-wrapper",
                isClosingPartnerNote && "dismissible-admonition-wrapper--closing",
              )}
            >
              <PartnerNotice
                onDismiss={dismissPartnerNote}
                isClosing={isClosingPartnerNote}
              />
            </div>
          )}
          <NoScriptNotice>
            <Translate
              id="noscript.partners"
              description="Shown on the partners page when JavaScript is off"
              values={{ link: <a href="https://api.open.mp/servers/">api.open.mp/servers</a> }}
            >
              {"The partner list loads live and needs JavaScript. You can also read it as JSON at {link}, where partners have pr set to true."}
            </Translate>
          </NoScriptNotice>
          {loading ? <LoadingBanner /> : <ServerList data={data} partners />}
        </Page>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default PartnersPage;
