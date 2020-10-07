module.exports = {
  title: "open.mp | SA-MP Wiki content, function and callback documentation",
  tagline: "SA-MP Wiki and open.mp API Documentation",
  url: "https://www.open.mp/",
  baseUrl: "/",
  favicon: "public/favicon.ico",
  organizationName: "openmultiplayer",
  projectName: "wiki",
  themeConfig: {
    navbar: {
      title: "Home",
      logo: {
        alt: "Open Multiplayer Logo",
        src: "public/logo-light-trans.svg",
        href: "/docs/",
      },
      links: [
        {
          to: "docs/index",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://open.mp/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/openmultiplayer/wiki",
          label: "GitHub",
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
              label: "Getting Started",
              to: "docs/scripting/resources/start",
            },
            {
              label: "Tutorials",
              to: "docs/tutorials/_tutorials",
            },
            {
              label: "Functions",
              to: "docs/scripting/functions",
            },
            {
              label: "Callbacks",
              to: "docs/scripting/callbacks",
            },
          ],
        },
        {
          title: "SA-MP & open.mp Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/samp",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/openmultiplayer/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/open_mp",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/openmultiplayer",
            },
            {
              label: "VK",
              href: "https://vk.com/open_mp",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "SA-MP",
              href: "https://sa-mp.com",
            },
            {
              label: "SA-MP Wiki",
              href: "https://wiki.sa-mp.com",
            },
            {
              label: "Blog",
              to: "blog",
              href: "https://open.mp/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/openmultiplayer/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Multiplayer Team. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: "UA-78828365-7",
      anonymizeIP: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/openmultiplayer/wiki/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000,
          changefreq: "daily",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ["docusaurus-lunr-search", "@docusaurus/plugin-google-analytics"],
};
