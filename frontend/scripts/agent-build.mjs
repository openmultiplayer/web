// Runs after `docusaurus build`. Gives every page a Markdown twin and writes the files
// agents look for: llms.txt, agent-instructions.md, sitemap.md, robots.txt and 404.md. All
// plain files, so any static host (GitHub Pages included) serves them. Also writes
// agent-manifest.json, an inventory of the build for a server that wants to answer
// Accept: text/markdown on the page URLs themselves. Usage: agent-build.mjs [buildDir]
import * as cheerio from "cheerio";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const buildDir = path.resolve(process.argv[2] || "build");
const origin = (process.env.SITE_URL || "https://open.mp").replace(/\/$/, "");

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
turndown.use(gfm);
turndown.addRule("codeBlock", {
  filter: (node) => node.nodeName === "PRE",
  replacement: (_content, node) => {
    const code = node.querySelector("code") || node;
    const language = /language-([\w-]+)/.exec(`${code.getAttribute("class") || ""} ${node.getAttribute("class") || ""}`)?.[1] || "";
    return `\n\n\`\`\`${language}\n${code.textContent.replace(/\n$/, "")}\n\`\`\`\n\n`;
  },
});

const MIME = {
  html: "text/html", md: "text/markdown", txt: "text/plain", xml: "application/xml", json: "application/json",
  js: "text/javascript", css: "text/css", map: "application/json", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg",
  gif: "image/gif", webp: "image/webp", svg: "image/svg+xml", ico: "image/x-icon", woff: "font/woff", woff2: "font/woff2",
  ttf: "font/ttf", otf: "font/otf", mp4: "video/mp4", webm: "video/webm", mp3: "audio/mpeg", pdf: "application/pdf",
  zip: "application/zip", webmanifest: "application/manifest+json",
};
const typeOf = (file) => MIME[path.extname(file).slice(1).toLowerCase()] || "application/octet-stream";

async function walk(dir, found = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, found);
    else found.push(full);
  }
  return found;
}

const webPath = (file) => `/${path.relative(buildDir, file).split(path.sep).join("/")}`;
const isErrorDoc = (p) => /^\/(?:[a-zA-Z-]+\/)?404\.html$/.test(p);
// Static HTML files that are not pages of the site.
const isVerification = (p) => /^(?:\/[a-zA-Z-]+)?\/google[0-9a-f]+\.html$/.test(p) || /^(?:\/[a-zA-Z-]+)?\/images\//.test(p);
const routeOf = (htmlPath) => {
  const route = htmlPath.replace(/(?:\/index)?\.html$/, "");
  return route === "" ? "/" : route;
};
const markdownOf = (htmlPath) => (htmlPath === "/index.html" ? "/index.md" : htmlPath.replace(/\.html$/, ".md"));

// Live data the page only loads in the browser, which a Markdown reader would otherwise miss.
const LIVE_NOTES = [
  [/^(?:\/[a-zA-Z-]+)?\/servers$/, `The server list is loaded live in the browser. Read it directly as JSON from https://api.open.mp/servers/ (details for one server: https://api.open.mp/servers/{ip:port}).`],
  [/^(?:\/[a-zA-Z-]+)?\/partners$/, `The partner list is loaded live in the browser. Read it from https://api.open.mp/servers/ and keep the entries where \`pr\` is true.`],
];

