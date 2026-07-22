import { Link, Navigate, useParams } from 'react-router-dom';
import { caseStudies, getCaseStudyBySlug, SECTORS } from '@/data/caseStudies';
import { SECTOR_HUE } from '@/pages/CaseStudiesPage/CaseStudiesPage';
import styles from './CaseStudyPage.module.css';

/* Tool name → logo file in public/logos/ */
const TOOL_LOGO: Record<string, string> = {
  Clay: 'clay-favicon.png',
  Instantly: 'instantly-icon.png',
  Apollo: 'apollo-icon.png',
  'Claude AI': 'claude-icon.png',
  'Make.com': 'make-nobg.png',
  Aimfox: 'aimfox-icon.png',
  LinkedIn: 'linkedin-icon.png',
  SmartLead: 'smartlead-icon.png',
  Hypertide: 'hypertide-icon.png',
  BetterContact: 'bettercontact-icon.png',
  Findymail: 'findymail-icon.png',
  DiscoLike: 'discolike-icon.png',
  MixRank: 'mixrank-icon.png',
};

export default function CaseStudyPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const cs = getCaseStudyBySlug(slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const hue = styles[SECTOR_HUE[cs.sector]];
  const sectorLabel = SECTORS.find(s => s.key === cs.sector)?.label ?? cs.industry;
  const related = caseStudies.filter(c => c.slug !== cs.slug).slice(0, 3);

  return (
    <main className={`${styles.page} ${hue}`}>
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/case-studies">Case Studies</Link>
            <span aria-hidden="true">/</span>
            <span>{cs.client}</span>
          </nav>
          <div className={styles.tagRow}>
            <span className={styles.sectorChip}>{sectorLabel}</span>
            <span className={styles.tagGhost}>{cs.client}</span>
            <span className={styles.tagGhost}>{cs.eyebrow}</span>
          </div>
          <h1 className={styles.h1}>{cs.headline}</h1>
          <p className={styles.dek}>{cs.dek}</p>
          <ul className={styles.heroMetrics}>
            {cs.heroMetrics.map(m => (
              <li key={m.label}>
                <span className={styles.heroValue}>{m.value}</span>
                <span className={styles.heroLabel}>{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ─── TL;DR ──────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.tldrGrid}>
            {(
              [
                ['The Client', cs.tldr.client, 'hueSky'],
                ['The Problem', cs.tldr.problem, 'hueCoral'],
                ['The Build', cs.tldr.build, 'hueCyan'],
                ['The Outcome', cs.tldr.outcome, 'huePlum'],
              ] as const
            ).map(([title, body, cardHue]) => (
              <article key={title} className={`${styles.tldrCard} ${styles[cardHue]}`}>
                <h2 className={styles.tldrTitle}>{title}</h2>
                <p className={styles.tldrBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lead quote (named clients) ─────────────────────────────── */}
      {cs.quotes && cs.quotes.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <blockquote className={styles.leadQuote}>
              <p>“{cs.quotes[0].text}”</p>
              <footer>{cs.quotes[0].author}</footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ─── Context ────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Context</p>
          <h2 className={styles.h2}>The client</h2>
          <div className={styles.prose}>
            {cs.context.map(p => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Constraints ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Constraints</p>
          <h2 className={styles.h2}>Why this was hard</h2>
          <div className={styles.constraintGrid}>
            {cs.constraints.map(c => (
              <article key={c.title} className={styles.constraintCard}>
                <h3 className={styles.constraintTitle}>{c.title}</h3>
                <p className={styles.constraintBody}>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The system ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Architecture</p>
          <h2 className={styles.h2}>The system</h2>
          <p className={styles.sectionIntro}>{cs.systemIntro}</p>
          <ol className={styles.layerList}>
            {cs.layers.map((l, i) => (
              <li key={l.title} className={styles.layerCard}>
                <span className={styles.layerNum}>Layer {String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={styles.layerTitle}>{l.title}</h3>
                  <p className={styles.layerBody}>{l.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Callout band ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <aside className={styles.callout}>{cs.callout}</aside>
        </div>
      </section>

      {/* ─── Timeline ───────────────────────────────────────────────── */}
      {cs.timeline && (
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.kicker}>Speed</p>
            <h2 className={styles.h2}>Contract to handoff in 63 days</h2>
            <ol className={styles.timeline}>
              {cs.timeline.map(t => (
                <li key={t.marker}>
                  <span className={styles.timelineMarker}>{t.marker}</span>
                  <span className={styles.timelineEvent}>{t.event}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ─── Detail tables (clinic triggers, sequence) ──────────────── */}
      {cs.detailTables?.map(dt => (
        <section key={dt.title} className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.h2}>{dt.title}</h2>
            {dt.intro && <p className={styles.sectionIntro}>{dt.intro}</p>}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{dt.headers[0]}</th>
                  <th>{dt.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {dt.rows.map(r => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* ─── Results ────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Results</p>
          <h2 className={styles.h2}>{cs.results.tableTitle}</h2>
          {cs.results.intro && <p className={styles.sectionIntro}>{cs.results.intro}</p>}
          <ul className={styles.resultHighlights}>
            {cs.results.highlights.map(m => (
              <li key={m.label}>
                <span className={styles.resultValue}>{m.value}</span>
                <span className={styles.resultLabel}>{m.label}</span>
              </li>
            ))}
          </ul>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {cs.results.table.map(r => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <td className={styles.tableValue}>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Remaining quotes ───────────────────────────────────────── */}
      {cs.quotes && cs.quotes.length > 1 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.kicker}>In their words</p>
            <h2 className={styles.h2}>What the client said</h2>
            <div className={styles.quoteGrid}>
              {cs.quotes.slice(1).map(q => (
                <blockquote key={q.text.slice(0, 32)} className={styles.quoteCard}>
                  <p>“{q.text}”</p>
                  <footer>{q.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Fit ────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Fit</p>
          <h2 className={styles.h2}>Who this is for</h2>
          <div className={styles.fitGrid}>
            {cs.fit.map(f => (
              <article key={f.title} className={styles.fitCard}>
                <h3 className={styles.fitTitle}>{f.title}</h3>
                <p className={styles.fitBody}>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stack ──────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Stack</p>
          <h2 className={styles.h2}>Tools used</h2>
          <ul className={styles.stackGrid}>
            {cs.stack.map(t => (
              <li key={t.name} className={styles.stackChip}>
                {TOOL_LOGO[t.name] ? (
                  <img
                    className={styles.stackLogo}
                    src={`/logos/${TOOL_LOGO[t.name]}`}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.stackMonogram} aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                )}
                <div className={styles.stackText}>
                  <span className={styles.stackName}>{t.name}</span>
                  <span className={styles.stackRole}>{t.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Want numbers like these for your pipeline?</h2>
            <p className={styles.ctaBody}>
              See how a system like this gets built for your market, even if you have zero
              infrastructure today.
            </p>
            <a href="/#book-call" className={styles.ctaBtn}>Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>

      {/* ─── More cases ─────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLast}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>More builds like this</h2>
          <div className={styles.moreGrid}>
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/case-studies/${r.slug}`}
                className={`${styles.moreCard} ${styles[SECTOR_HUE[r.sector]]}`}
              >
                <span className={styles.moreEyebrow}>{r.industry}</span>
                <span className={styles.moreHeadline}>{r.headline}</span>
              </Link>
            ))}
          </div>
          <Link to="/case-studies" className={styles.backLink}>Back to Case Studies</Link>
        </div>
      </section>
    </main>
  );
}
