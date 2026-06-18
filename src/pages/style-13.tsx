import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-13.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      Style {current}/13 — Nordic Minimal ·
      <span><Link to="/styles">View all 13 →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 极简单色装饰:左上小色块 */}
      <div className={styles.decoSquare} aria-hidden="true" />
      <div className={styles.decoCircle} aria-hidden="true" />
      <div className={styles.decoLine} aria-hidden="true" />

      <div className="container">
        <div className={styles.eyebrow}>— zero · skills ·</div>
        <Heading as="h1" className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
        <p className={styles.lead}>
          Perspective and tool. Theory-anchored recommendations.
          Anti-collapse gates as a safeguard.
        </p>
        <div className={styles.ctaRow}>
          <Link to="/intro" className={styles.ctaPrimary}>Get Started</Link>
          <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>Read Typology</Link>
        </div>
        <StyleSwitcher current={13} />
      </div>
    </header>
  );
}

function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <div>
            <h2 className={styles.sectionTitle}>Collection</h2>
            <p className={styles.sectionLead}>A curated catalogue of registered skills</p>
          </div>
        </div>
        <div className={styles.skillsList}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillLeft}>
                <span className={styles.skillNumber}>0{i + 1}</span>
                <span className={styles.skillCategory}>{s.category}</span>
              </div>
              <div className={styles.skillBody}>
                <h3 className={styles.skillTitle}>{s.title}</h3>
                <p className={styles.skillDesc}>{s.desc}</p>
              </div>
              <span className={styles.skillArrow}>→</span>
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
          <span className={styles.sectionNumber}>02</span>
          <div>
            <h2 className={styles.sectionTitle}>Taxonomy</h2>
            <p className={styles.sectionLead}>Two layers — category, then skill-slug</p>
          </div>
        </div>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryNumber}>0{i + 1}</span>
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
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <div>
            <h2 className={styles.sectionTitle}>Principles</h2>
            <p className={styles.sectionLead}>Foundational statements</p>
          </div>
        </div>
        <div className={styles.quoteGrid}>
          <blockquote className={styles.quote}>
            <p>"Perspective decides what you see. Tool decides what you deliver. Both must mesh — otherwise cognition is just pretty nonsense."</p>
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
