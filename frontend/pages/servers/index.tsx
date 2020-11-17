import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import useSWR from "swr";
import { map, flow, sum, filter, sortBy, reverse } from "lodash/fp";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useState } from "react";
import Fuse from "fuse.js";

const API_SERVERS = `https://index.open.mp/server/`;

type Server = {
  ip: string;
  hn: string;
  pc: number;
  pm: number;
  gm: string;
  la: string;
  pa: boolean;
  vn: string;
};

type Props = {
  initialData?: Array<Server>;
  error?: string;
};

const getServers = async (): Promise<Array<Server>> => {
  const r: Response = await fetch(API_SERVERS);
  const servers: Array<Server> = await r.json();
  return servers;
};

type Stats = {
  players: number;
  servers: number;
};

const getStats = (servers: Array<Server>): Stats => ({
  players: flow(
    map((s: Server) => s.pc), // get just the player count (pc)
    sum // sum all player counts
  )(servers),
  servers: servers.length,
});

const Row = ({ s }: { s: Server }) => (
  <li className="hover-bg-black-10 lh-copy pa2 ph0-l bb b--black-10">
    <Link href={"/servers/" + s.ip}>
      <a className="link black flex items-center justify-between">
        <div className="pl2 overflow-hidden">
          <span className="db black-70 measure truncate">{s.hn}</span>
          <span className="db black-30 f6 measure truncate">{s.gm}</span>
        </div>

        <div className="pr2 tr dn di-ns flex-shrink-0">
          <div className="black-70">
            {s.pa ? <span>🔐</span> : null} <span>{s.ip}</span>
          </div>
          <div className="db black-30 f6 measure">
            {s.pc}/{s.pm} playing now
          </div>
        </div>
      </a>
    </Link>
  </li>
);

type SortBy = "relevance" | "pc";

type Query = {
  search?: string;
  showFull: boolean;
  showEmpty: boolean;
  sort: SortBy;
};

const dataToList = (data: Server[], q: Query) => {
  const fuse = new Fuse(data, {
    threshold: 0.2,
    shouldSort: true,
    includeScore: true,
    ignoreLocation: true,
    keys: ["ip", "hn", "gm"],
  });

  const items = q.search
    ? map((r: Fuse.FuseResult<Server>) => r.item)(fuse.search(q.search))
    : data;

  console.log();

  return flow(
    filter((s: Server) => (!q.showEmpty ? s.pc > 0 : true)),
    filter((s: Server) => (!q.showFull ? s.pc !== s.pm : true)),
    q.sort != "relevance" ? sortBy(q.sort) : sortBy(""),
    reverse,
    map((s: Server) => <Row key={s.ip} s={s} />)
  )(items);
};

const Stats = ({ stats: { players, servers } }: { stats: Stats }) => {
  return (
    <div>
      <p>
        <span>{players}</span> players on <span>{servers}</span> servers with an
        average of <span>{(players / servers).toFixed(1)}</span> players per
        server.
      </p>
    </div>
  );
};

const formItemStyle = "pa1 ph2 flex flex-column flex-row-ns tl-ns tc";

const List = ({ data }: { data: Array<Server> }) => {
  const [search, setSearch] = useState("");
  const [showFull, setShowFull] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [sort, setSort] = useState("relevance");

  return (
    <>
      <Stats stats={getStats(data)} />
      <form
        action=""
        className="form flex flex-wrap items-center justify-center pa2 f7"
      >
        <span className={formItemStyle}>
          <label className="pr2 self-center" htmlFor="search">
            Filter
          </label>
          <input
            type="text"
            name="search"
            id="search"
            style={{ width: "8em" }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </span>

        <span className={formItemStyle}>
          <label className="pr2 self-center" htmlFor="showFull">
            Full
          </label>
          <input
            type="checkbox"
            name="showFull"
            id="showFull"
            checked={showFull}
            onChange={(e) => {
              setShowFull(e.target.checked);
            }}
          />
        </span>

        <span className={formItemStyle}>
          <label className="pr2 self-center" htmlFor="showEmpty">
            Empty
          </label>
          <input
            type="checkbox"
            name="showEmpty"
            id="showEmpty"
            checked={showEmpty}
            onChange={(e) => setShowEmpty(e.target.checked)}
          />
        </span>

        <span className={formItemStyle}>
          <label className="pr2 self-center" htmlFor="sortBy">
            Sort
          </label>
          <select
            name="sortBy"
            id="sortBy"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="pc">Players</option>
          </select>
        </span>

        {/* <span className={formItemStyle}>
          <button
            className={[
              "ph3",
              "f6",
              "pointer",
              "no-underline",
              "black",
              "bg-white",
              "hover-bg-light-red",
              "hover-white",
              "inline-flex",
              "items-center",
              "pa2",
              "ba",
              "border-box",
              "mr4",
            ].join(" ")}
            type="submit"
          >
            Apply
          </button>
        </span> */}
      </form>
      <ul className="list pl0 mt0 center">
        {dataToList(data, {
          search,
          showFull,
          showEmpty,
          sort: sort as SortBy,
        })}
      </ul>
    </>
  );
};

const Error = ({ error }: { error: TypeError }) => (
  <p>
    Unfortunately there was an error while getting the server list! The error
    message is below: <pre>{error.message}</pre>
  </p>
);

const Page = ({ initialData }: Props) => {
  const { data, error } = useSWR<Array<Server>, TypeError>(
    API_SERVERS,
    getServers,
    {
      initialData,
    }
  );

  return (
    <section className="measure-wide center">
      <NextSeo
        title="Server List"
        description="Live indexing and data for all SA-MP servers."
      />

      <h1>Servers</h1>
      {error ? <Error error={error} /> : <List data={data} />}
    </section>
  );
};

export const getServerSideProps = async (
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  return {
    props: {
      initialData: await getServers(),
    },
  };
};

export default Page;
