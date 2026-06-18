import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-2.module.css';

// === 内联 SVG 图标(Lucide 风格)===
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

// === Skill 目录 ===
const SKILLS = [
  {
    name: 'taxonomy-perspective',
    category: '视角类',
    title: '分类学视角',
    desc: '从分类原则、分类方法及其背后的认知逻辑、权力结构和演化规律看事物。把"分类"本身当作研究对象,不只是工具。',
    to: '/perspective/taxonomy-perspective',
    icon: <IconGrid />,
    featured: true,
  },
  {
    name: 'skill-to-github',
    category: '工具类',
    title: 'Skill-to-GitHub',
    desc: '把本地 Skill 推送到 GitHub 仓库,自动维护 README 索引,七步工序一次跑通。',
    to: '/tool/skill-to-github',
    icon: <IconGitBranch />,
    featured: false,
  },
];

const CATEGORIES = [
  {
    label: '第一编',
    title: '视角类 · perspective/',
    to: '/perspective/taxonomy-perspective',
    desc: '分析视角(认知框架、理论锚定)。给你一个看事物的角度,而不是一个任务清单。',
    icon: <IconEye />,
  },
  {
    label: '第二编',
    title: '工具类 · tool/',
    to: '/tool/skill-to-github',
    desc: '工具(发布、转换、维护)。把视角沉淀成可交付、可复用的产物。',
    icon: <IconWrench />,
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
        <div className={styles.styleSwitcher}>
          当前:样式 2(编辑日出) · <Link to="/">← 回到样式 1 现代科技</Link>
        </div>
      </div>
    </header>
  );
}

// === Bento 网格 ===
function SkillsBento() {
  const primary = SKILLS.find((s) => s.featured) || SKILLS[0];
  const rest = SKILLS.filter((s) => s !== primary);

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          已收录
        </Heading>
        <p className={styles.sectionLead}>
          按类别分编 —— 视角类管「怎么看」,工具类管「怎么做」。
        </p>
        <div className={styles.bentoGrid}>
          {/* 主卡:大 */}
          <Link to={primary.to} className={clsx(styles.bentoCard, styles.bentoCardPrimary)}>
            <div className={styles.bentoIcon}>{primary.icon}</div>
            <div className={styles.bentoCategory}>{primary.category}</div>
            <h3 className={styles.bentoTitle}>{primary.title}</h3>
            <p className={styles.bentoDesc}>{primary.desc}</p>
          </Link>
          {/* 次卡:小 */}
          {rest.map((s) => (
            <Link key={s.name} to={s.to} className={styles.bentoCard}>
              <div className={styles.bentoIcon}>{s.icon}</div>
              <div className={styles.bentoCategory}>{s.category}</div>
              <h3 className={styles.bentoTitle}>{s.title}</h3>
              <p className={styles.bentoDesc}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 类别(简洁行式列表)===
function CategoriesList() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          分类结构
        </Heading>
        <p className={styles.sectionLead}>
          仓库按「类别 / skill-slug」两层组织,新 skill 放进对应类别即可。
        </p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c) => (
            <Link key={c.label} to={c.to} className={styles.categoryRow}>
              <div className={styles.categoryRowIcon}>{c.icon}</div>
              <div className={styles.categoryRowBody}>
                <h3 className={styles.categoryRowTitle}>{c.title}</h3>
                <p className={styles.categoryRowDesc}>{c.desc}</p>
              </div>
              <div className={styles.categoryRowLabel}>{c.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 引文(编辑式,居中)===
function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p>"视角决定你看到什么,工具决定你能交付什么。两者咬合,认知才不只是漂亮的废话。"</p>
          <cite>—— Zero-Skills 设计原则</cite>
        </blockquote>
        <blockquote className={styles.quote}>
          <p>"分类不是描述事物的秩序,而是规定事物的秩序。每一次切分,都既是简化,也是遮蔽。"</p>
          <cite>—— 分类学视角 · 识别分类对象</cite>
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
        <SkillsBento />
        <CategoriesList />
        <QuoteBlock />
      </main>
    </Layout>
  );
}
