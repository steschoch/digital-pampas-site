import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@steschoch/digital-pampas-ds';
import { caseStudies, SECTORS, type CaseSector, type CaseStudy } from '@/data/caseStudies';
import styles from './CaseStudiesPage.module.css';

/* Sector → hue class. One color per sector, from the DS palette. */
export const SECTOR_HUE: Record<CaseSector, string> = {
  cybersecurity: 'hueCyan',
  healthcare: 'huePlum',
  'data-ai': 'hueCoral',
  'agencies-talent': 'hueSky',
};

function CaseCard({ cs }: { cs: CaseStudy }) {
  const hue = SECTOR_HUE[cs.sector];
  return (
    <Link to={`/case-studies/${cs.slug}`} className={`${styles.card} ${styles[hue]}`}>
      <div className={styles.cardViz} aria-hidden="true">
        <img
          className={styles.cardImg}
          src={`/images/cases/${cs.slug}.jpg`}
          alt=""
          loading="lazy"
        />
      </div>
      <p className={styles.cardEyebrow}>
        {cs.industry} · {cs.year}
      </p>
      <h3 className={styles.cardHeadline}>{cs.headline}</h3>
      <ul className={styles.cardMetrics}>
        {cs.heroMetrics.slice(0, 3).map(m => (
          <li key={m.label}>
            <span className={styles.cardValue}>{m.value}</span>
            <span className={styles.cardLabel}>{m.label}</span>
          </li>
        ))}
      </ul>
      <span className={styles.cardCta}>View case</span>
    </Link>
  );
}

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<CaseSector | 'all'>('all');
  const visible = filter === 'all' ? caseStudies : caseStudies.filter(c => c.sector === filter);

  return (
    <main>
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <section className={styles.header}>
        <div className={styles.container}>
          <AnimatedSection animation="fade-up" once>
            <p className={styles.eyebrow}>Case Studies</p>
            <h1 className={styles.h1}>Real infrastructure. Real results.</h1>
            <p className={styles.subtitle}>
              Every case includes the actual system we built, the challenge, and the measurable
              outcome. No vanity metrics.
            </p>
          </AnimatedSection>

          {/* ─── Sector filter ────────────────────────────────────── */}
          <div className={styles.filters} role="group" aria-label="Filter case studies by sector">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={[styles.pill, filter === 'all' ? styles.pillAllActive : ''].join(' ')}
              aria-pressed={filter === 'all'}
            >
              All
            </button>
            {SECTORS.map(s => (
              <button
                key={s.key}
                type="button"
                onClick={() => setFilter(s.key)}
                className={[
                  styles.pill,
                  styles[SECTOR_HUE[s.key]],
                  filter === s.key ? styles.pillActive : '',
                ].join(' ')}
                aria-pressed={filter === s.key}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cases grid ─────────────────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {visible.map(cs => (
              <CaseCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
