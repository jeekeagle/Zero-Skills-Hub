import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// === 内联 SVG 图标（Lucide 风格）===
function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconGitBranch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="5" r="2.25" />
      <circle cx="6" cy="19" r="2.25" />
      <circle cx="18" cy="5" r="2.25" />
      <path d="M6 7.25 V16.75" />
      <path d="M18 7.25 V11 a3 3 0 0 1 -3 3 H8.25" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 12 c3 -5.5 6.75 -8 9.5 -8 s6.5 2.5 9.5 8 c-3 5.5 -6.75 8 -9.5 8 s-6.5 -2.5 -9.5 -8 z" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3 a4 4 0 0 0 -5.4 5.4 l-7 7 a2 2 0 0 0 2.8 2.8 l7 -7 a4 4 0 0 0 5.4 -5.4 l-2.5 2.5 l-2.5 -2.5 z" />
    </svg>
  );
}

// === Skill 目录（与 sidebars.ts / 仓库结构同步）===
const SKILLS = [
  {
    name: 'taxonomy-perspective',
    category: '视角类',
    categorySlug: 'perspective',
    title: '分类学视角',
    desc: '从分类原则、分类方法及其背后的认知逻辑、权力结构和演化规律看事物。',
    to: '/perspective/taxonomy-perspective',
    icon: <IconGrid />,
  },
  {
    name: 'skill-to-github',
    category: '工具类',
    categorySlug: 'tool',
    title: 'Skill-to-GitHub',
    desc: '把本地 Skill 推送到 GitHub 仓库,自动维护 README 索引,七步工序一次跑通。',
    to: '/tool/skill-to-github',
    icon: <IconGitBranch />,
  },
];

// === 装饰 SVG:六边形电路 ===
function DecorHexCircuit() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round">
        <path d="M100 20 L160 55 L160 125 L100 160 L40 125 L40 55 Z" />
        <path d="M100 40 L142 64 L142 116 L100 140 L58 116 L58 64 Z" opacity="0.5" />
        <circle cx="100" cy="20" r="3" fill="currentColor" />
        <circle cx="160" cy="55" r="3" fill="currentColor" />
        <circle cx="160" cy="125" r="3" fill="currentColor" />
        <circle cx="100" cy="160" r="3" fill="currentColor" />
        <circle cx="40" cy="125" r="3" fill="currentColor" />
        <circle cx="40" cy="55" r="3" fill="currentColor" />
        <circle cx="100" cy="90" r="4" fill="currentColor" />
        <line x1="100" y1="20" x2="100" y2="86" />
        <line x1="160" y1="55" x2="104" y2="90" />
        <line x1="160" y1="125" x2="104" y2="90" />
        <line x1="40" y1="55" x2="96" y2="90" />
        <line x1="40" y1="125" x2="96" y2="90" />
        <line x1="100" y1="94" x2="100" y2="160" />
      </g>
    </svg>
  );
}

// === 装饰 SVG:网络节点 ===
function DecorNetwork() {
  return (
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <line x1="40" y1="40" x2="110" y2="30" opacity="0.5" />
        <line x1="110" y1="30" x2="180" y2="60" opacity="0.5" />
        <line x1="40" y1="40" x2="80" y2="110" opacity="0.5" />
        <line x1="80" y1="110" x2="110" y2="30" opacity="0.5" />
        <line x1="80" y1="110" x2="180" y2="60" opacity="0.5" />
        <line x1="80" y1="110" x2="150" y2="160" opacity="0.5" />
        <line x1="150" y1="160" x2="180" y2="60" opacity="0.5" />
        <line x1="40" y1="40" x2="50" y2="170" opacity="0.5" />
        <line x1="50" y1="170" x2="80" y2="110" opacity="0.5" />
        <line x1="50" y1="170" x2="150" y2="160" opacity="0.5" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="40" r="3.5" />
        <circle cx="110" cy="30" r="4" />
        <circle cx="180" cy="60" r="3" />
        <circle cx="80" cy="110" r="4.5" />
        <circle cx="150" cy="160" r="3.5" />
        <circle cx="50" cy="170" r="3" />
      </g>
    </svg>
  );
}

// === Hero ===
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 装饰图层 */}
      <div className={styles.heroDecor} aria-hidden="true">
        <div className={styles.heroDecorLeft} style={{color: '#5fa3d8'}}>
          <DecorHexCircuit />
        </div>
        <div className={styles.heroDecorRight} style={{color: '#c89732'}}>
          <DecorNetwork />
        </div>
      </div>
      <div className="container">
        <div className={styles.eyebrow}>Zero Agent · 分析视角 · 写作工具 · 方法论</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <p className={styles.lead}>
          每一个 Skill 是一段可复用的认知框架 —— 视角让你看到原本看不到的结构,工具让你把视角沉淀成可交付的产物。
          七步工序、判据自检、反坍缩闸兜底,确保每条建议都有理论锚点。
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>
            从引言开始 →
          </Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>
            先看分类学视角
          </Link>
        </div>
        <div className={styles.styleSwitcher}>
          当前:样式 1(现代科技) · <Link to="/style-2">试试样式 2 编辑日出 →</Link>
        </div>
      </div>
      {/* 底部淡出 */}
      <div className={styles.heroFade} />
    </header>
  );
}

// === Skill 卡片网格 ===
function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          已收录
        </Heading>
        <p className={styles.sectionLead}>
          按类别分编 —— 视角类管「怎么看」,工具类管「怎么做」。
        </p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillIcon}>{s.icon}</div>
              <div className={styles.skillCategory}>{s.category}</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 类别结构 ===
const CATEGORIES = [
  {
    label: '第一编',
    title: '视角类 · perspective/',
    skills: 'taxonomy-perspective',
    to: '/perspective/taxonomy-perspective',
    desc: '分析视角(认知框架、理论锚定)。给你一个看事物的角度,而不是一个任务清单。',
    icon: <IconEye />,
  },
  {
    label: '第二编',
    title: '工具类 · tool/',
    skills: 'skill-to-github',
    to: '/tool/skill-to-github',
    desc: '工具(发布、转换、维护)。把视角沉淀成可交付、可复用的产物。',
    icon: <IconWrench />,
  },
];

function CategoriesGrid() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          分类结构
        </Heading>
        <p className={styles.sectionLead}>
          仓库按「类别 / skill-slug」两层组织,新 skill 放进对应类别即可。
        </p>
        <div className={styles.categoriesGrid}>
          {CATEGORIES.map((c) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>{c.icon}</div>
              <div className={styles.categoryLabel}>{c.label}</div>
              <h3 className={styles.categoryTitle}>{c.title}</h3>
              <div className={styles.categorySkills}>{c.skills}</div>
              <p className={styles.categoryDesc}>{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 引文 ===
function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p>
            "视角决定你看到什么,工具决定你能交付什么。两者咬合,认知才不只是漂亮的废话。"
          </p>
          <cite>—— Zero-Skills 设计原则</cite>
        </blockquote>
        <blockquote className={styles.quote}>
          <p>
            "分类不是描述事物的秩序,而是规定事物的秩序。每一次切分,都既是简化,也是遮蔽。"
          </p>
          <cite>—— 分类学视角 / 第一步 · 识别分类对象</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <SkillsGrid />
        <CategoriesGrid />
        <QuoteBlock />
      </main>
    </Layout>
  );
}
