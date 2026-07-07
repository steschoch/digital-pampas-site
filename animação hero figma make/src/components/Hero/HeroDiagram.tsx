import { useState, useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import styles from './HeroDiagram.module.css';

/* ── Layout constants ──────────────────────────────────────────────
 * Cards are absolutely positioned inside phaseStack.
 * SLOT = card height + gap between cards.
 * RISE_PX = 5 slots → brings Launch (card 06, index 5) to the top.
 * ─────────────────────────────────────────────────────────────── */
const CARD_H    = 40;
const CARD_GAP  = 5;
const SLOT      = CARD_H + CARD_GAP;  // 45px
const STACK_PAD = 12;
const RISE_PX   = 5 * SLOT;           // 225px — matches CSS keyframe

/* ── Data ──────────────────────────────────────────────────────── */

const PHASES = [
  { id: '01', label: 'Define ICP',  c: 'cyan'   },
  { id: '02', label: 'Build List',  c: 'sky'    },
  { id: '03', label: 'Enrich',      c: 'indigo' },
  { id: '04', label: 'AI Score',    c: 'plum'   },
  { id: '05', label: 'Sequences',   c: 'coral'  },
  { id: '06', label: 'Launch',      c: 'cyan'   },
] as const;

const SEND_ICONS = [
  { Icon: Mail,     c: 'cyan'   },
  { Icon: Linkedin, c: 'sky'    },
  { Icon: Mail,     c: 'indigo' },
  { Icon: Linkedin, c: 'plum'   },
  { Icon: Mail,     c: 'coral'  },
  { Icon: Linkedin, c: 'cyan'   },
] as const;

type ColorKey = 'cyan' | 'sky' | 'indigo' | 'plum' | 'coral';

function cc(key: ColorKey): string {
  return ({
    cyan:   styles['c-cyan'],
    sky:    styles['c-sky'],
    indigo: styles['c-indigo'],
    plum:   styles['c-plum'],
    coral:  styles['c-coral'],
  } as Record<ColorKey, string>)[key];
}

/* ── Timing (ms) ───────────────────────────────────────────────── */

// Phases appear one by one
const PHASE_DELAYS = [200, 880, 1560, 2240, 2920, 3600];

// Scroll starts when phase 05 appears (index 4, t=2920ms).
// The CSS animation is 1.8 s → stack finishes scrolling at ~4720ms.
const SCROLL_START = 2920;

// Sends content appears after scroll finishes + short dwell
const SENDS_START  = 4900;
const ICON_STRIDE  = 300;
// Last icon at SENDS_START+200+5*300 = 6600
const BOOKED_AT    = 6600 + 300;   // 6900
const COUNT_START  = BOOKED_AT + 350; // 7250
const CYCLE_MS     = 11000;

/* ── Reduced-motion hook ───────────────────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', h);
    return () => mql.removeEventListener('change', h);
  }, []);
  return reduced;
}

/* ── Stage header ──────────────────────────────────────────────── */

function StageHeader() {
  return (
    <div className={styles.stageHeader}>
      <span className={[styles.dot, styles.dotCyan, styles.dotPulse].join(' ')} />
      <span className={styles.stageTitle}>OUTBOUND MACHINE</span>
    </div>
  );
}

/* ── Sends section (shared between animated + static) ──────────── */

interface SendsProps {
  iconCount: number;
  booked:    boolean;
  count:     number;
  noAnim?:   boolean;
}

function SendsSection({ iconCount, booked, count, noAnim }: SendsProps) {
  const sendsTop = STACK_PAD + CARD_H + 14; // 66px — below where Launch lands
  return (
    <div
      className={[styles.sendsContent, noAnim ? styles.sendsNoAnim : ''].join(' ')}
      style={{ top: `${sendsTop}px` }}
    >
      <span className={styles.sendsArrow} aria-hidden="true">↓</span>

      <div className={styles.iconsRow}>
        {SEND_ICONS.slice(0, iconCount).map(({ Icon, c }, i) => (
          <div key={i} className={[styles.iconBubble, cc(c), noAnim ? styles.iconNoAnim : ''].join(' ')}>
            <Icon size={12} />
          </div>
        ))}
      </div>

      {booked && <span className={styles.sendsArrow} aria-hidden="true">↓</span>}

      {booked && (
        <>
          {/* Centered "Meeting Booked ✓" header box */}
          <div className={[styles.meetingCard, noAnim ? styles.meetingNoAnim : ''].join(' ')}>
            <span className={styles.meetingCheck}>✓</span>
            <span className={styles.meetingTitle}>Meeting Booked</span>
          </div>

          {/* Three stat boxes below */}
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statNum}>{count}</span>
              <span className={styles.statDesc}>qualified meetings booked this week</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>7</span>
              <span className={styles.statDesc}>hot leads in active conversation</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statDesc}>deals moved to proposal stage</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Static fallback (prefers-reduced-motion) ──────────────────── */

function StaticDiagram() {
  return (
    <div className={styles.diagram}>
      <div className={styles.glow} />
      <div className={styles.stage}>
        <StageHeader />
        <div className={styles.stageBody}>
          {/* Stack scrolled to final position — only Launch visible */}
          <div className={[styles.phaseStack, styles.phaseStackFinal].join(' ')}>
            {PHASES.map((p, i) => (
              <div
                key={p.id}
                className={[styles.phaseCard, cc(p.c)].join(' ')}
                style={{ top: `${STACK_PAD + i * SLOT}px` }}
              >
                <span className={styles.phaseNum}>{p.id}</span>
                <span className={styles.phaseLabel}>{p.label}</span>
              </div>
            ))}
          </div>
          <SendsSection iconCount={6} booked count={12} noAnim />
        </div>
      </div>
    </div>
  );
}

/* ── Animated diagram ──────────────────────────────────────────── */

function AnimatedDiagram() {
  const [phaseCount,  setPhaseCount]  = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showSends,   setShowSends]   = useState(false);
  const [iconCount,   setIconCount]   = useState(0);
  const [booked,      setBooked]      = useState(false);
  const [count,       setCount]       = useState(0);
  const [cycleKey,    setCycleKey]    = useState(0);

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    const q = (fn: () => void, ms: number) => ids.push(setTimeout(fn, ms));

    setPhaseCount(0);
    setIsScrolling(false);
    setShowSends(false);
    setIconCount(0);
    setBooked(false);
    setCount(0);

    // Phases appear one by one
    PHASE_DELAYS.forEach((ms, i) => q(() => setPhaseCount(i + 1), ms));

    // Phase 05 appears → stack starts scrolling upward (CSS animation takes over)
    q(() => setIsScrolling(true), SCROLL_START);

    // After scroll finishes + dwell, sends content fades in
    q(() => setShowSends(true), SENDS_START);

    for (let i = 0; i < 6; i++) {
      const n = i + 1;
      q(() => setIconCount(n), SENDS_START + 200 + i * ICON_STRIDE);
    }

    q(() => setBooked(true), BOOKED_AT);

    for (let n = 1; n <= 12; n++) {
      q(() => setCount(n), COUNT_START + (n - 1) * 65);
    }

    q(() => setCycleKey(k => k + 1), CYCLE_MS);

    return () => ids.forEach(clearTimeout);
  }, [cycleKey]);

  return (
    <div className={styles.diagram}>
      <div className={styles.glow} />
      <div className={styles.stage}>
        <StageHeader />
        <div className={styles.stageBody}>

          {/*
           * phaseStack is a positioned container for all cards.
           * When isScrolling=true it receives the CSS animation that
           * continuously slides it up by RISE_PX (225px = 5×45px).
           * Cards exit through the top edge (clipped + faded by the mask
           * on stageBody). Launch ends up exactly at STACK_PAD from the top.
           */}
          <div
            className={[
              styles.phaseStack,
              isScrolling ? styles.phaseStackScrolling : '',
            ].join(' ')}
          >
            {PHASES.slice(0, phaseCount).map((p, i) => (
              <div
                key={p.id}
                className={[styles.phaseCard, cc(p.c)].join(' ')}
                style={{ top: `${STACK_PAD + i * SLOT}px` }}
              >
                <span className={styles.phaseNum}>{p.id}</span>
                <span className={styles.phaseLabel}>{p.label}</span>
              </div>
            ))}
          </div>

          {showSends && (
            <SendsSection
              iconCount={iconCount}
              booked={booked}
              count={count}
            />
          )}

        </div>
      </div>
    </div>
  );
}

/* ── Export ────────────────────────────────────────────────────── */

export default function HeroDiagram() {
  const reduced = usePrefersReducedMotion();
  return reduced ? <StaticDiagram /> : <AnimatedDiagram />;
}
