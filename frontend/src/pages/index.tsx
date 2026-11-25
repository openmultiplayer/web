import Link from "@docusaurus/Link";
import { default as Translate, translate } from "@docusaurus/Translate";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

import { AmxArt, CodeTyper, CppArt, Cursor, EncryptionArt, NpcListArt, RepoArt, ShieldArt } from "../components/HomeArt";
import LauncherSim, {
  Icon,
  LauncherFilterModal,
  LauncherListHeader,
  LauncherNavBar,
  LauncherPiece,
  LauncherRules,
  LauncherSearchRow,
  LauncherServerMenu,
  LauncherServerRow,
  SAMPLE_SERVERS,
} from "../components/LauncherSim";
import JoinPrompt from "../components/LauncherSim/JoinPrompt";
import PhoneFrame, { SHOW_PHONE } from "../components/PhoneFrame";
import { Carousel } from "../components/ui/Carousel";
import { useScrollReveal } from "../components/ui/useScrollReveal";
import { API_ADDRESS } from "../constants";
import { CoreServerData } from "../types";
import styles from "./index.module.css";

// Update these when a new version is released.
const LAUNCHER_VERSION = "v1.7.0";
const SERVER_VERSION = "v1.6.7.3218";

const socials = [
  { labelId: "homepage.social.discord", labelMessage: "Discord icon", icon: FaDiscord, href: "https://discord.com/invite/samp"},
  { labelId: "homepage.social.facebook", labelMessage: "Facebook icon", icon: FaFacebook, href: "https://www.facebook.com/openmultiplayer"},
  { labelId: "homepage.social.instagram", labelMessage: "Instagram icon", icon: FaInstagram, href: "https://instagram.com/openmultiplayer/"},
  { labelId: "homepage.social.twitch", labelMessage: "Twitch icon", icon: FaTwitch, href: "https://twitch.tv/openmultiplayer"},
  { labelId: "homepage.social.x", labelMessage: "X (formerly Twitter) icon", icon: FaXTwitter, href: "https://x.com/openmultiplayer"},
  { labelId: "homepage.social.youtube", labelMessage: "YouTube icon", icon: FaYoutube, href: "https://youtube.com/openmultiplayer"},
];

const NPC_EXAMPLE = `new npc = NPC_Create("Ghost");
NPC_Spawn(npc);
NPC_SetWeapon(npc, WEAPON_M4);
NPC_Move(npc, 1958.3, 1343.1, 15.4);`;

// Totals only. Individual servers stay off the front page.
// Eases a number up from zero when it first arrives.
const useCountUp = (target: number | undefined, duration = 1100): number => {
  const [value, setValue] = useState(0);
  const shown = useRef(0);
  useEffect(() => {
    if (target === undefined) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }
    const start = performance.now();
    let frame = 0;
    const from = shown.current;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const next = Math.round(from + (target - from) * (1 - (1 - progress) ** 3));
      shown.current = next;
      setValue(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
};

// Refreshes while the element is on screen and the tab is open.
const LIVE_REFRESH_MS = 30_000;

const useLiveTotals = (watched: React.RefObject<HTMLElement | null>) => {
  const [totals, setTotals] = useState<{ players: number; servers: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    let onScreen = true;
    const load = () =>
      fetch(`${API_ADDRESS}/servers/`)
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then((data: CoreServerData[]) => {
          if (cancelled) return;
          setTotals({
            players: data.reduce((sum, server) => sum + server.pc, 0),
            servers: data.length,
          });
        })
        .catch(() => undefined);
    load();
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    if (watched.current) observer.observe(watched.current);
    const timer = window.setInterval(() => {
      if (onScreen && !document.hidden) load();
    }, LIVE_REFRESH_MS);
    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [watched]);

  return totals;
};

const Socials = () => (
  <div className={styles.socials}>
    {socials.map((social) => {
      const label = translate({
        id: social.labelId,
        message: social.labelMessage,
        description: "Accessible label and image alt text for homepage social link",
      });
      return (
        <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <social.icon aria-hidden="true" />
        </a>
      );
    })}
  </div>
);

// The launcher is drawn at its real 1000x700 and scaled as one picture to fit its frame,
// so it looks the same at every size. CSS does the scaling; this is only for browsers
// that can't divide lengths in calc-style functions.
const FittedLauncher = () => {
  const frame = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const element = frame.current;
    if (!element || CSS.supports("width", "calc(1px * tan(atan2(1px, 1px)))")) return undefined;
    const observer = new ResizeObserver(() => setScale(element.clientWidth / 1000));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frame}
      className={styles.launcherCrop}
      style={scale === null ? undefined : ({ "--launcher-scale": scale } as CSSProperties)}
    >
      <LauncherSim />
    </div>
  );
};

