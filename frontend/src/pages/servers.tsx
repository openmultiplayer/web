import Layout from "@theme/Layout";
import { FormEvent, ReactNode, useState } from "react";
import { CoreServerData, ServerAllData } from "../types";
import NProgress from "nprogress";
import { API_ADDRESS } from "../constants";
import { showToast, ToastContainer } from "../components/Toast";
import { IoMdAdd } from "react-icons/io";

const API_SERVERS = `${API_ADDRESS}/servers/`;

const getServers = async (): Promise<Array<CoreServerData>> => {
  const r: Response = await fetch(API_SERVERS);
  const servers: Array<CoreServerData> = await r.json();
  return servers;
};

type Stats = {
  players: number;
  servers: number;
};

const getStats = (servers: Array<CoreServerData>): Stats => ({
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

// const dataToList = (data: CoreServerData[], q: Query) => {
//   const fuse = new Fuse(data, {
//     threshold: 0.2,
//     shouldSort: true,
//     includeScore: true,
//     ignoreLocation: true,
//     keys: ["ip", "hn", "gm"],
//   });

//   const items = q.search
//     ? map((r: Fuse.FuseResult<CoreServerData>) => r.item)(fuse.search(q.search))
//     : data;

//   return flow(
//     filter((s: CoreServerData) => (!q.showEmpty ? s.pc > 0 : true)),
//     filter((s: CoreServerData) => (q.showPartnersOnly ? s.pr === true : true)),
//     filter((s: CoreServerData) => (q.showOmpOnly ? s.omp === true : true)),
//     q.sort != "relevance" ? sortBy(q.sort) : sortBy(""),
//     reverse,
//     map((s: CoreServerData) => <ServerRow key={s.ip} server={s} />)
//   )(items);
// };

const Stats = ({ stats: { players, servers } }: { stats: Stats }) => {
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
const List = ({
  data,
  onAdd,
}: {
  data: Array<CoreServerData>;
  onAdd: (server: ServerAllData) => void;
}) => {
  const [search, setSearch] = useState("");
  const [showEmpty, setShowEmpty] = useState(true);
  const [showPartnersOnly, setShowPartnersOnly] = useState(false);
  const [showOmpOnly, setShowOmpOnly] = useState(false);
  const [sort, setSort] = useState("relevance");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <form action="" className="servers-list-form">
        <div className="servers-controls">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
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

      <Stats stats={getStats(data)} />

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
              onAdd(server);
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
  return (
    <div>
      <Layout
        title={`Servers`}
        description="List of San Andreas servers using open.mp or SA-MP"
      >
        <section className="servers-container">
          <List data={[]} onAdd={() => {}} />
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;
