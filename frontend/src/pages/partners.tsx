import Layout from "@theme/Layout";
import { ReactNode, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { default as Translate, translate } from "@docusaurus/Translate";
import { List as FixedSizeList, RowComponentProps } from "react-window";
import LoadingBanner from "../components/LoadingBanner";
import Admonition from "../components/Admonition";
import ServerRow from "../components/ServerRow";
import { ToastContainer } from "../components/Toast";
import { API_ADDRESS } from "../constants";
import { CoreServerData } from "../types";

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

const PartnerNotice = ({
  onDismiss,
  isClosing,
}: {
  onDismiss: () => void;
  isClosing: boolean;
}): ReactNode => {
  return (
    <Admonition
      type="warning"
      className="servers-partners-note"
      title={
        <Translate id="partners.note.title" description="Partner note title">
          Partnership Program
        </Translate>
      }
    >
      <p className="partners-note-body">
        <Translate id="partners.note">
          The partnership program is currently closed for applications, as
          promised. Servers that already reserved a slot can still join, but
          we are not accepting new requests at this time. For other questions,
          please ask in our Discord.
        </Translate>
      </p>
      <div className="dismissible-admonition-actions">
        <button
          type="button"
          className="dismissible-admonition-button"
          onClick={onDismiss}
          disabled={isClosing}
          aria-label={translate({
            id: "partners.note.dismissAria",
            message: "Dismiss partnership note",
            description: "Accessible label for dismissing the partner note",
          })}
        >
          <Translate
            id="partners.note.dismiss"
            description="Dismiss button label on partner note"
          >
            Dismiss this message
          </Translate>
        </button>
      </div>
    </Admonition>
  );
};

type SortBy = "relevance" | "pc" | "hn" | "gm" | "la";

type Query = {
  search?: string;
  showEmpty: boolean;
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

// List Component
const List = ({ data }: { data: CoreServerData[] }) => {
  const [search, setSearch] = useState("");
  const [showEmpty, setShowEmpty] = useState(true);
  const [showPassworded, setShowPassworded] = useState(true);
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState<SortBy>("relevance");

  const filteredData = useMemo(() => {
    return filterServers(data, {
      search,
      showEmpty,
      showPassworded,
      language,
      sort,
    });
  }, [data, search, showEmpty, showPassworded, language, sort]);

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
              checked={showPassworded}
              onChange={(e) => setShowPassworded(e.target.checked)}
              className="servers-checkbox"
            />
            <Translate id="servers.filter.showPassworded" description="Checkbox label to show passworded servers">
              Passworded
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
    </div>
  );
};

const Page = (): ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoreServerData[]>([]);
  const [showPartnerNote, setShowPartnerNote] = useState<boolean>(true);
  const [isClosingPartnerNote, setIsClosingPartnerNote] = useState<boolean>(false);

  const dismissPartnerNote = () => {
    if (isClosingPartnerNote) {
      return;
    }

    setIsClosingPartnerNote(true);
    window.setTimeout(() => {
      setShowPartnerNote(false);
    }, 260);
  };

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
        <section className="servers-container">
          <h1 className="servers-page-title">
            <Translate id="partners.page.heading" description="Partner servers page main heading">
              Partner Servers
            </Translate>
          </h1>
          <p className="servers-page-subtitle">
            <Translate id="partners.page.subtitle" description="Partner servers page subtitle">
              Browse official partner servers.
            </Translate>
          </p>
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
          {loading ? <LoadingBanner /> : <List data={data} />}
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;