const enter = (step: number) => ({ "--enter": step }) as CSSProperties;

const Hero = () => {
  const hero = useRef<HTMLElement>(null);
  const totals = useLiveTotals(hero);
  const players = useCountUp(totals?.players);
  const servers = useCountUp(totals?.servers);

  return (
    <header ref={hero} className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <Link className={clsx(styles.versions, "omp-enter")} style={enter(0)} to="/downloads/launcher">
            <span className={styles.newTag}>
              <Translate id="homepage.hero.new" description="Tag marking a new release">New</Translate>
            </span>
            {" "}
            <span>
              <Translate id="homepage.hero.launcher" description="Label before the launcher version">Launcher</Translate>{" "}
              <b>{LAUNCHER_VERSION}</b> · <Translate id="homepage.hero.server" description="Label before the server version">Server</Translate>{" "}
              <b>{SERVER_VERSION}</b>
            </span>
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Heading as="h1" className={clsx(styles.heroTitle, "omp-enter")} style={enter(1)}>
            Open Multiplayer
          </Heading>
          <p className={clsx(styles.heroLead, "omp-enter")} style={enter(2)}>
            <Translate id="homepage.hero.lead" description="Homepage line under the main heading">
              A multiplayer mod for GTA San Andreas, fully backwards compatible with SA-MP.
            </Translate>
          </p>
          <div className={clsx(styles.heroActions, "omp-enter")} style={enter(3)}>
            <a className={"button button--primary button--lg"} href="#launcher">
              <Translate id="homepage.hero.startPlaying" description="Homepage hero button to download the launcher and play">Start playing</Translate>
              <FiArrowRight aria-hidden="true" />
            </a>
            <a className={"button button--secondary button--lg"} href="#run-a-server">
              <Translate id="homepage.hero.runServer" description="Homepage hero link to the server section">Run a server</Translate>
            </a>
          </div>
          <p className={clsx(styles.liveStats, "omp-enter")} style={enter(4)} aria-live="polite">
            {totals && (
              <Translate
                id="homepage.hero.liveStats"
                description="Homepage live count of players and servers"
                values={{
                  players: <b>{players.toLocaleString()}</b>,
                  servers: <b>{servers.toLocaleString()}</b>,
                }}
              >
                {"{players} players on {servers} servers"}
              </Translate>
            )}
          </p>
          <div className={clsx(styles.heroSocials, "omp-enter")} style={enter(5)}>
            <Socials />
          </div>
        </div>
        <div className={clsx(styles.heroWindow, "omp-enter")} style={enter(3)}>
          <div className={styles.devices}>
            <FittedLauncher />
            {SHOW_PHONE && (
              <div className={styles.devicePhone} aria-hidden="true">
                <PhoneFrame />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// The launcher tiles are still frames, each showing the moment that makes its point.

// The filter menu open with "Only open.mp servers" ticked, over a search for "roleplay":
// the list narrowed to what you want.
const FIND_SEARCH = "roleplay";

const FindServerArt = () => {
  const results = SAMPLE_SERVERS.filter(
    (server) =>
      server.omp &&
      (server.name.toLowerCase().includes(FIND_SEARCH) || server.mode.toLowerCase().includes(FIND_SEARCH)),
  ).slice(0, 6);

  return (
    <div className={clsx(styles.boxArt, styles.uiArt)} aria-hidden="true">
      <LauncherPiece view={540}>
        <LauncherSearchRow filtered text={FIND_SEARCH} />
        <LauncherListHeader />
        {results.map((server, index) => (
          <LauncherServerRow key={server.address} server={server} selected={index === 0} />
        ))}
        <LauncherFilterModal ompOnly />
      </LauncherPiece>
    </div>
  );
};

// open.mp and SA-MP servers in one list, with a SA-MP one picked and its rules showing.
const COMPATIBILITY_ROWS = [1, 0, 4];

const CompatibilityArt = () => {
  const picked = SAMPLE_SERVERS[COMPATIBILITY_ROWS[1]];

  return (
    <div className={clsx(styles.boxArt, styles.uiArt)} aria-hidden="true">
      <LauncherPiece view={480}>
        <LauncherListHeader />
        {COMPATIBILITY_ROWS.map((index) => (
          <LauncherServerRow key={index} server={SAMPLE_SERVERS[index]} selected={SAMPLE_SERVERS[index] === picked} />
        ))}
        <span className={styles.pieceRules}>
          <LauncherRules server={picked} names={["version", "artwork"]} />
        </span>
      </LauncherPiece>
    </div>
  );
};

// Right click a server in the Internet tab, with "Add to Favorites" about to be clicked.
const INTERNET_ROWS = [2, 0, 1, 3, 4, 5, 9];
const rowY = (index: number) => 90 + index * 34;

const FavoritesArt = () => (
  <div className={clsx(styles.boxArt, styles.uiArt)} aria-hidden="true">
    <LauncherPiece view={480}>
      <div className={styles.pieceTabs}>
        <LauncherNavBar active="internet" />
      </div>
      <LauncherListHeader />
      {INTERNET_ROWS.map((index, row) => (
        <LauncherServerRow key={index} server={SAMPLE_SERVERS[index]} hover={row === 0} />
      ))}
      <span className={styles.pieceMenu} style={{ top: rowY(0) }}>
        <LauncherServerMenu hovered="favorite" />
      </span>
      <span className={styles.pieceCursor} style={{ left: "250px", top: rowY(0) + 51 }}>
        <Cursor />
      </span>
    </LauncherPiece>
  </div>
);

// The nickname field with its recent names open below it.
const RECENT_NAMES = ["Ghost", "Nitro", "Rookie"];

const NicknameArt = () => (
  <div className={clsx(styles.boxArt, styles.uiArt)} aria-hidden="true">
    <LauncherPiece width={360} view={360}>
      <div className={styles.nickBar}>
        <div className={styles.nickField}>
          <span className={styles.nickIcon}>
            <Icon name="nickname" size={14} />
          </span>
          <div className={styles.nickInput}>
            <span className={styles.nickValue}>{RECENT_NAMES[0]}</span>
            <div className={styles.nickDropdown}>
              {RECENT_NAMES.map((name, index) => (
                <span key={name} className={clsx(index === 0 && styles.nickPicked)}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LauncherPiece>
  </div>
);

// Most of a real keyboard, cropped by the tile, with the key that opens the in-game browser lit.
const KEYBOARD_ROWS = [
  ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "#"],
  ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
];

const KeyboardArt = () => (
  <span className={styles.keyboard}>
    {KEYBOARD_ROWS.map((row) => (
      <span key={row[0]} className={styles.keyRow}>
        {row.map((key) =>
          key === "F9" ? (
            <kbd key={key} className={clsx(styles.key, styles.keycap)}>{key}</kbd>
          ) : (
            <span key={key} className={styles.key}>{key}</span>
          ),
        )}
      </span>
    ))}
  </span>
);

const Features = () => (
  <section id="launcher" className={styles.section} aria-labelledby="features-title">
    <div className={styles.container}>
      <div className={styles.sectionHead} data-reveal="">
        <Heading as="h2" id="features-title" className={styles.sectionTitle}>
          <Translate id="homepage.launcher.title" description="Homepage launcher section title">
            Launcher
          </Translate>
        </Heading>
        <div className={styles.heroActions}>
          <Link className={"button button--primary button--lg"} to="/downloads/launcher">
            <Translate id="homepage.hero.download" description="Homepage hero launcher download button">Download</Translate>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div data-reveal="">
      <Carousel className={styles.slides}>
        <article className={clsx(styles.box, styles.boxFind)}>
          <Heading as="h3">
            <Translate id="homepage.features.find.title" description="Launcher feature title">Find a server fast</Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.find.copy" description="Launcher feature description">
              Search the live list by name or mode, filter it down, and sort by whatever matters to you.
            </Translate>
          </p>
          <Link className={styles.boxLink} to="/servers">
            <Translate id="homepage.launcher.browse" description="Button linking to the server list">Browse servers</Translate>
            <FiArrowRight aria-hidden="true" />
          </Link>
          <FindServerArt />
        </article>

        <article className={clsx(styles.box, styles.boxSide, styles.boxKey)}>
          <div>
            <Heading as="h3">
            <Translate id="homepage.features.ingame.title" description="Launcher feature title">Switch without quitting</Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.ingame.copy" description="Launcher feature description">
              Press F9 in game to browse, switch and rejoin servers without leaving.
            </Translate>
          </p>
          </div>
          <span className={styles.badge} aria-hidden="true">
            <KeyboardArt />
          </span>
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.features.samp.title" description="Launcher feature title">Works with SA-MP servers</Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.samp.copy" description="Launcher feature description">
              Join open.mp and SA-MP servers from one list.
            </Translate>
          </p>
          <CompatibilityArt />
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.features.nicknames.title" description="Launcher feature title">Keep your names handy</Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.nicknames.copy" description="Launcher feature description">
              Your five most recent nicknames are one click away, and each server can keep its own.
            </Translate>
          </p>
          <NicknameArt />
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.features.favorites.title" description="Launcher feature title">Bring your favorites</Translate>
          </Heading>
          <p>
            <Translate id="homepage.features.favorites.copy" description="Launcher feature description">
              Right-click any server to save it, and import your list from SA-MP.
            </Translate>
          </p>
          <FavoritesArt />
        </article>

        <article className={clsx(styles.box, styles.boxSide)}>
            <div>
              <Heading as="h3">
                <Translate id="homepage.features.security.title" description="Launcher feature title">Known RCEs and exploits fixed</Translate>
              </Heading>
              <p>
                <Translate id="homepage.features.security.copy" description="Launcher feature description">
                  We actively fix them in the client as they turn up, so joining a compromised server is safer.
                </Translate>
              </p>
            </div>
            <span className={styles.badge} aria-hidden="true">
              <ShieldArt />
            </span>
          </article>

        <article className={clsx(styles.box, styles.boxSide)}>
            <div>
              <Heading as="h3">
                <Translate id="homepage.features.encrypted.title" description="Launcher feature title">Encrypted on open.mp servers</Translate>
              </Heading>
              <p>
                <Translate id="homepage.features.encrypted.copy" description="Launcher feature description">
                  Communication between the client and open.mp servers is encrypted.
                </Translate>
              </p>
            </div>
            <span className={styles.badge} aria-hidden="true">
              <EncryptionArt />
            </span>
          </article>
      </Carousel>
      </div>
    </div>
  </section>
);

// What's built for each system. Stable builds are x86; everything else is in nightly builds.
const PLATFORMS = [
  { os: "Windows", Logo: FaWindows, stable: ["x86"], nightly: ["x64"] },
  { os: "Linux", Logo: FaLinux, stable: ["x86"], nightly: ["x64", "ARM"] },
  { os: "macOS", Logo: FaApple, stable: [], nightly: ["ARM"] },
];

const PlatformsArt = () => (
  <div className={clsx(styles.boxArt, styles.platforms)} aria-hidden="true">
    <div className={styles.platformGrid}>
      {PLATFORMS.map(({ os, Logo, stable, nightly }) => (
        <div key={os} className={styles.platform}>
          <Logo className={styles.platformLogo} />
          <b>{os}</b>
          <div className={styles.platformChips}>
            {stable.map((arch) => (
              <span key={arch} className={styles.chipStable}>{arch}</span>
            ))}
            {nightly.map((arch) => (
              <span key={arch} className={styles.chipNightly}>{arch}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className={styles.platformLegend}>
      <span><i className={styles.chipStable} /><Translate id="homepage.server.platforms.stable" description="Legend: builds marked as stable">Stable</Translate></span>
      <span><i className={styles.chipNightly} /><Translate id="homepage.server.platforms.nightlyBuilds" description="Legend: builds only available nightly">Nightly</Translate></span>
    </div>
  </div>
);

const RunAServer = () => (
  <section id="run-a-server" className={styles.section} aria-labelledby="server-title">
    <div className={styles.container}>
      <div className={styles.sectionHead} data-reveal="">
        <Heading as="h2" id="server-title" className={styles.sectionTitle}>
          <Translate id="homepage.server.title" description="Homepage server section title">
            Server
          </Translate>
        </Heading>
        <div className={styles.heroActions}>
          <Link className={"button button--primary button--lg"} to="/downloads/server">
            <Translate id="homepage.server.download" description="Button label for downloading the server">Download</Translate>
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link className={"button button--secondary button--lg"} to="/docs">
            <FiBookOpen aria-hidden="true" />
            <Translate id="homepage.server.docs" description="Button label for documentation">Read the docs</Translate>
          </Link>
        </div>
      </div>
      <div data-reveal="">
      <Carousel className={styles.slides}>
        <article className={clsx(styles.box, styles.boxSide)}>
          <div>
            <Heading as="h3">
              <Translate id="feature.fullyBackwardsCompatible.title" description="Feature title: Fully backwards compatible">Fully backwards compatible with existing scripts and clients</Translate>
            </Heading>
            <p>
              <Translate id="homepage.server.compatible.copy" description="Server feature description">
                Got an old .amx lying about? Load it straight on open.mp and join from the SA-MP client.
              </Translate>
            </p>
            <Link className={styles.boxLink} to="/docs">
              <Translate id="feature.fullyBackwardsCompatible.linkText" description="Link text: Getting Started">Getting Started</Translate>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <span className={styles.badge} aria-hidden="true">
            <AmxArt />
          </span>
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.server.platforms.title" description="Server feature title">Runs on your hardware</Translate>
          </Heading>
          <p>
            <Translate id="homepage.server.platforms.copy" description="Server feature description">
              Stable on Windows and Linux, with x64, ARM and macOS in nightly builds.
            </Translate>
          </p>
          <PlatformsArt />
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="feature.scriptingSystem.title" description="Feature title: New and improved scripting system">New and improved scripting system</Translate>
          </Heading>
          <p>
            <Translate id="homepage.server.scripting.copy" description="Server feature description">
              The good old Pawn, improved with a new compiler and more functions.
            </Translate>
            <br />
            <Translate id="homepage.server.scripting.languages" description="Other languages the server supports">
              The community also supports C++, Rust, TypeScript and more.
            </Translate>
          </p>
          <div className={styles.code}>
            <CodeTyper />
          </div>
          <Link className={styles.boxLink} to="https://github.com/openmultiplayer/omp-stdlib/#openmp-includes">
            <Translate id="feature.scriptingSystem.linkText" description="Link text: Learn about the improvements">Learn about the improvements</Translate>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.server.npc.title" description="Server feature title">Built-in NPCs</Translate>
          </Heading>
          <p>
            <Translate id="homepage.server.npc.copy" description="Server feature description">
              Fully controllable NPCs, on foot or driving, with no plugin needed.
            </Translate>
          </p>
          <div className={styles.miniCode}>
            <CodeBlock language="c">{NPC_EXAMPLE}</CodeBlock>
            <NpcListArt />
          </div>
        </article>

        <article className={clsx(styles.box, styles.boxSide, styles.serverCpp)}>
          <div>
            <Heading as="h3">
              <Translate id="feature.cppApi.title" description="Feature title: Extensible C++ API">Extensible C++ API</Translate>
            </Heading>
            <p>
              <Translate id="homepage.server.cpp.copy" description="Server feature description">
                Everything available in pawn, plus the universe of C++ libraries and frameworks.
              </Translate>
            </p>
            <Link className={styles.boxLink} to="https://github.com/openmultiplayer/open.mp-sdk">
              <Translate id="feature.cppApi.linkText" description="Link text: Check out SDK repository">Check out SDK repository</Translate>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <span className={styles.badge} aria-hidden="true">
            <CppArt />
          </span>
        </article>

        <article className={styles.box}>
          <Heading as="h3">
            <Translate id="homepage.server.brand.title" description="Server feature title">Stand out in the launcher</Translate>
          </Heading>
          <p>
            <Translate id="homepage.server.brand.copy" description="Server feature description">
              Show your banner, logo and Discord link to players browsing servers.
            </Translate>
          </p>
          <div className={styles.promptArt} aria-hidden="true">
            <JoinPrompt
              name={translate({
                id: "homepage.server.brand.sampleName",
                message: "Your server",
                description: "Sample server name in the join dialog artwork",
              })}
              address="192.0.2.1:7777"
              players="128/500"
            />
          </div>
        </article>

        <article className={clsx(styles.box, styles.boxSide, styles.serverCommunity)}>
          <div>
            <Heading as="h3">
              <Translate id="feature.communityDevelopment.title" description="Feature title: Community driven development">Community driven development</Translate>
            </Heading>
            <p>
              <Translate id="homepage.server.community.copy" description="Server feature description">
                The server is fully open source, and contributions big or small are welcome.
              </Translate>
            </p>
            <Link className={styles.boxLink} to="https://github.com/openmultiplayer">
              <Translate id="feature.communityDevelopment.linkText" description="Link text: Visit the GitHub organization">Visit the GitHub organization</Translate>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <span className={styles.badge} aria-hidden="true">
            <RepoArt />
          </span>
        </article>
      </Carousel>
      </div>
    </div>
  </section>
);

const Home = (): React.ReactElement => {
  useScrollReveal();

  return (
  <Layout
    title="Open Multiplayer"
    description={translate({
      id: "homepage.layoutDescription",
      message:
        "A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer",
      description: "Homepage meta description",
    })}
  >
    <div className={styles.page}>
      <Hero />
      <main>
        <Features />
        <RunAServer />
      </main>
    </div>
  </Layout>
  );
};

export default Home;
