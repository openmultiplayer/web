const fs = require("fs");
const path = require('path');

const SIDE_BAR_NAME = 'Sidebar';
const CATEGORY_NAME_CAPITALIZATION = true;

function parseDir(filename) {
  const stats = fs.lstatSync(filename);
  const info = {}

  // check if it's a directory
  if (stats.isDirectory()) {
    // if it's `docs` directory, set it as main and first key
    if (path.basename(filename) === 'docs') {
      info[SIDE_BAR_NAME] = fs.readdirSync(filename).map(function (child) {
        return parseDir(filename + '/' + child);
      });
    }
    // it's a directory inside `docs` folder
    else {
      info.type = 'category'
      const catName = path.basename(filename);

      if (CATEGORY_NAME_CAPITALIZATION) {
        info.label = catName.charAt(0).toUpperCase() + catName.substring(1);
      } else {
        info.label = catName;
      }

      info.items = fs.readdirSync(filename).map(function (child) {
        return parseDir(filename + '/' + child);
      });
    }
  }
  // it's a file, so it should be path/to/file starting in `docs` directory as root
  else {
    // remove `filename.md` and `docs/`
    let tmpPath = filename.split("/");
    tmpPath.pop();
    tmpPath.splice(0, 1);
    let docPath = '';
    tmpPath.map((name) => docPath = docPath + name + '/');
    return docPath + path.basename(filename).replace('.md', '');
  }
  return info;
}

module.exports = parseDir('docs');
