export type ContentBlockType = 'paragraph' | 'heading' | 'subheading' | 'list' | 'callout' | 'divider';

export interface ContentBlock {
  type: ContentBlockType;
  content?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO "2026-05-28"
  readTime: string;
  tags: string[];
  author: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'outbound-breaks-in-four-places-fixing-the-wrong-one',
    title: 'Outbound Breaks in Four Places. You\'re Probably Fixing the Wrong One.',
    excerpt: 'Most founders blame the copy. The real failure is almost always upstream, in the ICP, the list, or the infrastructure, and fixing the wrong layer wastes months.',
    date: '2026-05-28',
    readTime: '7 min read',
    tags: ['outbound', 'cold email', 'B2B sales'],
    author: 'Digital Pampas',
    content: [
      {
        type: 'paragraph',
        content: 'When outbound stops working, founders do the same thing: rewrite the emails. It\'s understandable. Copy is the most visible layer. You can read it, judge it, change it in an afternoon, and feel like you\'ve done something.',
      },
      {
        type: 'paragraph',
        content: 'But in most campaigns we audit, the copy is not the problem. The problem sits two or three layers underneath, and because no one looked there, the new email sequences fail just as fast as the old ones.',
      },
      {
        type: 'paragraph',
        content: 'Here are the four places outbound breaks, in the order that usually matters:',
      },
      {
        type: 'heading',
        content: '1. The ICP: who you\'re targeting',
      },
      {
        type: 'paragraph',
        content: 'Every outbound problem starts here. If your ICP definition is vague ("B2B SaaS companies between 50 and 5,000 employees"), your list will be wide, your messaging will be generic, and your reply rates will be noise. The problem is not that outbound doesn\'t work. The problem is that you\'re sending well-crafted emails to people who have no reason to care.',
      },
      {
        type: 'paragraph',
        content: 'A usable ICP has teeth: a specific industry vertical, a revenue range, a tech stack signal, a hiring pattern, a pain point that surfaces predictably. "B2B SaaS, $5M–$30M ARR, no dedicated SDR team, using HubSpot, actively hiring AEs" is a target. "Mid-market SaaS" is not.',
      },
      {
        type: 'callout',
        content: 'If you can\'t describe your best customers in three sentences and then find 500 of them in Apollo, your ICP isn\'t done yet.',
      },
      {
        type: 'heading',
        content: '2. The list: data quality',
      },
      {
        type: 'paragraph',
        content: 'Assuming the ICP is solid, the next failure point is the list itself. A list is not just names and email addresses. It\'s the accuracy of those addresses, the recency of the data, the relevance of the contacts to your actual ICP, and the hygiene of the records.',
      },
      {
        type: 'paragraph',
        content: 'We regularly see lists where 20–30% of the emails are invalid before any enrichment. That\'s not a copy problem. That\'s a data problem. You can\'t write your way out of a burned domain.',
      },
      {
        type: 'list',
        items: [
          'Are emails triple-verified (Apollo → FindyMail → BetterContact waterfall)?',
          'Are you removing catch-all domains before sending?',
          'Is job title data recent, or pulled from a stale export six months ago?',
          'Are you deduplicating against your existing CRM contacts?',
          'Do you have a do-not-contact list applied before the list goes into the sequencer?',
        ],
      },
      {
        type: 'paragraph',
        content: 'Each of these is a list quality problem. None of them is a copy problem.',
      },
      {
        type: 'heading',
        content: '3. The infrastructure: deliverability',
      },
      {
        type: 'paragraph',
        content: 'This is the layer that takes the longest to fix once it breaks. If your primary domain is burned (spam complaints, poor reputation, no proper DMARC/DKIM/SPF), your emails don\'t arrive. They go to spam, or they don\'t arrive at all. Your reply rate is effectively zero regardless of how good your copy is.',
      },
      {
        type: 'paragraph',
        content: 'Proper infrastructure means: separate sending domains (not your primary), fully configured authentication records, a slow warmup period before campaign volume, and daily sending limits that don\'t trigger spam filters. This takes weeks to build correctly. If you\'re sending at volume without this, you\'re degrading your domain reputation every day.',
      },
      {
        type: 'callout',
        content: 'Check your domain reputation at mail-tester.com and Google Postmaster before diagnosing anything else. If your reputation is already damaged, the email copy is irrelevant.',
      },
      {
        type: 'heading',
        content: '4. The copy: messaging',
      },
      {
        type: 'paragraph',
        content: 'Now we\'re at the layer everyone starts with. And yes, it matters, but only if the three layers above are solid. If your ICP is precise, your list is clean, your domains are healthy, and your emails still don\'t get replies, then yes: the copy is the problem. Audit the subject line, the opening line, the relevance of the personalization, the clarity of the ask.',
      },
      {
        type: 'paragraph',
        content: 'But this is where most founders spend 90% of their time. The uncomfortable truth is that the copy layer accounts for maybe 20% of outbound performance when everything else is broken. And 20% of the problem when everything else works.',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'Where to start the audit',
      },
      {
        type: 'paragraph',
        content: 'Run through the layers in order. Before you rewrite a single email, check your domain reputation, pull a sample of 100 contacts from your list and verify them manually, and ask whether your ICP definition would let you build a list of 500 perfect-fit companies right now.',
      },
      {
        type: 'paragraph',
        content: 'If any of those checks reveal a problem, and they almost always do, fix it first. The copy will compound a working foundation. It will not compensate for a broken one.',
      },
      {
        type: 'paragraph',
        content: 'This is what we do in every Technical Audit engagement: one week of structured diagnosis across all four layers, with a written report and a prioritized fix plan. Start with the foundation.',
      },
    ],
  },
  {
    slug: 'do-not-contact-lists-the-guardrail-founders-skip',
    title: 'Do Not Contact Lists: How to Keep Outbound From Emailing the People You Can\'t Afford to Email',
    excerpt: 'Existing customers, warm prospects, opted-out contacts, and board members of investors, one missed suppression list and your sequencer will reach all of them. Here\'s how to prevent it.',
    date: '2026-06-10',
    readTime: '6 min read',
    tags: ['do not contact', 'suppression list', 'outbound'],
    author: 'Digital Pampas',
    content: [
      {
        type: 'paragraph',
        content: 'Every outbound system needs a list of who not to email. Not a fuzzy mental note. An actual, automated, enforced suppression layer that runs before any contact enters a sequence.',
      },
      {
        type: 'paragraph',
        content: 'Skip it and the sequencer will, inevitably, reach your existing customers, the prospect your AE is currently nurturing, the contact who unsubscribed six months ago, and possibly the board member of one of your investors. These are not hypothetical outcomes. We see them in every audit that skips suppression lists.',
      },
      {
        type: 'heading',
        content: 'What a do-not-contact list actually is',
      },
      {
        type: 'paragraph',
        content: 'A DNC (do-not-contact) list is a collection of email addresses, domains, or company names that are excluded from all outbound sequences, regardless of whether they appear in the list you\'re working from. It\'s enforced at the enrichment stage, before a contact ever enters the sequencer, not as a manual check before you press send.',
      },
      {
        type: 'paragraph',
        content: 'In practice, most teams need several distinct DNC lists that serve different purposes:',
      },
      {
        type: 'list',
        items: [
          'Existing customers (by company domain), never cold outreach an active customer',
          'Open pipeline (by contact email or company), respect what sales is already working',
          'Opted-out contacts (anyone who replied "unsubscribe" or "remove me")',
          'Competitors, reaching a competitor is a reputation risk, not a lead',
          'Investors and board members, relationships that live above the sales motion',
          'GDPR/legal (for EU-based senders), contacts who invoked the right to erasure',
        ],
      },
      {
        type: 'heading',
        content: 'Why this gets skipped',
      },
      {
        type: 'paragraph',
        content: 'Most teams skip suppression lists for one of three reasons. First: they build the outbound system as a single motion and assume someone is checking manually. No one is. Second: the data lives in multiple tools (CRM, sequencer, spreadsheets) and there\'s no single place to maintain a master list. Third: they\'re moving fast and intend to "add it later." Later never comes before the first incident.',
      },
      {
        type: 'callout',
        content: 'The average outbound campaign contains at least one existing customer in the list. We\'ve never audited a campaign that skipped suppression and didn\'t find at least one.',
      },
      {
        type: 'heading',
        content: 'How to implement it in Clay and Apollo',
      },
      {
        type: 'subheading',
        content: 'In Clay',
      },
      {
        type: 'paragraph',
        content: 'Clay supports suppression via a "blocklist" column in your table. You reference a Google Sheet (or another Clay table) containing your DNC domains and emails. During enrichment, a formula checks each contact against the list and flags them. Contacts flagged as DNC are filtered out before export to Instantly or Smartlead.',
      },
      {
        type: 'subheading',
        content: 'In Apollo',
      },
      {
        type: 'paragraph',
        content: 'Apollo has a built-in "Do Not Contact" list under Settings → Privacy → DNC. You can upload a CSV of domains and emails. Apollo will suppress these contacts from sequences and flag them in searches. Export your CRM contacts and upload them here as a starting point.',
      },
      {
        type: 'subheading',
        content: 'In Instantly or Smartlead',
      },
      {
        type: 'paragraph',
        content: 'Both sequencers have a global unsubscribe/blocklist. Any email that replies with an unsubscribe trigger should be added automatically (both platforms have this setting) and also pushed back to your master DNC list to propagate across all tools.',
      },
      {
        type: 'heading',
        content: 'Maintenance: the part most teams forget',
      },
      {
        type: 'paragraph',
        content: 'A DNC list is not a one-time setup. It needs a process to stay current:',
      },
      {
        type: 'list',
        items: [
          'When a deal closes → add the company domain to the customer DNC immediately',
          'When a prospect enters active sales → add to the pipeline DNC',
          'When a reply contains "unsubscribe", "remove me", or similar → add within 24 hours',
          'Monthly: sync CRM new contacts to validate they\'re not already in the DNC',
        ],
      },
      {
        type: 'paragraph',
        content: 'We automate this with a Clay workflow that pulls from HubSpot/Salesforce on a schedule and updates the master DNC table. If you\'re not on Clay, a Google Sheet updated via Zapier achieves the same result.',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content: 'The suppression layer is unglamorous infrastructure. It won\'t improve your reply rate. But one missed suppression, and you\'re emailing someone you cannot afford to email. Build it in week one, before you send a single sequence.',
      },
    ],
  },
  {
    slug: 'the-one-week-audit-before-you-build-outbound',
    title: 'The One-Week Audit That Should Come Before You Build Any Outbound System',
    excerpt: 'Most outbound builds start from zero. The smartest ones start with a one-week diagnostic, because what already exists in your CRM, domains, and data usually determines 80% of the build plan.',
    date: '2026-06-01',
    readTime: '8 min read',
    tags: ['outbound', 'audit', 'GTM'],
    author: 'Digital Pampas',
    content: [
      {
        type: 'paragraph',
        content: 'Before you spend four weeks building an outbound system, spend one week understanding what you already have. The audit is not optional prep. It\'s the first phase of any responsible outbound build, and it\'s the phase most agencies skip entirely.',
      },
      {
        type: 'paragraph',
        content: 'Why? Because skipping it means building on an unknown foundation. You might spend three weeks building Clay workflows on a domain that\'s already burned. You might define an ICP that contradicts the patterns in your existing closed deals. You might build sequences for a market your CRM data tells you you\'ve already exhausted.',
      },
      {
        type: 'paragraph',
        content: 'The one-week audit surfaces these problems before they become expensive. Here\'s what it covers:',
      },
      {
        type: 'heading',
        content: '1. Domain and deliverability health',
      },
      {
        type: 'paragraph',
        content: 'Pull your primary domain and any existing sending domains through a deliverability check: mail-tester.com, Google Postmaster Tools, and MXToolbox. Look for spam flag history, DMARC/DKIM/SPF completeness, and current reputation score.',
      },
      {
        type: 'paragraph',
        content: 'If any sending domain has a spam complaint rate above 0.1%, it\'s degraded. If your primary domain has ever been used for cold outreach, it\'s potentially compromised. This check takes one hour and determines whether you need new sending domains (and six weeks of warmup) before any campaigns can run at volume.',
      },
      {
        type: 'callout',
        content: 'Every build we do starts here. A burned domain delays everything else by four to six weeks, and it\'s always worse to discover this mid-campaign.',
      },
      {
        type: 'heading',
        content: '2. CRM data quality',
      },
      {
        type: 'paragraph',
        content: 'Export your CRM contacts and run them through a basic quality check: email validity rate, completeness of key fields (job title, company, industry), and staleness (when was the data last updated). A CRM with 2,000 contacts that are 18 months old with 40% missing job titles is not a usable prospecting database. It\'s a starting point for a cleanup project.',
      },
      {
        type: 'list',
        items: [
          'What percentage of contacts have a valid, verified email?',
          'How many contacts are in your actual ICP vs. noise?',
          'When was each contact last updated? How many are over 12 months stale?',
          'Are there duplicates? (More common than expected.)',
          'What data is missing that the outreach sequences need?',
        ],
      },
      {
        type: 'heading',
        content: '3. ICP clarity',
      },
      {
        type: 'paragraph',
        content: 'Pull your last 20 closed won deals and look for patterns: company size, industry, tech stack, geography, trigger (what made them reach out or respond), decision-maker title. If you can\'t find three clear patterns across those 20 deals, your ICP definition needs work before you build any outbound targeting.',
      },
      {
        type: 'paragraph',
        content: 'The audit translates this into an ICP scoring framework: firmographic criteria (size, industry, revenue), technographic signals (tools in their stack), and behavioral signals (hiring patterns, funding, news) that predict fit. This framework becomes the filtering logic for every list you build.',
      },
      {
        type: 'heading',
        content: '4. Existing sequence and campaign history',
      },
      {
        type: 'paragraph',
        content: 'If you\'ve run cold outreach before, even informally, pull the history. Which domains were used? Which contacts were reached? What were the reply rates? Were there unsubscribes? This prevents two problems: re-emailing contacts who already said no, and understanding what messaging has already been tested.',
      },
      {
        type: 'paragraph',
        content: 'The worst outcome is building a technically perfect outbound system and then discovering that your team has already sent cold emails to half your ICP from a burned domain with a message that positioned you as something you no longer are. The audit surfaces this before the build.',
      },
      {
        type: 'heading',
        content: '5. Data source inventory',
      },
      {
        type: 'paragraph',
        content: 'Where will prospect data come from? Apollo? LinkedIn Sales Navigator? Manual research? Existing CRM? Each source has different data quality, coverage, and cost implications. The audit maps this out so the build plan uses the right sources for the right segments.',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        content: 'The output: a build plan, not a guess',
      },
      {
        type: 'paragraph',
        content: 'After one week, the audit produces a written report: domain health status, CRM data quality score, a refined ICP definition, a sequence/contact history, and a prioritized build plan that accounts for what exists. Everything that comes after (the Clay workflows, the email infrastructure, the sequences) is built on known ground.',
      },
      {
        type: 'paragraph',
        content: 'The Technical Audit is the lowest-risk way to start. You learn what you\'re working with before committing to a full build. And if the audit reveals that the foundation is worse than expected, you know before you\'ve spent four weeks building on it.',
      },
      {
        type: 'paragraph',
        content: 'Build on known ground. Audit first.',
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
