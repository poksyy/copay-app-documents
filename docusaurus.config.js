// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Copay',
  tagline: 'Spend wisely, share easily.',
  favicon: 'img/copay_logo_128.png',

  // Set the production url of your site here
  url: 'https://copaydocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: 'Copay',
        logo: {
          alt: 'Copay Logo',
          src: 'img/copay_logo_256.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documents',
          },
          {to: '/blog', label: 'Roadmap', position: 'left'},
          {
            href: 'https://github.com/poksyy/copay-app-backend',
            label: 'GitHub Backend',
            position: 'right',
          },
          {
            href: 'https://github.com/poksyy/copay-app-frontend',
            label: 'GitHub Frontend',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Documents',
                to: '/docs/info',
              },
              {
                label: 'Roadmap',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Github Repositories',
            items: [
              {
                label: 'Backend',
                href: 'https://github.com/poksyy/copay-app-backend',
              },
              {
                label: 'Frontend',
                href: 'https://github.com/poksyy/copay-app-frontend',
              },
              {
                label: 'Documents',
                href: 'https://github.com/poksyy/copay-app-documents',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Pau Carrera',
                href: 'https://www.linkedin.com/in/pau-carrera/',
              },
              {
                label: 'Dylan Navarro',
                href: 'https://www.linkedin.com/in/dylan-navarro-vinyarta/',
              },
              {
                label: 'Cristian Oraña',
                href: 'https://www.linkedin.com/in/orana-cristian/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
