const fs = require("fs");
const path = require("path");

module.exports = {
  i18n: {
    locales: fs
      .readdirSync("content")
      .filter((v) => fs.statSync(path.join("content", v)).isDirectory())
      .map((v) => v),
    defaultLocale: "en",
  },
};
