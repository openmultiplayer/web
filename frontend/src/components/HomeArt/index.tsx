import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaCar, FaCrosshairs, FaFolderOpen, FaPersonWalking } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";

import styles from "./styles.module.css";

// Type-only art for the homepage feature tiles, matching the F9, .amx and C++ tiles.
// Decorative: the text beside them says the same thing.

const THREATS = [
  ["exploit", "payload", "overflow", "injection", "crash", "exploit"],
  ["overflow", "crash", "exploit", "payload", "injection", "overflow"],
  ["payload", "injection", "crash", "overflow", "exploit", "payload"],
  ["crash", "exploit", "injection", "payload", "overflow", "crash"],
  ["injection", "overflow", "payload", "exploit", "crash", "injection"],
];

const ThreatWords = ({ words }: { words: string[] }) => (
  <span>
    {words.map((word, index) => (
      <s key={index}>{word}</s>
    ))}
  </span>
);

export const ShieldArt = (): React.ReactElement => (
  <span className={styles.threats}>
    <span className={styles.threatRows}>
      {THREATS.map((words, index) => (
        <span key={index} className={index % 2 ? styles.rowBack : styles.rowOut}>
          <ThreatWords words={words} />
          <ThreatWords words={words} />
        </span>
      ))}
    </span>
    <span className={styles.rce}>RCE</span>
  </span>
);

// What players send, and what actually crosses the network.
const STREAMS = [
  ["/login ********  gg wp  hey everyone  /pm Ghost meet at grove  ", "9f3a c1e8 07bd 52a6 e4f0 3b7c d218 6a9e b47e 1fd2 a805 6c39 "],
  ["SetPlayerPos  OnPlayerText  anyone up for a race?  /engine on  ", "2d6c 8ea1 f350 b79d 416e ca02 7f8b e593 e071 5ab9 3cd4 f826 "],
  ["nice shot  /register ********  OnPlayerUpdate  see you in LS  ", "6ba4 d093 2e7f 81c5 a3d6 f90b 47e2 5c1a 09be 73a1 c6f4 1d58 "],
];

const StreamHalf = ({ text, encrypted }: { text: string; encrypted: boolean }) => (
  <span className={encrypted ? styles.streamHex : styles.streamPlain}>
    <span className={styles.streamTrack}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </span>
  </span>
);

// Readable text goes into the lock and comes out the far side as hex, in both directions.
// The lock clicks shut once when the card comes into view, and never opens again.
export const EncryptionArt = (): React.ReactElement => (
  <span className={styles.threats}>
    <span className={styles.streams}>
      {STREAMS.map(([plain, hex], index) => (
        <span key={hex} className={styles.stream} data-back={index % 2 === 1 || undefined}>
          <StreamHalf text={index % 2 ? hex : plain} encrypted={index % 2 === 1} />
          <StreamHalf text={index % 2 ? plain : hex} encrypted={index % 2 === 0} />
        </span>
      ))}
    </span>
    <svg className={styles.padlock} viewBox="0 0 64 76">
      <path className={styles.shackle} d="M16 34 V22 A16 16 0 0 1 48 22 V50" fill="none" stroke="currentColor" strokeLinecap="round" />
      <rect x="4" y="30" width="56" height="44" rx="10" fill="currentColor" />
      <circle cx="32" cy="48" r="6" fill="var(--omp-item)" />
      <path d="M32 50 V60" stroke="var(--omp-item)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  </span>
);

// Real repositories in github.com/openmultiplayer.
const REPOS = [
  ["open.mp", "launcher", "web", "omp-stdlib"],
  ["open.mp-sdk", "RakNet", "compiler", "open.mp-capi"],
  ["launcher", "omp-stdlib", "open.mp", "open.mp-sdk"],
  ["compiler", "web", "open.mp-capi", "RakNet"],
  ["omp-stdlib", "open.mp-sdk", "launcher", "compiler"],
];

const RepoNames = ({ names }: { names: string[] }) => (
  <span>
    {[...names, ...names].map((name, index) => (
      <b key={index}>{name}</b>
    ))}
  </span>
);

