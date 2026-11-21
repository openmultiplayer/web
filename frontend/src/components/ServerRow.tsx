import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import { useState } from "react";

import { Icon } from "./LauncherSim";
import { CoreServerData } from "../types";

const CopyAddress = ({ text }: { text: string }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard?.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="server-row-address">
      <span>{text}</span>
      <button type="button" className="server-row-copy" onClick={onCopy}>
        {hasCopied ? (
          <Translate id="serverRow.copied" description="Copied badge">COPIED</Translate>
        ) : (
          <Translate id="serverRow.copy" description="Copy badge">COPY</Translate>
        )}
      </button>
    </div>
  );
};

// A row of the launcher's server list.
const ServerRow = ({ server, from }: { server: CoreServerData; from?: string }) => {
  const ompLabel = translate({ id: "serverRow.ompTitle", message: "open.mp server", description: "open.mp server badge title" });
  const partnerLabel = translate({ id: "serverRow.partnerTitle", message: "Has partnership!", description: "Partner server badge title" });

  return (
  <div className="server-row">
    <span className={clsx("server-row-status", server.pa && "server-row-status--locked")}>
      <Icon name={server.pa ? "locked" : "unlocked"} size={15} />
    </span>
    <div className="server-row-body">
      <Link
        to={`/servers?ip=${encodeURIComponent(server.ip)}${from ? `&from=${from}` : ""}`}
        className="server-row-name"
      >
        {server.omp && (
          <img
            src="/images/launcher/omp.png"
            width={18}
            height={18}
            alt={ompLabel}
            title={ompLabel}
          />
        )}
        {server.pr && (
          <img
            src="/images/assets/partners.png"
            width={18}
            height={18}
            alt={partnerLabel}
            title={partnerLabel}
          />
        )}
        <span title={server.hn}>{server.hn}</span>
      </Link>
      <span className="server-row-mode" title={server.gm}>{server.gm}</span>
      <span className="server-row-language" title={server.la}>{server.la}</span>
      <CopyAddress text={server.ip} />
      <span className="server-row-players">
        {server.pc}
        <small>/{server.pm}</small>
        <small className="server-row-players-word">
          {" "}
          <Translate id="serverRow.players" description="Players label">players</Translate>
        </small>
      </span>
    </div>
  </div>
  );
};

export default ServerRow;
