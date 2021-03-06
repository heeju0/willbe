const math = require('remark-math');
const katex = require('rehype-katex');
// const remarkImages = require('remark-images');
// const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'WELCOME',
  tagline: 'This is where I study',
  url: 'https://heeju0.github.io',
  baseUrl: '/willbe/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'heeju0', // Usually your GitHub org/user name.
  projectName: 'willbe', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css',
    // {
    //   // href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
    //   href: '/katex/katex.min.css',
    //   type: 'text/css',
    //   integrity:
    //     'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
    //   crossorigin: 'anonymous',
    // },
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/willbe'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      // willbe, dracula, duotoneDark, duotoneLight, github, nightOwl, nightOwlLight,
      // oceanicNext, palenight, shadesOfPurple, synthwave84, ultramin, vsDark
    },
    // algolia: {
    //     apiKey: 'c14d6c428639383a396d5c30f3e2e37e',
    //     indexName: 'docusaurus-2',
    //     contextualSearch: true,
    // },
      // c14d6c428639383a396d5c30f3e2e37e
    navbar: {
      hideOnScroll: true,
      title: 'WILL BE',
      logo: {
        alt: 'My Site',
        src: 'img/android-chrome-512x512.png',
      },
      items: [
        {
          type: 'doc',
          // to: 'docs',
          // activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          docId: 'guides'
        },
        {
          type: 'doc',
          label: 'Data Science',
          position: 'left',
          docId: 'data-science/how-to'
        },
        {
          type: 'doc',
          label: 'KDT AI/ML',
          position: 'left',
          docId: 'kdt/data_structures/definition'
        },
        {
          type: 'doc',
          label: 'Coding',
          position: 'left',
          docId: 'coding-practice/greedy'
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/heeju0/willbe',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'left',
        //   dropdownActiveClassDisabled: true,
        //   dropdownItemsAfter: [
        //     {
        //       to: 'docs',
        //       label: 'All versions',
        //     },
        //   ],
        // },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} HEEJU LEE`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/heeju0/willbe/edit/master/website_blog/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/heeju0/willbe/edit/master/website_blog/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
