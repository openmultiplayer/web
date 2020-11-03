import markdown from "remark-parse";
import html from "remark-html";
import admonitions from "remark-admonitions";
import parseHtml from "html-react-parser";
import unified from "unified";

export default ({ version, name = "function" }) => {
  let result = unified().use(markdown).use(admonitions, {}).use(html).processSync(`:::warning \n\n${name} ini telah ditambahkan dalam ${version} dan tidak bekerja pada versi dibawahnya!\n\n:::`);
  return parseHtml(result.contents);
};
