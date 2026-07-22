/**
 * Case study content, faithful to the client's live site
 * (digitalpampas.com/case-studies). Numbers, claims and structure mirror
 * the source pages; copy is lightly condensed, never altered in meaning.
 */

export type CaseSector = 'cybersecurity' | 'healthcare' | 'data-ai' | 'agencies-talent';

export const SECTORS: { key: CaseSector; label: string }[] = [
  { key: 'cybersecurity', label: 'Cybersecurity' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'data-ai', label: 'Data & AI' },
  { key: 'agencies-talent', label: 'Agencies & Talent' },
];

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;            // display name (anonymous or named)
  isNamed: boolean;          // true = Tremmun only
  eyebrow: string;           // client tag, e.g. "Signal-Based Outbound"
  sector: CaseSector;
  industry: string;          // display label, e.g. "Cybersecurity"
  year: string;
  headline: string;
  dek: string;               // hero subtitle
  heroMetrics: CaseMetric[];
  tldr: { client: string; problem: string; build: string; outcome: string };
  context: string[];         // "The client" paragraphs
  constraints: { title: string; body: string }[];
  systemIntro: string;       // "The system" intro paragraph
  layers: { title: string; body: string }[];
  callout: string;           // pull-quote band between system and results
  timeline?: { marker: string; event: string }[];
  results: {
    intro?: string;
    highlights: CaseMetric[];
    table: { label: string; value: string }[];
    tableTitle: string;
  };
  detailTables?: {
    title: string;
    intro?: string;
    headers: [string, string];
    rows: [string, string][];
  }[];
  quotes?: { text: string; author: string }[];
  fit: { title: string; body: string }[];
  stack: { name: string; role: string }[];
}

