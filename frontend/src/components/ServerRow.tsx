import { useState } from "react";
import Translate from "@docusaurus/Translate";
import { renderToStaticMarkup } from "react-dom/server";

  const translate = (id: string, message: string, description?: string) => {
    return renderToStaticMarkup(
      <Translate id={id} description={description}>{message}</Translate>
    );
  };

const CopyBadge = ({ text }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="copy-badge-container">
      <span className="copy-badge-text">{text}</span>
      <button
        className={`copy-badge-button ${hasCopied ? "copied" : ""}`}
        onClick={onCopy}
      >
        {hasCopied ? (
          <Translate id="serverRow.copied" description="Copied badge">COPIED</Translate>
        ) : (
          <Translate id="serverRow.copy" description="Copy badge">COPY</Translate>
        )}
      </button>
    </div>
  );
};

const ServerRow = ({ server }) => {
  return (
    <div className="server-row-card">
      <div className="server-header">
        <a href={"/servers/" + server.ip} className="server-link">
          <h2 className="server-heading">{server.hn}</h2>
        </a>
        <div className="server-badges">
          {server.pr && (
            <img
              src="/images/assets/partners.png"
              alt="partner server"
              title={translate("serverRow.partnerTitle", "Has partnership!", "Partner server badge title")}
              className="server-badge-image"
            />
          )}
          {server.omp && (
            <img
              src="/images/assets/logo-light-trans.svg"
              alt="open.mp server"
              title={translate("serverRow.ompTitle", "open.mp server", "open.mp server badge title")}
              className="server-badge-image"
            />
          )}
        </div>
      </div>

      <div className="server-info">
        <div className="server-details">
          <span className="server-game-mode">{server.gm}</span>
          <div className="server-players">
            <div className="server-player-count">
              <span>{server.pc}</span>/<span>{server.pm}</span>
            </div>
            <Translate id="serverRow.players" description="Players label">players</Translate>
          </div>
        </div>
        <CopyBadge text={server.ip} />
      </div>
    </div>
  );
};

export default ServerRow;