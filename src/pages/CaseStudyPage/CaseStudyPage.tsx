import { useParams, Link, Navigate } from 'react-router-dom';
import { AnimatedSection } from '@steschoch/digital-pampas-ds';
import { getCaseStudyBySlug } from '@/data/caseStudies';
import type { CaseMetric } from '@/data/caseStudies';
import styles from './CaseStudyPage.module.css';

function accentVar(accent?: CaseMetric['accent']): string {
  switch (accent) {
    case 'primary':   return 'var(--dp-color-primary)';
    case 'secondary': return 'var(--dp-color-secondary)';
    case 'tertiary':  return 'var(--dp-color-tertiary)';
    case 'sky':       return 'var(--dp-color-sky-blue)';
    case 'plum':      return 'var(--dp-color-plum-text)';
    default:          return 'var(--dp-color-on-surface)';
  }
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudyBySlug(slug ?? '');

  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <main>
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <AnimatedSection animation="fade-up" once>
            <Link to="/case-studies" className={styles.breadcrumb}>
              ← Case studies
            </Link>
            <p className={styles.eyebrow}>{cs.industry}</p>
            <h1 className={styles.h1}>{cs.headline}</h1>
            <p className={styles.meta}>
              <span>{cs.service}</span>
              <span className={styles.metaDot} aria-hidden="true">·</span>
              <span>{cs.industry}</span>
              <span className={styles.metaDot} aria-hidden="true">·</span>
              <span>{cs.year}</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Metrics bar ────────────────────────────────────────────── */}
      <div className={styles.metricsBar}>
        <div className={styles.container}>
          <div className={styles.metricsBarInner}>
            {cs.heroMetrics.map((m, i) => (
              <div key={i} className={styles.metricsBarCell}>
                <span
                  className={styles.metricsBarValue}
                  style={{ color: accentVar(m.accent) }}
                >
                  {m.value}
                </span>
                <span className={styles.metricsBarLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Body ───────────────────────────────────────────────────── */}
      <article className={styles.body} aria-label={`Case study: ${cs.client}`}>
        <div className={styles.container}>
          <div className={styles.bodyContent}>

            {/* The context */}
            <AnimatedSection animation="fade-up" once>
              <section className={styles.bodySection} aria-labelledby="section-context">
                <p
                  id="section-context"
                  className={styles.sectionEyebrow}
                  style={{ color: 'var(--dp-color-tertiary)' }}
                >
                  The context
                </p>
                <p className={styles.bodyText}>{cs.context}</p>
              </section>
            </AnimatedSection>

            {/* The challenge */}
            <AnimatedSection animation="fade-up" once delay={50}>
              <section className={styles.bodySection} aria-labelledby="section-challenge">
                <p
                  id="section-challenge"
                  className={styles.sectionEyebrow}
                  style={{ color: 'var(--dp-color-secondary)' }}
                >
                  The challenge
                </p>
                <p className={styles.bodyText}>{cs.challenge}</p>
              </section>
            </AnimatedSection>

            {/* The approach */}
            <AnimatedSection animation="fade-up" once delay={100}>
              <section className={styles.bodySection} aria-labelledby="section-approach">
                <p
                  id="section-approach"
                  className={styles.sectionEyebrow}
                  style={{ color: 'var(--dp-color-primary)' }}
                >
                  The approach
                </p>
                <div className={styles.approachSteps}>
                  {cs.approach.map((step, i) => (
                    <div
                      key={i}
                      className={[
                        styles.approachStep,
                        i > 0 ? styles.approachStepBorder : '',
                      ].join(' ')}
                    >
                      <h3 className={styles.approachTitle}>{step.title}</h3>
                      <p className={styles.bodyText}>{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* The result */}
            <AnimatedSection animation="fade-up" once delay={150}>
              <section className={styles.bodySection} aria-labelledby="section-result">
                <p
                  id="section-result"
                  className={styles.sectionEyebrow}
                  style={{ color: 'var(--dp-color-sky-blue)' }}
                >
                  The result
                </p>
                <p className={styles.resultSummary}>{cs.result.summary}</p>
                <div className={styles.resultMetrics}>
                  {cs.result.metrics.map((m, i) => (
                    <div key={i} className={styles.resultMetric}>
                      <span
                        className={styles.resultMetricValue}
                        style={{ color: accentVar(m.accent) }}
                      >
                        {m.value}
                      </span>
                      <span className={styles.resultMetricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

          </div>
        </div>
      </article>

      {/* ─── CTA section ────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <AnimatedSection animation="fade-up" once>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaH2}>Ready to build yours?</h2>
              <p className={styles.ctaSub}>
                Start with a 15-min discovery call. No pitch deck.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/#book-call" className={styles.ctaPrimary}>
                  Book a call
                </a>
                <Link to="/case-studies" className={styles.ctaSecondary}>
                  View all cases
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
