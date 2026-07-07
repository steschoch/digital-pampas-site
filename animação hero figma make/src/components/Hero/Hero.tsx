import HeroDiagram from './HeroDiagram';
import styles from './Hero.module.css';

const METRICS = [
  { value: '1.58%',   label: 'Bounce rate',             sub: 'over 340k+ sends' },
  { value: '95%+',    label: 'Email accuracy',           sub: null               },
  { value: '3+',      label: 'Verification providers',  sub: null               },
  { value: '~4 wks',  label: 'Time to live',             sub: null               },
] as const;

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.container}>

        {/* ── Two-column grid ──────────────────────────────────── */}
        <div className={styles.grid}>

          {/* Left: copy */}
          <div className={styles.left}>
            <p className={styles.eyebrow}>
              B2B outbound infrastructure&nbsp;&middot;&nbsp;built on Clay
            </p>

            <h1 className={styles.h1}>
              The machine that fills your pipeline.
              <span className={styles.h1Accent}>
                {' '}You keep it when we&apos;re done.
              </span>
            </h1>

            <p className={styles.subheadline}>
              We build your full outbound system — ICP to inbox — on your own
              domains. Live in about four weeks. Then it&apos;s yours to run.
            </p>

            <div className={styles.actions}>
              <a href="#book-call" className={styles.btnPrimary}>
                Book a 15-min call
              </a>
              <a href="#how-it-works" className={styles.btnGhost}>
                See how we build it&nbsp;&rarr;
              </a>
            </div>

            <p className={styles.microcopy}>
              15-minute call&nbsp;&middot;&nbsp;No pitch deck&nbsp;&middot;&nbsp;No commitment
            </p>
          </div>

          {/* Right: animated diagram */}
          <div className={styles.right}>
            <HeroDiagram />
          </div>

        </div>

        {/* ── Metric strip — inside the section, centered ───────── */}
        <div className={styles.metricsStrip} aria-label="Key performance metrics">
          {METRICS.map((m) => (
            <div key={m.value} className={styles.metricItem}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
              {m.sub && <span className={styles.metricSub}>{m.sub}</span>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
