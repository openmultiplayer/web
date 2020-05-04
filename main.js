const fs = require("fs");
const path = require('path');

function parseDir(filename) {
    var stats = fs.lstatSync(filename);

    var info = {}

    if (stats.isDirectory()) {
        if (path.basename(filename) == 'docs') {
            info.docs = fs.readdirSync(filename).map(function (child) {
                return parseDir(filename + '/' + child);
            });
        } else {
            info.type = 'category'
            info.label = path.basename(filename);
            info.items = fs.readdirSync(filename).map(function (child) {
                return parseDir(filename + '/' + child);
            });
        }

    } else {
        let tmpPath = filename.split("/");
        // remove `filename.md` and `docs/`
        tmpPath.pop();
        tmpPath.splice(0, 1);
        let docPath = '';
        tmpPath.map((name) => docPath = docPath + name + '/');
        return docPath + path.basename(filename).replace('.md', '');
    }
    return info;
}

let test = parseDir('docs');
console.log(test);

fs.writeFile('message.json', JSON.stringify(test), 'utf8', () => {
    console.log("hi");
})