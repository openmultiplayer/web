# open.mp Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It serves as the primary documentation and wiki for open.mp and SA-MP.

## Project layout

- `docs/` — all documentation pages, written in Markdown (`.md`) or MDX (`.mdx`).
- `i18n/` — localized content, with one directory per locale (`i18n/es/`, `i18n/pt-BR/`, …).
- `src/` — React pages, theme overrides, and shared components.
- `static/` — static files; documentation images live in `static/images/`.

## Local development

Node.js 20 or newer is required.

To preview your changes locally, install the dependencies and start the development server:

```bash
cd frontend
npm install
npm start
```

The site will be available at <http://localhost:3000>. Most changes to Markdown files will live-reload in the browser.

To preview a translation, run one dev server per locale:

```bash
npm start -- --locale <locale>    # one locale per server
```

`start` takes a single locale — passing `--locale` twice does not start two sites; the last value wins silently. Run a separate dev server per language, with different ports if needed:

```bash
npm start -- --locale pt-BR --port 3001
npm start -- --locale es --port 3002
```

## Documentation

We welcome contributions to our documentation! Whether you're fixing a typo or adding a new guide, your help is appreciated.

- To edit an existing page, find the corresponding `.md` or `.mdx` file under `docs/` and make your changes.
- To add a new page, create a `.md` or `.mdx` file in the appropriate subdirectory of `docs/`.
- Remember to update the metadata (front matter) at the top of the file:

```markdown
---
title: Page Title
sidebar_label: Sidebar Label
description: Brief description of the page.
---
```

See the [Contributing Guide](docs/meta/Contributing.md) for our documentation standards and the "Edit this page" workflow.

## UI translations (`code.json`)

UI strings live in `i18n/<locale>/code.json` and are generated from the `translate()` / `<Translate>` calls in the source. Update a locale with:

```bash
npm run write-translations -- --locale <locale>
```

This keeps existing messages, fills in missing keys, and refreshes descriptions from the English source. `message` is the rendered text; `description` is translator context only — it is not rendered, so leave it in English.

Use `import Translate, { translate }` rather than `{ default as Translate }`; aliasing the default import hides those keys from the extractor. The command never deletes obsolete keys, so clean up unused keys separately.

## Build and preview

```bash
npm run build                                    # all locales, plus the agent Markdown files
npx docusaurus build --locale <locale>           # one locale
npx docusaurus build --locale es --locale pt-BR # several locales
```

Unlike `start`, `build` accepts repeated `--locale` flags.

This generates static content in the `build` directory. `npm run build` builds every locale and then runs `scripts/agent-build.mjs`, which mirrors English pages to Markdown and writes `llms.txt`, `sitemap.md`, `agent-manifest.json`, and related files. A single-locale build skips that step; for English, run `node scripts/agent-build.mjs` afterward if you need those files.

To preview the production build:

```bash
npm run serve
```

## Deployment

If you are using GitHub Pages for hosting, `npm run deploy` builds the site and pushes it to the `gh-pages` branch:

```bash
USE_SSH=true npm run deploy
# or
GIT_USER=<your GitHub username> npm run deploy
```
