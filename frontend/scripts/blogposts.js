const fs = require("fs");
const mdx = require("@mdx-js/mdx");
const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const visit = require("unist-util-visit");
const matter = require("gray-matter");

const POSTS_DIRECTORY = "./content/en/blog/";

const extractMdxMeta = (filename) => {
  const { data } = matter(fs.readFileSync(POSTS_DIRECTORY + filename, "utf8"));

  if (data.title === undefined) {
    throw new Error("property 'title' not found in meta for post " + filename);
  }
  if (data.author === undefined) {
    throw new Error("property 'author' not found in meta for post " + filename);
  }
  if (data.date === undefined) {
    throw new Error("property 'date' not found in meta for post " + filename);
  }
  return data;
};

const getBlogPostPages = () =>
  fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((v) => v.endsWith(".mdx"))
    .map((filename) => ({
      filename,
      slug: filename.substring(0, filename.indexOf(".mdx")),
      ...extractMdxMeta(filename),
    }))
    .map((post) => ({ ...post, date: new Date(post.date) }))
    .sort((a, b) => b.date - a.date);

module.exports = getBlogPostPages;
