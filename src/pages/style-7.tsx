import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-7.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      現在のスタイル: {current}(禅) ·
      <span><Link to="/styles">他の12スタイルを見る →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 右上红圆(円相) */}
      <div className={styles.enso} aria-hidden="true" />
      {/* 左侧竖排小字 */}
      <div className={styles.verticalText} aria-hidden="true">
        見 · 之 · 即 · 識
      </div>

      <div className="container">
        <div className={styles.eyebrow}>視角 / 道具 / 方法論</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <p className={styles.lead}>
          視角 + 道具 = 引き渡せる認知<br />
          すべての提案に理論の錨点があり、反崩壊ゲートが最後を守る
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>はじめに</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>分類学の視角</Link>
        </div>
        <StyleSwitcher current={7} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>収 録</h2>
          <p className={styles.sectionLead}>分類ごとに編を分つ —— 視角は「どう見るか」、道具は「どう成すか」</p>
        </div>
        <div className={styles.skillsList}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillLeft}>
                <div className={styles.skillNumber}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.skillCategory}>{s.category}</div>
              </div>
              <div className={styles.skillBody}>
                <h3 className={styles.skillTitle}>{s.title}</h3>
                <p className={styles.skillDesc}>{s.desc}</p>
              </div>
              <div className={styles.skillRight}>→</div>
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
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>分 類</h2>
          <p className={styles.sectionLead}>リポジトリは「カテゴリ / skill-slug」の二層構造</p>
        </div>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryNumber}>編 {i + 1}</div>
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
        <div className={styles.quoteStack}>
          <blockquote className={styles.quote}>
            <p>"視角は見るものを決める。道具は渡せるものを決める。両者が噛み合えば、認知は綺麗な废话でなくなる。"</p>
            <cite>—— Zero-Skills 設計原則</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"分類は事物の秩序を記述するのではなく、規定する。一切りは常に簡素化であり、遮蔽でもある。"</p>
            <cite>—— 分類学の視角 · 認識分類対象</cite>
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
