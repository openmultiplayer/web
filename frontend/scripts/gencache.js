const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getFiles(dirPath, list = []) {
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

  return list;
}

function generateCache() {
  const files = getFiles("../docs/");
  let cacheData = [];
  files.forEach((file, index) => {
    const id = path.parse(file).base.replace(/\.md$/, "");
    const content = fs.readFileSync(file, "utf8");
    const url = file
      .replace("..\\", "")
      .replace(/(?:\\[\\]|[\\]+)+/g, "/")
      .replace(".md", "");

    cacheData.push({
      id,
      title: matter(content).data.title || id,
      url,
    });
  });

  try {
    fs.readdirSync("cache");
  } catch (e) {
    fs.mkdirSync("cache");
  }

  fs.writeFile(
    "cache/data.js",
    `export default ${JSON.stringify(cacheData)};`,
    function (err) {
      if (err) return console.log(err);
      console.log("cache for documentation pages created.");
    }
  );
}

module.exports = generateCache;
