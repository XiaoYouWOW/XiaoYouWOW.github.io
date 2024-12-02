// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '狐莱姆在盯着你...',
  tagline: '可安可可可爱了!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flime.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QHMY114514', // Usually your GitHub org/user name.
  projectName: 'QHMY114514.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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

        },
        blog: {
          blogSidebarTitle: '乾狐离光的日记本',
          blogSidebarCount: 10,
          showReadingTime: true,
          
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
      // Replace with your project's social card
      image: 'img/fox.jpg',
      navbar: {
        title: '乾狐的小窝',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '不准看这里', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '可以看这里',
          },
          {
            href: 'https://api.lolimi.cn/60/',
            label: '每日60秒',
            position: 'left',
          },
          {
            href: 'https://github.com/QHMY114514',
            label: 'MyGitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '联系狐狸',
            items: [
              {
                label: '我的哔哩哔哩主页',
                href: 'https://space.bilibili.com/454816001',
              },
              {
                label: '我的个人群(QQ)',
                href: 'https://qm.qq.com/q/bImTc3BPsA',
              },
              {
                label: 'Flime官方群(QQ)',
                href: 'https://qm.qq.com/q/qatSwAhTQk',
              }
            ],
          },
          {
            title: '你想找什么?',
            items: [
              {
                label: '狐狸是谁?',
                to: '/docs/intro',
              },
              {
                label: '狐狸怎么叫?',
                to: '/blog',
              },
              {
                label: '小玩具',
                to: '/docs/game',
              },
              {
                label: '狐狸的GitHub主页',
                href: 'https://github.com/QHMY114514',
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} QHLG的小站. Built with Docusaurus.<br /><a href="https://icp.gov.moe/?keyword=20245009" target="_blank">萌ICP备20245009号</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  // Add the Cloudflare Web Analytics script
  scripts: [
    /* 
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      async: true,
      'data-cf-beacon': '{"token": "13480125097f45c28e430dbbf132f100"}',
    }, 
    */
  ],
};


export default config;
