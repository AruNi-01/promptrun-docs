// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PromptRun",
  tagline: "PromptRun 项目介绍，设计思路与技术文档",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://promptrun.0x3f4.run",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AruNi-01", // Usually your GitHub org/user name.
  projectName: "promptrun-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/", // Serve the docs at the site's root
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false, // Optional: disable the blog plugin
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "PromptRun",
        hideOnScroll: true,
        logo: {
          alt: "Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // left
          // {
          //   to: "/intro",
          //   label: "Introduction",
          //   position: "left",
          // },

          // right
          // {
          //   href: "https://github.com/AruNi-01/promptrun-docs",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "介绍",
                to: "/intro",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/AruNi-01/promptrun-docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "个人主页",
                href: "https://0x3f4.run",
              },
              {
                label: "技术博客",
                href: "https://code.0x3f4.run",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://0x3f4.run/' target='_blank'>AarynLu</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

export default config;
