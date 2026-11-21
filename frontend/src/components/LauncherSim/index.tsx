import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import React, { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import styles from "./styles.module.css";

// A static picture of the open.mp launcher window, drawn in HTML (openmultiplayer/
// launcher, src/containers). Nothing in it is clickable. Every server here is made up on purpose: the front page must
// not promote real servers, and the addresses are from the reserved 192.0.2.0/24
// documentation range. When the launcher's layout or theme changes, this file and
// its stylesheet follow by hand.

const ICONS = "/images/launcher";
const PING_POINTS = 25;

export type SampleServer = {
  address: string;
  name: string;
  mode: string;
  language: string;
  ping: number;
  players: number;
  maxPlayers: number;
  omp: boolean;
  password: boolean;
  partner: boolean;
};

const sample = (
  id: number,
  name: string,
  mode: string,
  language: string,
  ping: number,
  players: number,
  maxPlayers: number,
  flags: { omp?: boolean; password?: boolean; partner?: boolean } = {},
): SampleServer => ({
  address: `192.0.2.${id}:7777`,
  name,
  mode,
  language,
  ping,
  players,
  maxPlayers,
  omp: flags.omp ?? false,
  password: flags.password ?? false,
  partner: flags.partner ?? false,
});

export const SAMPLE_SERVERS: SampleServer[] = [
  sample(13, "Demo Cops & Robbers", "Cops and Robbers", "English", 48, 198, 300),
  sample(10, "Example Roleplay | Sample Server", "Roleplay", "English", 34, 428, 500, { omp: true, partner: true }),
  sample(18, "Sample Zombie Survival", "Survival", "English", 83, 52, 100),
  sample(15, "Sample Deathmatch Arena", "Deathmatch", "Russian", 118, 131, 200),
  sample(11, "Demo Freeroam #1", "Freeroam", "English", 52, 312, 500, { omp: true }),
  sample(20, "Demo Private Community", "Roleplay", "English", 29, 18, 50, { omp: true, password: true }),
  sample(16, "Example Trucking Company", "Trucking", "English", 44, 87, 150, { omp: true }),
  sample(22, "Example Build Server", "Sandbox", "English", 58, 6, 32, { omp: true, password: true }),
  sample(12, "Sample Stunt Arena", "Stunts", "Spanish", 71, 246, 300, { omp: true, partner: true }),
  sample(19, "Example Mini-Games", "Mini-games", "Polish", 67, 41, 100, { omp: true }),
  sample(14, "Example Drift Club", "Drift", "Portuguese", 96, 154, 200, { omp: true }),
  sample(23, "Demo Testing Grounds", "Sandbox", "English", 25, 0, 32, { omp: true }),
  sample(17, "Demo Race Series", "Racing", "German", 39, 64, 100, { omp: true }),
  sample(21, "Sample Derby Nights", "Derby", "Turkish", 142, 12, 50),
];

const PLAYER_NAMES = [
  "Ghost", "Nitro", "Rookie", "Sprinter", "Wheelie", "Bandit",
  "Drifter", "Comet", "Falcon", "Maverick", "Pixel", "Turbo",
];

const playersOf = (server: SampleServer) =>
  PLAYER_NAMES.slice(0, Math.min(server.players, PLAYER_NAMES.length))
    .map((name, index) => ({
      name,
      score: ((server.ping * (index + 3) * 37) % 900) + 12,
    }))
    .sort((a, b) => b.score - a.score);

const rulesOf = (server: SampleServer): [string, string][] => [
  ["allowed_clients", "0.3.7, 0.3.DL"],
  ["artwork", server.omp ? "Yes" : "No"],
  ["lagcomp", "On"],
  ["mapname", "San Andreas"],
  ["version", server.omp ? "omp" : "0.3.7-R2"],
  ["weather", String(server.ping % 20)],
  ["weburl", "example.com"],
  ["worldtime", `${String(server.ping % 24).padStart(2, "0")}:00`],
];

export const Icon = ({
  name,
  size = 16,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) => (
  <span
    aria-hidden="true"
    className={clsx(styles.icon, className)}
    style={
      {
        width: size,
        height: size,
        "--icon": `url(${ICONS}/${name}.svg)`,
      } as CSSProperties
    }
  />
);

const nextPing = (base: number, previous: number) => {
  const swing = Math.max(3, base * 0.12);
  const moved = previous + (Math.random() - 0.5) * swing;
  return Math.round(Math.min(base + swing * 2, Math.max(Math.max(5, base - swing * 2), moved)));
};

const PingChart = ({ server }: { server: SampleServer }) => {
  const [points, setPoints] = useState<number[]>(() => Array(PING_POINTS).fill(server.ping));

  useEffect(() => {
    let current = Array(PING_POINTS).fill(server.ping).map((value) => nextPing(server.ping, value));
    setPoints(current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      current = [...current.slice(1), nextPing(server.ping, current[current.length - 1])];
      setPoints(current);
    }, 1500);
    return () => window.clearInterval(timer);
  }, [server.ping]);

  const top = Math.max(...points) + 6;
  const bottom = Math.max(0, Math.min(...points) - 6);
  const path = points
    .map((value, index) => {
      const x = (index / (PING_POINTS - 1)) * 100;
      const y = 100 - ((value - bottom) / (top - bottom)) * 100;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div className={styles.pingChart} aria-hidden="true">
      <div className={styles.pingAxis}>
        <span>{Math.round(top)}</span>
        <span>{Math.round((top + bottom) / 2)}</span>
        <span>{Math.round(bottom)}</span>
      </div>
      <div className={styles.pingPlot}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points={path} />
        </svg>
      </div>
    </div>
  );
};

const TABS: { id: string; icon: string; label: ReactNode }[] = [
  {
    id: "favorites",
    icon: "fav_tab",
    label: <Translate id="launcherSim.tab.favorites" description="Launcher preview tab">Favorites</Translate>,
  },
  {
    id: "internet",
    icon: "internet",
    label: <Translate id="launcherSim.tab.internet" description="Launcher preview tab">Internet</Translate>,
  },
  {
    id: "partners",
    icon: "partner",
    label: <Translate id="launcherSim.tab.partners" description="Launcher preview tab">Partners</Translate>,
  },
  {
    id: "recent",
    icon: "recently",
    label: <Translate id="launcherSim.tab.recent" description="Launcher preview tab">Recently Joined</Translate>,
  },
];

// The launcher's parts, shared by the full window below and the homepage feature cards.
export const LauncherNavBar = ({ active, nickname }: { active: string; nickname?: ReactNode }) => (
<div className={styles.navBar}>
            <div className={styles.tabs}>
              {TABS.map((item) => (
                <span key={item.id} className={clsx(styles.tab, item.id === active && styles.tabActive)}>
                  <Icon name={item.icon} size={17} className={styles.iconPrimary} />
                  <span className={styles.tabLabel}>{item.label}</span>
                </span>
              ))}
            </div>
            {nickname ?? (
<div className={styles.nickname}>
              <span className={styles.squareBox}>
                <Icon name="nickname" size={14} />
              </span>
              <span className={styles.nicknameField}>
                <Translate id="launcherSim.nicknamePlaceholder" description="Launcher preview nickname placeholder">Nickname...</Translate>
              </span>
            </div>
)}
</div>
);

export const LauncherSearchRow = ({ text, filtered = false }: { text?: ReactNode; filtered?: boolean }) => (
<div className={styles.searchRow}>
            <span className={clsx(styles.squareButton, filtered && styles.filterOn)}>
              <Icon name="filter" size={14} />
            </span>
            <div className={styles.search}>
              <Icon name="search" size={14} />
              <span className={clsx(styles.searchText, text && styles.searchTyped)}>
                {text ?? (
<Translate id="launcherSim.searchPlaceholder" description="Launcher preview search placeholder">Search for server hostname/mode</Translate>
)}
              </span>
            </div>
            <div className={styles.actions}>
              <span className={clsx(styles.action, styles.actionPlay)}>
                <Icon name="play" size={19} />
              </span>
              <span className={clsx(styles.action, styles.actionFavorite)}>
                <Icon name="fav_add" size={17} />
              </span>
              <span className={clsx(styles.action, styles.actionAdd)}>
                <Icon name="add" size={15} />
              </span>
              <span className={clsx(styles.squareButton, styles.sideToggle)}>
                <Icon name="close_side_lists" size={15} />
              </span>
            </div>
          </div>
);

export const LauncherListHeader = () => (
<div className={styles.listHeader}>
                <span className={styles.statusCell}>
                  <Icon name="locked" size={15} />
                </span>
                <span className={styles.headName}>
                  <Translate id="launcherSim.column.name" description="Launcher preview column">Name</Translate>
                </span>
                <span className={styles.headPing}>
                  <Translate id="launcherSim.column.ping" description="Launcher preview column">Ping</Translate>
                </span>
                <span className={styles.headMode}>
                  <Translate id="launcherSim.column.mode" description="Launcher preview column">Mode</Translate>
                </span>
                <span className={styles.headPlayers}>
                  <Translate id="launcherSim.column.players" description="Launcher preview column">Players</Translate>
                </span>
              </div>
);

export const LauncherServerRow = ({
  server,
  selected = false,
  hover = false,
}: {
  server: SampleServer;
  selected?: boolean;
  hover?: boolean;
}) => (
<div
                    className={clsx(styles.row, hover && styles.rowHover, selected && styles.rowSelected)}
                  >
                    <span className={clsx(styles.statusCell, server.password ? styles.statusLocked : styles.statusOpen)}>
                      <Icon name={server.password ? "locked" : "unlocked"} size={15} />
                    </span>
                    <span className={styles.rowInner}>
                      <span className={styles.cellName}>
                        {server.omp && (
<img className={styles.ompMark} src={`${ICONS}/omp.png`} width={20} height={20} alt="" />
)}
                        <span className={styles.ellipsis}>{server.name}</span>
                      </span>
                      <span className={styles.cellPing}>{server.ping}</span>
                      <span className={clsx(styles.cellMode, styles.ellipsis)}>{server.mode}</span>
                      <span className={styles.cellPlayers}>
                        {server.players}
                        <small>/{server.maxPlayers}</small>
                      </span>
                    </span>
                  </div>
);

// The menu a right click on a server opens (launcher: containers/ServerContextMenu).
export const LauncherServerMenu = ({ hovered }: { hovered?: "favorite" }) => (
  <div className={styles.menu}>
    <div className={styles.menuItem}>
      <Icon name="play" size={20} className={styles.iconAccent} />
      <Translate id="launcherSim.menu.connect" description="Launcher preview: context menu">Connect</Translate>
    </div>
    <div className={clsx(styles.menuItem, hovered === "favorite" && styles.menuItemHover)}>
      <img src={`${ICONS}/favorite.png`} width={15} height={15} alt="" />
      <Translate id="launcherSim.addToFavorites" description="Launcher preview button">Add to Favorites</Translate>
    </div>
    <div className={styles.menuItem}>
      <img src={`${ICONS}/copy.png`} width={15} height={15} alt="" />
      <Translate id="launcherSim.menu.copy" description="Launcher preview: context menu">Copy Server Info</Translate>
    </div>
  </div>
);

// The Rule and Value panel, showing a few of the selected server's rules.
export const LauncherRules = ({ server, names }: { server: SampleServer; names: string[] }) => (
  <div>
    <div className={styles.sideHead}>
      <span><Translate id="launcherSim.column.rule" description="Launcher preview column">Rule</Translate></span>
      <span><Translate id="launcherSim.column.value" description="Launcher preview column">Value</Translate></span>
    </div>
    <div className={clsx(styles.panel, styles.panelShort)}>
      {rulesOf(server)
        .filter(([name]) => names.includes(name))
        .map(([name, value]) => (
          <div key={name} className={styles.ruleRow}>
            <span className={styles.ellipsis}>{name}</span>
            <span className={clsx(styles.ruleValue, styles.ellipsis)}>{value}</span>
          </div>
        ))}
    </div>
  </div>
);

const Check = ({ on = false }: { on?: boolean }) => <span className={clsx(styles.check, on && styles.checkOn)} />;

// The filter panel (launcher: containers/FilterModal).
export const LauncherFilterModal = ({ ompOnly = false }: { ompOnly?: boolean }) => (
  <div className={styles.filterModal}>
    <b>
      <Translate id="launcherSim.filter.title" description="Launcher preview: filter panel">Filters:</Translate>
    </b>
    <div className={styles.filterOption} data-first="">
      <Check on={ompOnly} />
      <Translate id="launcherSim.filter.omp" description="Launcher preview: filter panel">Only open.mp servers</Translate>
    </div>
    <div className={styles.filterOption}>
      <Check />
      <Translate id="launcherSim.filter.nonEmpty" description="Launcher preview: filter panel">Non-empty Servers</Translate>
    </div>
    <div className={styles.filterOption}>
      <Check />
      <Translate id="launcherSim.filter.unpassworded" description="Launcher preview: filter panel">Unpassworded Servers</Translate>
    </div>
    <b className={styles.filterHeading}>
      <Translate id="launcherSim.filter.language" description="Launcher preview: filter panel">Language:</Translate>
    </b>
    <div className={styles.filterLanguages}>
      {["English", "Russian", "Spanish", "Polish", "German", "Turkish"].map((name) => (
        <div key={name} className={styles.filterLanguage}>
          <Check />
          {name}
        </div>
      ))}
    </div>
  </div>
);

// A notification, as the launcher shows when a server is favorited.
export const LauncherNotification = ({ server }: { server: SampleServer }) => (
  <div className={styles.notification}>
    <b>
      <Translate id="launcherSim.notification.favorited" description="Launcher preview: notification">Added to Favorites!</Translate>
    </b>
    <span className={styles.ellipsis}>{server.name}</span>
  </div>
);

// A cropped part of the launcher. It's laid out `width` wide like the real list, so its columns
// keep their proportions, and zoomed so that `view` of that fills its parent. What's left over
// runs off the edge, as in a cropped screenshot.
export const LauncherPiece = ({
  width = 640,
  view,
  children,
}: {
  width?: number;
  view: number;
  children: ReactNode;
}) => (
  <div
    className={clsx(styles.launcher, styles.piece)}
    style={{ "--piece-width": `${width}px`, "--piece-view": `${view}px` } as CSSProperties}
  >
    <div className={styles.body}>{children}</div>
  </div>
);

const LauncherSim = (): React.ReactElement => {
  const selected = SAMPLE_SERVERS[0];

  return (
    <div
      className={styles.launcher}
      role="img"
      aria-label={translate({
        id: "launcherSim.ariaLabel",
        message: "The open.mp launcher showing a list of sample servers",
        description: "Accessible label for the launcher picture",
      })}
    >
      <div aria-hidden="true" className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.titleLeft}>
            <span className={styles.logoBox}>
              <img src={`${ICONS}/omp.png`} width={19} height={19} alt="" />
            </span>
            <span className={styles.title}>Open Multiplayer</span>
          </div>
          <div className={styles.titleRight}>
            <span className={styles.themeButton}>
              <img className={styles.showInDark} src={`${ICONS}/lighttheme.svg`} width={26} height={26} alt="" />
              <img className={styles.showInLight} src={`${ICONS}/darktheme.svg`} width={26} height={26} alt="" />
            </span>
            <span className={styles.squareButton}>
              <Icon name="settings" size={17} />
            </span>
            <span className={styles.windowButtons}>
              <span><Icon name="window_minimize" size={13} className={styles.iconPrimary} /></span>
              <span><Icon name="window_maximize" size={13} className={styles.iconPrimary} /></span>
              <span><Icon name="window_close" size={13} className={styles.iconPrimary} /></span>
            </span>
          </div>
        </div>

        <div className={styles.body}>
          <LauncherNavBar active="internet" />

          <LauncherSearchRow />

          <div className={styles.serverSection}>
            <div className={styles.listColumn}>
              <LauncherListHeader />
              <div className={styles.list}>
                {SAMPLE_SERVERS.map((server) => (
                  <LauncherServerRow key={server.address} server={server} selected={server.address === selected.address} />
                ))}
              </div>
            </div>

            <div className={styles.side}>
              <div className={styles.sideHead}>
                <span><Translate id="launcherSim.column.player" description="Launcher preview column">Player</Translate></span>
                <span><Translate id="launcherSim.column.score" description="Launcher preview column">Score</Translate></span>
              </div>
              <div className={styles.panel}>
                {playersOf(selected).map((player) => (
                  <div key={player.name} className={styles.ruleRow}>
                    <span className={styles.ellipsis}>{player.name}</span>
                    <span className={styles.ruleValue}>{player.score}</span>
                  </div>
                ))}
              </div>
              <div className={styles.sideHead}>
                <span><Translate id="launcherSim.column.rule" description="Launcher preview column">Rule</Translate></span>
                <span><Translate id="launcherSim.column.value" description="Launcher preview column">Value</Translate></span>
              </div>
              <div className={styles.panel}>
                {rulesOf(selected).map(([name, value]) => (
                  <div key={name} className={styles.ruleRow}>
                    <span className={styles.ellipsis}>{name}</span>
                    <span className={clsx(styles.ruleValue, styles.ellipsis)}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <div className={styles.bottomLeft}>
              <div className={styles.prop}>
                <span className={styles.propIcon}>
                  {selected.omp ? (
                    <img src={`${ICONS}/omp.png`} width={17} height={17} alt="" />
                  ) : (
                    <Icon name="internet" size={14} />
                  )}
                </span>
                <span className={styles.ellipsis}>{selected.name}</span>
              </div>
              <div className={styles.prop}>
                <span className={styles.propIcon}><Icon name="ip" size={12} /></span>
                <span className={styles.ellipsis}>{selected.address}</span>
                <span className={styles.copy}>
                  <Translate id="launcherSim.copy" description="Launcher preview: copy address">COPY</Translate>
                </span>
              </div>
              <div className={styles.prop}>
                <span className={styles.propIcon}><Icon name="nickname" size={13} /></span>
                <span>{selected.players}/{selected.maxPlayers}</span>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.prop}>
                <span className={styles.propIcon}><Icon name="language" size={15} /></span>
                <span className={styles.ellipsis}>{selected.language}</span>
              </div>
              <div className={styles.prop}>
                <span className={styles.propIcon}><Icon name="mode" size={15} /></span>
                <span className={styles.ellipsis}>{selected.mode}</span>
              </div>
              <span className={styles.favoriteButton}>
                <Icon name="fav_add" size={14} className={styles.iconRed} />
                <Translate id="launcherSim.addToFavorites" description="Launcher preview button">Add to Favorites</Translate>
              </span>
            </div>
            <PingChart server={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LauncherSim;
