/**
 * System-map flow diagrams per case study — fiel ao site atual
 * (digitalpampas.com/case-studies). Rendered by the DS <CaseFlow> component
 * in the "The system" section. Keyed by case slug.
 */
import type { CaseFlowNode, CaseFlowEdge } from '@steschoch/digital-pampas-ds';

export interface CaseFlowData {
  topNote?: string;
  bottomNote?: string;
  nodes: CaseFlowNode[];
  edges: CaseFlowEdge[];
}

export const caseFlows: Record<string, CaseFlowData> = {
  'elite-cybersecurity-enrichment': {
    topNote: 'zero infrastructure on day 0. first campaign live on day 27.',
    bottomNote: '1.6% bounce rate. 3,247 leads pushed to 3 variants in one afternoon.',
    nodes: [
      { id: 'n1', title: 'Target universe', bullets: ['4 ICP tiers, 5 personas', 'Tier 1: embedded / hardware', 'only 500-800 companies exist', 'deals $7K to $150K+'], row: 1, col: 1 },
      { id: 'n2', title: 'Data engine (Clay)', bullets: ['25,000 contacts enriched', '11-provider email waterfall', 'AI attack-surface tags', 'scoring + batch routing'], row: 1, col: 2 },
      { id: 'n3', title: 'Signal engine', bullets: ['6 automated buying signals:', 'new CISO . funding . launch', 'certification . gov contract', 'security incident'], row: 1, col: 3 },
      { id: 'n4', title: 'Safety rails', bullets: ['135+ company DNC list', 'max 3 contacts / company', 'bounce + saturation monitors', 'stop-on-reply, all channels'], row: 2, col: 1, tone: 'gate' },
      { id: 'n5', title: 'Email (Instantly)', bullets: ['12 campaigns:', '5 signal-triggered', '2 deep personalization', '3 volume tests . 2 intel'], row: 2, col: 2 },
      { id: 'n6', title: 'LinkedIn (Aimfox)', bullets: ['5 campaigns', '4 sender personas', 'defense + space splits', 'coordinated w/ email'], row: 2, col: 3 },
      { id: 'n7', title: 'Operational handoff', bullets: ['day 63: full documentation', 'the client team runs it solo'], row: 3, col: 2, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n2', to: 'n5', tone: 'primary' },
      { from: 'n3', to: 'n6', tone: 'primary' },
      { from: 'n3', to: 'n5', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'accent' },
      { from: 'n5', to: 'n7', tone: 'muted' },
      { from: 'n6', to: 'n7', tone: 'muted' },
    ],
  },
  'tremmun-network-activation': {
    topNote: 'a warm network with no system to work it.',
    bottomNote: '40% response rate.',
    nodes: [
      { id: 'n1', title: 'Dormant network', bullets: ['500+ past contacts', 'years of relationships', 'no follow-up system'], row: 1, col: 1 },
      { id: 'n2', title: 'Segmentation', bullets: ['by relationship strength', 'industry + potential value', 'qualification scoring'], row: 1, col: 2 },
      { id: 'n3', title: 'AI personalization', bullets: ['per-contact context', 'message tuned to history', 'Clay enrich + Apollo CRM'], row: 1, col: 3 },
      { id: 'n4', title: 'Outreach sequences', bullets: ['structured reactivation', 'Make.com workflows', 'human in the loop'], row: 2, col: 2 },
      { id: 'n5', title: 'Meetings', bullets: ['10 qualified meetings', '1 deal closed', '30 days end to end'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
    ],
  },
  'cx-outsourcer-ai-signal-agents': {
    topNote: 'personalization that does not read like a mail merge.',
    bottomNote: '859 companies scored. 30K/mo capacity.',
    nodes: [
      { id: 'n1', title: 'Company universe', bullets: ['target CX buyers', 'enterprise accounts', '859 companies scored'], row: 1, col: 1 },
      { id: 'n2', title: 'BPO exclusion gate', bullets: ['filters out other BPOs', '5-layer exclusion', 'clean target list'], row: 1, col: 2, tone: 'gate' },
      { id: 'n3', title: '6 signal agents', chips: ['Hiring', 'Expansion', 'Review pressure', 'Tech stack', 'Regulatory shifts', 'Seasonal demand'], row: 1, col: 3 },
      { id: 'n4', title: 'Selector agent', bullets: ['picks the strongest', 'signal per company', 'deterministic rules'], row: 2, col: 1 },
      { id: 'n5', title: '2 writer agents', bullets: ['turn signal into copy', 'two drafting agents', 'send-ready output'], row: 2, col: 2 },
      { id: 'n6', title: 'Send-ready copy', bullets: ['12 domains live', '30K monthly capacity', 'ready to fire'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'accent' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
      { from: 'n5', to: 'n6', tone: 'primary' },
    ],
  },
  'swiss-agency-partner-infrastructure': {
    topNote: 'prove which message lands before you scale spend.',
    bottomNote: 'a clean test beats a pretty number.',
    nodes: [
      { id: 'n1', title: 'Lead pool', bullets: ['qualified US B2B tech', '12-provider waterfall', 'verified + validated'], row: 1, col: 1 },
      { id: 'n2', title: 'Deliverability layer', bullets: ['warmed infrastructure', '0.53% bounce rate', '2,222 leads engaged'], row: 1, col: 2 },
      { id: 'n3', title: '9-variant test matrix', chips: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9'], row: 1, col: 3 },
      { id: 'n4', title: '7,963 sends', bullets: ['controlled send', 'clean measurement', 'no deliverability noise'], row: 2, col: 2 },
      { id: 'n5', title: 'Reading the data', bullets: ['0.77% reply, 3 interested', 'offer, not copy', 'reposition before scale'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
    ],
  },
  'data-ai-consultancy-vertical-campaigns': {
    topNote: 'break into the US with zero references.',
    bottomNote: 'US entry from zero references.',
    nodes: [
      { id: 'n1', title: 'EU consultancy', bullets: ['300 people', 'Palantir partner', 'zero US presence'], row: 1, col: 1 },
      { id: 'n2', title: 'US market map', bullets: ['4 vertical campaigns', 'ICP per vertical', 'beachhead strategy'], row: 1, col: 2 },
      { id: 'n3', title: 'Proof-point library', bullets: ['85+ client proof points', 'mapped to verticals', 'reference-based angles'], row: 1, col: 3 },
      { id: 'n4', title: 'Contact validation', bullets: ['3,617 validated contacts', '723 inboxes warmed', '14 sending domains'], row: 2, col: 2 },
      { id: 'n5', title: 'Live campaigns', bullets: ['campaigns accruing', 'replies still landing', 'infra + data delivered'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
    ],
  },
  'swiss-healthcare-saas-reply-rate': {
    topNote: 'a regulated market where trust is the whole game.',
    bottomNote: '3x industry benchmark. 0 DNC leaks.',
    nodes: [
      { id: 'n1', title: 'Swiss clinic universe', bullets: ['target providers', '~212 addressable TAM', '5 adjacent verticals'], row: 1, col: 1 },
      { id: 'n2', title: 'Segmentation engine', bullets: ['by specialty + size', 'role + buying context', 'AI classification'], row: 1, col: 2 },
      { id: 'n3', title: 'Compliance rails', bullets: ['DNC + opt-out gates', '219 companies suppressed', '0 do-not-contact leaks'], row: 1, col: 3, tone: 'gate' },
      { id: 'n4', title: 'Cold email campaigns', bullets: ['segmented sequences', '~60 sender inboxes', 'compliance-safe copy'], row: 2, col: 2 },
      { id: 'n5', title: 'Replies', bullets: ['8.95% overall reply', '28% best segment', '49+ interested'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
    ],
  },
  'sap-consultancy-enrichment-at-scale': {
    topNote: 'a team that closes almost everything. it just needed more at-bats.',
    bottomNote: 'the bottleneck was at-bats, not closing.',
    nodes: [
      { id: 'n1', title: 'Full-market sourcing', bullets: ['12,690 companies', '12-provider waterfall', '95%+ match accuracy'], row: 1, col: 1 },
      { id: 'n2', title: 'Migration signals', bullets: ['SAP deadline triggers', 'HR-tech buying windows', 'segmented by fit'], row: 1, col: 2 },
      { id: 'n3', title: 'Segmented sequence', bullets: ['per-signal copy', 'SmartLead sending', '5-layer DNC guard'], row: 1, col: 3 },
      { id: 'n4', title: 'Replies', bullets: ['3.9% / 2.8% campaigns', '11.3% at peak', '9+ interested replies'], row: 2, col: 2 },
      { id: 'n5', title: 'Client sales team', bullets: ['80-90% close rate', '7-8 estimated closed deals', 'at-bats were the gap'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n3', to: 'n4', tone: 'muted' },
      { from: 'n4', to: 'n5', tone: 'primary' },
    ],
  },
  'swiss-pain-clinic-inbox-infrastructure': {
    topNote: 'referrals from physicians, where one bad email burns a relationship.',
    bottomNote: 'one bad email burns a referral relationship.',
    nodes: [
      { id: 'n1', title: 'Physician database', bullets: ['1,300+ physicians', 'bilingual (DE / FR)', 'referral-source mapped'], row: 1, col: 1 },
      { id: 'n2', title: '4 AI referral triggers', bullets: ['signal-based angles', 'personalized outreach', 'referral context'], row: 1, col: 2 },
      { id: 'n3', title: '38-day sequence', bullets: ['4-email nurture', 'Swiss-German copy rules', 'relationship first'], row: 1, col: 3 },
      { id: 'n4', title: 'Compliance rails', bullets: ['Swiss opt-out rules', 'stop-on-reply', 'list protection'], row: 2, col: 1, tone: 'gate' },
      { id: 'n5', title: '102 inboxes', bullets: ['physician-grade infra', 'warmed + ready', 'A/B protocol set'], row: 2, col: 2 },
      { id: 'n6', title: 'Clinic referrals', bullets: ['engine delivered', 'ready to send', '0 emails sent yet'], row: 2, col: 3, tone: 'outcome' },
    ],
    edges: [
      { from: 'n1', to: 'n2', tone: 'primary' },
      { from: 'n2', to: 'n3', tone: 'primary' },
      { from: 'n4', to: 'n5', tone: 'primary' },
      { from: 'n5', to: 'n6', tone: 'primary' },
      { from: 'n2', to: 'n4', tone: 'accent' },
      { from: 'n3', to: 'n4', tone: 'accent' },
      { from: 'n3', to: 'n5', tone: 'muted' },
    ],
  },
};
