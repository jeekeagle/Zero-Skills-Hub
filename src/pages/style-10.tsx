import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-10.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      Style {current}/13 — Bauhaus ·
      <span><Link to="/styles">View all 13 →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 大色块几何装饰 */}
      <div className={styles.circleYellow} aria-hidden="true" />
      <div className={styles.triangleBlue} aria-hidden="true" />
      <div className={styles.squareRed} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.colLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowShape} /> FORMS · COLOR · FUNCTION
            </div>
            <Heading as="h1" className={clsx('hero__title', styles.title)}>
              {siteConfig.title}
            </Heading>
          </div>
          <div className={styles.colRight}>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
            <p className={styles.lead}>
              视角 + 工具 = 可交付的认知。<br />
              理论锚定,反坍缩闸兜底。
            </p>
            <div className={styles.ctaRow}>
              <Link to="/intro" className={styles.ctaPrimary}>GET STARTED</Link>
              <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>TYPOGRAPHY →</Link>
            </div>
            <StyleSwitcher current={10} />
          </div>
        </div>
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleCircle} /> COLLECTION
          </h2>
          <p className={styles.sectionLead}>Two primary categories · One unified catalogue</p>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={clsx(styles.skillCard, i === 0 ? styles.cardBlue : styles.cardYellow)}>
              <div className={styles.skillNumber}>
                {i === 0 ? '▲' : '●'} 0{i + 1}
              </div>
              <div className={styles.skillCategory}>{s.category}</div>
              <h3 className={styles.skillTitle}>{s.title}</h3>
              <p className={styles.skillDesc}>{s.desc}</p>
              <div className={styles.skillFooter}>
                <span className={styles.skillShape} />
                <span className={styles.skillArrow}>→</span>
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
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleSquare} /> TAXONOMY
          </h2>
          <p className={styles.sectionLead}>Two layers — category / skill-slug</p>
        </div>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={clsx(styles.categoryCard, i === 0 ? styles.catRed : styles.catBlue)}>
              <div className={styles.categoryNumber}>VOL 0{i + 1}</div>
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
            <p>"Perspectives decide what you see. Tools decide what you deliver. Both must mesh — otherwise cognition is just pretty nonsense."</p>
            <cite>— Zero-Skills Design Principle</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"Classification does not describe the order of things — it prescribes it. Every cut is both a simplification and an occlusion."</p>
            <cite>— Taxonomy Perspective</cite>
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
