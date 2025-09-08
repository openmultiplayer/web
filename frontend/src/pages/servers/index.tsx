import Layout from "@theme/Layout";
import NProgress from "nprogress";
import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FixedSizeList } from "react-window";
import LoadingBanner from "../../components/LoadingBanner";
import ServerRow from "../../components/ServerRow";
import { showToast, ToastContainer } from "../../components/Toast";
import { API_ADDRESS } from "../../constants";
import { CoreServerData, ServerAllData } from "../../types";
import ServerInfoPage from "../../components/ServerInfoPage";

import Translate from "@docusaurus/Translate";
import { renderToStaticMarkup } from "react-dom/server";

const API_SERVERS = `${API_ADDRESS}/servers/`;

const translate = (id: string, message: string, description?: string) => {
  return renderToStaticMarkup(
    <Translate id={id} description={description}>{message}</Translate>
  );
};

const getServers = async () => {
  try {
    const r: Response = await fetch(API_SERVERS);
    const servers: CoreServerData[] = await r.json();
    return servers;
  } catch (e) {
    return [];
  }
};

type Stats = {
  players: number;
  servers: number;
};

const getStats = (servers: CoreServerData[]): Stats => ({
  players: servers.map((s) => s.pc).reduce((acc, pc) => acc + pc, 0),
  servers: servers.length,
});

type SortBy = "relevance" | "pc";

type Query = {
  search?: string;
  showEmpty: boolean;
  showPartnersOnly: boolean;
  showOmpOnly: boolean;
  sort: SortBy;
};

// Filters data
const filterServers = (data: CoreServerData[], q: Query): CoreServerData[] => {
  let filteredData = [...data];

  if (q.search) {
    const searchTerm = q.search.toLowerCase();
    filteredData = filteredData.filter(
      (s) =>
        s.ip.toLowerCase().includes(searchTerm) ||
        s.hn.toLowerCase().includes(searchTerm) ||
        s.gm.toLowerCase().includes(searchTerm)
    );
  }

  if (!q.showEmpty) {
    filteredData = filteredData.filter((s) => s.pc > 0);
  }

  if (q.showPartnersOnly) {
    filteredData = filteredData.filter((s) => s.pr === true);
  }

  if (q.showOmpOnly) {
    filteredData = filteredData.filter((s) => s.omp === true);
  }

  // Sorting Logic
  if (q.sort === "pc") {
    filteredData.sort((a, b) => b.pc - a.pc); // Sort by players, descending
  }
  //Relevance would be the original order

  return filteredData;
};

const StatsComponent = ({ stats: { players, servers } }: { stats: Stats }) => {
  return (
    <div className="servers-center">
      <p className="servers-stats">
        <Translate
          id="servers.stats"
          description="Stats summary: {players} players on {servers} servers with an average of {average} players per server."
          values={{
            players: <strong>{players}</strong>,
            servers: <strong>{servers}</strong>,
            average: <strong>{(players / servers).toFixed(1)}</strong>
          }}
        >
          {'{players} players on {servers} servers with an average of {average} players per server.'}
        </Translate>
      </p>
    </div>
  );
};

// AddServer Component
const AddServer = ({ onAdd }: { onAdd: (server: ServerAllData) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      NProgress.start();

      const response = await fetch(API_SERVERS, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: value }),
      });

      NProgress.inc();

      if (response.status === 200) {
        const server = (await response.json()) as ServerAllData;
        onAdd(server);
        showToast({
          message: renderToStaticMarkup(
            <Translate
              id="servers.addServer.success"
              description="Server added to pending list message"
              values={{ hn: server.core.hn }}
            >
              {'{hn} is added to our pending list. If it\'s not available after maximum 48 hours, you can contact us on Discord!'}
            </Translate>
          ),
          title: translate("servers.addServer.successTitle", "Server Submitted!", "Server submitted toast title"),
          type: "success",
        });
      } else {
        const error = (await response.json()) as { error: string };
        showToast({
          message: `Status ${response.statusText}: ${error?.error}`,
          title: translate("servers.addServer.failedTitle", "Submission failed!", "Server submission failed toast title"),
          type: "error",
        });
      }
    } catch (error) {
      showToast({
        message: translate("servers.addServer.errorMessage", "An error occurred while submitting the server", "Server submission error message"),
        title: translate("servers.addServer.errorTitle", "Error", "Server submission error toast title"),
        type: "error",
      });
    } finally {
      NProgress.done();
    }
  };


  return (
    <form
      action={API_SERVERS}
      target="_self"
      method="post"
      onSubmit={handleSubmit}
      className="servers-form"
    >
      <div className="servers-input-group">
        <input
          type="text"
          name="address"
          placeholder={translate(
            "servers.addServer.input",
            "IP/Domain",
            "Add server input placeholder"
          )}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="servers-input"
        />
        <button type="submit" className="button button--primary button--md2">
          <Translate id="servers.addServer.button" description="Add server button label">Add server</Translate>
        </button>
      </div>
    </form>
  );
};

