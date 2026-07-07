import AnimatedSection from '../AnimatedSection';
import styles from './WhatWeDontDo.module.css';

const CARDS = [
  {
    num:   '01',
    title: 'Not a fractional SDR.',
    body:  "We don't send 50 emails a day on your behalf. We build the system that does it, then hand you the keys.",
  },
  {
    num:   '02',
    title: 'Not a tool setup service.',
    body:  "You won't get a Clay login, a Loom, and 'good luck.' You get a working engine, documented, that keeps running after we're gone.",
  },
  {
    num:   '03',
    title: 'Not a vanishing retainer.',
    body:  "No discovery decks. No 90-day 'strategy.' We build in week one. Three months in, you own infrastructure — not a dependency on us.",
  },
  {
    num:   '04',
    title: "Not for pre-revenue guessing.",
    body:  "No closed deals and no clear ICP yet? Outbound just scales the wrong message faster. Come back once you know who buys.",
  },
] as const;

export default function WhatWeDontDo() {
  return (
    <section className={styles.section} id="what-we-dont-do">
      <div className={styles.container}>

        <AnimatedSection animation="fade-up" once delay={0}>
          <p className={styles.eyebrow}>Honest filter</p>
          <h2 className={styles.h2}>What we don&apos;t do.</h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <AnimatedSection
              key={card.num}
              animation="fade-up"
              once
              delay={i * 100}
              className={styles.cardWrapper}
            >
              <article className={styles.card}>
                <span className={styles.num} aria-hidden="true">{card.num}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
