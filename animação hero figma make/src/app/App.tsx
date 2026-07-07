import Nav            from '../components/Nav/Nav';
import Hero           from '../components/Hero/Hero';
import Problem        from '../components/Problem/Problem';
import WhatWeDontDo   from '../components/WhatWeDontDo/WhatWeDontDo';
import HowWeBuildIt   from '../components/HowWeBuildIt/HowWeBuildIt';
import styles         from './App.module.css';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <WhatWeDontDo />
      <HowWeBuildIt />

      {/* Placeholder anchor sections */}
      <main>
        <section id="about" className={styles.placeholder} style={{ background: 'var(--dp-color-surface-container-low)' }}>
          <div className={styles.placeholderInner}>
            <h2>About</h2>
          </div>
        </section>

        <section id="book-call" className={styles.placeholder} style={{ background: 'var(--dp-color-surface-container)' }}>
          <div className={styles.placeholderInner}>
            <h2>Book a call</h2>
          </div>
        </section>
      </main>
    </>
  );
}
