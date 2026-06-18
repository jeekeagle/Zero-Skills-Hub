import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './styles.module.css';
import {STYLES} from '../data/skills';

// 每个样式的色板预览
const STYLE_PREVIEW: Record<number, {bg: string; fg: string; accent: string; secondary?: string}> = {
  1:  {bg: 'linear-gradient(135deg, #0c1426 0%, #1f4e79 100%)', fg: '#ffffff', accent: '#c89732', secondary: '#b1391d'},
  2:  {bg: 'linear-gradient(135deg, #fef3f8 0%, #ffe0d6 100%)', fg: '#2d2d2d', accent: '#d4a574', secondary: '#e8b4b8'},
  3:  {bg: 'linear-gradient(135deg, #f9f3e3 0%, #e8dfc8 100%)', fg: '#1a1a1a', accent: '#c0392b', secondary: '#8b6f47'},
  4:  {bg: 'linear-gradient(135deg, #fff8e7 0%, #ffe5e0 100%)', fg: '#1a1a1a', accent: '#ff3b30', secondary: '#ffbd2e'},
  5:  {bg: 'linear-gradient(135deg, #e0e5ec 0%, #c5d0de 100%)', fg: '#4a5568', accent: '#6b7c93'},
  6:  {bg: 'linear-gradient(135deg, #0a0a1e 0%, #1a0033 100%)', fg: '#d0d0ff', accent: '#ff00aa', secondary: '#00ffff'},
  7:  {bg: 'linear-gradient(135deg, #f8f5f0 0%, #ede5d3 100%)', fg: '#1a1a1a', accent: '#c8102e'},
  8:  {bg: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)', fg: '#0a0a0a', accent: '#e60012'},
  9:  {bg: 'linear-gradient(135deg, #1a0033 0%, #4a0e5c 100%)', fg: '#ffffff', accent: '#ff71ce', secondary: '#01cdfe'},
  10: {bg: 'linear-gradient(135deg, #f5f1e8 0%, #d4c5a9 100%)', fg: '#1a1a1a', accent: '#d62828', secondary: '#003f88'},
  11: {bg: 'linear-gradient(135deg, #5c94fc 0%, #0078d8 100%)', fg: '#1a1a1a', accent: '#fcd800', secondary: '#f878b8'},
  12: {bg: 'linear-gradient(135deg, #fef3f8 0%, #f0e9ff 100%)', fg: '#1a1a2e', accent: '#8b5cf6', secondary: '#ec4899'},
  13: {bg: 'linear-gradient(135deg, #fafafa 0%, #f0e8e8 100%)', fg: '#2d2d2d', accent: '#e8b4b8', secondary: '#b8d8e8'},
};

function StyleCard({style}: {style: typeof STYLES[number]}) {
  const preview = STYLE_PREVIEW[style.id];
  return (
    <Link to={style.slug} className={styles.card}>
      <div className={styles.cardPreview} style={{background: preview.bg}}>
        <span className={styles.cardNumber} style={{color: preview.accent}}>0{style.id}</span>
        <div className={styles.cardPalette}>
          <span className={styles.paletteDot} style={{background: preview.accent}} />
          {preview.secondary && <span className={styles.paletteDot} style={{background: preview.secondary}} />}
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardLabel}>样式 {style.id}</div>
        <h3 className={styles.cardTitle}>{style.label}</h3>
        <p className={styles.cardDesc}>{style.desc}</p>
        <div className={styles.cardArrow}>查看 →</div>
      </div>
    </Link>
  );
}

export default function Styles(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`样式目录 · ${siteConfig.title}`} description="13 种首页风格对比">
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <Link to="/" className={styles.backLink}>← 返回首页</Link>
            <div className={styles.eyebrow}>— style index ·</div>
            <Heading as="h1" className={styles.title}>样式目录 · 13 种风格</Heading>
            <p className={styles.lead}>
              同一份内容,十三种视觉表达。<br />
              挑选你最心仪的一种,我们会以它作为未来所有内容的默认首页风格。
            </p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>13 种风格</span>
              <span className={styles.metaSep}>·</span>
              <span className={styles.metaItem}>所有样式共享同一份 skill 数据</span>
              <span className={styles.metaSep}>·</span>
              <span className={styles.metaItem}>点击卡片进入对应样式</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {STYLES.map((s) => (
              <StyleCard key={s.id} style={s} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
