import { useState, useEffect, useRef, useCallback } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from './Nav.module.css';

type ColorScheme = 'dark' | 'light';

interface NavLink {
  label: string;
  href: string;
  type: 'anchor' | 'page';
}

const NAV_LINKS: NavLink[] = [
  { label: 'How it works', href: '#how-it-works', type: 'anchor' },
  { label: 'Process',      href: '#process',      type: 'anchor' },
  { label: 'Cases',        href: '/case-studies', type: 'page'   },
  { label: 'Blog',         href: '/blog',         type: 'page'   },
  { label: 'About',        href: '#about',        type: 'anchor' },
];

export default function Nav() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [colorScheme,  setColorScheme]  = useState<ColorScheme>('dark');
  const [activeAnchor, setActiveAnchor] = useState('');

  const overlayRef      = useRef<HTMLDivElement>(null);
  const menuButtonRef   = useRef<HTMLButtonElement>(null);
  const firstFocusRef   = useRef<HTMLElement | null>(null);

  /* ── scroll shadow ─────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── sync theme attribute ───────────────────────────────────────────── */
  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }, [colorScheme]);

  /* ── active anchor via IntersectionObserver ─────────────────────────── */
  useEffect(() => {
    const anchorIds = NAV_LINKS
      .filter(l => l.type === 'anchor')
      .map(l => l.href.slice(1));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveAnchor('#' + e.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    anchorIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── mobile menu: Esc + focus-trap + scroll-lock ────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;

    const overlay = overlayRef.current;
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const focusable = overlay?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    firstFocusRef.current = focusable?.[0] ?? null;
    firstFocusRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && overlay) {
        const all = Array.from(
          overlay.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (!all.length) return;
        const first = all[0];
        const last  = all[all.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ── smooth-scroll helper ───────────────────────────────────────────── */
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  const toggleTheme = () =>
    setColorScheme(s => (s === 'dark' ? 'light' : 'dark'));

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  /* ── render ─────────────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Sticky bar ─────────────────────────────────────────────────── */}
      <nav
        className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}
        aria-label="Primary"
      >
        <div className={styles.container}>

          {/* Wordmark */}
          <a href="/" className={styles.wordmark} aria-label="Digital Pampas — home">
            Digital Pampas
          </a>

          {/* Desktop nav links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(link => {
              const isActive = link.type === 'anchor' && activeAnchor === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={[styles.link, isActive ? styles.linkActive : ''].join(' ')}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={
                      link.type === 'anchor'
                        ? e => handleAnchorClick(e, link.href)
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className={styles.actions}>
            {/* Theme toggle */}
            <button
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-pressed={colorScheme === 'light'}
              aria-label={
                colorScheme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {colorScheme === 'dark'
                ? <Sun  size={20} aria-hidden="true" />
                : <Moon size={20} aria-hidden="true" />}
            </button>

            {/* Primary CTA (desktop) */}
            <a href="#book-call" className={styles.cta}>
              Book a call
            </a>

            {/* Hamburger (mobile only) */}
            <button
              ref={menuButtonRef}
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="dp-mobile-menu"
              aria-label="Open navigation menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile full-screen overlay ──────────────────────────────────── */}
      {menuOpen && (
        <div
          id="dp-mobile-menu"
          ref={overlayRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Overlay header */}
          <div className={styles.overlayHeader}>
            <a
              href="/"
              className={styles.wordmark}
              onClick={() => setMenuOpen(false)}
              aria-label="Digital Pampas — home"
            >
              Digital Pampas
            </a>
            <button
              className={styles.iconBtn}
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Overlay links */}
          <ul className={styles.overlayLinks} role="list">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={styles.overlayItem}
                style={{ '--delay': `${i * 60 + 80}ms` } as React.CSSProperties}
              >
                <a
                  href={link.href}
                  className={styles.overlayLink}
                  onClick={
                    link.type === 'anchor'
                      ? e => handleAnchorClick(e, link.href)
                      : () => setMenuOpen(false)
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Overlay CTA */}
          <div className={styles.overlayFooter}>
            <a
              href="#book-call"
              className={styles.ctaOverlay}
              onClick={() => setMenuOpen(false)}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </>
  );
}
