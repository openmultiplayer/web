import Translate, { translate } from "@docusaurus/Translate";
import NProgress from "nprogress";
import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { API_ADDRESS } from "../../constants";
import { CoreServerData, ServerAllData } from "../../types";
import ServerRow from "../ServerRow";
import { showToast } from "../Toast";

// The one server list. The servers page and the partners page both render this,
// differing only by `partners`.

const API_SERVERS = `${API_ADDRESS}/servers/`;

export const getServers = async (): Promise<CoreServerData[]> => {
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
    <p className="server-stats">
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
      
    >
      <div className="server-toolbar">
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
          className="omp-input"
        />
        <button type="submit" className="button button--primary">
          <Translate id="servers.add.submit" description="Add server submit button">
            Add
          </Translate>
        </button>
      </div>
    </form>
  );
};


const initialQuery: Query = {
  search: "",
  showEmpty: true,
  showOmpOnly: false,
  showPassworded: true,
  language: "",
  sort: "relevance",
};

const PAGE_SIZE = 50;

// Page numbers to show: always the first and last, the current one and its neighbours,
// with gaps (null) where pages are skipped.
const pageNumbers = (current: number, total: number): (number | null)[] => {
  const pages: (number | null)[] = [];
  for (let page = 1; page <= total; page++) {
    if (page === 1 || page === total || Math.abs(page - current) <= 1) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== null) {
      pages.push(null);
    }
  }
  return pages;
};

