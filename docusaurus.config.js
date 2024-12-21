// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  //这里需要改
  title: '这里是网站最上端的标题',
  tagline: '雀魂',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dream-league.fun',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XiaoYouWOW', // Usually your GitHub org/user name.
  projectName: 'XiaoYouWOW.github.io', // Usually your repo name.
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
          //这里需要改
          blogSidebarTitle: '这里是标题AAA',
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
      // 把这里换成你的头像
      image: 'img/fox.jpg',
      navbar: {
        title: '这是网站左上角的标题',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog',
            label: '博客',
            position: 'left' },
          {
            to: '/docs',
            label: '文档',
            position: 'left',
          },
          {
            href: 'https://github.com/XiaoYouWOW',
            label: 'MyGitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //你需要改这里,这里是脚注
        style: 'light',
        links: [
          {
            title: '这里是底栏',
            items: [
              {
                label: '这里可以填入网址',
                href: 'https://github.com/XiaoYouWOW',
              }
            ],
          },
          {
            title: '这里可以引用根目录下的文件',
            items: [
              {
                label: '你好',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: '友情链接',
            items: [
            ],
          },
        ],
        //你需要改这里
        copyright: `Copyright ©${new Date().getFullYear()} 你的网站的标题. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'XiaoYouWOW/XiaoYouWOW.github.io',
        repoId: 'R_kgDONgp43Q',
        category: 'General',
        categoryId: 'DIC_kwDONgp43c4ClbBQ',
      }
    }),
  // Add the Cloudflare Web Analytics script
  scripts: [
  ],
};

export default config;
