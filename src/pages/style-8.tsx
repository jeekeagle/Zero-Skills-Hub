import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './style-8.module.css';
import {SKILLS, CATEGORIES} from '../data/skills';

function StyleSwitcher({current}: {current: number}) {
  return (
    <div className={styles.styleSwitcher}>
      Style {current}/13 — Swiss International ·
      <span><Link to="/styles">View all 13 →</Link></span>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 顶部红色矩形装饰 */}
      <div className={styles.redBar} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.gridLeft}>
            <div className={styles.eyebrow}>01 — Knowledge Catalogue</div>
            <Heading as="h1" className={clsx('hero__title', styles.title)}>
              {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
            <p className={styles.lead}>
              Perspectives and tools. Theoretical anchoring for every recommendation.
              Anti-collapse gates as a safeguard. A typology of cognition, delivered.
            </p>
            <div className={styles.ctaRow}>
              <Link to="/intro" className={styles.ctaPrimary}>Get Started →</Link>
              <Link to="/perspective/taxonomy-perspective" className={styles.ctaSecondary}>View Typology →</Link>
            </div>
            <StyleSwitcher current={8} />
          </div>
          <div className={styles.gridRight}>
            <div className={styles.metaBox}>
              <div className={styles.metaRow}><span className={styles.metaLabel}>EDITION</span><span className={styles.metaValue}>v0.1</span></div>
              <div className={styles.metaRow}><span className={styles.metaLabel}>TYPE</span><span className={styles.metaValue}>Catalogue</span></div>
              <div className={styles.metaRow}><span className={styles.metaLabel}>SCOPE</span><span className={styles.metaValue}>Open Source</span></div>
              <div className={styles.metaRow}><span className={styles.metaLabel}>SKILLS</span><span className={styles.metaValue}>02</span></div>
              <div className={styles.metaRow}><span className={styles.metaLabel}>CATEGORIES</span><span className={styles.metaValue}>02</span></div>
            </div>
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
          <div className={styles.sectionNumber}>02</div>
          <div>
            <h2 className={styles.sectionTitle}>Collection</h2>
            <p className={styles.sectionLead}>Catalogue of registered skills — by category</p>
          </div>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <Link key={s.name} to={s.to} className={styles.skillCard}>
              <div className={styles.skillNumber}>0{i + 1}</div>
              <div className={styles.skillMeta}>
                <div className={styles.skillCategory}>{s.category}</div>
                <h3 className={styles.skillTitle}>{s.title}</h3>
                <p className={styles.skillDesc}>{s.desc}</p>
                <div className={styles.skillPath}>/{s.name}</div>
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
          <div className={styles.sectionNumber}>03</div>
          <div>
            <h2 className={styles.sectionTitle}>Taxonomy</h2>
            <p className={styles.sectionLead}>Two layers: category / skill-slug</p>
          </div>
        </div>
        <div className={styles.categoriesList}>
          {CATEGORIES.map((c, i) => (
            <Link key={c.label} to={c.to} className={styles.categoryCard}>
              <div className={styles.categoryNumber}>0{i + 1}</div>
              <div className={styles.categoryMeta}>
                <div className={styles.categoryLabel}>{c.label}</div>
                <h3 className={styles.categoryTitle}>{c.title}</h3>
                <p className={styles.categoryDesc}>{c.desc}</p>
              </div>
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
          <div className={styles.sectionNumber}>04</div>
          <div>
            <h2 className={styles.sectionTitle}>Principles</h2>
            <p className={styles.sectionLead}>Foundational statements</p>
          </div>
        </div>
        <div className={styles.quoteGrid}>
          <blockquote className={styles.quote}>
            <p>"Perspectives decide what you see. Tools decide what you deliver. Both must mesh — otherwise cognition is just pretty nonsense."</p>
            <cite>— Zero-Skills Design Principle</cite>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>"Classification does not describe the order of things — it prescribes it. Every cut is both a simplification and an occlusion."</p>
            <cite>— Taxonomy Perspective · Identifying the Object</cite>
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