const Pagination = ({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (page: number) => void;
}) => {
  if (total <= 1) return null;
  return (
    <nav
      className="server-pages"
      aria-label={translate({ id: "servers.pages.label", message: "Server list pages", description: "Accessible label for the server list pagination" })}
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label={translate({ id: "servers.pages.previous", message: "Previous page", description: "Server list previous page button" })}
      >
        <FiChevronLeft aria-hidden="true" />
      </button>
      {pageNumbers(page, total).map((number, i) =>
        number === null ? (
          <span key={`gap-${i}`} className="server-pages-gap" aria-hidden="true">…</span>
        ) : (
          <button
            key={number}
            type="button"
            onClick={() => onChange(number)}
            aria-current={number === page ? "page" : undefined}
          >
            {number}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        aria-label={translate({ id: "servers.pages.next", message: "Next page", description: "Server list next page button" })}
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
};

const FilterCheck = ({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}) => (
  <label className="omp-check">
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    {children}
  </label>
);

const ServerList = ({
  data,
  partners = false,
}: {
  data: CoreServerData[];
  partners?: boolean;
}): React.ReactElement => {
  const [query, setQuery] = useState<Query>(initialQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);

  const filteredData = useMemo(() => {
    const scoped = partners ? data.filter((server) => server.pr) : data;
    return filterServers(scoped, query);
  }, [data, partners, query]);

  const pageCount = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageServers = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // New filters start over on the first page.
  useEffect(() => {
    setPage(1);
  }, [query]);

  // Changing page brings the top of the list back into view, if it has scrolled away.
  const goToPage = (next: number) => {
    setPage(next);
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="server-toolbar">
          <input
            type="text"
            placeholder={translate({
              id: "servers.search.placeholder",
              message: "Search by IP or Name",
              description: "Search input placeholder",
            })}
            name="search"
            id="search"
            value={query.search}
            onChange={(e) => setQuery((q) => ({ ...q, search: e.target.value }))}
            className="omp-input"
          />
          <select
            value={query.sort}
            onChange={(e) => setQuery((q) => ({ ...q, sort: e.target.value as SortBy }))}
            className="omp-select"
          >
            <option value="relevance">
              {translate({ id: "servers.sort.relevance", message: "Relevance", description: "Sort by relevance" })}
            </option>
            <option value="pc">
              {translate({ id: "servers.sort.players", message: "Players", description: "Sort by players" })}
            </option>
            <option value="hn">
              {translate({ id: "servers.sort.name", message: "Name", description: "Sort by server name" })}
            </option>
            <option value="gm">
              {translate({ id: "servers.sort.mode", message: "Mode", description: "Sort by game mode" })}
            </option>
            <option value="la">
              {translate({ id: "servers.sort.language", message: "Language", description: "Sort by language" })}
            </option>
          </select>
          <select
            value={query.language}
            onChange={(e) => setQuery((q) => ({ ...q, language: e.target.value }))}
            className="omp-select"
          >
            <option value="">
              {translate({ id: "servers.language.all", message: "All languages", description: "All languages filter option" })}
            </option>
            {languageFilters.map((filter) => (
              <option key={filter.name} value={filter.name}>
                {filter.name}
              </option>
            ))}
          </select>
          {!partners && (
            <button type="button" onClick={() => setIsModalOpen(true)} className="button button--primary">
              <Translate id="servers.add.openModal" description="Button that opens the add server modal">
                Add server
              </Translate>
            </button>
          )}
        </div>

        <div className="server-toolbar-foot">
          <div className="server-filters">
            <FilterCheck checked={query.showEmpty} onChange={(showEmpty) => setQuery((q) => ({ ...q, showEmpty }))}>
              <Translate id="servers.filter.showEmpty" description="Checkbox label to show empty servers">Empty</Translate>
            </FilterCheck>
            <FilterCheck checked={query.showPassworded} onChange={(showPassworded) => setQuery((q) => ({ ...q, showPassworded }))}>
              <Translate id="servers.filter.showPassworded" description="Checkbox label to show passworded servers">Passworded</Translate>
            </FilterCheck>
            {/* Partners have their own page, so there's no partners filter here. */}
            {!partners && (
              <FilterCheck checked={query.showOmpOnly} onChange={(showOmpOnly) => setQuery((q) => ({ ...q, showOmpOnly }))}>
                <Translate id="servers.filter.showOmpOnly" description="Checkbox label to show only open.mp servers">open.mp only</Translate>
              </FilterCheck>
            )}
          </div>
          <StatsComponent stats={getStats(filteredData)} />
        </div>
      </form>

      <div ref={top} className="server-columns" aria-hidden="true">
        <span><Translate id="launcherSim.column.name" description="Launcher preview column">Name</Translate></span>
        <span><Translate id="launcherSim.column.mode" description="Launcher preview column">Mode</Translate></span>
        <span>{translate({ id: "servers.sort.language", message: "Language", description: "Sort by language" })}</span>
        <span><Translate id="serverRow.addressColumn" description="Server list column">Address</Translate></span>
        <span><Translate id="launcherSim.column.players" description="Launcher preview column">Players</Translate></span>
      </div>

      <div className="server-list">
        {pageServers.map((server) => (
          <ServerRow key={server.ip} server={server} from={partners ? "partners" : undefined} />
        ))}
      </div>

      <Pagination page={currentPage} total={pageCount} onChange={goToPage} />

      {isModalOpen && (
        <div className="omp-modal" onClick={() => setIsModalOpen(false)}>
          <div className="omp-modal-box" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="omp-modal-head">
              <h2>
                <Translate id="servers.add.modalTitle" description="Add server modal title">Add Server</Translate>
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="omp-modal-close"
                aria-label={translate({
                  id: "servers.add.closeModal",
                  message: "Close add server modal",
                  description: "Accessible label for closing the add server modal",
                })}
              >
                ×
              </button>
            </div>
            <label className="omp-field-label">
              <Translate id="servers.add.addressLabel" description="Add server address field label">Server address</Translate>
            </label>
            <AddServer onAdd={() => setIsModalOpen(false)} />
            <p className="omp-page-subtitle">
              <Translate
                id="servers.add.addressHelp"
                description="Help text explaining the required server address format"
                values={{ format: <strong>ip:port</strong> }}
              >
                {"Use {format}"}
              </Translate>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerList;
