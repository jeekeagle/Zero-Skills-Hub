import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 自动生成 by scripts/sync-skills.py — 不要手改
// 源数据: Zero-Skills/skills/<category>/<slug>/SKILL.md
const sidebars: SidebarsConfig = {
  skillSidebar: [
    {
      type: 'category',
      label: '引言',
      collapsed: false,
      items: ['intro'],
    },
    {
      type: 'category',
      label: '第一编 · 方法论类（methodology/）',
      collapsed: false,
      items: [
        'methodology/initialization-framework',
      ],
    },
    {
      type: 'category',
      label: '第二编 · 视角类（perspective/）',
      collapsed: false,
      items: [
        'perspective/taxonomy-perspective',
      ],
    },
    {
      type: 'category',
      label: '第三编 · 工具类（tool/）',
      collapsed: false,
      items: [
        'tool/skill-to-github',
      ],
    },
  ],
};

export default sidebars;
