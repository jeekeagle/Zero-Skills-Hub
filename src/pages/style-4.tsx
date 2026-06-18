import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-4.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      当前:样式 {current}(孟菲斯) ·
      <span><Link to="/styles">查看全部 13 个样式 →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Memphis 装饰:左上黄圆、中上波点、右上三角、左下 zigzag */}
      <div className={styles.decoYellow} aria-hidden="true" />
      <div className={styles.decoDots} aria-hidden="true" />
      <div className={styles.decoTriangle} aria-hidden="true" />
      <div className={styles.decoZigzag} aria-hidden="true" />
      <div className={styles.decoBlue} aria-hidden="true" />

      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} /> MEMPHIS × ZINE × 1985 <span className={styles.eyebrowDot} />
        </div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          <span className={styles.titleA}>{siteConfig.title.split(' ')[0]}</span>
          <span className={styles.titleB}>{siteConfig.title.split(' ').slice(1).join(' ')}</span>
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <p className={styles.lead}>
          视角 + 工具 = 可交付的认知。每条建议都有理论锚点,每条建议都跑过反坍缩闸兜底。
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>从引言开始</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>先看分类学视角</Link>
        </div>
        <StyleSwitcher current={4} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleShape}>★</span> 已收录
        </h2>
        <p className={styles.sectionLead}>按类别分编 —— 视角管「怎么看」,工具管「怎么做」</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={clsx(styles.skillCard, i === 0 && styles.skillCardShift)}>
              <div className={styles.skillNumber}>0{i + 1}</div>
              <div className={styles.skillCategory}>{s.category}</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
              <div className={styles.skillArrow}>→</div>
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
          <span className={styles.titleShape}>●</span> 分类结构
        </h2>
        <p className={styles.sectionLead}>仓库按「类别 / skill-slug」两层组织,新 skill 放进对应类别即可</p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={clsx(styles.categoryCard, i === 0 && styles.categoryYellow, i === 1 && styles.categoryBlue)}>
              <div className={styles.categoryLabel}>{c.label}</div>
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
            <cite>—— Zero-Skills 设计原则</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"分类不是描述事物的秩序,而是规定事物的秩序。每一次切分,都既是简化,也是遮蔽。"</p>
            <cite>—— 分类学视角 · 识别分类对象</cite>
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
