import { useLocation } from "@docusaurus/router";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import React, { ReactNode, useEffect, useState } from "react";

import LoadingBanner from "../../components/LoadingBanner";
import ServerInfoPage from "../../components/ServerInfoPage";
import ServerList, { getServers } from "../../components/ServerList";
import { ToastContainer } from "../../components/Toast";
import { NoScriptNotice, Page, PageHeader } from "../../components/ui/Page";
import { CoreServerData } from "../../types";

const getServerAddressFromQuery = (search: string): string =>
  new URLSearchParams(search).get("ip") ?? "";

const ServersListPage = (): ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoreServerData[]>([]);

  useEffect(() => {
    if (getServerAddressFromQuery(window.location.search)) {
      return;
    }

    getServers().then((servers) => {
      setLoading(false);
      setData(servers);
    });
  }, []);

  return (
    <div>
      <Layout
        title={translate({
          id: "servers.page.title",
          message: "Servers",
          description: "Servers page title",
        })}
        description={translate({
          id: "servers.page.description",
          message: "List of San Andreas servers using open.mp & SA-MP",
          description: "Servers page description",
        })}
      >
        <Page>
          <PageHeader
            title={
              <Translate id="servers.page.heading" description="Servers page main heading">
                Servers
              </Translate>
            }
            subtitle={
              <Translate id="servers.page.subtitle" description="Servers page subtitle">
                Browse active SA-MP and open.mp servers.
              </Translate>
            }
          />
          <NoScriptNotice>
            <Translate
              id="noscript.servers"
              description="Shown on the servers page when JavaScript is off"
              values={{ link: <a href="https://api.open.mp/servers/">api.open.mp/servers</a> }}
            >
              {"The server list loads live and needs JavaScript. You can also read it as JSON at {link}."}
            </Translate>
          </NoScriptNotice>
          {loading ? <LoadingBanner /> : <ServerList data={data} />}
        </Page>
      </Layout>
      <ToastContainer />
    </div>
  );
};

const ServersPage = (): ReactNode => {
  const location = useLocation();
  const [serverAddress, setServerAddress] = useState<string | null>(null);
  const [from, setFrom] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setServerAddress(params.get("ip") ?? "");
    setFrom(params.get("from") ?? "");
  }, [location.search]);

  if (serverAddress) {
    return <ServerInfoPage ip={serverAddress} from={from} />;
  }

  return <ServersListPage />;
};

export default ServersPage;
