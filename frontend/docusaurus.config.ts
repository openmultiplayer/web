import { NormalizedSidebarItem } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "open.mp",
  tagline: "Open Multiplayer",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://open.mp/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // Remove trailing slash at the end, it's added by either the host or CF
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "openmultiplayer", // Usually your GitHub org/user name.
  projectName: "web", // Usually your repo name.

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
  },

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  onBrokenAnchors: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "es",
      "ru",
      "ar",
      "bs",
      "de",
      "fil",
      "fr",
      "fa",
      "hu",
      "id",
      "it",
      "pl",
      "pt-BR",
      "ro",
      "sl",
      "sr",
      "ta",
      "th",
      "tr",
      "vi",
      "zh-CN",
      "zh-TW",
    ],
  },

  staticDirectories: ["public"],

  plugins: [
    async function serverRoutesPlugin(context, options) {
      return {
        name: "server-routes-plugin",
        async contentLoaded({ actions }) {
          const { addRoute } = actions;

          // Add the dynamic route
          addRoute({
            path: "/servers/",
            component: "@site/src/pages/servers/index.tsx",
            exact: false,
          });
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            args.categoriesMetadata = {
              scripting: {
                label: "Scripting",
                position: 1,
              },
              server: {
                label: "Server",
                position: 2,
              },
              client: {
                label: "Client",
                position: 3,
              },
              tutorials: {
                label: "Tutorials",
                position: 4,
              },
            };

            const normalizeCategoryNames = (items: NormalizedSidebarItem[]) => {
              const categories: NormalizedSidebarItem[] = [];
              const nonCategories: NormalizedSidebarItem[] = [];

              items.forEach((item) => {
                if (item.type === "category") {
                  item.label =
                    item.label.charAt(0).toUpperCase() + item.label.slice(1);
                  item.items = normalizeCategoryNames(item.items);

                  categories.push(item);
                } else {
                  if (item.type === "doc") {
                    if (!item.label) {
                      const split = item.id.split("/");
                      const name = split[split.length - 1];
                      item.label = name.charAt(0).toUpperCase() + name.slice(1);
                    }
                  }
                  nonCategories.push(item);
                }
              });

              return [...categories, ...nonCategories];
            };

            const items = await defaultSidebarItemsGenerator(args);

            items.forEach((item) => {
              if (item.type === "category") {
                item.items = normalizeCategoryNames(item.items);
              } else if (item.type === "doc") {
                if (!item.label) {
                  const split = item.id.split("/");
                  const name = split[split.length - 1];
                  item.label = name.charAt(0).toUpperCase() + name.slice(1);
                }
              }
            });

            return items;
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/openmultiplayer/web/edit/master/frontend/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/openmultiplayer/web/edit/master/frontend/blog",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "images/assets/wordmark-coloured-bg.png",
    navbar: {
      title: "Open Multiplayer",
      logo: {
        alt: "open.mp logo",
        src: "images/assets/logo-light-trans.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "right",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "right" },
        { to: "https://forum.open.mp/", label: "Forums", position: "right" },
        { to: "/servers", label: "Servers", position: "right" },
        { to: "/partners", label: "Partners", position: "right" },
        // {
        //   href: "https://github.com/openmultiplayer",
        //   label: "GitHub",
        //   position: "right",
        // },
        {
          href: "https://opencollective.com/openmultiplayer",
          label: "Donate",
          position: "right",
        },
        {
          type: "localeDropdown", // This adds the language switcher
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "open.mp logo",
        src: "images/assets/logo.svg",
      },
      style: "dark",
      links: [
        {
          title: "Documentations",
          items: [
            {
              label: "Introduction",
              to: "docs",
            },
            {
              label: "open.mp Migration",
              to: "docs",
            },
            {
              label: "config.json",
              to: "docs/server/config.json",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/samp",
            },
            {
              label: "GitHub",
              href: "https://github.com/openmultiplayer/open.mp",
            },
            {
              label: "Donate",
              href: "https://opencollective.com/openmultiplayer",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/openmultiplayer",
            },
            {
              label: "X",
              href: "https://x.com/openmultiplayer",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Servers",
              to: "/servers",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "UID Generator",
              to: "/uid",
            },
            {
              label: "SA-MP",
              href: "https://sa-mp.mp/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} open.mp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "AOKXGK39Z7",

      // Public API key: it is safe to commit it
      apiKey: "54204f37e5c8fc2871052d595ee0505e",

      indexName: "open",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
