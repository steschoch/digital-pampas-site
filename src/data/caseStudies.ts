export interface CaseMetric {
  value: string;
  label: string;
  accent?: 'primary' | 'secondary' | 'tertiary' | 'sky' | 'plum';
}

export interface CaseStudy {
  slug: string;
  client: string;           // display name (anonymous or named)
  isNamed: boolean;         // true = Tremmun only
  eyebrow: string;          // short descriptor e.g. "Elite cybersecurity"
  industry: string;
  year: string;
  service: string;
  headline: string;         // short case tagline
  excerpt: string;          // card description
  heroMetrics: CaseMetric[];
  context: string;
  challenge: string;
  approach: { title: string; body: string }[];
  result: {
    summary: string;
    metrics: CaseMetric[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tremmun-network-activation',
    client: 'Tremmun',
    isNamed: true,
    eyebrow: 'Network activation',
    industry: 'B2B SaaS',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: 'Signal-based, AI-personalized outreach that turned a LinkedIn network into pipeline.',
    excerpt: '40% response rate. 10 qualified meetings. Deals in pipeline, from a system built and handed over.',
    heroMetrics: [
      { value: '40%', label: 'Response rate', accent: 'primary' },
      { value: '10', label: 'Qualified meetings booked', accent: 'sky' },
      { value: '0', label: 'SDRs required', accent: 'tertiary' },
    ],
    context: 'Tremmun is a B2B SaaS company with strong relationships but no systematic outbound motion. Their founder had an extensive LinkedIn network, potential pipeline sitting unused, and a CRM full of warm contacts that had never been sequenced.',
    challenge: 'The challenge was activating a network that already existed without burning it. Cold, generic outreach to people who knew the founder would feel wrong. The system needed to read signals, who was active, who had a relevant trigger event, who was most likely to respond, and write messages that felt personal because they were.',
    approach: [
      {
        title: 'ICP and signal mapping',
        body: 'We mapped Tremmun\'s best-fit customers to a set of firmographic and behavioral signals: company size, industry, recent hiring activity, tech stack, and LinkedIn engagement patterns. This became the filter layer that prioritized the network.',
      },
      {
        title: 'Clay enrichment and AI personalization',
        body: 'Every contact was enriched with LinkedIn data, company news, and recent posts. Claude AI generated a personalized opening for each contact based on actual signal, a shared connection, a recent post, a job change, rather than templated variables.',
      },
      {
        title: 'Sequence build and launch',
        body: 'A two-touch sequence (email + LinkedIn note) was built in Instantly, configured for safe daily limits, and launched on warm sending domains. The system was fully documented and handed to Tremmun\'s team at launch.',
      },
    ],
    result: {
      summary: 'The activated network produced a 40% response rate, well above category benchmarks, and 10 qualified meetings booked within the first campaign cycle. Deals entered pipeline. The system remained running after handover.',
      metrics: [
        { value: '40%', label: 'Response rate', accent: 'primary' },
        { value: '10', label: 'Qualified meetings', accent: 'sky' },
        { value: '4 wks', label: 'Time to first leads', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'elite-cybersecurity-enrichment',
    client: 'Elite cybersecurity firm',
    isNamed: false,
    eyebrow: 'Signal-based multi-channel outbound',
    industry: 'Cybersecurity',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: '25,000 enriched and qualified contacts. Twelve campaigns. Nine weeks.',
    excerpt: 'A full outbound infrastructure built from zero for an elite cybersecurity firm, 25,000 contacts enriched, 12 campaigns running in parallel.',
    heroMetrics: [
      { value: '25k', label: 'Contacts enriched', accent: 'primary' },
      { value: '12', label: 'Campaigns', accent: 'sky' },
      { value: '9 wks', label: 'Time to full build', accent: 'tertiary' },
    ],
    context: 'A cybersecurity firm serving enterprise clients needed a scalable outbound motion targeting CISOs, VP Security, and IT leadership at mid-to-large enterprises. They had no existing outbound infrastructure and had previously relied entirely on referrals and conference relationships.',
    challenge: 'Building enterprise outbound for a cybersecurity firm requires a careful approach: security buyers are skeptical of cold outreach by default, have strict email policies, and respond poorly to generic messaging. Every contact and every message needed to be precisely qualified before sending.',
    approach: [
      {
        title: 'Database build and enrichment',
        body: 'We sourced 25,000 contacts across target industries using Apollo and LinkedIn Sales Navigator, filtered by seniority, company size, and industry vertical. Each contact was enriched with technographic data (current security stack, known vendors) and buying signals (job postings, funding, security incidents in the news).',
      },
      {
        title: 'AI-powered lead scoring',
        body: 'Claude AI scored each contact on ICP fit and buying intent, prioritizing the top 20% for the first campaign wave. This reduced the effective pool to the highest-signal targets and improved reply rates.',
      },
      {
        title: 'Multi-channel sequence architecture',
        body: 'Twelve parallel campaigns were built for distinct sub-segments (CISO at financial services, VP Security at healthcare, etc.), each with tailored copy reflecting the specific threat landscape of that vertical. Email and LinkedIn messages alternated across a 10-day sequence window.',
      },
    ],
    result: {
      summary: 'Twenty-five thousand contacts enriched and qualified, twelve distinct campaigns running simultaneously, with a full infrastructure delivered in nine weeks, including domains, sequences, enrichment workflows, and documented handover.',
      metrics: [
        { value: '25,000', label: 'Contacts enriched & qualified', accent: 'primary' },
        { value: '12', label: 'Parallel campaigns', accent: 'sky' },
        { value: '9 weeks', label: 'Full build time', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'swiss-agency-partner-infrastructure',
    client: 'Swiss outbound agency',
    isNamed: false,
    eyebrow: 'Agency infrastructure partner',
    industry: 'Outbound agency',
    year: '2025',
    service: 'Agency infrastructure partner',
    headline: 'One Clay architecture running six client campaigns, five industries, three languages.',
    excerpt: 'A single scalable infrastructure supporting a Swiss outbound agency\'s full client portfolio, 2,222 leads, 9 message variants, 0.53% bounce rate.',
    heroMetrics: [
      { value: '2,222', label: 'Qualified leads built', accent: 'primary' },
      { value: '0.53%', label: 'Bounce rate', accent: 'sky' },
      { value: '6', label: 'Simultaneous client campaigns', accent: 'tertiary' },
    ],
    context: 'A boutique Swiss outbound agency was running client campaigns manually, separate tools, separate Clay tables, separate enrichment workflows for each client. As their client base grew to six active accounts across five industries and three languages (English, French, German), the manual approach became unsustainable.',
    challenge: 'The agency needed a single technical architecture that could support multiple simultaneous client campaigns with different ICPs, different enrichment requirements, and different languages, without creating a new workflow for every client. And it needed to be fully documented so the agency\'s own team could run it without depending on external support.',
    approach: [
      {
        title: 'Unified Clay architecture',
        body: 'We built a single Clay workspace architecture with modular client configurations: a shared enrichment layer (email verification, company data, LinkedIn) that every client could use, and client-specific filtering, scoring, and export rules built as separate flows off the shared base.',
      },
      {
        title: 'Multi-language sequence system',
        body: 'Nine message variants were built covering the three language-market combinations, with shared structure but localized tone and copy. Clay\'s conditional logic routed each contact to the correct language variant based on their geography.',
      },
      {
        title: 'Documentation and handover',
        body: 'Every workflow, formula, and configuration was documented in a reference guide the agency\'s team could maintain. Training sessions covered the key steps so the agency could onboard new clients without rebuilding from scratch.',
      },
    ],
    result: {
      summary: '2,222 qualified leads delivered with a 0.53% bounce rate across six campaigns. The agency now operates a single infrastructure supporting its full client portfolio in three languages, without rebuilding for each new client.',
      metrics: [
        { value: '2,222', label: 'Leads, ICP-qualified', accent: 'primary' },
        { value: '0.53%', label: 'Bounce rate (best campaign)', accent: 'sky' },
        { value: '9', label: 'Language/market variants', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'cx-outsourcer-ai-signal-agents',
    client: 'CX outsourcing firm',
    isNamed: false,
    eyebrow: 'AI signal agents',
    industry: 'Customer experience / BPO',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: 'Six AI signal agents monitoring 859 companies for real-time buying triggers.',
    excerpt: '859 companies monitored by six AI agents detecting hiring signals, funding rounds, and leadership changes in real time, feeding directly into the outreach sequence.',
    heroMetrics: [
      { value: '6', label: 'AI signal agents deployed', accent: 'primary' },
      { value: '859', label: 'Companies enriched', accent: 'sky' },
      { value: '4 wks', label: 'Time to first leads', accent: 'tertiary' },
    ],
    context: 'A CX outsourcing firm targeting mid-market companies that were scaling their customer support teams needed a way to reach prospects at exactly the right moment, when a hiring signal indicated the prospect was about to feel the pain of scaling their in-house team.',
    challenge: 'Generic outbound to CX buyers doesn\'t work. The message only lands when the company is actively feeling the problem: hiring fast, struggling to find CS talent, or recently announcing a new product line. The system needed to detect these moments, not just target the company, but reach out when the signal was hot.',
    approach: [
      {
        title: 'Signal layer architecture',
        body: 'Six distinct AI signal agents were built in Clay: hiring signals (LinkedIn job postings for CS roles), funding signals (Crunchbase funding rounds), leadership signals (new VP Customer or Chief Customer Officer), product signals (product launch announcements), and company size signals (headcount growth rates).',
      },
      {
        title: 'Real-time monitoring and enrichment',
        body: '859 companies in the ICP were loaded into a monitoring table updated daily. When any agent detected a relevant signal for a company, the contact was automatically enriched, scored for priority, and moved into the sequence queue.',
      },
      {
        title: 'Signal-triggered personalization',
        body: 'Each sequence email was personalized to the specific signal that triggered the outreach. A hiring-triggered email referenced the specific role being hired. A funding-triggered email acknowledged the growth moment. This resulted in emails that felt less like cold outreach and more like timely observations.',
      },
    ],
    result: {
      summary: 'Six AI agents monitoring 859 companies in real time, with signal-triggered personalized outreach reaching prospects at precisely the moment they were most likely to be receptive.',
      metrics: [
        { value: '6', label: 'AI agents deployed', accent: 'primary' },
        { value: '859', label: 'Companies monitored', accent: 'sky' },
        { value: '100%', label: 'Outreach triggered by signals', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'data-ai-consultancy-vertical-campaigns',
    client: 'Data & AI consultancy',
    isNamed: false,
    eyebrow: 'Vertical campaign architecture',
    industry: 'Data & AI consulting',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: 'Four vertical campaigns targeting distinct buyer personas with 3,617 validated contacts.',
    excerpt: 'A single outbound architecture powering four separate vertical campaigns, each with its own ICP, messaging, and enrichment logic, from 3,617 validated contacts.',
    heroMetrics: [
      { value: '4', label: 'Vertical campaigns', accent: 'primary' },
      { value: '3,617', label: 'Validated contacts', accent: 'sky' },
      { value: '95%+', label: 'Email accuracy', accent: 'tertiary' },
    ],
    context: 'A data and AI consultancy serving clients across financial services, healthcare, logistics, and manufacturing needed to reach distinct buyer personas in each vertical, each with different ICP criteria, different pain points, and different decision-making structures.',
    challenge: 'Running four separate campaigns with four separate workflows and four separate enrichment stacks would have required four times the operational overhead. The challenge was building a unified infrastructure that could serve all four verticals with consistent data quality while keeping the message and targeting specific to each.',
    approach: [
      {
        title: 'Shared enrichment base, vertical-specific filters',
        body: 'A shared enrichment base in Clay handled email verification, company data, and technographic enrichment for all verticals. Vertical-specific filter layers then applied the appropriate ICP criteria for each segment: financial services targets filtered by regulatory environment, healthcare by HIPAA-relevant tech stack, and so on.',
      },
      {
        title: 'AI personalization per vertical',
        body: 'Each vertical received its own set of AI-generated talking points, referencing industry-specific pain points and case studies relevant to that sector. The shared personalization infrastructure generated vertical-specific variants at scale.',
      },
      {
        title: 'Validation and quality gate',
        body: 'All 3,617 contacts passed through a three-provider email verification waterfall before entering any sequence. Contacts without a verified email were removed, not queued.',
      },
    ],
    result: {
      summary: '3,617 contacts validated at 95%+ email accuracy across four vertical campaigns, with dedicated ICP filtering and AI-personalized messaging for each segment, from a single shared infrastructure.',
      metrics: [
        { value: '3,617', label: 'Contacts, validated', accent: 'primary' },
        { value: '4', label: 'Vertical campaigns', accent: 'sky' },
        { value: '95%+', label: 'Email accuracy', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'swiss-healthcare-saas-reply-rate',
    client: 'Swiss healthcare SaaS',
    isNamed: false,
    eyebrow: 'Healthcare SaaS outbound',
    industry: 'Healthcare SaaS',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: '8.95% reply rate in a compliance-sensitive vertical with 49+ interested prospects.',
    excerpt: '8.95% reply rate in healthcare, a vertical where generic cold email routinely fails, with 49+ prospects expressing genuine interest.',
    heroMetrics: [
      { value: '8.95%', label: 'Reply rate', accent: 'primary' },
      { value: '49+', label: 'Interested prospects', accent: 'sky' },
      { value: '1', label: 'Infrastructure, 0 burned domains', accent: 'tertiary' },
    ],
    context: 'A Swiss SaaS company selling into the healthcare sector needed outbound that respected the compliance and trust requirements of the industry. Healthcare buyers are skeptical of generic outreach and respond poorly to high-volume spray-and-pray tactics.',
    challenge: 'Healthcare outbound requires precision over volume: a smaller, better-qualified list, messaging that demonstrates domain understanding rather than generic value propositions, and infrastructure that keeps sending domains clean in a vertical where reputation matters.',
    approach: [
      {
        title: 'ICP refinement for healthcare',
        body: 'The ICP was refined to healthcare organizations matching the specific buyer profile: clinic networks, hospital groups, and healthcare IT teams with identified decision-makers at the VP or C-level. Technographic signals (existing EHR systems, patient data platforms) were used to qualify fit.',
      },
      {
        title: 'Compliance-aware infrastructure',
        body: 'Sending domains were fully warmed with conservative daily limits. Domain reputation was monitored throughout the campaign. No primary domain was used for sending.',
      },
      {
        title: 'Domain-expertise messaging',
        body: 'Sequence copy referenced specific healthcare pain points (regulatory compliance, staff turnover in clinical roles, patient data fragmentation) rather than generic benefits. Each email variant was tested against a small cohort before broader rollout.',
      },
    ],
    result: {
      summary: '8.95% reply rate, above industry benchmarks for healthcare outbound, with 49+ prospects expressing genuine interest, zero burned domains, and a fully documented system at handover.',
      metrics: [
        { value: '8.95%', label: 'Reply rate', accent: 'primary' },
        { value: '49+', label: 'Interested prospects', accent: 'sky' },
        { value: '0', label: 'Domains burned', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'sap-consultancy-enrichment-at-scale',
    client: 'SAP consultancy',
    isNamed: false,
    eyebrow: 'Enrichment at scale',
    industry: 'SAP consulting',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: '12,690 companies enriched and qualified at 95%+ accuracy. Up to 12.5% reply rate on the SAP add-ons campaign.',
    excerpt: 'The client already closed 80–90% of the conversations they got, the problem was generating pipeline. We built that: 12,690 companies enriched, 95%+ accuracy, up to 12.5% reply rate.',
    heroMetrics: [
      { value: '12,690', label: 'Companies enriched', accent: 'primary' },
      { value: '95%+', label: 'Email accuracy', accent: 'sky' },
      { value: '12.5%', label: 'Reply rate (SAP add-ons campaign)', accent: 'tertiary' },
    ],
    context: 'A SAP consultancy with a strong close rate, 80–90% of qualified conversations converted, had a pipeline problem, not a sales problem. They had the skills to win deals but no systematic way to generate the conversations that led to them.',
    challenge: 'SAP implementations are high-ticket, long-cycle sales. Outbound needed to reach the right titles at the right companies at the right moment in their SAP journey, not just "companies that use SAP," but companies at the specific inflection points (implementation, upgrade, add-on evaluation) where the consultancy could add value.',
    approach: [
      {
        title: 'Large-scale enrichment',
        body: '12,690 companies were sourced and enriched with SAP-specific signals: known SAP modules in use, implementation partners, recent hiring for SAP-related roles, and upgrade cycle signals from public announcements.',
      },
      {
        title: 'Segmentation by SAP maturity',
        body: 'Companies were segmented by SAP maturity stage: new implementations, existing users evaluating add-ons, and upgrade-cycle targets. Each segment received tailored messaging addressing the specific decisions they were facing.',
      },
      {
        title: 'Quality gate',
        body: 'All contacts passed through a three-provider email verification waterfall. Only contacts with 95%+ confidence-level verified emails were included in the sequence. This was the difference between a list and a campaign-ready database.',
      },
    ],
    result: {
      summary: '12,690 companies enriched at 95%+ email accuracy. Up to 12.5% reply rate on the SAP add-ons campaign. The client\'s close rate remained strong, now applied to a pipeline the system generated consistently.',
      metrics: [
        { value: '12,690', label: 'Companies enriched', accent: 'primary' },
        { value: '95%+', label: 'Email accuracy', accent: 'sky' },
        { value: '12.5%', label: 'Reply rate, best campaign', accent: 'tertiary' },
      ],
    },
  },
  {
    slug: 'swiss-pain-clinic-inbox-infrastructure',
    client: 'Swiss pain clinic network',
    isNamed: false,
    eyebrow: 'Healthcare inbox infrastructure',
    industry: 'Healthcare',
    year: '2025',
    service: 'Full-stack outbound build',
    headline: '102 sending inboxes built. 1,300+ contacts sourced. A referral outbound system built for a clinical network.',
    excerpt: '102 inboxes configured, warmed, and maintained. 1,300+ contacts sourced for a clinical network reaching referring physicians and practice managers.',
    heroMetrics: [
      { value: '102', label: 'Sending inboxes built', accent: 'primary' },
      { value: '1,300+', label: 'Contacts sourced', accent: 'sky' },
      { value: '0%', label: 'Primary domain exposure', accent: 'tertiary' },
    ],
    context: 'A network of pain clinics in Switzerland needed to reach referring physicians, practice managers, and healthcare administrators to drive referral volume. Their primary domain was their clinical brand, untouchable for cold outreach. The system needed to generate referral pipeline through outbound while protecting the clinical brand entirely.',
    challenge: 'Building outbound for a clinical brand requires complete separation between the clinical domain and the sending infrastructure. 102 inboxes needed to be created, configured with proper authentication, warmed over six weeks, and maintained within safe sending limits, all while keeping the clinical brand entirely off the sending domains.',
    approach: [
      {
        title: 'Inbox infrastructure at scale',
        body: '102 sending inboxes were built across multiple sending domains, each configured with DMARC/DKIM/SPF, warmed over a six-week schedule, and limited to safe daily sending volumes. Domain reputation was monitored throughout.',
      },
      {
        title: 'Referral-specific contact sourcing',
        body: '1,300+ contacts were sourced targeting referring physicians (GPs, specialists in pain-adjacent fields), practice managers, and hospital outpatient coordinators within the clinic\'s geographic catchment areas.',
      },
      {
        title: 'Referral-specific messaging',
        body: 'Sequence copy was designed around the referring physician relationship, not a sales motion, but a professional introduction with clinical context and specific referral pathway information. Copy was reviewed for compliance before launch.',
      },
    ],
    result: {
      summary: '102 inboxes built and maintained, 1,300+ contacts sourced and sequenced, with zero exposure of the primary clinical domain to cold outreach.',
      metrics: [
        { value: '102', label: 'Inboxes built and maintained', accent: 'primary' },
        { value: '1,300+', label: 'Contacts sourced', accent: 'sky' },
        { value: '6 wks', label: 'Warmup before first sends', accent: 'tertiary' },
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}
