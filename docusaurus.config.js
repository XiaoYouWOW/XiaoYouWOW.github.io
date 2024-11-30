// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '123456の小家',
  tagline: '可爱不是正确！',
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
          blogSidebarTitle: '111',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '123456の小家',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '456', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '123',
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
            title: '不关于我',
            items: [
              {
                label: '兔兔的自我介绍',
                to: '/docs/intro',
              },
              {
                label: '兔兔的QQ',
                to: 'https://qm.qq.com/cgi-bin/qm/qr?k=cUojLoZsBE0HvCHgOjuZOGNiJkZ06-z0&noverify=0&personal_qrcode_source=3',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '兔兔的哔哩哔哩主页',
                href: 'https://space.bilibili.com/1333478733',
              },
              {
                label: 'KasumiBot(By 户山兔兔）',
                href: 'https://ksmbot.top',
              },
              {
                label: 'YukieBot(By 户山兔兔）',
                href: 'https://Yukiebot.top',
              }
            ],
          },
          {
            title: '还有什么东西呢（？',
            items: [
              {
                label: '兔兔的博客',
                to: '/blog',
              },
              {
                label: '兔兔的GitHub主页',
                href: 'https://github.com/DanielToyama',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 兔兔的个人小家. Built with Docusaurus.<br /><img style="width:30px;height:30px;margin-bottom:-10px"src = "https://moe.one/view/img/ico64.png"/><a href="https://icp.gov.moe/?keyword=20240512" target="_blank">萌ICP备20240512号</a>`,
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