export const RepoArt = (): React.ReactElement => (
  <span className={styles.threats}>
    <span className={styles.repos}>
      {REPOS.map((names, index) => (
        <span key={index} className={index % 2 ? styles.rowBack : styles.rowOut}>
          <RepoNames names={names} />
          <RepoNames names={names} />
        </span>
      ))}
    </span>
    <FaGithub className={`${styles.padlock} ${styles.githubMark}`} />
  </span>
);

export const Cursor = ({ pressed = false }: { pressed?: boolean }): React.ReactElement => (
  <svg className={pressed ? `${styles.cursor} ${styles.cursorDown}` : styles.cursor} viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M5 2 L5 19 L10 14.5 L13.2 21.5 L16 20.2 L12.8 13.4 L19.5 13 Z" fill="#fff" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const AmxFile = () => (
  <svg viewBox="0 0 48 60" className={styles.amxFile}>
    <path className={styles.amxSheet} d="M6 0 H31 L48 17 V54 A6 6 0 0 1 42 60 H6 A6 6 0 0 1 0 54 V6 A6 6 0 0 1 6 0 Z" />
    <path className={styles.amxFold} d="M31 0 L48 17 H36 A5 5 0 0 1 31 12 Z" />
    <text className={styles.amxLabel} x="24" y="44" textAnchor="middle">AMX</text>
  </svg>
);

// A file you might still have lying about: SA-MP's classic gamemode, sitting in the server's
// gamemodes folder as it is. Still on purpose: the card is about nothing needing to change.
export const AmxArt = (): React.ReactElement => (
  <span className={styles.amxWindow}>
    <span className={styles.amxBar}>
      <FaFolderOpen aria-hidden="true" />
      server / gamemodes
    </span>
    <span className={styles.amx}>
      <span className={styles.amxItem}>
        <AmxFile />
        <span className={styles.amxName}>grandlarc.amx</span>
      </span>
    </span>
  </span>
);

// "The universe of C++ libraries": ones the open.mp server is built on (see lib/, SDK/lib/ and
// the Conan packages in its repository), in orbit around the logo.
const ORBITS = [
  { className: styles.orbitInner, names: ["RakNet", "SQLite", "OpenSSL", "ICU"] },
  { className: styles.orbitOuter, names: ["nlohmann/json", "cpp-httplib", "GLM", "cxxopts", "ttmath", "robin-hood"] },
];

export const CppArt = (): React.ReactElement => (
  <span className={styles.universe}>
    {ORBITS.map(({ className, names }) => (
      <span key={names[0]} className={`${styles.orbit} ${className}`}>
        {names.map((name, index) => (
          <span
            key={name}
            className={styles.planet}
            style={{ "--angle": `${(index * 360) / names.length}deg` } as React.CSSProperties}
          >
            <span>{name}</span>
          </span>
        ))}
      </span>
    ))}
    <SiCplusplus className={styles.cppLogo} />
  </span>
);

// NPCs going about their day, under the code that made them. Each row swaps between two
// states on its own clock, so they never change together.
const NPCS = [
  { name: "Ghost", first: "On foot", Icon1: FaPersonWalking, second: "Aiming", Icon2: FaCrosshairs },
  { name: "Wheelie", first: "Driving", Icon1: FaCar, second: "On foot", Icon2: FaPersonWalking },
  { name: "Rookie", first: "On foot", Icon1: FaPersonWalking, second: "Driving", Icon2: FaCar },
];

export const NpcListArt = (): React.ReactElement => (
  <span className={styles.npcs} aria-hidden="true">
    {NPCS.map(({ name, first, Icon1, second, Icon2 }) => (
      <span key={name} className={styles.npc}>
        <span className={styles.npcName}>{name}</span>
        <span className={styles.npcBadge}>NPC</span>
        <span className={styles.npcStates}>
          <span className={styles.npcState}>
            <Icon1 /> {first}
          </span>
          <span className={styles.npcState}>
            <Icon2 /> {second}
          </span>
        </span>
      </span>
    ))}
  </span>
);

