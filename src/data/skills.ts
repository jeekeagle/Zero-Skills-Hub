// 共享 Skill 数据 — 所有首页样式从这里取数,保证 A/B/C/D... 对比时内容一致

export type Skill = {
  name: string;
  category: string;
  title: string;
  desc: string;
  to: string;
};

export type Category = {
  label: string;
  title: string;
  desc: string;
  to: string;
};

export const SKILLS: Skill[] = [
  {
    name: 'taxonomy-perspective',
    category: '视角类',
    title: '分类学视角',
    desc: '从分类原则、分类方法及其背后的认知逻辑、权力结构和演化规律看事物。把"分类"本身当作研究对象,而不只是工具。',
    to: '/perspective/taxonomy-perspective',
  },
  {
    name: 'skill-to-github',
    category: '工具类',
    title: 'Skill-to-GitHub',
    desc: '把本地 Skill 推送到 GitHub 仓库,自动维护 README 索引,七步工序一次跑通。',
    to: '/tool/skill-to-github',
  },
];

export const CATEGORIES: Category[] = [
  {
    label: '第一编',
    title: '视角类 · perspective/',
    desc: '分析视角(认知框架、理论锚定)。给你一个看事物的角度,而不是一个任务清单。',
    to: '/perspective/taxonomy-perspective',
  },
  {
    label: '第二编',
    title: '工具类 · tool/',
    desc: '工具(发布、转换、维护)。把视角沉淀成可交付、可复用的产物。',
    to: '/tool/skill-to-github',
  },
];

// 所有样式 + 索引的轻量元数据(用于 /styles/ 总览页)
export const STYLES = [
  { id: 1, slug: '/', label: '现代科技', desc: '深色 + 浮动光晕 + 六边形电路', tone: 'tech' },
  { id: 2, slug: '/style-2', label: '编辑日出', desc: '暖色 + 衬线 + Bento 网格', tone: 'editorial' },
  { id: 3, slug: '/style-3', label: '中国古典', desc: '宣纸水墨 + 朱砂印章 + 楷书', tone: 'classical' },
  { id: 4, slug: '/style-4', label: '孟菲斯', desc: '鲜艳色块 + 几何形状 + 80年代', tone: 'memphis' },
  { id: 5, slug: '/style-5', label: '新拟物', desc: '单色柔和 + 同色阴影凸起凹陷', tone: 'minimal' },
  { id: 6, slug: '/style-6', label: '赛博朋克', desc: '霓虹粉青 + 故障文字 + 扫描线', tone: 'cyberpunk' },
  { id: 7, slug: '/style-7', label: '日式禅意', desc: '极简留白 + 单一红点 + 垂直元素', tone: 'zen' },
  { id: 8, slug: '/style-8', label: '瑞士国际', desc: '纯白黑 + 红色矩形 + 严格网格', tone: 'swiss' },
  { id: 9, slug: '/style-9', label: '蒸汽波', desc: '紫粉渐变 + 透视网格 + 复古', tone: 'vaporwave' },
  { id: 10, slug: '/style-10', label: '包豪斯', desc: '红蓝黄原色 + 几何不对称', tone: 'bauhaus' },
  { id: 11, slug: '/style-11', label: '像素复古', desc: '8-bit 字体 + 限定调色板', tone: 'pixel' },
  { id: 12, slug: '/style-12', label: '玻璃拟态', desc: '彩色渐变 + 毛玻璃卡片', tone: 'glass' },
  { id: 13, slug: '/style-13', label: '北欧极简', desc: '白底 + 细线 + 柔和粉彩', tone: 'nordic' },
];
