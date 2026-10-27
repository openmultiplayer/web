# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It serves as the primary documentation and wiki for open.mp and SA-MP.

## Documentation Structure

- **Docs Source:** All documentation pages are located in `docs/`. They are written in Markdown (`.md`) or MDX (`.mdx`).
- **Translations:** Localized content is stored in `i18n/`. Each language has its own subdirectory (e.g., `i18n/es/` for Spanish).
- **Static Assets:** Images and other static files used in docs are in `static/images/`.

## Contributing to Documentation

We welcome contributions to our documentation! Whether you're fixing a typo or adding a new guide, your help is appreciated.

### Local Development

To preview your changes locally:

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000`. Most changes to Markdown files will live-reload in the browser.

   #### Choosing a locale

   ```bash
   npm start -- --locale pt-BR    # http://localhost:3000/pt-BR/
   npm start -- --locale zh-CN    # http://localhost:3000/zh-CN/
   ```

   `start` accepts a **single** locale — a second `--locale` is silently ignored (the last one wins) — so run one dev server per language on different ports.

### Adding or Editing Pages

- To **edit** an existing page, find the corresponding `.md` file in `docs/` and make your changes.
- To **add** a new page, create a new `.md` file in the appropriate subdirectory of `docs/`.
- Remember to update the **metadata** (front matter) at the top of the file:

  ```markdown
  ---
  title: Page Title
  sidebar_label: Sidebar Label
  description: Brief description of the page.
  ---
  ```

### Workflow

For a detailed guide on our documentation standards and the "Edit this page" workflow, please refer to the [Contributing Guide](docs/meta/Contributing.md).

## Project Commands

### Installation

```bash
npm i
```

### Local Development

```bash
npm start                      # default locale
npm start -- --locale pt-BR    # specific locale
```

### Build

```bash
npm run build                                                 # all locales
npm run build -- --locale pt-BR                               # one locale
npm run build -- --locale en --locale pt-BR --locale zh-CN    # several locales
```

This command generates static content into the `build` directory.

### Local Preview

```bash
npm run serve
```

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
