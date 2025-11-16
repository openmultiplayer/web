import LoadingBanner from "@site/src/components/LoadingBanner";
import { API_ADDRESS } from "@site/src/constants";
import { ServerAllData } from "@site/src/types";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <a href={to} className="button server-info-back-link">
      <Translate id="serverInfo.backToServers" description="Back to servers link">← Back to Servers</Translate>
    </a>
  );
};

const ServerLink = ({ address }: { address: string }) => {
  return (
    <a
      href={address}
      target="_blank"
      rel="noopener noreferrer"
      className="server-info-link"
    >
      <button className="server-info-quick-join-button">
        <Translate id="serverInfo.quickJoin" description="Quick join button">Quick Join</Translate>
        <span className="server-info-arrow">→</span>
      </button>
    </a>
  );
};

const Info = ({ data }: { data: ServerAllData }) => (
  <article className="server-info-wrapper">
    <div className="server-info-container">
      <div className="server-info-box">
        <div className="server-info-header">
          <span className="server-info-game-mode">{data.core.gm}</span>
          <a
            href={`samp://${data.dm ?? data.ip}`}
            target="_blank"
            rel="noopener noreferrer"
            className="server-info-ip-address"
          >
            {data.dm ?? data.ip}
          </a>
        </div>

        <h1 className="server-info-name">{data.core.hn}</h1>

        <p className="server-info-description">
          {data.description || <Translate id="serverInfo.noDescription" description="No description text">This server has no description</Translate>}
        </p>

        <div className="row server-info-content-wrapper">
          <div className="server-info-stats-section">
            <div className="server-info-stat-item">
              <span className="server-info-stat-label"><Translate id="serverInfo.playersOnline" description="Players online label">Players Online</Translate></span>
              <span className="server-info-stat-value">
                {data.core.pc}/{data.core.pm}
              </span>
            </div>

            <div className="server-info-stat-item">
              <span className="server-info-stat-label"><Translate id="serverInfo.modVersion" description="Mod version label">Mod Version</Translate></span>
              <span className="server-info-stat-value">{data.core.vn}</span>
            </div>

            <div className="server-info-stat-item">
              <span className="server-info-stat-label"><Translate id="serverInfo.language" description="Language label">Language</Translate></span>
              <span className="server-info-stat-value">{data.core.la}</span>
            </div>

            <ServerLink address={`samp://${data.dm ?? data.ip}`} />
          </div>

          {data.ru && (
            <div className="server-info-rules-section">
              <table className="server-info-rules-table">
                <thead>
                  <tr>
                    <th><Translate id="serverInfo.rule" description="Rule table header">Rule</Translate></th>
                    <th><Translate id="serverInfo.value" description="Value table header">Value</Translate></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.ru).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>
                        {key === "weburl" ? (
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

        <div className="server-info-footer">
          <time className="server-info-last-updated">
            <Translate
              id="serverInfo.lastUpdated"
              description="Last updated label"
              values={{ time: formatDistance(new Date(data.lastUpdated), new Date()) }}
            >
              {'Last updated {time} ago'}
            </Translate>
          </time>
        </div>
      </div>
    </div>
  </article>
);

const Content = ({ ip }: { ip: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<ServerAllData | undefined>(undefined);

  useEffect(() => {
    getServer(ip).then((server) => {
      setLoading(false);
      setData(server);
    });
  }, []);

  if (!data || loading) {
    return <LoadingBanner />;
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

const formatDistance = (
  date: Date | string | number,
  baseDate: Date | string | number = new Date()
): string => {
  const compareDate = date instanceof Date ? date : new Date(date);
  const baseDateObj = baseDate instanceof Date ? baseDate : new Date(baseDate);

  const diff = baseDateObj.getTime() - compareDate.getTime();
  const absDiff = Math.abs(diff);

  const seconds = Math.floor(absDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? "1 year" : `${years} years`;
  } else if (months > 0) {
    return months === 1 ? "1 month" : `${months} months`;
  } else if (days > 0) {
    return days === 1 ? "1 day" : `${days} days`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour" : `${hours} hours`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  } else {
    return "less than a minute";
  }
};
