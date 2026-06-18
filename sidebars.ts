import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Zero-Skills 侧栏：按 skill 类别组织
// 一编 = 一个 skill 类别；每个 skill 一个章节
// docs/<category>/<skill-slug>.md → id 为 "<category>/<skill-slug>"
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
      label: '第一编 · 视角类（perspective/）',
      collapsed: false,
      items: [
        'perspective/taxonomy-perspective',
      ],
    },
    {
      type: 'category',
      label: '第二编 · 工具类（tool/）',
      collapsed: false,
      items: [
        'tool/skill-to-github',
      ],
    },
  ],
};

export default sidebars;
