import React, { useState } from "react";

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
        {hasCopied ? "COPIED" : "COPY"}
      </button>
    </div>
  );
};

const ServerRow = ({ server, sx }) => {
  return (
    <div className="server-row-card" style={sx}>
      <div className="server-row-content">
        <div className="server-header">
          <a href={"/servers/" + server.ip} className="server-link">
            <h2 className="server-heading">{server.hn}</h2>
          </a>
          <div className="server-badges">
            {server.pr && (
              <img
                src="https://assets.open.mp/assets/images/assets/partners.png"
                alt="partner server"
                title="Has partnership!"
                className="server-badge-image"
              />
            )}
            {server.omp && (
              <img
                src="https://assets.open.mp/assets/images/assets/logo-light-trans.svg"
                alt="open.mp server"
                title="open.mp server"
                className="server-badge-image"
              />
            )}
          </div>
        </div>

        <div className="server-details">
          <div className="server-info">
            <p className="server-game-mode">{server.gm}</p>
            <CopyBadge text={server.ip} />
          </div>
          <div className="server-actions">
            <div className="server-player-count">
              <span className="server-player-current">{server.pc}</span>/
              <span className="server-player-max">{server.pm}</span> players
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerRow;
