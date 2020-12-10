const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getFiles(dirPath, list = []) {
  if (!dirPath.includes("translations")) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const fileStat = fs.lstatSync(filePath);

      if (fileStat.isDirectory()) {
        getFiles(filePath, list);
      } else if (/\.md$/.test(filePath)) {
        list.push(filePath);
      }
    });
  }

  return list;
}

function generateCache() {
  const files = getFiles("../docs/");
  let cacheData = [];
  files.forEach((file, index) => {
    const id = path.parse(file).base.replace(/\.md$/, "");
    const content = fs.readFileSync(file, "utf8");
    const url = file
      .replace(/(?:\\[\\]|[\\]+)+/g, "/")
      .replace("../", "")
      .replace("docs/", "")
      .replace(".md", "");

    cacheData.push({
      id,
      title: matter(content).data.title || id,
      url,
    });
  });

  cacheData.sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  try {
    fs.readdirSync("cache");
  } catch (e) {
    fs.mkdirSync("cache");
  }

  fs.writeFile(
    "cache/data.js",
    `module.exports = ${JSON.stringify(cacheData)};`,
    function (err) {
      if (err) return console.log(err);
      console.log("cache data for documentation pages has been created.");
    }
  );
}

module.exports = generateCache;
