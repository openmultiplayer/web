import LoadingBanner from "@site/src/components/LoadingBanner";
import { API_ADDRESS } from "@site/src/constants";
import { ServerAllData } from "@site/src/types";
import Layout from "@theme/Layout";
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
      ← Back to Servers
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
        Quick Join
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
          {data.description || "This server has no description"}
        </p>

        <div className="row server-info-content-wrapper">
          <div className="server-info-stats-section">
            <div className="server-info-stat-item">
              <span className="server-info-stat-label">Players Online</span>
              <span className="server-info-stat-value">
                {data.core.pc}/{data.core.pm}
              </span>
            </div>

            <div className="server-info-stat-item">
              <span className="server-info-stat-label">Mod Version</span>
              <span className="server-info-stat-value">{data.core.vn}</span>
            </div>

            <div className="server-info-stat-item">
              <span className="server-info-stat-label">Language</span>
              <span className="server-info-stat-value">{data.core.la}</span>
            </div>

            <ServerLink address={`samp://${data.dm ?? data.ip}`} />
          </div>

          {data.ru && (
            <div className="server-info-rules-section">
              <table className="server-info-rules-table">
                <thead>
                  <tr>
                    <th>Rule</th>
                    <th>Value</th>
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
            Last updated{" "}
            {formatDistance(new Date(data.lastUpdated), new Date())} ago
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

  const plural = (num: number, unit: string) =>
    num === 1 ? `1 ${unit}` : `${num} ${unit}s`;

  if (years > 0) {
    return plural(years, "year");
  } else if (months > 0) {
    return plural(months, "month");
  } else if (days > 0) {
    return plural(days, "day");
  } else if (hours > 0) {
    return plural(hours, "hour");
  } else if (minutes > 0) {
    return plural(minutes, "minute");
  } else {
    return "less than a minute";
  }
};
