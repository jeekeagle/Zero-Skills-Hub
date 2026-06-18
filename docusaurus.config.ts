import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zero-Skills · 视角与方法论',
  tagline: '一套用于分析、写作、决策的视角与工具',
  favicon: 'img/favicon.svg',

  future: { v4: true },

  url: 'https://jeekeagle.github.io',
  baseUrl: '/Zero-Skills-Hub/',

  organizationName: 'jeekeagle',
  projectName: 'Zero-Skills-Hub',

  onBrokenLinks: 'warn',

  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'] },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jeekeagle/Zero-Skills-Hub/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true, defaultMode: 'light' },
    metadata: [
      { name: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
      { name: 'Pragma', content: 'no-cache' },
      { name: 'Expires', content: '0' },
    ],
    navbar: {
      title: 'Zero-Skills',
      logo: { alt: 'Zero', src: 'img/logo.svg' },
      items: [
        { to: '/', label: '首页', position: 'left' },
        { to: '/intro', label: '关于', position: 'left' },
        { to: '/perspective/taxonomy-perspective', label: '视角', position: 'left' },
        { to: '/tool/skill-to-github', label: '工具', position: 'left' },
        { href: 'https://github.com/jeekeagle/Zero-Skills', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Skill 集合',
          items: [
            { label: '关于本仓库', to: '/intro' },
            { label: '视角类 · 分类学视角', to: '/perspective/taxonomy-perspective' },
            { label: '工具类 · Skill 发布', to: '/tool/skill-to-github' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'Zero-Skills 仓库', href: 'https://github.com/jeekeagle/Zero-Skills' },
            { label: 'Zero-Skills-Hub 仓库', href: 'https://github.com/jeekeagle/Zero-Skills-Hub' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} jeekeagle · 视角即工具,工具即视角`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
