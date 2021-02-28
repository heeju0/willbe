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
  // themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
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
          label: 'Coding',
          position: 'left',
          docId: 'coding-practice/greedy'
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/heeju0/docusaurus',
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
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
