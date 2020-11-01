import markdown from "remark-parse";
import html from "remark-html";
import admonitions from "remark-admonitions";
import parseHtml from "html-react-parser";
import unified from "unified";

export default ({ name = "function" }) => {
  let result = unified().use(markdown).use(admonitions, {}).use(html).processSync(`:::note \n\n${name} ini diawali dengan huruf kecil.\n\n:::`);
  return parseHtml(result.contents);
};
