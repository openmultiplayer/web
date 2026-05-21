import Layout from "@theme/Layout";
import NProgress from "nprogress";
import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { List as FixedSizeList, RowComponentProps } from "react-window";
import LoadingBanner from "../../components/LoadingBanner";
import ServerRow from "../../components/ServerRow";
import { showToast, ToastContainer } from "../../components/Toast";
import { API_ADDRESS } from "../../constants";
import { CoreServerData, ServerAllData } from "../../types";
import ServerInfoPage from "../../components/ServerInfoPage";
import { default as Translate, translate } from "@docusaurus/Translate";

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
        s.gm.toLowerCase().includes(searchTerm),
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
  const average = players / servers;
  const averageStr = (isNaN(average) ? 0 : average).toFixed(1);
  return (
    <div className="servers-center">
      <p className="servers-stats">
        <Translate
          id="partners.server.stats"
          description="Stats summary: {players} players on {servers} servers with an average of {average} players per server."
          values={{
            players: <strong>{players}</strong>,
            servers: <strong>{servers}</strong>,
            average: <strong>{averageStr}</strong>,
          }}
        >
          {
            "{players} players on {servers} servers with an average of {average} players per server."
          }
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
          message: translate(
            {
              id: "servers.add.successMessage",
              message:
                "{serverName} is added to our pending list. If it's not available after maximum 48 hours, you can contact us on Discord!",
              description:
                "Toast message shown after submitting a server to the pending list",
            },
            { serverName: server.core.hn },
          ),
          title: translate({
            id: "servers.add.successTitle",
            message: "Server Submitted!",
            description: "Toast title shown after a server submission succeeds",
          }),
          type: "success",
        });
      } else {
        const error = (await response.json()) as { error: string };
        showToast({
          message: translate(
            {
              id: "servers.add.failureMessage",
              message: "Status {status}: {error}",
              description: "Toast message shown after a server submission fails",
            },
            { status: response.statusText, error: error?.error ?? "" },
          ),
          title: translate({
            id: "servers.add.failureTitle",
            message: "Submission failed!",
            description: "Toast title shown after a server submission fails",
          }),
          type: "error",
        });
      }
    } catch (error) {
      showToast({
        message: translate({
          id: "servers.add.errorMessage",
          message: "An error occurred while submitting the server",
          description:
            "Toast message shown after an unexpected server submission error",
        }),
        title: translate({
          id: "servers.add.errorTitle",
          message: "Error",
          description: "Generic toast error title",
        }),
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
          placeholder={translate({
            id: "servers.add.addressPlaceholder",
            message: "IP/Domain",
            description: "Add server address input placeholder",
          })}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="servers-input"
        />
        <button type="submit" className="button button--primary button--md2">
          <Translate id="servers.add.submit" description="Add server submit button">
            Add
          </Translate>
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

  const Row = ({ index, style }: RowComponentProps) => {
    const server = filteredData[index];
    return (
      <div style={style}>
        <ServerRow key={server.ip} server={server} />
      </div>
    );
  };

  return (
    <div className="servers-list-wrapper">
      <form className="servers-list-form">
        <div className="servers-controls">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortBy)}
            className="servers-select"
          >
            <option value="relevance">
              <Translate
                id="servers.sort.relevance"
                description="Sort by relevance"
              >
                Relevance
              </Translate>
            </option>
            <option value="pc">
              <Translate
                id="servers.sort.players"
                description="Sort by players"
              >
                Players
              </Translate>
            </option>
          </select>

          <input
            type="text"
            placeholder={translate({
              id: "servers.search.placeholder",
              message: "Search by IP or Name",
              description: "Search input placeholder",
            })}
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            className="servers-search"
          />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="button button--primary button--md2"
          >
            <Translate id="servers.add.openModal" description="Button that opens the add server modal">
              Add server
            </Translate>
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
            <Translate id="servers.filter.showEmpty" description="Checkbox label to show empty servers">
              Show empty servers
            </Translate>
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showOmpOnly}
              onChange={(e) => setShowOmpOnly(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.filter.showOmpOnly" description="Checkbox label to show only open.mp servers">
              Show only open.mp servers
            </Translate>
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showPartnersOnly}
              onChange={(e) => setShowPartnersOnly(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.filter.showPartnersOnly" description="Checkbox label to show only partner servers">
              Show only partners
            </Translate>
          </label>
        </div>
      </form>

      <StatsComponent stats={getStats(filteredData)} />

      <div className="servers-virtual-list">
        <FixedSizeList
          rowComponent={Row}
          rowHeight={rowHeight}
          rowCount={filteredData.length}
          rowProps={{}}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="servers-modal-header">
          <h2 className="servers-modal-title">
            <Translate id="servers.add.modalTitle" description="Add server modal title">
              Add a server
            </Translate>
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="servers-modal-close"
            aria-label={translate({
              id: "servers.add.closeModal",
              message: "Close add server modal",
              description: "Accessible label for closing the add server modal",
            })}
          >
            ×
          </button>
        </div>

        <div className="servers-modal-body">
          <label className="servers-label">
            <Translate id="servers.add.addressLabel" description="Add server address field label">
              IP or Domain
            </Translate>
          </label>
          <AddServer
            onAdd={(server: ServerAllData) => {
              setIsModalOpen(false);
            }}
          />
          <p className="servers-helper-text">
            <Translate
              id="servers.add.addressHelp"
              description="Help text explaining the required server address format"
              values={{ format: <strong>ip:port</strong> }}
            >
              {"IP must be in format {format}"}
            </Translate>
          </p>
        </div>

        <div className="servers-modal-footer">
          <button
            onClick={() => setIsModalOpen(false)}
            className="button button--primary button--md2"
          >
            <Translate id="servers.add.close" description="Close modal button">
              Close
            </Translate>
          </button>
        </div>
      </Modal>
    </div>
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
        <section className="servers-container">
          {loading ? <LoadingBanner /> : <List data={data} />}
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;
