const fs = require("fs");
const path = require("path");
const ISO6391 = require("iso-639-1");

const SIDE_BAR_NAME = "Sidebar";
const CATEGORY_NAME_CAPITALIZATION = true;

function parseDir(filename) {
  const stats = fs.lstatSync(filename);
  const info = {};

  // check if it's a directory
  if (stats.isDirectory()) {
    // if it's `docs` directory, set it as main and first key
    if (path.basename(filename) === "docs") {
      info[SIDE_BAR_NAME] = fs.readdirSync(filename).map(function (child) {
        return parseDir(filename + "/" + child);
      });
    }
    // it's a directory inside `docs` folder
    else {
      info.type = "category";
      let catName = path.basename(filename);

      if (catName[0] == "_") {
        catName = catName.substring(1);
      }
      catName = catName.replace("_", " ");

      if (catName.length == 2) {
        catName = ISO6391.getNativeName(catName);
      } else if (catName.length == 5) {
        // Taiwan uses Traditional Chinese as its script, we're using ISO codes
        // for countries not languages, so this slight modification is for that.
        if (catName == "zh-tw") {
          catName = "正體中文/繁體中文";
        }
      }

      if (CATEGORY_NAME_CAPITALIZATION) {
        info.label = catName.charAt(0).toUpperCase() + catName.substring(1);
      } else {
        info.label = catName;
      }

      // sort files and directories alphabetical and files first
      const sortedFilesAndDirs = fs
        .readdirSync(filename, "utf8")
        .map((child) => {
          const path = filename + "/" + child;
          return {
            name: child,
            isDir: fs.lstatSync(path).isDirectory(),
          };
        })
        .sort((a, b) =>
          b.isDir - a.isDir || a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : -1
        );

      info.items = sortedFilesAndDirs.map(function (item) {
        return parseDir(filename + "/" + item.name);
      });

      // ignore `index.md` and `README.md` files in directories placed in `docs`
      let index = info.items.length;
      while (index--) {
        if (
          (typeof info.items[index] === "string" &&
            info.items[index].includes("index")) ||
          (typeof info.items[index] === "string" &&
            info.items[index].includes("README"))
        ) {
          info.items.splice(index, 1);
        }
      }
    }
  }
  // it's a file, so it should be path/to/file starting in `docs` directory as root
  else {
    // remove `filename.md` and `docs/`
    const tmpPath = filename.split("/");
    tmpPath.pop();
    tmpPath.splice(0, 1);
    let docPath = "";
    tmpPath.map((name) => (docPath = docPath + name + "/"));
    return (
      docPath + path.basename(filename).replace(".mdx", "").replace(".md", "")
    );
  }
  return info;
}

module.exports = {
  env: { tree: parseDir("../docs") },
  i18n: {
    locales: fs
      .readdirSync("content")
      .filter((v) => fs.statSync(path.join("content", v)).isDirectory())
      .map((v) => v),
    defaultLocale: "en",
  },
};
