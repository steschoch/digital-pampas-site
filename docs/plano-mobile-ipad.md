# Plano Mobile/iPad — Digital Pampas Website

## Context
O site tem scroll horizontal indesejado no mobile e iPad. O `HowWeBuildIt` usa pills
horizontais com `min-width: max-content` que vaza para fora do container, causando o scroll.
O usuário também quer: (1) metricsStrip como strip rolável horizontal no mobile,
(2) HowWeBuildIt em acordeão vertical no mobile/iPad (≤1024px) em vez de pills.
Todas as outras seções já são responsivas.

---

## 1. Fix global — scroll horizontal

**Arquivo:** `src/styles/globals.css`

Adicionar ao `body`:
```css
body {
  overflow-x: clip; /* suprime scroll horizontal sem quebrar position:fixed */
}
```
`overflow-x: clip` é preferível a `hidden` porque não cria novo contexto de formatação
e não interfere com elementos `position: fixed` no iOS.

---

## 2. metricsStrip — scroll horizontal suave no mobile

**Arquivo:** `src/components/Hero/Hero.module.css`

No bloco `@media (max-width: 768px)`, substituir a regra existente de `.metricsStrip` por:
```css
.metricsStrip {
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: flex-start;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-inline: var(--dp-space-6);
  /* gradient nas bordas indica que há mais conteúdo */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.metricsStrip::-webkit-scrollbar {
  display: none;
}
```
Isso remove o `flex-wrap: wrap` que causava quebra de linha irregular, e
adiciona um gradient nas bordas como indicador visual de scroll.

---

## 3. HowWeBuildIt — acordeão no mobile/iPad

### 3a. TSX — `src/components/HowWeBuildIt/HowWeBuildIt.tsx`

**Adicionar state de detecção de breakpoint** (logo após os outros useState):
```tsx
const [isMobileLayout, setIsMobileLayout] = useState(
  typeof window !== 'undefined' && window.innerWidth <= 1024
);

useEffect(() => {
  const check = () => setIsMobileLayout(window.innerWidth <= 1024);
  window.addEventListener('resize', check, { passive: true });
  return () => window.removeEventListener('resize', check);
}, []);
```

**Extrair o detail card como função local** (para reusar no accordion sem duplicar JSX):
```tsx
const renderDetailCard = (phaseIdx: number) => {
  const phase = PHASES[phaseIdx];
  const accent = ACCENTS[phaseIdx];
  const Panel = PANELS[phaseIdx];
  const panelId = `hwbi-panel-${phaseIdx}`;
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={`hwbi-tab-${phaseIdx}`}
      tabIndex={0}
      className={`${styles.detailCard} ${styles[`detail-${accent}`]}`}
      key={phaseIdx}
    >
      {/* conteúdo idêntico ao detail card existente */}
    </div>
  );
};
```

**No JSX do `<div className={styles.body}>`, condicional:**
```tsx
<div className={styles.body}>
  {isMobileLayout ? (
    <div className={styles.accordion} role="tablist" aria-label="Phases">
      {PHASES.map((phase, i) => {
        const accent = ACCENTS[i];
        const isOpen = i === active;
        return (
          <div key={phase.num} className={styles.accordionItem}>
            <button
              id={`hwbi-tab-${i}`}
              role="tab"
              aria-selected={isOpen}
              aria-expanded={isOpen}
              aria-controls={`hwbi-panel-${i}`}
              className={`${styles.accordionBtn} ${isOpen ? styles.accordionBtnActive : ''} ${styles[`tabColor-${accent}`]}`}
              onClick={() => setActive(i)}
            >
              <span className={`${styles.accordionNum} ${styles[`color-${accent}`]}`}>
                {phase.num}
              </span>
              <span className={styles.accordionName}>{phase.name}</span>
              <svg className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isOpen && (
              <div className={styles.accordionContent}>
                {renderDetailCard(i)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <>
      <nav className={styles.sidebar}>...</nav>
      <div className={styles.detail}>{renderDetailCard(active)}</div>
    </>
  )}
</div>
```

### 3b. CSS — `src/components/HowWeBuildIt/HowWeBuildIt.module.css`

Adicionar ao final do arquivo:

```css
/* ── Accordion (≤1024px) ─────────────────────────────────────────── */

.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--dp-outline);
  border-radius: var(--dp-radius-card);
  overflow: hidden;
}

.accordionItem {
  border-bottom: 1px solid var(--dp-outline);
}
.accordionItem:last-child { border-bottom: none; }

.accordionBtn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--dp-space-3);
  padding: var(--dp-space-4) var(--dp-space-5);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--dp-on-surface);
  min-height: 56px;
}

.accordionBtnActive {
  background-color: color-mix(in srgb, var(--phase-accent, var(--dp-primary)) 8%, var(--dp-surface));
}

.accordionNum {
  font-family: var(--dp-font-code);
  font-size: var(--dp-text-xs);
  font-weight: 500;
  min-width: 28px;
  flex-shrink: 0;
}

.accordionName {
  font-family: var(--dp-font-body);
  font-size: var(--dp-text-base);
  font-weight: 600;
  flex: 1;
}

.chevron {
  color: var(--dp-on-surface-variant);
  flex-shrink: 0;
  opacity: 0.5;
  transition: transform var(--dp-motion-interactive, 200ms ease);
}

.chevronOpen {
  transform: rotate(180deg);
  opacity: 0.9;
}

.accordionContent {
  padding: 0 var(--dp-space-5) var(--dp-space-5);
  background-color: color-mix(in srgb, var(--dp-surface-container) 50%, transparent);
}
```

---

## 4. Resultado por seção (auditoria completa)

| Seção | Mobile (≤768px) | iPad (769–1024px) | Mudança necessária |
|---|---|---|---|
| **Nav** | Hamburger ✓ | Hamburger ✓ | Nenhuma |
| **Hero — copy** | 1 coluna ✓ | Grid 45/55 ✓ | Nenhuma |
| **Hero — metricsStrip** | ⚠ flex-wrap quebra | flex-wrap OK | §2 |
| **Hero — network** | Máscara vertical ✓ | Máscara horizontal ✓ | Nenhuma |
| **HeroDiagram** | max-width 560px, width 100% ✓ | OK ✓ | Nenhuma |
| **Problem** | 1 coluna ✓ | OK ✓ | Nenhuma |
| **HowWeBuildIt** | ⚠ pills horizontais | ⚠ pills horizontais | §3 |
| **Proof** | 1 coluna ✓ | 2 colunas ✓ | Nenhuma |
| **WaysToWork** | 1 coluna ✓ | 3 colunas ✓ | Nenhuma |
| **FinalCTA** | Empilhado ✓ | OK ✓ | Nenhuma |
| **Footer** | Grid 1fr 1fr ✓ | OK ✓ | Nenhuma |
| **Global scroll-x** | ⚠ overflow visível | ⚠ overflow visível | §1 |

---

## Verificação

1. Chrome DevTools → iPhone SE (375px): sem scroll-x, metricsStrip desliza suavemente,
   HowWeBuildIt mostra acordeão com 6 itens clicáveis
2. iPad (768–1024px): acordeão também aparece
3. Desktop (>1024px): sidebar sticky + scroll-to-tab intactos
4. Testar dark mode e light mode em cada breakpoint
