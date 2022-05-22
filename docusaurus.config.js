// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ConnXio Docs",
  tagline: "Documentation is cool",
  url: "https://lmrisdal.github.io",
  baseUrl: "/docusaurus-demo/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lmrisdal", // Usually your GitHub org/user name.
  projectName: "docusaurus-demo", // Usually your repo name.
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en"],
  // },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/lmrisdal/docusaurus-demo/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'robots', content: 'noindex,nofollow'}],
      navbar: {
        title: "",
        logo: {
          alt: "Connxio Logo",
          src: "img/connxio-logo.svg",
        },
        items: [
          {
            href: "https://portal.connxio.no",
            label: "ConnXio Portal",
            position: "left",
          },
          {
            href: "https://www.communicate.no/en/connxio",
            label: "About ConnXio",
            position: "left",
          },
          {
            href: "https://github.com/lmrisdal/docusaurus-demo",
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
                label: "Documentation",
                to: "/",
              },
            ],
          },
          {
            title: "Pages",
            items: [
              {
                label: "Communicate",
                href: "https://www.communicate.no",
              },
              {
                label: "ConnXio",
                href: "https://www.communicate.no/en/connxio",
              },
              {
                label: "ConnXio Portal",
                href: "https://portal.connxio.no",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Communicate Norge. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};

module.exports = config;