function toMarkdown(html, route) {
  const $ = cheerio.load(html);
  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim() || "";
  const language = $("html").attr("lang") || "en";
  const root = $("article").length === 1 ? $("article").first() : $("#__docusaurus_skipToContent_fallback").first();
  root.find(
    'script, style, svg, button, nav, aside, footer, [aria-hidden="true"], [role="img"], .hash-link, .pagination-nav, .theme-edit-this-page, .theme-doc-toc-mobile, .theme-doc-toc-desktop, .theme-doc-breadcrumbs, .theme-doc-version-badge, .loading-banner, img[alt=""]',
  ).remove();
  root.find("pre br").replaceWith("\n");
  root.find("pre .token-line").each((_, line) => {
    const node = $(line);
    if (!node.text().endsWith("\n")) node.append("\n");
  });
  root.find("a[href]").each((_, a) => {
    const href = $(a).attr("href");
    if (href?.startsWith("/")) $(a).attr("href", `${origin}${href}`);
  });
  root.find("img[src]").each((_, img) => {
    const src = $(img).attr("src");
    if (src?.startsWith("/")) $(img).attr("src", `${origin}${src}`);
  });
  const body = turndown.turndown(root.html() || "").replace(/\n{3,}/g, "\n\n").trim();
  const note = LIVE_NOTES.find(([pattern]) => pattern.test(route))?.[1];
  const canonical = `${origin}${route === "/" ? "/" : route}`;
  const front = [
    "---",
    `title: ${JSON.stringify(title)}`,
    ...(description ? [`description: ${JSON.stringify(description)}`] : []),
    `canonical: ${canonical}`,
    `language: ${language}`,
    "---",
    "",
  ].join("\n");
  return { title, description, canonical, language, markdown: `${front}\n${body || description}${note ? `\n\n${note}` : ""}\n` };
}

// The theme is normally set by an inline script, which would leave the page light with
// JavaScript off. This is the fallback: with JavaScript on, the script replaces it before paint.
const withTheme = (html) => html.replace(/<html(?![^>]*data-theme)/, "<html data-theme=dark");
const injectLinks = (html, markdownUrl) =>
  withTheme(html).replace(
    "</head>",
    `<link rel="alternate" type="text/markdown" href="${markdownUrl}"><link rel="describedby" href="${origin}/llms.txt"></head>`,
  );

