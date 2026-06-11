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
import { useLocation } from "@docusaurus/router";
import LoadingBanner from "../../components/LoadingBanner";
import ServerRow from "../../components/ServerRow";
import { showToast, ToastContainer } from "../../components/Toast";
import { API_ADDRESS } from "../../constants";
import { CoreServerData, ServerAllData } from "../../types";
import ServerInfoPage from "../../components/ServerInfoPage";
import { default as Translate, translate } from "@docusaurus/Translate";

const API_SERVERS = `${API_ADDRESS}/servers/`;

const getServerAddressFromPathname = (pathname: string) => {
  const match = pathname.match(/^\/servers\/(.+)$/);

  if (!match) {
    return undefined;
  }

  return decodeURIComponent(match[1].replace(/\/$/, ""));
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

type SortBy = "relevance" | "pc" | "hn" | "gm" | "la";

type Query = {
  search?: string;
  showEmpty: boolean;
  showPartnersOnly: boolean;
  showOmpOnly: boolean;
  showPassworded: boolean;
  language: string;
  sort: SortBy;
};

type LanguageFilter = {
  name: string;
  keywords: string[];
};

const languageFilters: LanguageFilter[] = [
  { name: "English", keywords: ["English", "EN", "Eng"] },
  { name: "Arabic", keywords: ["Arabic", "العربية"] },
  { name: "Czech", keywords: ["Czech", "CZ", "Čeština"] },
  { name: "Chinese", keywords: ["Chinese", "CN", "ZH", "中文"] },
  { name: "Dutch", keywords: ["Dutch", "NL", "Nederlands"] },
  { name: "French", keywords: ["French", "FR", "Français"] },
  { name: "German", keywords: ["German", "DE", "GER", "Deutsch"] },
  { name: "Hungarian", keywords: ["Hungarian", "HU", "Magyar"] },
  { name: "Indonesian", keywords: ["Indonesian", "ID", "Bahasa Indonesia"] },
  { name: "Italian", keywords: ["Italian", "IT", "Italiano"] },
  { name: "Polish", keywords: ["Polish", "PL", "Polski"] },
  { name: "Portuguese", keywords: ["Portuguese", "PT", "Português"] },
  { name: "Romanian", keywords: ["Romanian", "RO", "Română"] },
  { name: "Russian", keywords: ["Russian", "RU", "RUS", "Русский"] },
  { name: "Spanish", keywords: ["Spanish", "ES", "Español"] },
  { name: "Turkish", keywords: ["Turkish", "TR", "Türkçe"] },
  { name: "Ukrainian", keywords: ["Ukrainian", "UK", "Українська"] },
  { name: "Vietnamese", keywords: ["Vietnamese", "VI", "Viet Nam", "Tiếng Việt"] },
];

const checkLanguage = (serverLanguage: string, filterName: string) => {
  if (!filterName) {
    return true;
  }

  const filter = languageFilters.find((item) => item.name === filterName);

  if (!filter) {
    return true;
  }

  const normalizedLanguage = serverLanguage.toLowerCase();
  return filter.keywords.some((keyword) =>
    normalizedLanguage.includes(keyword.toLowerCase()),
  );
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

  if (!q.showPassworded) {
    filteredData = filteredData.filter((s) => !s.pa);
  }

  if (q.language) {
    filteredData = filteredData.filter((s) => checkLanguage(s.la, q.language));
  }

  // Sorting Logic
  if (q.sort === "pc") {
    filteredData.sort((a, b) => b.pc - a.pc); // Sort by players, descending
  } else if (q.sort === "hn") {
    filteredData.sort((a, b) => a.hn.localeCompare(b.hn));
  } else if (q.sort === "gm") {
    filteredData.sort((a, b) => a.gm.localeCompare(b.gm));
  } else if (q.sort === "la") {
    filteredData.sort((a, b) => a.la.localeCompare(b.la));
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
            message: "play.example.com:7777",
            description: "Add server address input placeholder",
          })}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="servers-input"
        />
        <button type="submit" className="button button--primary button--md2 servers-submit-button">
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
  const [showPassworded, setShowPassworded] = useState(true);
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState<SortBy>("relevance");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = useMemo(() => {
    return filterServers(data, {
      search,
      showEmpty,
      showPartnersOnly,
      showOmpOnly,
      showPassworded,
      language,
      sort,
    });
  }, [data, search, showEmpty, showPartnersOnly, showOmpOnly, showPassworded, language, sort]);

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
            <option value="hn">
              <Translate id="servers.sort.name" description="Sort by server name">
                Name
              </Translate>
            </option>
            <option value="gm">
              <Translate id="servers.sort.mode" description="Sort by game mode">
                Mode
              </Translate>
            </option>
            <option value="la">
              <Translate id="servers.sort.language" description="Sort by language">
                Language
              </Translate>
            </option>
          </select>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="servers-select"
          >
            <option value="">
              <Translate id="servers.language.all" description="All languages filter option">
                All languages
              </Translate>
            </option>
            {languageFilters.map((filter) => (
              <option key={filter.name} value={filter.name}>
                {filter.name}
              </option>
            ))}
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
            className="button button--primary button--md2 servers-add-button"
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
              Empty
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
              open.mp only
            </Translate>
          </label>

          <label className="servers-checkbox-label">
            <input
              type="checkbox"
              checked={showPassworded}
              onChange={(e) => setShowPassworded(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.filter.showPassworded" description="Checkbox label to show passworded servers">
              Passworded
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
              Partners
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
              Add Server
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
              Server address
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
              {"Use {format}"}
            </Translate>
          </p>
        </div>

      </Modal>
    </div>
  );
};

const ServersListPage = (): ReactNode => {
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
          <h1 className="servers-page-title">
            <Translate id="servers.page.heading" description="Servers page main heading">
              Servers
            </Translate>
          </h1>
          <p className="servers-page-subtitle">
            <Translate id="servers.page.subtitle" description="Servers page subtitle">
              Browse active SA-MP and open.mp servers.
            </Translate>
          </p>
          {loading ? <LoadingBanner /> : <List data={data} />}
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

const Page = (): ReactNode => {
  const location = useLocation();
  const serverAddress = getServerAddressFromPathname(location.pathname);

  if (serverAddress) {
    return <ServerInfoPage ip={serverAddress} />;
  }

  return <ServersListPage />;
};

export default Page;
