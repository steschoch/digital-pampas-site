import AnimatedSection from '../AnimatedSection';
import styles from './Problem.module.css';

const LEFT_ITEMS = [
  'Buy a generic contact list',
  'Blast cold sequences at scale',
  'Get flagged — burned domain, angry replies',
] as const;

const RIGHT_ITEMS = [
  'Qualify strictly by ICP criteria',
  'Verify through 3+ independent providers',
  'Detect buying signals before writing',
  'Write copy that fits the person, not a template',
] as const;

export default function Problem() {
  return (
    <section className={styles.section} id="the-problem">
      <div className={styles.container}>
        <div className={styles.column}>

          {/* ── Eyebrow + headline + lead ─────────────────────── */}
          <AnimatedSection animation="fade-up" once delay={0}>
            <p className={styles.eyebrow}>The real problem with outbound</p>
            <h2 className={styles.h2}>
              Most agencies buy a list and start blasting.
            </h2>
            <p className={styles.lead}>
              You get high bounce rates, a burned domain, and leads that
              don&apos;t match your ICP. The problem was never the
              intent&nbsp;—&nbsp;it was the architecture.
            </p>
          </AnimatedSection>

          {/* ── Contrast block ────────────────────────────────── */}
          <div className={styles.contrastGrid}>
            <AnimatedSection
              animation="slide-left"
              once
              delay={80}
              className={styles.contrastCell}
            >
              <div className={styles.contrastLeft}>
                <p className={styles.colLabel}>
                  <span className={styles.labelIconBad} aria-hidden="true">✕</span>
                  How the category does it
                </p>
                <ul className={styles.itemList} role="list">
                  {LEFT_ITEMS.map((item) => (
                    <li key={item} className={styles.itemLeft}>
                      <span className={styles.bulletLeft} aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-right"
              once
              delay={160}
              className={styles.contrastCell}
            >
              <div className={styles.contrastRight}>
                <p className={styles.colLabel}>
                  <span className={styles.labelIconGood} aria-hidden="true">✓</span>
                  What we do instead
                </p>
                <ul className={styles.itemList} role="list">
                  {RIGHT_ITEMS.map((item) => (
                    <li key={item} className={styles.itemRight}>
                      <span className={styles.bulletRight} aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Closing + CTA ─────────────────────────────────── */}
          <AnimatedSection animation="fade-up" once delay={120}>
            <p className={styles.closing}>
              Higher reply rates. Fewer bounces. Leads that convert. And
              when we&apos;re done, you own it.{' '}
              <strong className={styles.owned}>Not us. You.</strong>
            </p>
            <a href="#how-it-works" className={styles.textLink}>
              See the full process&nbsp;→
            </a>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
