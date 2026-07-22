import { Link, useParams } from 'react-router-dom';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';
import styles from './CardsPreviewPage.module.css';

/* Each card in the grid gets one hue from the DS palette, in fixed order. */
const HUES = ['hueCyan', 'hueCoral', 'hueSky', 'huePlum'] as const;

/* ─── Sector graphics ─────────────────────────────────────────────────
   Abstract SVG per industry, drawn with currentColor so the card hue
   flows in via CSS. All decorative: aria-hidden at the usage site. */

function SectorGraphic({ industry }: { industry: string }) {
  const common = {
    viewBox: '0 0 280 120',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    className: styles.viz,
  };

  if (industry === 'B2B SaaS' || industry === 'Data & AI consulting') {
    /* Network activation: nodes lighting up across a graph */
    return (
      <svg {...common}>
        <line x1="48" y1="88" x2="118" y2="38" opacity="0.35" />
        <line x1="118" y1="38" x2="196" y2="72" opacity="0.35" />
        <line x1="48" y1="88" x2="140" y2="96" opacity="0.35" />
        <line x1="140" y1="96" x2="196" y2="72" opacity="0.35" />
        <line x1="196" y1="72" x2="244" y2="30" opacity="0.35" />
        <line x1="118" y1="38" x2="140" y2="96" opacity="0.2" />
        <circle cx="48" cy="88" r="7" fill="currentColor" opacity="0.9" />
        <circle cx="118" cy="38" r="9" fill="currentColor" />
        <circle cx="140" cy="96" r="5" opacity="0.7" />
        <circle cx="196" cy="72" r="7" fill="currentColor" opacity="0.55" />
        <circle cx="244" cy="30" r="5" opacity="0.7" />
        <circle cx="118" cy="38" r="16" opacity="0.3" />
      </svg>
    );
  }

  if (industry === 'Cybersecurity') {
    /* Radar sweep: concentric rings and detected targets */
    return (
      <svg {...common}>
        <circle cx="140" cy="60" r="18" opacity="0.9" />
        <circle cx="140" cy="60" r="36" opacity="0.55" />
        <circle cx="140" cy="60" r="54" opacity="0.3" />
        <line x1="140" y1="60" x2="188" y2="24" opacity="0.8" />
        <circle cx="188" cy="24" r="4" fill="currentColor" />
        <circle cx="104" cy="82" r="3.5" fill="currentColor" opacity="0.7" />
        <circle cx="170" cy="92" r="3.5" fill="currentColor" opacity="0.5" />
        <circle cx="140" cy="60" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (industry === 'Outbound agency' || industry === 'SAP consulting') {
    /* Parallel campaigns: grouped bars stepping up */
    return (
      <svg {...common} stroke="none">
        <rect x="52" y="74" width="18" height="34" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="76" y="62" width="18" height="46" rx="3" fill="currentColor" opacity="0.55" />
        <rect x="100" y="50" width="18" height="58" rx="3" fill="currentColor" opacity="0.75" />
        <rect x="136" y="66" width="18" height="42" rx="3" fill="currentColor" opacity="0.45" />
        <rect x="160" y="44" width="18" height="64" rx="3" fill="currentColor" opacity="0.65" />
        <rect x="184" y="24" width="18" height="84" rx="3" fill="currentColor" />
        <rect x="220" y="56" width="18" height="52" rx="3" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  /* Customer experience / BPO: live signal waveform with trigger peaks */
  return (
    <svg {...common}>
      <path
        d="M20 70 L60 70 L74 40 L88 92 L102 58 L128 58 L142 26 L156 96 L170 62 L204 62 L216 44 L228 76 L260 70"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="142" cy="26" r="4" fill="currentColor" />
      <circle cx="74" cy="40" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="216" cy="44" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/* ─── Option 1 · Signal Glow ──────────────────────────────────────────
   Dark card, gaussian-blur glow in the card hue, one hero metric leads. */

function CardGlow({ cs, hue }: { cs: CaseStudy; hue: string }) {
  const [hero, ...rest] = cs.heroMetrics;
  return (
    <Link to={`/case-studies/${cs.slug}`} className={`${styles.glowCard} ${styles[hue]}`}>
      <span className={styles.glowBlob} aria-hidden="true" />
      <div className={styles.glowTop}>
        <span className={styles.chip}>{cs.industry}</span>
        <span className={styles.chipGhost}>{cs.eyebrow}</span>
      </div>
      <p className={styles.glowValue}>{hero.value}</p>
      <p className={styles.glowValueLabel}>{hero.label}</p>
      <h3 className={styles.glowHeadline}>{cs.headline}</h3>
      <ul className={styles.glowMetrics}>
        {rest.map(m => (
          <li key={m.label}>
            <strong>{m.value}</strong> {m.label}
          </li>
        ))}
      </ul>
      <span className={styles.glowCta}>View case study</span>
    </Link>
  );
}

/* ─── Option 2 · Sector Panel ─────────────────────────────────────────
   Sector graphic in a framed panel on top, metrics row, bordered button. */

function CardPanel({ cs, hue }: { cs: CaseStudy; hue: string }) {
  return (
    <Link to={`/case-studies/${cs.slug}`} className={`${styles.panelCard} ${styles[hue]}`}>
      <div className={styles.panelViz} aria-hidden="true">
        <img className={styles.panelImg} src={`/images/cases/${cs.slug}.jpg`} alt="" loading="lazy" />
      </div>
      <p className={styles.panelEyebrow}>
        {cs.industry} · {cs.year}
      </p>
      <h3 className={styles.panelHeadline}>{cs.headline}</h3>
      <ul className={styles.panelMetrics}>
        {cs.heroMetrics.map(m => (
          <li key={m.label}>
            <span className={styles.panelValue}>{m.value}</span>
            <span className={styles.panelLabel}>{m.label}</span>
          </li>
        ))}
      </ul>
      <span className={styles.panelBtn}>View case</span>
    </Link>
  );
}

/* ─── Option 3 · Metrics First ────────────────────────────────────────
   Metrics overlaid on a colored band with the sector graphic behind. */

function CardBand({ cs, hue }: { cs: CaseStudy; hue: string }) {
  return (
    <Link to={`/case-studies/${cs.slug}`} className={`${styles.bandCard} ${styles[hue]}`}>
      <div className={styles.band}>
        <div className={styles.bandViz} aria-hidden="true">
          <SectorGraphic industry={cs.industry} />
        </div>
        <ul className={styles.bandMetrics}>
          {cs.heroMetrics.map(m => (
            <li key={m.label}>
              <span className={styles.bandValue}>{m.value}</span>
              <span className={styles.bandLabel}>{m.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bandBody}>
        <p className={styles.bandEyebrow}>{cs.industry}</p>
        <h3 className={styles.bandHeadline}>{cs.headline}</h3>
        <span className={styles.bandCta}>View case study</span>
      </div>
    </Link>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */

const VARIANTS = {
  '1': {
    label: 'Opção 1: Signal Glow',
    desc: 'Card escuro com glow gaussiano na cor da paleta, uma cor por card. A métrica principal vira protagonista.',
    Card: CardGlow,
  },
  '2': {
    label: 'Opção 2: Sector Panel',
    desc: 'Foto do setor num painel no topo com tint da cor do card, título e métricas abaixo, botão com borda.',
    Card: CardPanel,
  },
  '3': {
    label: 'Opção 3: Metrics First',
    desc: 'As 3 métricas sobre a faixa colorida com o gráfico do setor ao fundo; setor e título abaixo.',
    Card: CardBand,
  },
} as const;

export default function CardsPreviewPage() {
  const { v = '1' } = useParams<{ v: string }>();
  const variant = VARIANTS[v as keyof typeof VARIANTS] ?? VARIANTS['1'];
  const { Card } = variant;

  return (
    <div className={styles.page}>
      <div className={styles.bar}>
        <span className={styles.barLabel}>Case study cards:</span>
        {(['1', '2', '3'] as const).map(id => (
          <Link
            key={id}
            to={`/preview/cards/${id}`}
            className={[styles.varBtn, v === id ? styles.varBtnActive : ''].join(' ')}
          >
            {VARIANTS[id].label}
          </Link>
        ))}
        <span className={styles.barDesc}>{variant.desc}</span>
      </div>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {caseStudies.map((cs, i) => (
              <Card key={cs.slug} cs={cs} hue={HUES[i % HUES.length]} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
