import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Database, Linkedin, Layers, Mail, PhoneCall, Bot, Sparkles,
  Zap, Target, BarChart2, Phone, Search, TrendingUp, Wrench,
  Brain, Globe, Tag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './HowWeBuildIt.module.css';

/* ── Constants ─────────────────────────────────────────────────────── */

const NAV_H = 72;

const TOOL_ICONS: Record<string, LucideIcon> = {
  'Apollo':             Database,
  'LinkedIn Sales Nav': Linkedin,
  'LinkedIn':           Linkedin,
  'Clay':               Layers,
  'Clay Enrichment':    Layers,
  'Clay AI':            Layers,
  'FindyMail':          Mail,
  'BetterContact':      PhoneCall,
  'Claude AI':          Bot,
  'GPT-4':              Sparkles,
  'Instantly':          Zap,
  'Smartlead':          Target,
  'Campaign Dashboard': BarChart2,
  'Strategy Call':      Phone,
  'Clearbit':           Search,
  'Crunchbase':         TrendingUp,
  'BuiltWith':          Wrench,
  'AI Analysis':        Brain,
  'News API':           Globe,
};

function IconTag({ name, small }: { name: string; small?: boolean }) {
  const Icon = TOOL_ICONS[name] ?? Tag;
  return (
    <span className={small ? styles.enrichTag : styles.toolTag} title={name} aria-label={name}>
      <Icon size={small ? 13 : 17} aria-hidden="true" />
    </span>
  );
}

const PHASES = [
  {
    title: 'Define Your Ideal Customer Profile', duration: '~1 hour',
    desc: "We start by understanding exactly who you're targeting and what makes them a perfect fit for your solution.",
    bullets: ['Analyze your best customers and identify patterns', 'Define key firmographic and demographic criteria', 'Map decision-maker personas and pain points'],
    youGet: 'Crystal-clear ICP document with targeting parameters',
    tools: ['Strategy Call'],
  },
  {
    title: 'Build Your Prospect List', duration: '~2 hours',
    desc: 'Using your ICP criteria, we source and compile a high-quality list of prospects from multiple databases.',
    bullets: ['Source prospects from multiple databases and platforms', 'Apply ICP filters automatically for perfect matches', 'Remove duplicates and clean bad data'],
    youGet: '500-2000+ qualified prospects matching your ICP',
    tools: ['Apollo', 'LinkedIn Sales Nav'],
  },
  {
    title: 'Enrich With Deep Data', duration: '~2-3 hours',
    desc: 'We verify every email address and enrich each prospect with personalization data points.',
    bullets: ['Triple-verify emails with waterfall enrichment approach', 'Add LinkedIn profiles and detailed company information', 'Detect buying signals like hiring, funding, and tech stack'],
    youGet: '95%+ email accuracy with rich personalization data on every lead',
    tools: ['Apollo', 'FindyMail', 'BetterContact', 'Clay Enrichment'],
  },
  {
    title: 'AI-Powered Lead Prioritization', duration: '~2-3 hours',
    desc: 'Our AI analyzes each prospect and generates custom talking points based on their profile.',
    bullets: ['Score leads by ICP fit and buying intent', 'Detect pain points and trigger events automatically', 'Generate unique personalization variables for each lead'],
    youGet: 'Leads ranked by fit score with AI-generated talking points',
    tools: ['Claude AI', 'GPT-4', 'Clay AI'],
  },
  {
    title: 'Craft Your Outreach Sequences', duration: '~2-3 hours',
    desc: 'We write personalized email sequences designed to maximize engagement and response rates.',
    bullets: ['Write personalized email templates with variable insertion', 'Set up multi-touch sequences (email + LinkedIn)', 'Configure sending schedules and daily limits'],
    youGet: 'Battle-tested email sequences ready to send',
    tools: ['Instantly', 'Smartlead'],
  },
  {
    title: 'Launch & Continuously Improve', duration: 'Ongoing',
    desc: 'We monitor performance daily and optimize your campaigns for maximum results.',
    bullets: ['Monitor campaign performance daily with real-time dashboards', 'Handle replies and qualify hot leads immediately', 'Run A/B tests and iterate messaging based on data'],
    youGet: '5-10 qualified conversations per week on autopilot',
    tools: ['Campaign Dashboard'],
  },
] as const;

