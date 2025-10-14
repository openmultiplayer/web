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

const API_SERVERS = `${API_ADDRESS}/servers/`;

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
        <strong>{players}</strong> players on <strong>{servers}</strong> servers
        with an average of <strong>{(players / servers).toFixed(1)}</strong>{" "}
        players per server.
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
          message: `${server.core.hn} is added to our pending list. If it's not available after maximum 48 hours, you can contact us on Discord!`,
          title: "Server Submitted!",
          type: "success",
        });
      } else {
        const error = (await response.json()) as { error: string };
        showToast({
          message: `Status ${response.statusText}: ${error?.error}`,
          title: "Submission failed!",
          type: "error",
        });
      }
    } catch (error) {
      showToast({
        message: "An error occurred while submitting the server",
        title: "Error",
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
          placeholder="IP/Domain"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="servers-input"
        />
        <button type="submit" className="button button--primary button--md2">
          Add
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
            <option value="relevance">Relevance</option>
            <option value="pc">Players</option>
          </select>

          <input
            type="text"
            placeholder="Search by IP or Name"
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
            Add server
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
            Show empty servers
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showOmpOnly}
              onChange={(e) => setShowOmpOnly(e.target.checked)}
              className="servers-checkbox"
            />
            Show only open.mp servers
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showPartnersOnly}
              onChange={(e) => setShowPartnersOnly(e.target.checked)}
              className="servers-checkbox"
            />
            Show only partners
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
          <h2 className="servers-modal-title">Add a server</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="servers-modal-close"
          >
            ×
          </button>
        </div>

        <div className="servers-modal-body">
          <label className="servers-label">IP or Domain</label>
          <AddServer
            onAdd={(server: ServerAllData) => {
              setIsModalOpen(false);
            }}
          />
          <p className="servers-helper-text">
            IP must be in format <strong>ip:port</strong>
          </p>
        </div>

        <div className="servers-modal-footer">
          <button
            onClick={() => setIsModalOpen(false)}
            className="button button--primary button--md2"
          >
            Close
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
        description="List of San Andreas servers using open.mp & SA-MP"
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
