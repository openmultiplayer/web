import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import useSWR from "swr";
import { map, reduce, flow, sum } from "lodash/fp";
import Link from "next/link";
import { NextSeo } from "next-seo";

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
  <li key={s.ip} className="hover-bg-black lh-copy pa2 ph0-l bb b--black-10">
    <Link href={"/servers/" + s.ip}>
      <a className="link white flex items-center justify-between">
        <div className="pl2 overflow-hidden">
          <span className="db white-70 measure truncate">{s.hn}</span>
          <span className="db white-30 f6 measure truncate">{s.gm}</span>
        </div>

        <div className="pr2 tr dn di-ns flex-shrink-0">
          <div className="white-70">
            {s.pa ? <span>🔐</span> : null} <span>{s.ip}</span>
          </div>
          <div className="db white-30 f6 measure">
            {s.pc}/{s.pm} playing now
          </div>
        </div>
      </a>
    </Link>
  </li>
);

const dataToList = map((s: Server) => <Row s={s} />);

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

const List = ({ data }: { data: Array<Server> }) => (
  <>
    <Stats stats={getStats(data)} />
    <ul className="list pl0 mt0 center">{dataToList(data)}</ul>
  </>
);

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