// Modal Component
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="servers-modal-overlay">
      <div className="servers-modal-backdrop" onClick={onClose}></div>
      <div className="servers-modal-content">{children}</div>
    </div>
  );
};

// List Component
const List = ({ data }: { data: CoreServerData[] }) => {
  const [search, setSearch] = useState("");
  const [showEmpty, setShowEmpty] = useState(true);
  const [showPartnersOnly, setShowPartnersOnly] = useState(false);
  const [showOmpOnly, setShowOmpOnly] = useState(false);
  const [sort, setSort] = useState<SortBy>("relevance");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = useMemo(() => {
    return filterServers(data, {
      search,
      showEmpty,
      showPartnersOnly,
      showOmpOnly,
      sort,
    });
  }, [data, search, showEmpty, showPartnersOnly, showOmpOnly, sort]);

  const rowHeight = 134;
  const listHeight = 1000;
  const visibleItems = Math.floor(listHeight / rowHeight);

  const Row = ({ index, style }) => {
    const server = filteredData[index];
    return (
      <div style={style}>
        <ServerRow key={server.ip} server={server} />
      </div>
    );
  };

  return (
    <>
      <form className="servers-list-form">
        <div className="servers-controls">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortBy)}
            className="servers-select"
          >
            <option value="relevance">
              <Translate id="servers.sort.relevance" description="Sort by relevance">
                Relevance
              </Translate>
            </option>
            <option value="pc">
              <Translate id="servers.sort.players" description="Sort by players">
                Players
              </Translate>
            </option>
          </select>

          <input
            type="text"
            placeholder={translate(
            "servers.search.placeholder",
            "Search by IP or Name",
            "Search input placeholder"
          )}
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="servers-search"
          />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="button button--primary button--md2"
          >
            <Translate id="servers.addServer.button" description="Add server button label">Add server</Translate>
          </button>
        </div>

        <div className="servers-checkboxes">
          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showEmpty}
              onChange={(e) => setShowEmpty(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.checkbox.showEmpty" description="Show empty servers checkbox label">Show empty servers</Translate>
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showOmpOnly}
              onChange={(e) => setShowOmpOnly(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.checkbox.showOmpOnly" description="Show only open.mp servers checkbox label">Show only open.mp servers</Translate>
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showPartnersOnly}
              onChange={(e) => setShowPartnersOnly(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.checkbox.showPartnersOnly" description="Show only partners checkbox label">Show only partners</Translate>
          </label>
        </div>
      </form>

      <StatsComponent stats={getStats(data)} />

      <FixedSizeList
        height={(filteredData.length + 1) * rowHeight}
        width="100%"
        itemSize={rowHeight}
        itemCount={filteredData.length}
        overscanCount={visibleItems}
      >
        {Row}
      </FixedSizeList>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="servers-modal-header">
          <h2 className="servers-modal-title">
            <Translate id="servers.modal.addServerTitle" description="Add a server modal title">Add a server</Translate>
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="servers-modal-close"
          >
            ×
          </button>
        </div>

        <div className="servers-modal-body">
          <label className="servers-label">
            <Translate id="servers.modal.ipOrDomain" description="IP or Domain label">IP or Domain</Translate>
          </label>
          <AddServer
            onAdd={(server: ServerAllData) => {
              setIsModalOpen(false);
            }}
          />
          <p className="servers-helper-text">
            <Translate
              id="servers.modal.ipFormat"
              description="IP format helper text with bold ip:port"
              values={{ ipport: <strong>ip:port</strong> }}
            >
              {'IP must be in format {ipport}'}
            </Translate>
          </p>
        </div>

        <div className="servers-modal-footer">
          <button
            onClick={() => setIsModalOpen(false)}
            className="button button--primary button--md2"
          >
            <Translate id="servers.modal.close" description="Close modal button">Close</Translate>
          </button>
        </div>
      </Modal>
    </>
  );
};

const Page = (): ReactNode => {
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.pathname &&
    window.location.pathname.includes(":")
  ) {
    const path = window.location.pathname;
    const server = path.split("/servers/")[1];
    return <ServerInfoPage ip={server} />;
  }

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoreServerData[]>([]);

  useEffect(() => {
    getServers().then((servers) => {
      setLoading(false);
      setData(servers);
    });
  }, []);

  return (
    <div>
      <Layout
        title={`Servers`}
        description="List of San Andreas servers using open.mp or SA-MP"
      >
        <section className="servers-container">
          {loading ? <LoadingBanner /> : <List data={data} />}
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;