export const caseStudies: CaseStudy[] = [
  /* ─── 1 · US Cybersecurity Firm ─────────────────────────────────── */
  {
    slug: 'elite-cybersecurity-enrichment',
    client: 'US Cybersecurity Consultancy',
    isNamed: false,
    eyebrow: 'Signal-Based Outbound',
    sector: 'cybersecurity',
    industry: 'Cybersecurity',
    year: '2025',
    headline: 'From zero to 25,000 prospects in 9 weeks: a full outbound engine for an elite cybersecurity firm',
    dek: 'No sending domains, no data, no campaigns on day 0. A six-layer, signal-driven system reaching CISOs across email and LinkedIn by day 27.',
    heroMetrics: [
      { value: '25,000', label: 'Contacts enriched' },
      { value: '12', label: 'Campaigns built' },
      { value: '6', label: 'Buying signals automated' },
      { value: '1.6%', label: 'Bounce rate' },
    ],
    tldr: {
      client: 'Elite US cybersecurity consultancy. Pen testing, firmware, hardware lab. World-class delivery, zero outbound.',
      problem: 'Pipeline ran on referrals only, in an ultra-niche market of 500 to 800 real Tier 1 targets.',
      build: 'Six-layer system: ICP tiers, Clay enrichment, AI scoring, 6 buying signals, email + LinkedIn, full handoff.',
      outcome: "Live in 27 days. 12 campaigns, 1.6% bounce, and a system the client's team now runs on its own.",
    },
    context: [
      'A fast-growing US cybersecurity consultancy specializing in penetration testing, embedded security, firmware reverse engineering, and hardware lab testing. Capabilities that fewer than a handful of firms worldwide can match, with a client roster of major enterprise technology companies.',
      'Despite world-class technical work, they had no systematic outbound function. Pipeline relied entirely on referrals and inbound. They needed a full outbound engine built from scratch, fast, to open new enterprise conversations at scale.',
    ],
    constraints: [
      { title: 'Ultra-niche ICP.', body: 'Companies building physical products with embedded software: vehicles, medical devices, drones, satellites, IoT. The realistic Tier 1 universe is 500 to 800 companies, total.' },
      { title: 'The hardest audience in outbound.', body: "CISOs and security leaders receive sophisticated outreach daily and evaluate technical depth as a buying signal. Generic emails don't just underperform here, they burn credibility." },
      { title: 'Multi-channel from day one.', body: 'Email and LinkedIn across multiple sender personas, launched in parallel, consistent messaging, no overlap.' },
      { title: 'Zero infrastructure.', body: 'No domains, no enrichment pipelines, no sequences, no DNC lists, no scoring. Everything built from scratch.' },
    ],
    systemIntro: 'One engine, six layers. A tiered target universe feeds a Clay enrichment engine, buying signals decide who gets contacted and with what message, and safety rails sit under everything before a single email leaves.',
    layers: [
      { title: 'ICP definition & segmentation', body: '4 target tiers with distinct strategies, from high-touch Tier 1 (embedded and hardware, 500 to 800 companies) to programmatic Tier 3. 5 buyer personas with automated routing to the right campaign and sender. Deal sizes from $7K to $150K+.' },
      { title: 'List building & enrichment', body: '~25,000 contacts in Clay, an 11-provider email waterfall, AI classification by primary attack surface (firmware, embedded, IoT, connected vehicles), and a name normalization engine that cleaned 127 edge cases out of 3,248 companies.' },
      { title: 'AI scoring & prioritization', body: 'Lead scoring on persona match, email availability, signal strength, and campaign readiness. Batch assignment across 4 priority tiers with saturation protection: max 3 contacts per company, overflow to holding lists.' },
      { title: '6 automated buying signals', body: 'New security leadership, funding rounds, product launches, certification pursuits, government contracts, security incidents. Each signal feeds a dedicated campaign with signal-specific copy and timing.' },
      { title: 'Multi-channel orchestration', body: '12 email campaigns across 4 strategies (signal-triggered, deep personalization, volume A/B/C, competitive intel) plus LinkedIn across 4 sender personas, with splits for defense and space verticals.' },
      { title: 'Launch, safety & handoff', body: "Stop-for-company rules, 135+ entry DNC suppression, bounce monitoring, warmup tracking. Full documentation delivered: the client's team runs the system independently today." },
    ],
    callout: "3,247 leads deployed across 3 variants, via API, in a single afternoon. That's what the infrastructure makes possible once the data layer is built right.",
    timeline: [
      { marker: 'Day 27', event: 'First campaign live, from zero infrastructure' },
      { marker: 'Day 30', event: 'Full 6-signal architecture deployed' },
      { marker: 'Day 36', event: '570 scored and batched leads pushed' },
      { marker: 'Day 49', event: '3-variant volume test launched' },
      { marker: 'Day 63', event: 'Complete handoff documentation delivered' },
    ],
    results: {
      highlights: [
        { value: '1.6%', label: 'Bounce rate, well under the 3% industry threshold' },
        { value: '4,500+', label: 'Leads pushed to active campaigns' },
        { value: '0', label: 'Company saturation violations' },
      ],
      tableTitle: 'Everything the client owns today',
      table: [
        { label: 'Contacts enriched & segmented', value: '~25,000' },
        { label: 'Email campaigns built', value: '12' },
        { label: 'LinkedIn campaigns (4 sender personas)', value: '5' },
        { label: 'Buying signals automated', value: '6' },
        { label: 'Sending domains configured', value: '6+' },
        { label: 'Mailboxes warmed & active', value: '12+' },
        { label: 'Companies in DNC suppression', value: '135+' },
      ],
    },
    fit: [
      { title: 'Technical firms with world-class delivery but no outbound.', body: 'If you win every deal you touch but rely on referrals to start conversations, the problem is not sales. It is pipeline generation.' },
      { title: 'Ultra-niche ICPs (500 to 1,000 addressable companies)', body: 'where signal-based campaigns that reference real buying triggers beat volume plays, because every prospect matters.' },
      { title: 'Teams that need the engine fast.', body: 'Not a 6-month hiring cycle: a production system with enrichment, scoring, signals, and multi-channel campaigns live in weeks.' },
    ],
    stack: [
      { name: 'Clay', role: 'Lead Enrichment & AI Classification' },
      { name: 'Instantly', role: 'Cold Email Campaigns' },
      { name: 'Apollo', role: 'Contact Discovery' },
      { name: 'Claude AI', role: 'AI Enrichment & Signal Detection' },
      { name: 'Aimfox', role: 'LinkedIn Automation' },
      { name: 'LinkedIn', role: 'Professional Network' },
    ],
  },

  /* ─── 2 · Tremmun ───────────────────────────────────────────────── */
  {
    slug: 'tremmun-network-activation',
    client: 'Tremmun',
    isNamed: true,
    eyebrow: 'Tech Talent Network Activation',
    sector: 'agencies-talent',
    industry: 'Tech Talent · B2B SaaS',
    year: '2025',
    headline: 'From 500+ dormant contacts to 10 qualified meetings in 30 days',
    dek: 'Tremmun had a network full of past conversations going nowhere. A structured reactivation system with AI-personalized messaging turned it into meetings, and one closed deal, inside a month.',
    heroMetrics: [
      { value: '40%', label: 'Response rate' },
      { value: '10', label: 'Qualified meetings' },
      { value: '1', label: 'Deal closed in 30 days' },
      { value: '10/10', label: 'Client satisfaction' },
    ],
    tldr: {
      client: 'Tremmun, a tech talent company with a strong network but no outbound motion.',
      problem: '500+ dormant contacts, zero systematic follow-up, pipeline stalled.',
      build: 'Contact segmentation, structured reactivation sequences, AI-personalized messaging per relationship history.',
      outcome: '40% response rate, 10 qualified meetings, 1 deal closed in 30 days.',
    },
    context: [
      'Tremmun is a tech talent company serving US companies. Over years of relationship-building they had assembled a strong network, the kind of asset most teams would kill for, but no systematic way to turn it into growth.',
      'The potential was obvious. What they lacked was a repeatable, professional motion to work the network without burning the trust behind it.',
    ],
    constraints: [
      { title: 'No structure.', body: 'Hundreds of warm contacts, but no way to organize or categorize them.' },
      { title: 'No process.', body: 'No structured outreach motion to reach the network consistently.' },
      { title: 'No commercial muscle.', body: 'Deep relationships, but no experience commercializing them at scale.' },
      { title: 'Going cold.', body: 'Every month without contact, those relationships lost value.' },
    ],
    systemIntro: 'Three layers: the dormant network gets segmented by relationship history, an AI-personalized outreach engine works each contact in context, and the whole thing gets documented so the team can run it after handoff.',
    layers: [
      { title: 'Network audit & segmentation', body: 'Imported and cleaned 500+ contacts, categorized by relationship strength, industry, and potential value, then built a qualification scoring system so the strongest relationships got worked first.' },
      { title: 'Personalized outreach engine', body: "Hyper-personalized message templates tuned to each relationship's history, Clay for enrichment and Apollo as the CRM, with automated workflows wired through Make.com." },
      { title: 'Documentation & handoff', body: 'Step-by-step workflow guides and video tutorials for the team, plus a full system handoff so Tremmun runs the motion on its own going forward.' },
    ],
    callout: "40% of a dormant network replied once the follow-up was structured and personalized. Relationships don't go cold on their own. The system to keep them warm just never got built.",
    results: {
      highlights: [
        { value: '40%', label: 'Response rate on reactivation outreach' },
        { value: '10', label: 'Qualified meetings booked' },
        { value: '1', label: 'Deal closed in the first month' },
      ],
      tableTitle: 'The results',
      table: [
        { label: 'Outreach response rate', value: '40%' },
        { label: 'Qualified meetings booked', value: '10' },
        { label: 'Deals closed', value: '1 (first month)' },
        { label: 'Time to full system', value: '30 days' },
        { label: 'Client satisfaction', value: '10/10' },
      ],
    },
    quotes: [
      { text: 'It was a very agile project. In one month we generated a system that will serve us going forward, plus we got concrete business results on the first pass.', author: 'Esteban Prospero, Co-founder at Tremmun' },
      { text: 'Leo helped us reconnect with hundreds of contacts and establish a sustainable, professional system for qualifying leads.', author: 'Esteban Prospero, Co-founder at Tremmun' },
      { text: 'Digital Pampas is a flexible partner that helps improve and professionalize initial commercial stages.', author: 'Esteban Prospero, Co-founder at Tremmun' },
    ],
    fit: [
      { title: 'Companies with a large but unstructured network.', body: 'If you have hundreds of warm contacts and no system to work them, the pipeline is already there. It just needs a motion.' },
      { title: 'Founders who know their ICP but lack sales systems.', body: 'The relationships and the judgment exist. The repeatable process does not.' },
      { title: 'Teams that want to scale personalized outreach without hiring.', body: 'A documented system your own team runs, not another headcount.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'Make.com', role: 'Workflow Automation' },
      { name: 'Claude AI', role: 'AI Personalization' },
    ],
  },

  /* ─── 3 · Global CX Outsourcer ──────────────────────────────────── */
  {
    slug: 'cx-outsourcer-ai-signal-agents',
    client: 'Global CX Outsourcer',
    isNamed: false,
    eyebrow: 'AI Agent Architecture',
    sector: 'agencies-talent',
    industry: 'CX Outsourcing',
    year: '2025',
    headline: '6 AI signal agents, one selector, two writers: the split-signal architecture',
    dek: "A London-based CX outsourcer (GBP 30-40M revenue) needed personalization that doesn't read like a mail merge. Six specialized AI agents each hunt one signal type; a selector picks the strongest; two writers turn it into copy.",
    heroMetrics: [
      { value: '6', label: 'Signal agents' },
      { value: '859', label: 'Companies scored' },
      { value: '12', label: 'Sending domains live' },
      { value: '30K', label: 'Monthly send capacity' },
    ],
    tldr: {
      client: 'Global CX outsourcer, GBP 30-40M revenue, London-based.',
      problem: 'Generic outbound was invisible to enterprise CX buyers.',
      build: 'Multi-agent AI personalization: 6 signal hunters, transformation scoring, BPO exclusion gates.',
      outcome: '859 companies scored and routed, 12 domains warmed, 30K monthly capacity ready to fire.',
    },
    context: [
      'A London-based customer experience outsourcer with operations on four continents. Instead of throwing headcount at every problem, they combine human expertise with agentic AI to replace FTE-heavy delivery with AI-orchestrated business processes. Revenue sits around GBP 30-40M, with 25M+ customer interactions handled per year across 20+ markets.',
      'They came with no CRM access, no prior outbound copy, and one hard rule: the outreach had to feel specific to each enterprise buyer, not like another templated blast that a CX leader deletes on sight.',
    ],
    constraints: [
      { title: 'They had been burned.', body: 'Previous lead-gen providers delivered generic messaging and zero conversions. Quality over speed was a contractual expectation, not a platitude.' },
      { title: 'BPO exclusion was contractual.', body: 'Never email another outsourcer, call center, or direct competitor. That exclusion had to be enforced at the data layer, not left to the copy.' },
      { title: 'No existing assets.', body: 'No CRM, no analytics, no templates. Every layer, from data architecture to copy, had to be built from scratch.' },
      { title: 'Enterprise ICP, narrowly defined.', body: 'Target revenue GBP 100M-5B+, headcount 500-10,000, across retail, travel, home services, food on demand, and financial services, with a hard cap of 3-4 contacts per company.' },
      { title: 'Messaging had to match transformation maturity.', body: 'A company that treats outsourcing as a cost lever needs a fundamentally different email than one that sees it as a technology transformation.' },
    ],
    systemIntro: 'One pipeline, built around a strict separation of jobs. A company universe passes a BPO exclusion gate, then six signal agents run in parallel, a selector picks the single strongest signal, and only then do two writer agents turn that clean fact into copy. Research and copywriting never happen in the same prompt.',
    layers: [
      { title: 'Company universe & enrichment', body: '859 companies passed through domain normalization, LinkedIn resolution, Apollo enrichment, and revenue and headcount filtering against the enterprise ICP, before any signal work began.' },
      { title: '5-layer BPO exclusion gate', body: 'Industry classification, keyword scans on company descriptions, a hard-coded competitor blocklist, geographic exclusion, and a manual-review flag. Enforced at the data layer so no competitor ever entered the send queue.' },
      { title: '6 parallel signal agents', body: 'One job each: hiring, expansion, review pressure, tech stack, regulatory shifts, and seasonal demand. Each agent hunts a single signal type instead of one model juggling research and writing at once.' },
      { title: 'Deterministic signal selector', body: 'A priority cascade, not AI, picks the strongest signal: hiring beats expansion beats review beats tech beats regulatory beats seasonal. If all six return null, a tenure-based fallback fires. Fully auditable: you can see which signal won and why.' },
      { title: '2 writer agents', body: 'One writes the 1-2 sentence personalization line from the selected fact, the other writes the subject hook. No searching, no deciding, just writing from a pre-cleaned signal.' },
      { title: 'Transformation scoring & sender infra', body: 'Every company scored into 3 transformation-maturity tiers to route the right value proposition, backed by 12 warmed domains and 4 sender personas at roughly 30K monthly capacity.' },
    ],
    callout: "859 companies scored and routed, with 30K/mo send capacity standing ready. That's what the architecture makes possible once signal research and copywriting are split apart.",
    results: {
      intro: 'This engagement was a pre-send infrastructure build. There are no campaign results to report yet: the deliverable is the architecture and the assets below, all live and ready to fire.',
      highlights: [
        { value: '859', label: 'Companies scored & routed' },
        { value: '12', label: 'Sending domains warmed' },
        { value: '~30,000', label: 'Monthly send capacity' },
      ],
      tableTitle: 'Everything that exists today',
      table: [
        { label: 'Companies scored & routed', value: '859' },
        { label: 'Signal agents (one job each)', value: '6' },
        { label: 'Selector + writer agents', value: '1 + 2' },
        { label: 'Transformation maturity tiers', value: '3' },
        { label: 'BPO exclusion layers', value: '5' },
        { label: 'Sending domains warmed', value: '12' },
        { label: 'Sender personas built', value: '4' },
        { label: 'Monthly send capacity', value: '~30,000' },
        { label: 'Campaign status', value: 'Pre-send, ready' },
      ],
    },
    quotes: [
      { text: 'The split-signal architecture solves a quality problem seen across every previous build: AI personalization that sounds plausible but is not grounded in a specific, verifiable company fact. Separating "find the signal" from "write the sentence", with a deterministic selector in between, produces a measurable quality improvement. Every campaign built since uses this pattern.', author: 'Digital Pampas, on why this build is in the portfolio' },
    ],
    fit: [
      { title: 'Companies burned by generic lead generation', body: 'that need to see the infrastructure before they trust the output. If your last provider called {{first_name}} personalization, this is the alternative: agents that find real signals and writers that ground every line in a verifiable fact.' },
      { title: 'Businesses with contractual exclusion requirements', body: 'where emailing the wrong company is a compliance failure, not just waste. The 5-layer exclusion gate enforces business-critical targeting at the data layer, with an audit trail at every stage.' },
      { title: 'Enterprise-scale outbound targeting segmented buyer types', body: 'where one message cannot serve all prospects. The 3-tier transformation model routes a structurally different value proposition to each buyer, not just a different subject line.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment & AI Architecture' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'Claude AI', role: 'AI Signal Detection' },
      { name: 'Hypertide', role: 'Domain Warm-Up' },
      { name: 'BetterContact', role: 'Email Enrichment' },
      { name: 'Findymail', role: 'Email Verification' },
    ],
  },

  /* ─── 4 · Swiss Outbound Agency ─────────────────────────────────── */
  {
    slug: 'swiss-agency-partner-infrastructure',
    client: 'Swiss Outbound Agency',
    isNamed: false,
    eyebrow: 'AI Copy Testing',
    sector: 'agencies-talent',
    industry: 'Outbound Agency',
    year: '2025',
    headline: '9 AI copy variants tested across 7,963 cold emails at a 0.53% bounce rate',
    dek: 'A Switzerland-based outbound agency entering US B2B tech needed to know which messaging works before scaling. A 9-variant testing harness answered that with clean data and near-zero bounces.',
    heroMetrics: [
      { value: '7,963', label: 'Emails sent' },
      { value: '9', label: 'Copy variants tested' },
      { value: '0.53%', label: 'Bounce rate' },
      { value: '2,222', label: 'Leads engaged' },
    ],
    tldr: {
      client: 'Swiss B2B outbound agency expanding into the US tech market.',
      problem: 'No proof of which messaging angle lands with US buyers.',
      build: '9-variant AI copy test harness on pristine deliverability infrastructure.',
      outcome: 'Statistically clean read on messaging at 0.53% bounce; the reply data told us the offer, not the copy, was the constraint.',
    },
    context: [
      'A Switzerland-based B2B outbound agency that builds cold email campaigns for mid-market tech companies. They had a proven track record running campaigns for their clients, but had never turned the same methodology inward, and they needed their own outbound engine to sell lead generation services into the US B2B tech market.',
      'The target was specific: companies with 50 to 1,000 employees, headquartered on the US East Coast plus Florida, Indiana, and the DC metro area. The ICP was decision-makers at B2B tech firms actively scaling their go-to-market function but lacking the infrastructure to do cold outbound well.',
    ],
    constraints: [
      { title: 'The most skeptical audience in outbound.', body: 'B2B tech leaders receive dozens of cold emails daily, so standing out required genuine, research-backed personalization, not templates. The campaign itself doubled as a live portfolio piece.' },
      { title: 'A saturated market.', body: 'US East Coast tech is one of the most crowded cold email markets, so deliverability had to be flawless.' },
      { title: 'Multiple angles, tested at once.', body: 'Several messaging angles had to be read at the same time without hand-writing thousands of variants.' },
      { title: 'Poor US mid-market data.', body: 'Email data quality is notoriously weak here, and a single enrichment provider would miss 30 to 40% of valid addresses.' },
    ],
    systemIntro: 'One engine, four layers. A qualified US B2B tech lead pool flows through a deliverability layer, into a 9-variant test matrix, out across 7,963 sends, and finally into reading what the data actually says.',
    layers: [
      { title: 'Company intelligence pipeline', body: 'A Clay companies table with 47 enrichment and qualification columns: domain normalization and deduplication, AI ICP-fit scoring against 6 criteria as a pass or fail gate, funding and growth signal detection, and exclusion layers for DNC lists, competitors, and existing clients.' },
      { title: '12-provider email waterfall', body: 'The people table ran 59 columns and a 12-provider sequential waterfall with a Findymail verification gate on every address. Result: 0.53% bounce across 7,963 sends, in a market where 2 to 3% is acceptable.' },
      { title: '9-variant AI copy test matrix', body: 'A two-agent setup: a signal-finding agent found what makes outbound relevant now, then a writing agent drafted the opener. 9 variants on Step 1, 3 on Step 2, a plain-text bump on Step 3, and 3 breakup variants on Step 4, across a 4-step plain-text sequence with tracking disabled.' },
      { title: 'Controlled send and read', body: 'A capped cadence of 250 leads per day, Monday to Friday, 9 AM to 6 PM Eastern, so every variant got a clean, comparable read. Then the reply data was read honestly rather than forcing a win out of it.' },
    ],
    callout: 'A clean test beats a pretty number. 0.53% bounce across 7,963 sends meant the messaging read was trustworthy, and the read pointed at the offer, not the copy.',
    results: {
      intro: 'The infrastructure worked exactly as designed: near-zero bounce, nine messaging angles read cleanly against each other. The finding was not a high reply rate. It was that at a 0.77% reply rate with 3 interested replies, the copy was not the bottleneck. The offer and positioning needed repositioning before scale. That is the honest read, and it is the point: a clean answer beats an inflated one.',
      highlights: [
        { value: '0.53%', label: 'Bounce rate, well under the 2 to 3% acceptable range' },
        { value: '9', label: 'Copy variants read cleanly against each other' },
        { value: '7,963', label: 'Emails sent across a 4-step sequence' },
      ],
      tableTitle: 'What the test showed',
      table: [
        { label: 'Total qualified leads loaded', value: '2,222' },
        { label: 'Emails sent (4-step sequence)', value: '7,963' },
        { label: 'Bounce rate', value: '0.53%' },
        { label: 'Reply rate (per unique lead)', value: '0.77%' },
        { label: 'Interested replies', value: '3' },
        { label: 'Reading of that data', value: 'Offer, not copy' },
        { label: 'Sequence completion rate', value: '72% (1,600 of 2,222)' },
        { label: 'A/B variants tested', value: '9 (Step 1) + 3 (Step 2) + 3 (Step 4)' },
        { label: 'Company enrichment columns', value: '47' },
        { label: 'Contact enrichment columns', value: '59' },
        { label: 'Email providers in waterfall', value: '12' },
      ],
    },
    fit: [
      { title: 'Agencies selling outbound services.', body: 'If your own campaign has to be a live portfolio piece and your prospects grade email quality as a buying signal, the system has to be best-in-class.' },
      { title: 'B2B companies targeting saturated US markets', body: 'where deliverability and personalization quality decide whether you land in the inbox or the spam folder.' },
      { title: 'Teams scaling cold outreach past 1,000 leads a month', body: 'who need automated data pipelines, multi-provider verification, and AI-generated personalization they can trust.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'Claude AI', role: 'AI Personalization' },
      { name: 'BetterContact', role: 'Email Enrichment' },
      { name: 'Findymail', role: 'Email Verification' },
    ],
  },

  /* ─── 5 · European Data & AI Consultancy ────────────────────────── */
  {
    slug: 'data-ai-consultancy-vertical-campaigns',
    client: 'European Data & AI Consultancy',
    isNamed: false,
    eyebrow: 'US Market Entry',
    sector: 'data-ai',
    industry: 'Data & AI Consulting',
    year: '2025',
    headline: 'US market entry from zero: 3,617 validated contacts across 4 verticals',
    dek: 'A 300-person European data and AI consultancy (Palantir partner) needed a US beachhead. This is the sourcing, proof-point, and infrastructure build that took them from no US presence to live campaigns.',
    heroMetrics: [
      { value: '3,617', label: 'Validated contacts' },
      { value: '4', label: 'Vertical campaigns' },
      { value: '723', label: 'Inboxes' },
      { value: '85+', label: 'Proof points mapped' },
    ],
    tldr: {
      client: '300-person European data & AI consultancy, Palantir partner.',
      problem: 'Zero US presence, zero US references, crowded market.',
      build: 'Vertical-split sourcing, 85+ client proof points mapped to campaigns, full sending infrastructure.',
      outcome: 'Campaigns live and accruing replies; infrastructure and data layer delivered.',
    },
    context: [
      'A 300-person European data and AI consultancy with deep enterprise credentials. Reference clients include global reinsurers, pharmaceutical companies, automakers, and private equity firms. Their strongest differentiator is a certified Palantir Foundry partnership spanning 6+ years and 150+ projects.',
      'Their European pipeline was healthy, built through founder-led sales, conference presence, and inbound. But they had a mandate to expand into the US, and the gap between "we should be selling in the US" and "we have a pipeline in the US" was total. No SDR function. No outbound infrastructure. No brand recognition in North America. One US-based team member, with everyone else on a 5 to 7 hour timezone delay.',
    ],
    constraints: [
      { title: 'Zero outbound infrastructure.', body: 'No SDR team, no sending domains, no inbox warm-up, no sequences, no enrichment pipelines. Everything had to be built from scratch.' },
      { title: 'The US market was completely new.', body: 'European brand equity and reference clients carry no weight with a VP of Data at a US insurer who has never heard of them. Every email has to earn credibility from the first sentence.' },
      { title: 'The most valuable contacts were also the most fragile.', body: 'Roughly 150 to 170 confirmed Palantir Foundry users across the verticals were the highest-probability pipeline. Burning them with unproven messaging would waste the single best asset the campaign had.' },
      { title: 'Four distinct verticals, each needing different positioning.', body: 'Insurance and Reinsurance, Banking and Wealth Management, Life Sciences, and Medical Devices. Generic "we do data and AI" messaging would be invisible.' },
      { title: 'Timezone operations gap.', body: 'Warm replies hitting at 2pm Eastern would sit unanswered until the next morning CET. The campaign had to be designed around this.' },
      { title: 'HubSpot data skewed entirely European.', body: 'The CRM was rich with European contacts but nearly empty for the US. No existing list to warm-start from.' },
    ],
    systemIntro: 'A phased campaign structure protects the highest-value contacts, Palantir signal detection decides who gets which message, a proof-point library grounds every email in a real outcome, and unified compliance plus sending infrastructure sit under everything.',
    layers: [
      { title: 'Phased campaign architecture', body: 'The decision that mattered most was send order, not send copy. Phase 1 runs four parallel vertical campaigns against high-ICP, non-Palantir companies to validate messaging. Phase 2 then targets 409 Palantir-focused contacts, roughly 150 to 170 confirmed Foundry users, only after Phase 1 has proven positioning.' },
      { title: 'Palantir Foundry signal detection', body: 'No database has a "Foundry user: yes or no" field, so a multi-source detection system was built across 4 channels: job postings, LinkedIn activity, press releases, and technical content. Each company got a signal strength score that set how confident the email reference could be.' },
      { title: 'Proof-point personalization', body: "85+ quantified proof points extracted from the client's case studies (29 insurance, 28 banking, 28 pharma), each tagged by industry, service line, pain point, outcome, and persona. The copy system matched proof points to recipients by vertical, company size, and detected pain signals." },
      { title: 'Company-size diagnosis language', body: 'Five company-size tiers per vertical, each with calibrated diagnosis language, case-study selection, and CTA framing. Not five campaigns: one campaign with five lenses applied automatically from Clay enrichment data.' },
      { title: 'Unified DNC compliance', body: 'A single 382-entry DNC list built from 8 blacklisted domains, 325 HubSpot unsubscribes, 44 competitors, and 5 internal domains. It caught 30 companies that appeared in both Phase 1 and Phase 2 pools before they could receive overlapping sequences.' },
      { title: 'Infrastructure at scale', body: '723 inboxes across 14 domains, wide rotation to protect deliverability, no links in any email, one contact per company, and all warm replies routed to the US-based team member for same-timezone follow-up.' },
    ],
    callout: 'US entry from zero references to a full outbound engine. No SDR, no domains, no US list on day 0. Sourcing, proof, and infrastructure built from nothing.',
    results: {
      intro: 'The campaigns are live and accruing replies. The figures below are what has been delivered and is running: reply and meeting numbers are not reported here because they are still accumulating.',
      highlights: [
        { value: '3,617', label: 'Validated contacts across 4 verticals' },
        { value: '4', label: 'Vertical campaigns live' },
        { value: '85+', label: 'Quantified proof points mapped' },
      ],
      tableTitle: 'What is live today',
      table: [
        { label: 'Companies sourced', value: '552' },
        { label: 'Companies after ICP filter', value: '427' },
        { label: 'Total validated contacts', value: '3,617' },
        { label: 'Campaign tracks', value: '6 (4 vertical + 2 Palantir)' },
        { label: 'Phase 2 Palantir contacts', value: '409 (~150-170 confirmed)' },
        { label: 'Inboxes provisioned', value: '723' },
        { label: 'Sending domains', value: '14' },
        { label: 'Case study proof points', value: '85+' },
        { label: 'DNC list entries', value: '382' },
        { label: 'Cross-phase overlaps caught', value: '30 companies' },
        { label: 'Phase 1 & 2 reply rates', value: 'Campaign active' },
      ],
    },
    fit: [
      { title: 'Enterprise services firms entering a new market with zero outbound infrastructure.', body: 'If your pipeline has been founder-led, conference-driven, or inbound, this is the architecture that gets you from zero to pipeline without the 18-month SDR hiring cycle.' },
      { title: 'Companies with a small pool of high-value targets they cannot afford to burn.', body: 'If 100 to 200 contacts represent your best opportunity, the phased approach validates on lower-stakes contacts first, then applies the learnings to the high-value pool.' },
      { title: 'B2B firms with deep case study portfolios they are not leveraging.', body: 'If you have dozens of quantified outcomes sitting in slide decks but your cold emails still say "we help companies like yours", extracting and matching proof points by vertical and size turns past delivery into present pipeline.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment & Signal Detection' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'BetterContact', role: 'Email Enrichment' },
      { name: 'Findymail', role: 'Email Verification' },
      { name: 'Claude AI', role: 'AI Personalization & Signal Research' },
      { name: 'DiscoLike', role: 'Company Discovery' },
      { name: 'Hypertide', role: 'Inbox Infrastructure' },
    ],
  },

  /* ─── 6 · Swiss Healthcare SaaS ─────────────────────────────────── */
  {
    slug: 'swiss-healthcare-saas-reply-rate',
    client: 'Swiss Healthcare SaaS',
    isNamed: false,
    eyebrow: 'Cold Email',
    sector: 'healthcare',
    industry: 'Healthcare SaaS',
    year: '2025',
    headline: 'An 8.95% reply rate in Swiss healthcare, 3x the industry benchmark',
    dek: 'A Swiss software company selling an AI chatbot into healthcare needed conversations with clinics. Compliance-safe cold email with tight segmentation got nearly 1 in 11 prospects to reply.',
    heroMetrics: [
      { value: '8.95%', label: 'Overall reply rate' },
      { value: '28%', label: 'Best sub-campaign reply' },
      { value: '3x', label: 'Industry benchmark' },
      { value: '0', label: 'DNC leaks' },
    ],
    tldr: {
      client: 'Swiss software company with an AI chatbot for healthcare providers.',
      problem: 'Regulated market, cautious buyers, no outbound pipeline.',
      build: 'Segmented cold email with compliance guardrails and DNC enforcement baked in.',
      outcome: '8.95% reply rate overall, 28% on the best segment, zero do-not-contact violations.',
    },
    context: [
      'A Swiss software company that builds a proprietary AI chatbot platform for healthcare. The product is Swiss-hosted, GDPR and Swiss data sovereignty compliant, features a multi-agent architecture with built-in CMS and live-chat handoff, and can go live in roughly three days. Existing customers include major cantonal hospitals, national insurers, and public-sector health organizations.',
      'They had strong inbound traction with large institutions but no systematic outbound function. The addressable market, German-speaking Swiss healthcare organizations with 20+ employees, is small by global standards, and every missed opportunity or compliance mistake would be visible across the entire sector. The real constraint was never "how do we get more leads", it was "how do we reach the right 200 organizations without a single mistake".',
    ],
    constraints: [
      { title: 'The total addressable market is tiny.', body: 'After filtering for German-speaking Switzerland, healthcare only, 20+ employees, and organizations without an existing chatbot, the realistic ceiling was roughly 212 net new companies. There is no "spray more volume" fallback.' },
      { title: 'Cultural and linguistic sensitivity is extreme.', body: 'Swiss German business communication has specific rules most outbound ignores. Using the informal "Du" instead of the formal "Sie" triggered direct complaints from recipients.' },
      { title: 'DNC compliance must operate at the organizational level.', body: 'In a market this small, reputation travels. If one contact at a hospital says "not interested", emailing a colleague in another department the following week is a relationship-ending move.' },
      { title: 'Geographic filtering is deceptively fragile.', body: 'Swiss address data is inconsistent: location encoding drift and ambiguous canton assignments meant French-speaking leads leaked into German-only campaigns repeatedly.' },
      { title: 'The client reviews every contact list before launch.', body: 'Every lead had to be defensible: no solo practitioners, no dental clinics, no wellness studios, no organizations already testing the product.' },
    ],
    systemIntro: 'A three-layer system: precision discovery, bulletproof DNC compliance, and culturally adapted copy. Data flows from a hard-ceiling target universe through segmentation and compliance rails, out to segmented campaigns, and back as replies.',
    layers: [
      { title: 'Company discovery in a market with a hard ceiling', body: "Lookalike discovery found healthcare organizations similar to the client's best existing customers. Three batches produced ~273 net new companies, of which 212 passed ICP qualification, filtered on geography, sector, size, and existing chatbot detection, with encoding-safe regex to handle Swiss location data quirks." },
      { title: 'Adjacent vertical expansion', body: 'Once the core universe was worked, the system expanded into 5 adjacent verticals: nursing homes, psychiatric clinics, home care organizations, and health insurers, adding 320+ new companies while keeping the same qualification bar.' },
      { title: 'DNC compliance system, built from a crisis', body: 'Campaign 1 left compliance debt: contacts from organizations that said "Not Interested" reappeared in Campaign 2, and the project nearly got cancelled. A four-layer DNC system followed: a DNC_Companies table (219 organizations), a DNC_Contacts table (1,462 contacts), automated SmartLead removal, and a boolean Push_Ready gate. Zero DNC leaks across Campaigns 2 and 3.' },
      { title: 'Cultural adaptation: Du/Sie split and Swiss German copy', body: 'Separate Du and Sie variants with a Sie-option PS in every sequence, "Hallo" instead of "Hoi" (too informal for hospital directors), and gender-aware German salutations from enrichment data. Round-robin distribution across 3-day windows meant no two people at the same hospital got emails on the same day, across ~60 sender variants.' },
    ],
    callout: "Nearly 1 in 11 prospects replied, in one of Europe's most regulated markets. An 8.95% overall reply rate, about 3x the industry benchmark, with zero do-not-contact violations.",
    results: {
      highlights: [
        { value: '8.95%', label: 'Overall reply rate, 340 replies across 3,796 sent' },
        { value: '28%', label: 'Reply rate on the best sub-campaign' },
        { value: '0', label: 'DNC leaks after the compliance system was built' },
      ],
      tableTitle: 'Campaign health',
      table: [
        { label: 'Aggregate reply rate (Campaign 1)', value: '8.95% (340 / 3,796)' },
        { label: 'Best sub-campaign reply rate', value: '28%' },
        { label: 'Interested prospects (all campaigns)', value: '49+' },
        { label: 'DNC companies tracked', value: '219' },
        { label: 'DNC contacts tracked', value: '1,462' },
        { label: 'DNC leaks after system build', value: '0' },
        { label: 'Sender variants in rotation', value: '~60' },
        { label: 'Total addressable market (net new cos)', value: '~212' },
        { label: 'Adjacent verticals discovered', value: '5' },
      ],
    },
    fit: [
      { title: 'SaaS companies selling into regulated European healthcare', body: 'where GDPR compliance, data sovereignty, and cultural fluency are not optional, they are the price of admission to even start a conversation.' },
      { title: 'Businesses targeting small, high-value addressable markets', body: '(under 500 total companies) where every lead is precious, DNC compliance must be organizational-level, and volume plays are impossible.' },
      { title: 'Companies expanding outreach in multilingual markets', body: '(Switzerland, Belgium, Canada) where a single pronoun choice or greeting can determine whether your email gets a reply or a complaint.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'DiscoLike', role: 'Company Discovery' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'BetterContact', role: 'Email Enrichment' },
      { name: 'Claude AI', role: 'AI Copy & Personalization' },
    ],
  },

  /* ─── 7 · Swiss SAP Gold Partner ────────────────────────────────── */
  {
    slug: 'sap-consultancy-enrichment-at-scale',
    client: 'Swiss SAP Gold Partner',
    isNamed: false,
    eyebrow: 'Signal-Based Outbound',
    sector: 'data-ai',
    industry: 'SAP / HR Tech',
    year: '2025',
    headline: '12,690 companies sourced for a team that closes 80-90% of its meetings',
    dek: 'A Swiss SAP Gold Partner wins almost every deal it pitches. The bottleneck was at-bats. This system found the whole addressable market and got reply rates to 11.3% at peak.',
    heroMetrics: [
      { value: '12,690', label: 'Companies sourced' },
      { value: '11.3%', label: 'Peak reply rate' },
      { value: '9+', label: 'Interested replies' },
      { value: '80-90%', label: 'Client close rate' },
    ],
    tldr: {
      client: 'Swiss SAP Gold Partner specializing in HR tech and SAP migrations.',
      problem: 'World-class close rate, not enough first meetings.',
      build: 'Full-market sourcing, migration-deadline signals, segmented sequences.',
      outcome: '3.9% and 2.8% reply rates across campaigns, 11.3% at peak, 9+ interested replies.',
    },
    context: [
      'A Swiss SAP Gold Partner specializing in HR technology migrations and HR process digitalization. Their core offering: help mid-market and enterprise Swiss companies define their HR-IT roadmap before the SAP ECC end-of-maintenance deadline in December 2027, guiding them to choose between migrating to S/4HANA HR or moving to SAP SuccessFactors in the cloud. They also sell 11 proprietary add-on products that solve specific HR pain points.',
      'Their close rate once they get into a conversation is 80-90%. The consultants are excellent, the product portfolio is deep, and the social proof includes cantonal governments, national utilities, major hospitals, and household-name Swiss brands. The only problem: they had no systematic way to start those conversations at scale.',
    ],
    constraints: [
      { title: 'The addressable market is geographically locked.', body: 'Only German-speaking Swiss cantons qualify. French and Italian Switzerland are off-limits, eliminating roughly 35% of Swiss companies before any other filter.' },
      { title: 'The ICP requires active SAP usage.', body: 'The target is Swiss companies with 100+ employees that currently run SAP HCM or SAP ECC. Standard databases do not reliably tag SAP usage.' },
      { title: 'Standard email enrichment fails in Switzerland.', body: 'Global providers hit 30-50% coverage. A single-provider approach would leave half the pipeline without usable email addresses.' },
      { title: 'The deadline creates urgency but also noise.', body: 'Every SAP consultancy in Europe is running some version of the 2027 deadline campaign. The copy had to cut through saturation.' },
      { title: 'Swiss German copy rules are strict.', body: 'No sharp-s, no "kostenlos", no "bitte", no "Hoi", and getting the tone wrong damages the brand with the exact people they need to close.' },
      { title: '11 add-on products required individualized messaging.', body: 'Sending the wrong add-on recommendation signals you did not do your homework.' },
    ],
    systemIntro: 'One engine, five layers. Full-market company intelligence feeds SAP signal detection, a 12-provider email waterfall recovers contacts other tools miss, AI-driven copy matches signals and add-ons to each prospect, and a five-layer DNC system sits under everything.',
    layers: [
      { title: 'Industrial-scale company intelligence', body: 'Three parallel Clay pipelines sourced, enriched, and qualified 12,690 Swiss companies: an SAP customer list, a broader SAP partner masterfile filtered to German-speaking cantons and 100+ employees, and an add-on matrix scored with pain signals. When MixRank delivered only 7% contact coverage, a pivot to Apollo unlocked 1,144 additional contacts.' },
      { title: 'Four-type SAP signal detection', body: 'An AI signal system classified every company into migration_announced, erp_modernization, sap_hiring, or hr_transformation. Each signal generated a different opening sentence with source attribution. Companies with no detectable signal got a deadline-anchored fallback.' },
      { title: '12-provider email waterfall', body: 'A sequential waterfall of 12 providers, with every email passing Findymail verification before entering the send queue. The long tail collectively recovers another 10-15% of contacts the top providers miss.' },
      { title: 'AI copy with add-on matrix scoring', body: 'SAP migration emails carry an anchor line on the 2027 deadline, a signal sentence in four variants, a roadmap question, and industry-specific social proof. Add-on matrix emails map 11 products with trigger logic and pain scoring (0-5), using specialized AI models for signal finding, copywriting, translation, and research.' },
      { title: 'Five-layer DNC compliance', body: 'A company domain blocklist (customers, partners, competitors), previous contact lists from every campaign, a campaign-specific blocklist of negative replies and removals, a SmartLead bounce list, and a shared community exclusion list of SAP consultancies and major system integrators.' },
    ],
    callout: 'The bottleneck was at-bats, not closing. A team that wins 80-90% of the deals it pitches just needed a systematic way to start more conversations.',
    results: {
      highlights: [
        { value: '11.3%', label: 'Peak reply rate on a Campaign 3 sub-segment' },
        { value: '12,690', label: 'Companies sourced across the addressable market' },
        { value: '9+', label: "Interested replies handed to the client's closers" },
      ],
      tableTitle: 'Campaign performance',
      table: [
        { label: 'Total leads across all campaigns', value: '2,000+' },
        { label: 'Total emails sent', value: '5,000+' },
        { label: 'Campaign 1 (SAP ECC) reply rate', value: '3.9% (21 / 545)' },
        { label: 'Campaign 3 (Matrix Add-Ons) reply rate', value: '2.8% (121 / 4,378)' },
        { label: 'Campaign 3 sub-segment peak reply rate', value: '11.3%' },
        { label: 'Total interested replies', value: '9+' },
        { label: 'Estimated closed deals (at 80-90% close rate)', value: '7-8 (estimated)' },
        { label: 'Companies sourced (Matrix pipeline)', value: '12,690' },
        { label: 'Email waterfall providers', value: '12' },
        { label: 'Email accuracy (post-verification)', value: '95%+' },
        { label: 'DNC layers', value: '5' },
        { label: 'Campaign status', value: 'Active' },
      ],
    },
    fit: [
      { title: 'Technology consultancies with high close rates but empty pipelines.', body: 'If your team converts most conversations into deals but struggles to start enough of them, the problem is top-of-funnel infrastructure, not sales.' },
      { title: 'Companies selling into the Swiss mid-market and enterprise', body: 'where standard enrichment fails. The 12-provider waterfall is built for markets where global platforms deliver only 30-50% coverage.' },
      { title: 'B2B firms with complex product portfolios', body: 'that need individualized messaging per prospect. The add-on matrix matches signals to products before any email is sent.' },
    ],
    stack: [
      { name: 'Clay', role: 'Data Enrichment' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'Apollo', role: 'Lead Database' },
      { name: 'MixRank', role: 'Contact Database' },
      { name: 'BetterContact', role: 'Email Enrichment' },
      { name: 'Findymail', role: 'Email Verification' },
      { name: 'Claude AI', role: 'AI Signal Detection' },
      { name: 'DiscoLike', role: 'Company Discovery' },
    ],
  },

  /* ─── 8 · Swiss Medical Clinics ─────────────────────────────────── */
  {
    slug: 'swiss-pain-clinic-inbox-infrastructure',
    client: 'Swiss Medical Clinics',
    isNamed: false,
    eyebrow: 'Referral Engine',
    sector: 'healthcare',
    industry: 'Healthcare',
    year: '2025',
    headline: 'A physician-referral outbound engine: 102 inboxes, 1,300+ contacts, 4 AI triggers',
    dek: 'A Swiss pain-medicine clinic network needed referrals from physicians, a market where one bad email burns a relationship. This is the compliance-first engine built to open those doors.',
    heroMetrics: [
      { value: '102', label: 'Inboxes configured' },
      { value: '1,300+', label: 'Physician contacts' },
      { value: '4', label: 'AI referral triggers' },
      { value: '38-day', label: 'Sequence designed' },
    ],
    tldr: {
      client: 'Swiss pain-medicine clinic network.',
      problem: "Referral growth depended on personal relationships that don't scale.",
      build: 'Physician database, 4 AI referral triggers, 38-day nurture sequence, 102-inbox infrastructure.',
      outcome: 'Complete referral engine delivered and documented, ready to send.',
    },
    context: [
      'A Swiss pain-medicine clinic network with four locations across German- and French-speaking Switzerland. They do multidisciplinary chronic pain treatment, not cortisone injections, with documented outcomes and fast appointment turnaround measured in days, not months.',
      'The clinic was expanding into the French-speaking market with a new location and needed a systematic referral network of general practitioners and specialists across two language regions. Their previous attempt, a physical mail campaign to hundreds of physicians, produced exactly one response. They needed infrastructure that could reach 1,300+ doctors with the precision and tone of a colleague, not a vendor.',
    ],
    constraints: [
      { title: 'A 20-second read-or-delete window.', body: 'GPs decide in roughly 20 seconds whether to read or delete. There is no click-through, no landing page, no second chance. If the first two sentences do not register as relevant and credible, it is over.' },
      { title: 'Reputation-sensitive specialty.', body: 'The German-speaking Swiss medical community has a dismissive term for clinics that just inject cortisone and move on. The client does genuine multidisciplinary therapy, but the emails had to differentiate without sounding defensive.' },
      { title: 'A bilingual, culturally split audience.', body: 'The German-speaking target and the French-speaking target need not just translation but different cultural registers, so this is two parallel systems, not one with a translation layer bolted on.' },
      { title: 'The sender must be a physician, not a sales team.', body: 'GPs respond to colleagues. The emails had to come from named doctors at the clinic, written in first person, referencing shared clinical reality.' },
      { title: 'A finite, protected contact pool.', body: 'Hospital-based physicians, neurosurgeons, and orthopedic surgeons are excluded and reserved for separate campaigns. The list building had to surgically target private-practice GPs, internists, rheumatologists, and neurologists.' },
    ],
    systemIntro: 'One engine, built compliance-first. A 1,300+ physician database feeds 4 AI referral triggers that decide the opening line, a 38-day sequence carries the relationship forward, and 102 inboxes send it, with reputation and deliverability rails the whole way through.',
    layers: [
      { title: 'Bilingual physician database', body: '1,300+ contacts across two Clay lists sourced from Swiss medical registries, not generic B2B databases. A ~1,000-contact German list and a 300-400 contact French list, each enriched with practice name, specialty, city, website URL, and verified email, with hospital physicians and surgeons excluded.' },
      { title: '4 AI referral triggers', body: 'Every contact with a practice website gets an AI-generated opener based on what the site actually says about their services. 4 conditional triggers map a detected signal to a referral angle, with a specialty-and-city-aware fallback so no contact gets a blank first line.' },
      { title: '38-day referral sequence', body: 'A calibrated 4-email sequence over 38 days, built on the principle that a GP who ignores email 1 is busy, not uninterested. Plain text, collegial tone, Swiss-German copy conventions enforced, French copy translated by a native speaker, stop-on-reply throughout.' },
      { title: 'Physician-grade infrastructure', body: '102 inboxes provisioned via Hypertide with warm-up and low daily volume, 4-5 named physician sender personas mapped to region, and deliverable-by-design sending: no HTML, no images, no tracking pixels, Tuesday to Thursday mornings only.' },
      { title: 'Compliance and list protection', body: 'An A/B test protocol on a 10-15% test group with 2 variants and a 5-day evaluation window before full rollout. In a market where reputation damage is irreversible and the pool is finite, sending untested copy to the whole list is not boldness, it is negligence.' },
    ],
    callout: 'In this market, one bad email burns a referral relationship. That is why the whole engine is built compliance-first, and why the list gets A/B tested before it ever gets sent.',
    detailTables: [
      {
        title: 'The 4 AI referral triggers',
        intro: 'This is the system that turns a mass email into something a GP reads past the second sentence. The detected website signal decides the opening line:',
        headers: ['Signal detected', 'Personalization angle'],
        rows: [
          ['Practice offers manual therapy, chiropractic, acupuncture, or injections', 'Opens with conservative treatment limits: "You know the patients where conservative approaches reach their boundaries"'],
          ['Practice mentions pain therapy or chronic pain treatment', 'Opens with collaboration: "You treat chronic pain patients and know the cases where specialized evaluation would help"'],
          ['Recently established practice or expansion signals', 'Opens with network strengthening: "A good moment to also strengthen your referral network"'],
          ['Practice expansion, new hires, or capacity signals', 'Opens with the referral capacity angle'],
        ],
      },
      {
        title: 'The 38-day sequence',
        intro: "Four emails, spaced to respect a busy GP's inbox, each with a distinct job. Copy rules enforced across all steps: \"Guten Tag Doktor [Last Name]\" greeting, \"ss\" never sharp-s per Swiss German convention, no \"bitte\" (reads as needy), no \"kostenlos\" (reads as cheap), collegial tone throughout.",
        headers: ['Step', 'Purpose'],
        rows: [
          ['Email 1 · Day 1', 'The pitch: AI-personalized opener, multimodal treatment differentiation, fast appointments, written report back to the GP'],
          ['Email 2 · Day 10', 'Gentle follow-up: adds a detail the first email did not cover, reframes the value'],
          ['Email 3 · Day 24', "New location angle: ties to the clinic's expansion"],
          ['Email 4 · Day 38', 'Breakup: "Last message from me", low-pressure, leaves the door open'],
        ],
      },
    ],
    results: {
      intro: 'This is an infrastructure build. At the time of documentation, zero emails had been sent. The engine was built, warmed, and staged for launch. Here is everything the client owns, ready to send.',
      highlights: [
        { value: '102', label: 'Hypertide inboxes configured & warmed' },
        { value: '1,300+', label: 'Physician contacts sourced & enriched' },
        { value: '2', label: 'Parallel bilingual campaigns (DE + FR)' },
      ],
      tableTitle: 'Everything the client owns today',
      table: [
        { label: 'Physician contacts sourced & enriched', value: '1,300+' },
        { label: 'Hypertide inboxes configured & warmed', value: '102' },
        { label: 'AI referral triggers, with zero-blank fallback', value: '4' },
        { label: 'Named physician sender personas', value: '4-5' },
        { label: 'Email sequence designed, plain text, no tracking', value: '38-day' },
        { label: 'Parallel bilingual campaigns (DE + FR)', value: '2' },
        { label: 'A/B test protocol defined before rollout', value: 'Ready' },
      ],
    },
    fit: [
      { title: 'Medical clinics and healthcare providers building referral networks', body: 'where the outreach has to read as physician-to-physician correspondence, not marketing. If the recipient can tell it is a campaign within the first sentence, the referral relationship never starts.' },
      { title: 'Businesses in bilingual or multilingual markets', body: 'that need genuinely separate campaign infrastructure per language region, with cultural and linguistic precision, not a single campaign with translated copy.' },
      { title: 'Companies in reputation-sensitive industries', body: '(medical, legal, financial advisory) where a single tone-deaf email can damage a professional relationship and the total addressable market is small enough that every contact matters.' },
    ],
    stack: [
      { name: 'Clay', role: 'List Building & AI Personalization' },
      { name: 'SmartLead', role: 'Email Sequencing' },
      { name: 'Hypertide', role: 'Inbox Infrastructure' },
      { name: 'Claude AI', role: 'Website Signal Analysis' },
      { name: 'Findymail', role: 'Email Verification' },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}
