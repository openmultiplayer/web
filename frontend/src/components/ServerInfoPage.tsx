import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LoadingBanner from "@site/src/components/LoadingBanner";
import { API_ADDRESS } from "@site/src/constants";
import { formatElapsed } from "@site/src/lib/time";
import { ServerAllData } from "@site/src/types";
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
  return (
    <Link to={to} className="button server-info-back-link">
      <Translate id="serverInfo.backToServers" description="Back to servers link">← Back to Servers</Translate>
    </Link>
  );
};

const ServerLink = ({ address }: { address: string }) => {
  return (
    <a
      href={address}
      target="_blank"
      rel="noopener noreferrer"
      className="server-info-quick-join-button"
    >
      <Translate id="serverInfo.quickJoin" description="Quick join button">Quick Join</Translate>
      <span className="server-info-arrow">→</span>
    </a>
  );
};

const ServerAddressCopy = ({ address }: { address: string }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(address);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className={`server-info-ip-address ${hasCopied ? "copied" : ""}`}
      onClick={onCopy}
    >
      <span>{address}</span>
      <span className="server-info-copy-state">
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
    <div className="server-info-footer">
      <time className="server-info-last-updated" dateTime={lastUpdated}>
        <Translate
          id="serverInfo.lastUpdated"
          description="Last updated label"
          values={{ time: formatElapsed(currentLocale, timestamp, now) }}
        >
          {"Last updated {time} ago"}
        </Translate>
      </time>
    </div>
  );
};

const Info = ({ data }: { data: ServerAllData }) => (
  <article className="server-info-wrapper">
    <header className="server-info-page-header">
      <h1 className="server-info-name">{data.core.hn}</h1>
      {data.description && (
        <p className="server-info-description">{data.description}</p>
      )}

      <div className="server-info-actions">
        <ServerAddressCopy address={data.dm ?? data.ip} />
        <ServerLink address={`samp://${data.dm ?? data.ip}`} />
      </div>
    </header>

    <div className="server-info-container">
      <div className="server-info-box">
        <div
          className={`server-info-content-wrapper ${
            data.ru ? "" : "server-info-content-wrapper-single"
          }`}
        >
          <div className="server-info-stats-section">
            <div className="server-info-stat-item">
              <span className="server-info-stat-label">
                <Translate id="serverInfo.playersOnline" description="Players online label">
                  Players Online
                </Translate>
              </span>
              <span className="server-info-stat-value">
                {data.core.pc}/{data.core.pm}
              </span>
            </div>

            <div className="server-info-stat-item">
              <span className="server-info-stat-label">
                <Translate id="serverInfo.language" description="Language label">
                  Language
                </Translate>
              </span>
              <span className="server-info-stat-value">{data.core.la}</span>
            </div>
          </div>

          {data.ru && (
            <div className="server-info-rules-section">
              <table className="server-info-rules-table">
                <thead>
                  <tr>
                    <th>
                      <Translate id="serverInfo.rule" description="Rule table header">
                        Rule
                      </Translate>
                    </th>
                    <th>
                      <Translate id="serverInfo.value" description="Value table header">
                        Value
                      </Translate>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.ru).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>
                        {key === "weburl" || key === "discord.invite" ? (
                          <a
                            href={`https://${value}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="server-info-divider" />

        <UpdatedFooter lastUpdated={data.lastUpdated} />
      </div>
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
      <p className="server-info-description">
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

const ServerInfoPage = ({ ip }: { ip: string }) => {
  if (!ip) {
    return <LoadingBanner />;
  }

  return (
    <Layout title={ip} description={"Server Information for " + ip}>
      <section className="server-info-section">
        <div className="server-info-stack">
          <BackLink to="/servers" />
          <Content ip={ip} />
        </div>
      </section>
    </Layout>
  );
};

export default ServerInfoPage;
