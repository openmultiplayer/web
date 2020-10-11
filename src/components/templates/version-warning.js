import markdown from "remark-parse";
import html from "remark-html";
import admonitions from "remark-admonitions";
import parseHtml from "html-react-parser";
import unified from "unified";

export default ({ version, name = "function" }) => {
  let result = unified()
    .use(markdown)
    .use(admonitions, {})
    .use(html)
    .processSync(
      `:::warning \n\nThis ${name} was added in ${version} and will not work in earlier versions!\n\n:::`
    );
  return parseHtml(result.contents);
};
