import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-9.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      ◆ CURRENT: STYLE {current} // VAPORWAVE ◆
      <span><Link to="/styles">VIEW ALL 13 ▶</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 透视网格地板 */}
      <div className={styles.gridFloor} aria-hidden="true" />
      {/* 太阳 */}
      <div className={styles.sun} aria-hidden="true" />

      <div className="container">
        <div className={styles.eyebrow}>▲ A E S T H E T I C ▲ S K I L L S ▲</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          <span className={styles.titleShadow}>{siteConfig.title}</span>
          <span className={styles.titleMain}>{siteConfig.title}</span>
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <p className={styles.lead}>
          ★ 視角 + 道具 = 引き渡せる認知 ★<br />
          ★ すべてに理論の錨、反崩壊ゲート ★
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>▶ ENTER</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>▶ TAXONOMY</Link>
        </div>
        <StyleSwitcher current={9} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>╔═ SKILLS ═╗</h2>
        <p className={styles.sectionLead}>▽ COLLECTION.DAT ▽</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillNumber}>▷ 0{i + 1}</div>
              <div className={styles.skillCategory}>[{s.category}]</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
              <div className={styles.skillFooter}>
                <span className={styles.skillTag}>{`> ${s.name}`}</span>
                <span className={styles.skillLink}>LOAD ▶</span>
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
        <h2 className={styles.sectionTitle}>╔═ CATEGORIES ═╗</h2>
        <p className={styles.sectionLead}>▽ REPO STRUCTURE.DAT ▽</p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryNumber}>VOL.0{i + 1}</div>
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
            <p>"視角は見えるものを決める。道具は渡せるものを決める。両者が噛み合えば、認知は綺麗な废话でなくなる。"</p>
            <cite>◆ — Zero-Skills Design Principle ◆</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"分類は事物の秩序を記述せず、規定する。一切りは常に簡素化であり、遮蔽でもある。"</p>
            <cite>◆ — Taxonomy Perspective · Identify Object ◆</cite>
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
