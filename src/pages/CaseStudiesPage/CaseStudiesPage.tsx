import { Link } from 'react-router-dom';
import { AnimatedSection, CaseStudyCard } from '@steschoch/digital-pampas-ds';
import { caseStudies } from '@/data/caseStudies';
import styles from './CaseStudiesPage.module.css';

export default function CaseStudiesPage() {
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
        </div>
      </section>

      {/* ─── Cases grid ─────────────────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {caseStudies.map((cs, i) => (
              <CaseStudyCard
                key={cs.slug}
                case={cs}
                delay={(i % 3) * 100}
                renderLink={({ href, className, children, ...rest }) => (
                  <Link to={href} className={className} {...rest}>{children}</Link>
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
