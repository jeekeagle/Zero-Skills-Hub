import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-11.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      ► STYLE {current}/13 · 8-BIT ◄
      <span><Link to="/styles">[VIEW ALL 13]</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 像素云 */}
      <div className={styles.cloud1} aria-hidden="true" />
      <div className={styles.cloud2} aria-hidden="true" />
      {/* 像素山 */}
      <div className={styles.mountain} aria-hidden="true" />
      {/* 地面 */}
      <div className={styles.ground} aria-hidden="true" />

      <div className="container">
        <div className={styles.eyebrow}>★ ZERO SKILLS ★ QUEST START ★</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <p className={styles.lead}>
          {'>'} VIEW + TOOL = SHIPPED COGNITION<br />
          {'>'} EVERY TIP HAS A THEORY ANCHOR
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>▶ START</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>▶ TYPOLOGY</Link>
        </div>
        <StyleSwitcher current={11} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>═══ COLLECTION ═══</h2>
        <p className={styles.sectionLead}>▼ TWO CATEGORIES · ONE CATALOGUE ▼</p>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillHpBar}>
                <span className={styles.skillHpLabel}>LV.{i + 1}</span>
                <span className={styles.skillHpFill} style={{width: `${85 - i * 15}%`}} />
              </div>
              <div className={styles.skillCategory}>┌ {s.category} ┐</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
              <div className={styles.skillFooter}>
                <span>▶ {s.name}</span>
                <span>→</span>
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
        <h2 className={styles.sectionTitle}>═══ TAXONOMY ═══</h2>
        <p className={styles.sectionLead}>▼ TWO LAYERS · CATEGORY/SLUG ▼</p>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryNumber}>[{i === 0 ? '01' : '02'}]</span>
                <span className={styles.categoryLabel}>{c.label}</span>
              </div>
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
            <p>{'"PERSPECTIVE DECIDES WHAT YOU SEE. TOOL DECIDES WHAT YOU DELIVER. BOTH MUST MESH."'}</p>
            <cite>— ZERO-SKILLS PRINCIPLE</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>{'"CLASSIFICATION DOES NOT DESCRIBE ORDER. IT PRESCRIBES ORDER. EVERY CUT IS BOTH SIMPLIFY AND OCCLUDE."'}</p>
            <cite>— TAXONOMY PERSPECTIVE</cite>
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
