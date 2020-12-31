const fs = require("fs");
const path = require("path");

const parseDir = require("./scripts/gentree");
const getBlogPostPages = require("./scripts/blogposts");
const generateCache = require("./scripts/gencache");

generateCache();

module.exports = {
  env: {
    tree: parseDir("../docs"),
    BLOG_POST_LIST: getBlogPostPages(),
  },
  i18n: {
    locales: fs
      .readdirSync("content")
      .filter((v) => fs.statSync(path.join("content", v)).isDirectory())
      .map((v) => v),
    defaultLocale: "en",
  },
  images: {
    domains: ["assets.open.mp"],
  },
};