// Only English pages get a Markdown copy: agents read English, and copying all 25 languages
// would add tens of thousands of files and minutes to every build for little gain.
const isEnglish = (html) => /<html[^>]*\slang=["']?en(?:-[A-Za-z]+)?(?=["'\s>])/.test(html);

const files = await walk(buildDir);
const routes = {};
const pages = [];
const errorDocs = [];

for (const file of files) {
  const htmlPath = webPath(file);
  if (!htmlPath.endsWith(".html") || isVerification(htmlPath)) continue;
  const html = await readFile(file, "utf8");
  if (!isEnglish(html)) {
    await writeFile(file, withTheme(html));
    continue;
  }
  if (isErrorDoc(htmlPath)) {
    errorDocs.push(htmlPath);
    const prefix = htmlPath.replace(/\/404\.html$/, "");
    await writeFile(file, injectLinks(html, `${origin}${prefix}/404.md`));
    await writeFile(
      path.join(buildDir, `${prefix.slice(1)}/404.md`.replace(/^\//, "")),
      `# 404: page not found\n\nThis address does not exist on open.mp. Do not keep guessing URLs; use one of these:\n\n- [Site index for agents](${origin}/llms.txt)\n- [Every page](${origin}/sitemap.md)\n- [XML sitemap](${origin}/sitemap.xml)\n`,
    );
    continue;
  }
  const route = routeOf(htmlPath);
  const mdPath = markdownOf(htmlPath);
  const page = toMarkdown(html, route);
  await writeFile(path.join(buildDir, mdPath.slice(1)), page.markdown);
  await writeFile(file, injectLinks(html, `${origin}${mdPath}`));
  routes[route] = { html: htmlPath, markdown: mdPath, canonical: page.canonical, language: page.language };
  pages.push({ route, mdPath, title: page.title.replace(/ \| .*$/, ""), language: page.language });
}

const defaultLanguagePages = pages.filter((page) => !/^\/(?:ar|bs|de|es|fa|fil|fr|hu|id|it|nl|pl|pt-BR|ro|ru|sl|sr|ta|th|tr|uk|vi|zh-CN|zh-TW)(?:\/|$)/.test(page.route));
const link = (page) => `- [${page.title}](${origin}${page.mdPath})`;
const pick = (pattern) => defaultLanguagePages.filter((page) => pattern.test(page.route)).sort((a, b) => a.route.localeCompare(b.route));

const llms = `# open.mp

> open.mp (Open Multiplayer) is a multiplayer mod for Grand Theft Auto: San Andreas, fully backwards compatible with SA-MP. This site has its documentation, scripting reference, downloads, server list and blog.

## When to use this site

- Install or run the open.mp launcher or server.
- Look up Pawn scripting functions, callbacks and constants for open.mp and SA-MP.
- Move a SA-MP gamemode or server to open.mp.
- Find current launcher and server releases, or list public servers.

## Start here

- [Agent instructions](${origin}/agent-instructions.md)
- [Every page](${origin}/sitemap.md)
- [Documentation](${origin}/docs.md)
- [Server installation](${origin}/docs/server/Installation.md)
- [Launcher downloads](${origin}/downloads/launcher.md)
- [Server downloads](${origin}/downloads/server.md)
- [Changelog](${origin}/docs/changelog.md)

## Data

- [Public server list as JSON](https://api.open.mp/servers/)

## Optional

- [Blog](${origin}/blog.md)
- [Animations reference](${origin}/animations.md)
- [Source code](https://github.com/openmultiplayer)
`;

const instructions = `# open.mp: how to use this site

> The canonical website is ${origin}/. Pages are available as HTML for people and as Markdown for agents.

## Reading pages

Add \`.md\` to any page's path to get it as Markdown:

\`\`\`bash
curl ${origin}/docs/server/Installation.md
\`\`\`

Start from [llms.txt](${origin}/llms.txt) or the [list of every page](${origin}/sitemap.md). Each Markdown page begins with frontmatter holding its title, canonical URL and language. Cite the canonical URL.

## Live data

The server list is at https://api.open.mp/servers/ as a JSON array. Useful fields: \`ip\`, \`hn\` (name), \`pc\` (players), \`pm\` (max players), \`gm\` (game mode), \`la\` (language), \`pa\` (password), \`omp\` (runs open.mp), \`pr\` (partner). Details for one server are at https://api.open.mp/servers/{ip:port}.

## Boundaries

This website does not offer an MCP server, or any API for changing a game server. Reading a page or the server list does not change anything. Do not claim otherwise, and do not invent endpoints.

## Missing pages

If a page is missing, go back to these indexes rather than guessing addresses.
`;

const sitemapMd = `# open.mp: every page\n\n${[
  ["Main", /^\/(?:$|servers$|partners$|downloads\/|animations$|uid$)/],
  ["Documentation", /^\/docs(?:\/|$)/],
  ["Blog", /^\/blog(?:\/|$)/],
]
  .map(([name, pattern]) => `## ${name}\n\n${pick(pattern).map(link).join("\n")}`)
  .join("\n\n")}\n\n## For agents\n\n- [llms.txt](${origin}/llms.txt)\n- [Agent instructions](${origin}/agent-instructions.md)\n`;

await writeFile(path.join(buildDir, "llms.txt"), llms);
await writeFile(path.join(buildDir, "agent-instructions.md"), instructions);
await writeFile(path.join(buildDir, "sitemap.md"), sitemapMd);
await writeFile(
  path.join(buildDir, "robots.txt"),
  `User-agent: *\nContent-Signal: search=yes, ai-input=yes, ai-train=yes\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
);

const manifestFiles = {};
for (const file of await walk(buildDir)) {
  const p = webPath(file);
  if (p === "/agent-manifest.json") continue;
  manifestFiles[p] = { type: typeOf(p) };
}
for (const route of Object.values(routes)) manifestFiles[route.markdown].canonical = route.canonical;
for (const doc of errorDocs) {
  manifestFiles[doc.replace(/\.html$/, ".md")].noindex = true;
}
const manifest = { origin, routes, files: manifestFiles, errorDocuments: errorDocs };
await writeFile(path.join(buildDir, "agent-manifest.json"), `${JSON.stringify(manifest)}\n`);
const size = (await stat(path.join(buildDir, "agent-manifest.json"))).size;
console.log(`Agent build: ${pages.length} pages mirrored to Markdown, ${errorDocs.length} error documents, manifest ${Math.round(size / 1024)} KB.`);
