import Translate from "@docusaurus/Translate";
import React from "react";

import { Icon } from "./index";
import styles from "./JoinPrompt.module.css";

// The launcher's join dialog (src/containers/JoinServerPrompt in the launcher repo).
// A picture used in the homepage bento; nothing in it is clickable.
type Props = {
  name: string;
  address: string;
  players: string;
  nickname?: string;
};

const JoinPrompt = ({ name, address, players, nickname = "Ghost" }: Props): React.ReactElement => {
  const connect = <Translate id="launcherSim.join.connect" description="Launcher connect button">Connect</Translate>;
  const closeIcon = <Icon name="window_close" size={13} className={styles.closeIcon} />;

  return (
    <div className={styles.prompt}>
      <div className={styles.banner}>
        <span>
          <Translate id="launcherSim.join.bannerText" description="Sample server banner text">Your Server</Translate>
        </span>
      </div>
      <span className={styles.close}>{closeIcon}</span>
      <div className={styles.logoRow}>
        <span className={styles.logo}>
          <img src="/images/launcher/omp.png" width={44} height={44} alt="" />
        </span>
        <Icon name="play" size={26} className={styles.play} />
      </div>
      <div className={styles.info}>
        <div className={styles.infoLine}>
          <b><Translate id="launcherSim.join.server" description="Launcher preview join dialog">Server</Translate>:</b> {name}
        </div>
        <div className={styles.infoLine}>
          <b><Translate id="launcherSim.join.address" description="Launcher preview join dialog">Address</Translate>:</b> {address}
        </div>
        <div className={styles.infoLine}>
          <b><Translate id="launcherSim.column.players" description="Launcher preview column">Players</Translate>:</b> {players}
        </div>
      </div>
      <div className={styles.form}>
        <b><Translate id="launcherSim.join.nickname" description="Launcher join dialog nickname label">Nickname</Translate>:</b>
        <div className={styles.input}>{nickname}</div>
        <div className={styles.version}>
          <b><Translate id="launcherSim.join.version" description="Launcher join dialog SA-MP version label">SA-MP Version</Translate>:</b>
          <span>0.3.7-R1 ▾</span>
        </div>
        <span className={styles.connect}>{connect}</span>
      </div>
    </div>
  );
};

export default JoinPrompt;
