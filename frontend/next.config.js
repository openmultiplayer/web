const fs = require("fs");
const path = require("path");

const parseDir = require("./scripts/gentree");
const generateCache = require("./scripts/gencache");

generateCache();

module.exports = (phase) => {
  console.log("Phase:", phase);
  return {
    serverRuntimeConfig: { phase },
    env: {
      tree: parseDir("../docs"),
    },
    i18n: {
      locales: fs
        .readdirSync("content")
        .filter((v) => fs.statSync(path.join("content", v)).isDirectory()),
      defaultLocale: "en",
    },
    images: {
      domains: ["assets.open.mp"],
    },
  };
};
