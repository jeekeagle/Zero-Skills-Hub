import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// === Skill 目录（与 sidebars.ts / 仓库结构同步）===
const SKILLS = [
  {
    name: 'taxonomy-perspective',
    category: '视角类',
    categorySlug: 'perspective',
    title: '分类学视角',
    desc: '从分类原则、分类方法及其背后的认知逻辑、权力结构和演化规律看事物。',
    to: '/perspective/taxonomy-perspective',
    anchor: '视',
  },
  {
    name: 'skill-to-github',
    category: '工具类',
    categorySlug: 'tool',
    title: 'Skill-to-GitHub',
    desc: '把本地 Skill 推送到 GitHub 仓库,自动维护 README 索引,七步工序一次跑通。',
    to: '/tool/skill-to-github',
    anchor: '工',
  },
];

// === Hero ===
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
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
      </div>
    </header>
  );
}

// === Skill 卡片网格（沿用 mg-16-code 的 4×4 视觉语言,改成 skill card）===
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
              <div className={styles.skillAnchor}>{s.anchor}</div>
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

// === 类别结构（沿用五编结构卡片样式）===
const CATEGORIES = [
  {
    label: '第一编',
    title: '视角类 · perspective/',
    skills: 'taxonomy-perspective',
    to: '/perspective/taxonomy-perspective',
    desc: '分析视角(认知框架、理论锚定)。给你一个看事物的角度,而不是一个任务清单。',
  },
  {
    label: '第二编',
    title: '工具类 · tool/',
    skills: 'skill-to-github',
    to: '/tool/skill-to-github',
    desc: '工具(发布、转换、维护)。把视角沉淀成可交付、可复用的产物。',
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

// === 引文（沿用 mg-16-code 的 blockquote 风格）===
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
