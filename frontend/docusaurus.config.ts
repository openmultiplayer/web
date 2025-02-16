import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import {
  NormalizedSidebarItem,
  SidebarItemsGeneratorArgs,
} from "@docusaurus/plugin-content-docs/src/sidebars/types.js";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "open.mp",
  tagline: "Open Multiplayer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://open.mp/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "openmultiplayer", // Usually your GitHub org/user name.
  projectName: "web", // Usually your repo name.

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
      "zh-cn",
      "zh-tw",
    ],
  },

  staticDirectories: ["public"],

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
            "https://github.com/openmultiplayer/web/tree/master/frontend/",
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
            "https://github.com/openmultiplayer/web/tree/master/frontend/blog",
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
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/openmultiplayer",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown", // This adds the language switcher
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} open.mp, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