const TAB_LABELS = ['ICP Definition', 'List Building', 'Enrichment', 'AI Scoring', 'Sequences', 'Launch'] as const;
const PANELS     = [IcpPanel, ProspectPanel, EnrichPanel, ScoringPanel, SequencePanel, LaunchPanel];

/* ── Right-panel components ────────────────────────────────────────── */

function IcpPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.icpGrid}>
        {[
          { n:'01', t:'Firmographics',   pairs:[['SIZE','50-500 employees'],['INDUSTRY','B2B SaaS'],['REVENUE','$1M–$50M ARR']] },
          { n:'02', t:'Technographics',  pairs:[['CRM','HubSpot, Salesforce'],['TOOLS','Clay, Apollo'],['STACK','Modern automation']] },
          { n:'03', t:'Behavioral',      pairs:[['DECISIONS','Data-driven'],['ACTIVE','On LinkedIn'],['CYCLE','2–4 weeks']] },
          { n:'04', t:'Success Signals', pairs:[['PAIN','Manual work'],['GOAL','Scale sales'],['TRIGGERS','Funding, hiring']] },
        ].map(cell => (
          <div key={cell.n} className={styles.icpCell}>
            <div className={styles.icpCellHead}>
              <span className={styles.icpCellNum}>{cell.n}</span>
              <span className={styles.icpCellTitle}>{cell.t}</span>
            </div>
            <div className={styles.icpPairs}>
              {cell.pairs.map(([k, v]) => (
                <div key={k} className={styles.icpPair}>
                  <span className={styles.icpKey}>{k}</span>
                  <span className={styles.icpVal}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.icpStatus}>
        <span className={styles.icpStatusDot} aria-hidden="true" />
        <span>ICP TARGETING ACTIVE</span>
      </div>
    </div>
  );
}

function ProspectPanel() {
  const rows = [
    { id:'001', company:'TechFlow',     contact:'Sarah Chen, VP',  industry:'SaaS'       },
    { id:'002', company:'DataSync',     contact:'Mike Rodriguez',  industry:'Analytics'  },
    { id:'003', company:'CloudVenture', contact:'Emma Thompson',   industry:'Cloud'      },
    { id:'004', company:'GrowthStack',  contact:'James Park',      industry:'MarTech'    },
    { id:'005', company:'AutomateIO',   contact:'Lisa Wang',       industry:'Automation' },
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.tableScroll}>
        <table className={styles.prospectTable}>
          <thead><tr><th>#</th><th>COMPANY</th><th>CONTACT</th><th>INDUSTRY</th><th>STATUS</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td className={styles.tdId}>{r.id}</td>
                <td className={styles.tdCompany}>{r.company}</td>
                <td>{r.contact}</td>
                <td>{r.industry}</td>
                <td><span className={styles.qualifiedBadge}>Qualified</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.tableStats}>
        {[['1,247','Total Prospects'],['892','ICP Match'],['98%','Data Quality']].map(([v,l]) => (
          <div key={l} className={styles.tableStat}>
            <span className={styles.tableStatVal}>{v}</span>
            <span className={styles.tableStatLbl}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnrichPanel() {
  const steps = [
    { n:1, t:'Email Verification Waterfall', tags:['Apollo','FindyMail','BetterContact'], r:'Verified: sarah.chen@techflow.io (95% confidence)' },
    { n:2, t:'LinkedIn Profile Enrichment',  tags:['LinkedIn','Clay'],                    r:'Profile: VP of Sales · 8 years exp · Stanford MBA' },
    { n:3, t:'Company Intelligence',         tags:['Clearbit','Crunchbase','BuiltWith'],   r:'250 employees · $15M funding · HubSpot + Salesforce stack' },
    { n:4, t:'Buying Signals Detection',     tags:['AI Analysis','News API'],             r:'Hired 3 SDRs · Job posted for Sales Ops Manager' },
  ];
  return (
    <div className={styles.panel}>
      {steps.map(s => (
        <div key={s.n} className={styles.enrichStep}>
          <div className={styles.enrichStepHead}>
            <span className={styles.enrichNum}>{s.n}</span>
            <span className={styles.enrichTitle}>{s.t}</span>
            <div className={styles.enrichTags}>{s.tags.map(t => <IconTag key={t} name={t} small />)}</div>
          </div>
          <p className={styles.enrichResult}>{s.r}</p>
        </div>
      ))}
    </div>
  );
}

function ScoringPanel() {
  const leads = [
    { company:'TechFlow Solutions', score:95, points:['Perfect ICP fit: B2B SaaS, 250 employees, $15M funding','Hiring signal: 3 new SDRs, looking for Sales Ops Manager','Tech stack match: Using HubSpot + Salesforce'] },
    { company:'CloudVenture Labs',  score:88, points:['Strong fit: Cloud services, 180 employees, Series A','Funding signal: Just raised $10M Series A'] },
    { company:'GrowthStack Inc',    score:82, points:['Good fit: MarTech company, 120 employees','Using modern stack: Clay, Apollo already implemented'] },
  ];
  return (
    <div className={styles.panel}>
      {leads.map(l => (
        <div key={l.company} className={styles.scoreCard}>
          <div className={styles.scoreCardHead}>
            <span className={styles.scoreCompany}>{l.company}</span>
            <span className={styles.scoreNum}>{l.score}</span>
          </div>
          <ul className={styles.scorePoints}>
            {l.points.map(p => (
              <li key={p} className={styles.scorePoint}>
                <span className={styles.scoreDot} aria-hidden="true">■</span>{p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SequencePanel() {
  const steps = [
    { day:1,  ch:'EMAIL'    as const, sub:'Quick question about your sales ops at {{company}}', pre:"Hi {{first_name}}, Saw you recently hired {{hiring_signal}}. Curious — are you still manually qualifying leads?" },
    { day:3,  ch:'LINKEDIN' as const, sub:'Connection Request + Note',                          pre:"Hi {{first_name}}, noticed we're both focused on scaling B2B sales. Would love to connect!" },
    { day:8,  ch:'EMAIL'    as const, sub:'Re: Quick question about your sales ops',            pre:"{{first_name}}, I know {{company}} is focused on {{pain_point}}. Quick 15-min call this week?" },
    { day:10, ch:'EMAIL'    as const, sub:'[Case Study] How {{similar_company}} automated their pipeline', pre:"{{first_name}}, {{similar_company}} went from 0 to 10 qualified meetings in 30 days using our system." },
  ];
  return (
    <div className={styles.panel}>
      {steps.map((s, i) => (
        <div key={i} className={styles.seqStep}>
          <div className={styles.seqMeta}>
            <span className={styles.seqDay}>Day {s.day}</span>
            <span className={[styles.seqChannel, s.ch === 'LINKEDIN' ? styles.seqLinkedin : styles.seqEmail].join(' ')}>{s.ch}</span>
          </div>
          <p className={styles.seqSubject}>{s.sub}</p>
          <p className={styles.seqPreview}>{s.pre}</p>
        </div>
      ))}
    </div>
  );
}

function LaunchPanel() {
  const metrics = [['847','Emails Sent'],['28%','Open Rate'],['156','Replies'],['18%','Reply Rate']] as const;
  const bars    = [28, 42, 38, 55, 50, 65, 60, 75, 82, 70];
  return (
    <div className={styles.panel}>
      <div className={styles.launchMetrics}>
        {metrics.map(([v, l]) => (
          <div key={l} className={styles.launchMetric}>
            <span className={styles.launchMetricVal}>{v}</span>
            <span className={styles.launchMetricLbl}>{l}</span>
          </div>
        ))}
      </div>
      <div className={styles.barChart} aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className={[styles.bar, i >= 5 ? styles.barCyan : ''].join(' ')}
            style={{ '--bar-h': `${h}%`, animationDelay: `${i * 55}ms` } as React.CSSProperties}
          />
        ))}
      </div>
      <div className={styles.campaignCard}>
        <p className={styles.campaignTitle}>Campaign Performance: Exceeding Targets</p>
        <p className={styles.campaignDesc}>12 qualified meetings booked this week. 7 hot leads in active conversation. 2 deals moved to proposal stage.</p>
      </div>
    </div>
  );
}

/* ── Shared: section header ────────────────────────────────────────── */

const STEPS = ['Audit what you have', 'Build the engine', 'Hand you the keys'] as const;

function SectionHead({ compact }: { compact?: boolean }) {
  return (
    <div className={compact ? styles.sectionHeadCompact : styles.sectionHead}>
      <div className={styles.sectionHeadInner}>
        <p className={styles.sectionEyebrow}>How we build it</p>
        <h2 className={compact ? styles.sectionH2Compact : styles.sectionH2}>
          From ICP to inbox.{' '}
          <span className={styles.sectionH2Dim}>Six phases, documented.</span>
        </h2>
        <div className={styles.stepsRow}>
          {STEPS.map((step, i) => (
            <span key={step} className={styles.stepGroup}>
              <span className={styles.step}>{step}</span>
              {i < STEPS.length - 1 && (
                <span className={styles.stepArrow} aria-hidden="true">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Shared sub-components ─────────────────────────────────────────── */

function LeftCol({ idx }: { idx: number }) {
  const p = PHASES[idx];
  return (
    <div className={styles.left}>
      <div className={styles.badgeRow}>
        <span className={styles.phaseBadge}>Phase {idx + 1} of 6</span>
        <span className={[styles.durationBadge, idx === 5 ? styles.durationOngoing : ''].join(' ')}>{p.duration}</span>
      </div>
      <h2 className={styles.title}>{p.title}</h2>
      <p className={styles.desc}>{p.desc}</p>
      <ul className={styles.bullets} role="list">
        {p.bullets.map(b => (
          <li key={b} className={styles.bullet}>
            <span className={styles.bulletIcon} aria-hidden="true">■</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className={styles.youGetBox}>
        <span className={styles.youGetLabel}>YOU GET</span>
        <p className={styles.youGetText}>{p.youGet}</p>
      </div>
      <div className={styles.toolTags} aria-label="Tools used">
        {p.tools.map(t => <IconTag key={t} name={t} />)}
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className={styles.statsBar}>
      {[['10-15 hours','Initial Setup'],['~5 hrs/week','Ongoing'],['2 weeks','First Leads']].map(([v,l], i, arr) => (
        <div key={l} className={styles.statGroup}>
          <div className={styles.stat}>
            <span className={styles.statVal}>{v}</span>
            <span className={styles.statLbl}>{l}</span>
          </div>
          {i < arr.length - 1 && <div className={styles.statDiv} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

/* ── Desktop: sticky scroll-driven ────────────────────────────────── */

function useIsDesktop() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mqMotion  = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqPointer = window.matchMedia('(pointer: fine)');
    const check = () => setOk(!mqMotion.matches && mqPointer.matches && window.innerWidth >= 1024);
    check();
    mqMotion.addEventListener('change', check);
    mqPointer.addEventListener('change', check);
    window.addEventListener('resize', check, { passive: true });
    return () => {
      mqMotion.removeEventListener('change', check);
      mqPointer.removeEventListener('change', check);
      window.removeEventListener('resize', check);
    };
  }, []);
  return ok;
}

interface ViewProps { activeIndex: number; setActiveIndex: (i: number) => void; }

function DesktopView({ activeIndex, setActiveIndex }: ViewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Map scroll progress → active phase
  useEffect(() => {
    const w = wrapperRef.current;
    if (!w) return;
    const onScroll = () => {
      const rect       = w.getBoundingClientRect();
      const panelH     = window.innerHeight - NAV_H;
      const totalTravel = w.clientHeight - panelH;
      const scrolled   = NAV_H - rect.top;
      const progress   = Math.max(0, Math.min(1, scrolled / totalTravel));
      setActiveIndex(Math.min(5, Math.floor(progress * 6)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setActiveIndex]);

  // Click a tab → smooth scroll to that phase position
  const scrollToPhase = useCallback((i: number) => {
    const w = wrapperRef.current;
    if (!w) return;
    const panelH      = window.innerHeight - NAV_H;
    const totalTravel = w.clientHeight - panelH;
    const docTop      = w.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: docTop - NAV_H + (i / 6) * totalTravel, behavior: 'smooth' });
  }, []);

  const ActivePanel = PANELS[activeIndex];

  return (
    <div ref={wrapperRef} className={styles.desktopWrapper} id="how-it-works">
      <div className={styles.stickyInner}>

        {/* Section header — compact, above the tabs */}
        <SectionHead compact />

        {/* Tab bar — no separate background, inherits dark surface */}
        <div className={styles.tabRow}>
          <nav className={styles.tabBar} role="tablist" aria-label="Build phases">
            {TAB_LABELS.map((label, i) => (
              <button
                key={label}
                role="tab"
                aria-selected={i === activeIndex}
                className={[styles.tab, i === activeIndex ? styles.tabActive : ''].join(' ')}
                onClick={() => scrollToPhase(i)}
              >
                <span className={styles.tabNum}>{i + 1}.</span>{label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content area */}
        <div className={styles.mainArea}>
          <div key={activeIndex} className={styles.phaseContent}>
            <LeftCol idx={activeIndex} />
            <div className={styles.right}><ActivePanel /></div>
          </div>
        </div>

        {/* Stats strip */}
        <StatsBar />

      </div>
    </div>
  );
}

/* ── Mobile: tabs + stacked content ───────────────────────────────── */

function MobileView({ activeIndex, setActiveIndex }: ViewProps) {
  const ActivePanel = PANELS[activeIndex];

  return (
    <section className={styles.mobileSection} id="how-it-works">

      {/* Section header */}
      <SectionHead />

      {/* Mobile tab strip: horizontally scrollable pills */}
      <div className={styles.mobileTabs}>
        <div className={styles.mobileTabScroll}>
          {TAB_LABELS.map((label, i) => (
            <button
              key={label}
              className={[styles.mobilePill, i === activeIndex ? styles.mobilePillActive : ''].join(' ')}
              onClick={() => setActiveIndex(i)}
              aria-pressed={i === activeIndex}
            >
              <span className={styles.mobilePillNum}>0{i + 1}</span>
              <span className={styles.mobilePillLabel}>{label}</span>
            </button>
          ))}
        </div>
        {/* Progress bar under the strip */}
        <div className={styles.mobileProgress}>
          <div
            className={styles.mobileProgressFill}
            style={{ width: `${((activeIndex + 1) / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Phase content stacked */}
      <div key={activeIndex} className={styles.mobileContent}>
        <LeftCol idx={activeIndex} />
        <div className={styles.mobilePanelWrap}><ActivePanel /></div>
      </div>

      <StatsBar />
    </section>
  );
}

/* ── Export ─────────────────────────────────────────────────────────── */

export default function HowWeBuildIt() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktop();
  return isDesktop
    ? <DesktopView activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    : <MobileView  activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
}
