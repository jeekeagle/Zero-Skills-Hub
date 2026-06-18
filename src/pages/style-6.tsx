import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-6.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function GlitchTitle({text}: {text: string}) {
  return (
    <span className={styles.glitch} data-text={text}>
      {text}
    </span>
  );
}

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      <span className={styles.blink}>▣</span> 当前:样式 {current}(赛博朋克) ·
      <span><Link to="/styles">查看全部 13 个样式 →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.decoTopRight} aria-hidden="true" />
      <div className={styles.decoBottomLeft} aria-hidden="true" />
      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBracket}>[</span>
          ZERO//SKILLS // SYSTEM_v0.1
          <span className={styles.eyebrowBracket}>]</span>
        </div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          <GlitchTitle text={siteConfig.title} />
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {'> '}{siteConfig.tagline}
          <span className={styles.cursor}>_</span>
        </p>
        <p className={styles.lead}>
          // 视角 + 工具 = 可交付的认知<br />
          // 每条建议都有理论锚点,反坍缩闸兜底
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>{'> 从引言开始'}</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>{'> 先看分类学视角'}</Link>
        </div>
        <StyleSwitcher current={6} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionPrefix}>// </span>已收录
        </h2>
        <p className={styles.sectionLead}>// 按类别分编 —— 视角管「怎么看」,工具管「怎么做」</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillCorner}>{`>_NODE_${String(i + 1).padStart(2, '0')}`}</div>
              <div className={styles.skillCategory}>/{s.category}</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
              <div className={styles.skillFooter}>
                <span className={styles.skillStatus}>● ONLINE</span>
                <span className={styles.skillLink}>EXECUTE →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesBlock() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionPrefix}>// </span>分类结构
        </h2>
        <p className={styles.sectionLead}>// 仓库按「类别 / skill-slug」两层组织</p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryLabel}>{`DIR_${String(i + 1).padStart(2, '0')}`}</div>
              <h3 className={styles.categoryTitle}>{c.title}</h3>
              <p className={styles.categoryDesc}>{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <div className={styles.quoteGrid}>
          <blockquote className={styles.quote}>
            <p>"视角决定你看到什么,工具决定你能交付什么。两者咬合,认知才不只是漂亮的废话。"</p>
            <cite>// Zero-Skills 设计原则</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"分类不是描述事物的秩序,而是规定事物的秩序。每一次切分,都既是简化,也是遮蔽。"</p>
            <cite>// 分类学视角 · 识别分类对象</cite>
          </blockquote>
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
        <CategoriesBlock />
        <QuoteBlock />
      </main>
    </Layout>
  );
}
