import { readdirSync, statSync } from "fs";
import { join } from "path";

import parseDir from "./scripts/gentree.mjs";

const localesFromContent = readdirSync("content").filter((v) =>
  statSync(join("content", v)).isDirectory()
);

const localesFromDocs = readdirSync("../docs/translations").filter((v) =>
  statSync(join("../docs/translations", v)).isDirectory()
);

const locales = [
  ...new Set([...localesFromContent, ...localesFromDocs]),
].sort();

const config = (phase) => {
  return {
    serverRuntimeConfig: { phase },
    env: {
      tree: parseDir("../docs"),
    },
    i18n: {
      locales: locales,
      defaultLocale: "en",
    },
    images: {
      domains: ["assets.open.mp", "api.open.mp", "localhost"],
      formats: ["image/avif", "image/webp"],
    },

    // prettier-ignore
    redirects() {
      return [
        { source: "/forum", destination: "https://forum.open.mp", permanent: false},
        { source: "/wiki", destination: "https://open.mp/docs ", permanent: true},
        { source: "/links", destination: "https://linktr.ee/openmultiplayer", permanent: true},
        { source: "/videos", destination: "https://youtube.com/openmultiplayer", permanent: true},
        { source: "/youtube", destination: "https://youtube.com/openmultiplayer", permanent: true},
        { source: "/live", destination: "https://twitch.tv/openmultiplayer", permanent: true},
        { source: "/twitch", destination: "https://twitch.tv/openmultiplayer", permanent: true},
        { source: "/stream", destination: "https://twitch.tv/openmultiplayer", permanent: true},
        { source: "/twitter", destination: "https://x.com/openmultiplayer", permanent: true},
        { source: "/x", destination: "https://x.com/openmultiplayer", permanent: true},
        { source: "/instagram", destination: "https://instagram.com/openmultiplayer", permanent: true},
      ]
    },
  };
};

export default config;
