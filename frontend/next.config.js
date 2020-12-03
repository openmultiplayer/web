const fs = require("fs");
const path = require("path");
const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

const parseDir = require("./scripts/gentree");
const getBlogPostPages = require("./scripts/blogposts");

module.exports = withMDX({
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
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ["assets.open.mp"],
  },
});
