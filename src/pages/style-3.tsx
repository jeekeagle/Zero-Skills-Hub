import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-3.module.css';

// === Skill 目录 — 用朱砂印章字符替代 lucide 图标 ===
const SKILLS = [
  {
    name: 'taxonomy-perspective',
    category: '视角类',
    seal: '视',
    title: '分类学视角',
    desc: '从分类原则、分类方法及其背后的认知逻辑、权力结构和演化规律看事物。把"分类"本身当作研究对象,而不只是工具。',
    to: '/perspective/taxonomy-perspective',
  },
  {
    name: 'skill-to-github',
    category: '工具类',
    seal: '工',
    title: 'Skill-to-GitHub',
    desc: '把本地 Skill 推送到 GitHub 仓库,自动维护 README 索引,七步工序一次跑通。',
    to: '/tool/skill-to-github',
  },
];

const CATEGORIES = [
  {
    label: '第一编',
    title: '视角类 · perspective/',
    seal: '眼',
    to: '/perspective/taxonomy-perspective',
    desc: '分析视角(认知框架、理论锚定)。给你一个看事物的角度,而不是一个任务清单。',
  },
  {
    label: '第二编',
    title: '工具类 · tool/',
    seal: '器',
    to: '/tool/skill-to-github',
    desc: '工具(发布、转换、维护)。把视角沉淀成可交付、可复用的产物。',
  },
];

// === 通用印章装饰 SVG(尺寸变化由 className 控制) ===
function SealDecor({size = 36}: {size?: number}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{transform: 'rotate(-4deg)'}}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="34" height="34" fill="#c0392b" />
      <rect x="3" y="3" width="34" height="34" fill="none" stroke="#c0392b" strokeWidth="1.5" />
      <rect x="7" y="7" width="26" height="26" fill="none" stroke="#f9f3e3" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

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
            从引言开始
          </Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>
            先看分类学视角
          </Link>
        </div>
        <div className={styles.styleSwitcher}>
          当前:样式 3(古典美) ·
          <span style={{margin: '0 0.5em'}}><Link to="/">样式 1 现代科技</Link></span>·
          <span style={{margin: '0 0.5em'}}><Link to="/style-2">样式 2 编辑日出</Link></span>
        </div>
      </div>
    </header>
  );
}

// === 区段标题(带印章装饰) ===
function SectionTitle({children, seal}: {children: ReactNode; seal?: boolean}) {
  return (
    <div className={styles.sectionTitleWrap}>
      <span className={styles.sectionTitle}>
        {children}
        {seal && <span className={styles.sectionTitleSeal} aria-hidden="true" />}
      </span>
    </div>
  );
}

// === Skill 卡片(宣纸 + 印章) ===
function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <SectionTitle seal>已收录</SectionTitle>
        <p className={styles.sectionLead}>按类别分编 —— 视角类管「怎么看」,工具类管「怎么做」</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillSeal}>{s.seal}</div>
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

// === 类别(卷轴式列表) ===
function CategoriesList() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <SectionTitle seal>分类结构</SectionTitle>
        <p className={styles.sectionLead}>仓库按「类别 / skill-slug」两层组织,新 skill 放进对应类别即可</p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c) => (
            <Link key={c.label} to={c.to} className={styles.categoryRow}>
              <div className={styles.categoryRowSeal}>{c.seal}</div>
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

// === 引文(卷轴式) ===
function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <div className={styles.quoteScroll}>
          <div className={styles.quote}>
            <p>"视角决定你看到什么,工具决定你能交付什么。两者咬合,认知才不只是漂亮的废话。"</p>
            <cite>—— Zero-Skills 设计原则</cite>
          </div>
          <div className={styles.quote}>
            <p>"分类不是描述事物的秩序,而是规定事物的秩序。每一次切分,都既是简化,也是遮蔽。"</p>
            <cite>—— 分类学视角 · 识别分类对象</cite>
          </div>
        </div>
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
        <CategoriesList />
        <QuoteBlock />
      </main>
    </Layout>
  );
}