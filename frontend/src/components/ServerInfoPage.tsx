import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LoadingBanner from "@site/src/components/LoadingBanner";
import { API_ADDRESS } from "@site/src/constants";
import { formatElapsed } from "@site/src/lib/time";
import { ServerAllData } from "@site/src/types";
import { Page, PageHeader } from "@site/src/components/ui/Page";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";

const API_SERVER = (ip: string) => `${API_ADDRESS}/servers/${ip}`;

const getServer = async (ip: string): Promise<ServerAllData | undefined> => {
  try {
    const r: Response = await fetch(API_SERVER(ip));
    const servers: ServerAllData = await r.json();
    return servers;
  } catch (e) {
    return undefined;
  }
};

const BackLink: React.FC<{ to: string }> = ({ to }) => {
  const isPartners = to === "/partners";

  return (
    <Link to={to} className="server-back">
      {isPartners ? (
        <Translate id="serverInfo.backToPartners" description="Back to partners link">← Back to Partner Servers</Translate>
      ) : (
        <Translate id="serverInfo.backToServers" description="Back to servers link">← Back to Servers</Translate>
      )}
    </Link>
  );
};

const ServerLink = ({ address }: { address: string }) => {
  return (
    <a
      href={address}
      target="_blank"
      rel="noopener noreferrer"
      className="button button--primary"
    >
      <Translate id="serverInfo.quickJoin" description="Quick join button">Quick Join</Translate>
      {" →"}
    </a>
  );
};

const ServerAddressCopy = ({ address }: { address: string }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard?.writeText(address);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className="button button--secondary"
      onClick={onCopy}
    >
      <span>{address}</span>
      <span className="server-copy-state">
        {hasCopied ? (
          <Translate id="serverInfo.copied" description="Copied server address state">
            Copied
          </Translate>
        ) : (
          <Translate id="serverInfo.copy" description="Copy server address state">
            Copy
          </Translate>
        )}
      </span>
    </button>
  );
};

const useNow = (intervalMs = 60_000): number | null => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
};

const UpdatedFooter = ({ lastUpdated }: { lastUpdated: string }) => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const now = useNow();
  const timestamp = new Date(lastUpdated).getTime();

  if (now === null || Number.isNaN(timestamp)) {
    return null;
  }

  return (
    <p className="server-detail-updated">
      <time dateTime={lastUpdated}>
        <Translate
          id="serverInfo.lastUpdated"
          description="Last updated label"
          values={{ time: formatElapsed(currentLocale, timestamp, now) }}
        >
          {"Last updated {time} ago"}
        </Translate>
      </time>
    </p>
  );
};

const Info = ({ data }: { data: ServerAllData }) => (
  <article>
    <PageHeader
      title={data.core.hn}
      subtitle={data.description}
      actions={
        <>
          <ServerAddressCopy address={data.dm ?? data.ip} />
          <ServerLink address={`samp://${data.dm ?? data.ip}`} />
        </>
      }
    />
    <div className="server-detail">
      <div className="server-detail-stats">
        <div className="omp-panel">
          <span className="omp-label">
            <Translate id="serverInfo.playersOnline" description="Players online label">Players Online</Translate>
          </span>
          <strong>{data.core.pc}/{data.core.pm}</strong>
        </div>
        <div className="omp-panel">
          <span className="omp-label">
            <Translate id="serverInfo.language" description="Language label">Language</Translate>
          </span>
          <strong>{data.core.la}</strong>
        </div>
        <div className="omp-panel">
          <span className="omp-label">
            <Translate id="serverInfo.gameMode" description="Game mode label">Game Mode</Translate>
          </span>
          <strong>{data.core.gm}</strong>
        </div>
        <UpdatedFooter lastUpdated={data.lastUpdated} />
      </div>
      {data.ru && (
        <div className="omp-panel">
          <div className="omp-row omp-row--head">
            <span className="omp-label">
              <Translate id="serverInfo.rule" description="Rule table header">Rule</Translate>
            </span>
            <span className="omp-label">
              <Translate id="serverInfo.value" description="Value table header">Value</Translate>
            </span>
          </div>
          <div className="omp-rows">
            {Object.entries(data.ru).map(([key, value]) => (
              <div key={key} className="omp-row">
                <span>{key}</span>
                <span>
                  {key === "weburl" || key === "discord.invite" ? (
                    <a href={`https://${value}`} target="_blank" rel="noreferrer">{value}</a>
                  ) : (
                    value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </article>
);

const Content = ({ ip }: { ip: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<ServerAllData | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    getServer(ip).then((server) => {
      if (cancelled) {
        return;
      }
      setData(server);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [ip]);

  if (loading) {
    return <LoadingBanner />;
  }

  if (!data) {
    return (
      <p className="omp-empty">
        <Translate
          id="serverInfo.notFound"
          description="Shown when a server address is unknown or the server is gone"
        >
          This server could not be found. It may be offline or no longer listed.
        </Translate>
      </p>
    );
  }

  return <Info data={data} />;
};

const ServerInfoPage = ({ ip, from }: { ip: string; from?: string }) => {
  if (!ip) {
    return <LoadingBanner />;
  }

  return (
    <Layout title={ip} description={"Server Information for " + ip}>
      <Page>
        <BackLink to={from === "partners" ? "/partners" : "/servers"} />
        <Content ip={ip} />
      </Page>
    </Layout>
  );
};

export default ServerInfoPage;