const CODE_START = "#include <open.mp>\n\nmain() {}\n\n";
const CODE_SNIPPETS = [
  `public OnPlayerConnect(playerid)\n{\n    SendClientMessage(playerid, -1, "Hey!");\n    return 1;\n}`,
  `public OnPlayerSpawn(playerid)\n{\n    GivePlayerMoney(playerid, 1000);\n    return 1;\n}`,
  `public OnPlayerDeath(playerid)\n{\n    SetPlayerScore(playerid, 0);\n    return 1;\n}`,
];
// Everyone writes the short name first. Then remembers it isn't defined, and goes back.
const FULL_NAME = "SendClientMessage";
const SHORT_NAME = "SCM";

const CODE_TOKEN = /("[^"]*"?)|(#include|\bpublic\b|\breturn\b)|(<open\.mp>)|(\b[A-Za-z_]\w*(?=\())|(-?\b\d+\b)/g;

const highlight = (text: string): React.ReactNode[] => {
  const out: React.ReactNode[] = [];
  let end = 0;
  for (const match of text.matchAll(CODE_TOKEN)) {
    const start = match.index;
    if (start > end) out.push(text.slice(end, start));
    const className = match[1] || match[3] ? styles.tokString : match[2] ? styles.tokKeyword : match[4] ? styles.tokFunction : styles.tokNumber;
    out.push(<span key={start} className={className}>{match[0]}</span>);
    end = start + match[0].length;
  }
  if (end < text.length) out.push(text.slice(end));
  return out;
};

const pause = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

// Someone writing a gamemode, forever: one callback after another. The one that calls
// SendClientMessage gets written whole with SCM first, then corrected from the top. Static
// without JavaScript or with reduced motion, and idle while off screen.
export const CodeTyper = (): React.ReactElement => {
  const first = CODE_START + CODE_SNIPPETS[0];
  const [code, setCode] = useState({ text: first, caret: first.length });
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !root.current) return undefined;
    let stopped = false;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.5 });
    observer.observe(root.current);
    const step = async (text: string, caret: number, ms: number) => {
      await pause(ms);
      while (!visible && !stopped) await pause(250);
      if (!stopped) setCode({ text, caret });
    };
    const clear = async (text: string) => {
      for (let n = text.length - 1; n >= CODE_START.length && !stopped; n -= 1) await step(text.slice(0, n), n, 10);
    };
    const write = async (text: string) => {
      for (let n = CODE_START.length + 1; n <= text.length && !stopped; n += 1) await step(text.slice(0, n), n, 24 + (n % 7) * 5);
    };
    const writeWithMistake = async (correct: string) => {
      const nameAt = correct.indexOf(FULL_NAME);
      const before = correct.slice(0, nameAt);
      const after = correct.slice(nameAt + FULL_NAME.length);
      const wrong = before + SHORT_NAME + after;
      await write(wrong);
      await pause(1300);
      for (let at = wrong.length - 1; at >= before.length + SHORT_NAME.length && !stopped; at -= 1) await step(wrong, at, 16);
      await pause(450);
      for (let k = SHORT_NAME.length - 1; k >= 0 && !stopped; k -= 1) {
        await step(before + SHORT_NAME.slice(0, k) + after, before.length + k, 110);
      }
      await pause(250);
      for (let k = 1; k <= FULL_NAME.length && !stopped; k += 1) {
        await step(before + FULL_NAME.slice(0, k) + after, before.length + k, 36);
      }
      await pause(600);
      await step(correct, correct.length, 10);
    };
    const run = async () => {
      let shown = first;
      await pause(1800);
      for (let snippet = 0; !stopped; snippet = (snippet + 1) % CODE_SNIPPETS.length) {
        const next = CODE_START + CODE_SNIPPETS[snippet];
        await clear(shown);
        await pause(450);
        if (next.includes(FULL_NAME)) await writeWithMistake(next);
        else await write(next);
        shown = next;
        await pause(3000);
      }
    };
    run();
    return () => {
      stopped = true;
      observer.disconnect();
    };
  }, [first]);

  return (
    <div ref={root} className={styles.editor} aria-hidden="true">
      <div className={styles.editorBar}>
        <i />
        <i />
        <i />
        <span>gamemode.pwn</span>
      </div>
      <pre className={styles.editorCode}>
        {highlight(code.text.slice(0, code.caret))}
        <span className={styles.editorCaret} />
        {highlight(code.text.slice(code.caret))}
      </pre>
    </div>
  );
};
