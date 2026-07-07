# Plano Light Mode — Redesign Visual

## Context

O light mode estava visualmente plano: quase todas as seções usavam `--dp-surface: #F8FAFF` (branco gelo), criando visual monótono ("todo branco, sem graça"). Três problemas principais:
1. **Hero (animação):** canvas sobre fundo branco → nós e linhas de baixo alpha quase invisíveis
2. **metricsStrip:** fundo azulado claro → sem peso visual
3. **Footer:** fundo branco → sem hierarquia em relação ao body

**Objetivo:** criar ritmo visual com seções alternando entre superfícies claras e painéis escuros, usando exclusivamente tokens semânticos `--dp-*`.

**Regra:** o site nunca usa hex direto — apenas `var(--dp-*)`. Novos valores vão primeiro ao DS (`ds-digital-pampas`) como token semântico, depois ao site.

---

## 1. Novos Tokens Semânticos

### DS — `ds-digital-pampas/src/globals/globals.css`

```css
/* Na seção Surface do bloco :root (light) */
--dp-color-surface-inverse:     var(--dp-color-space-grey-950);  /* #080E1E */
--dp-color-on-surface-inverse:  var(--dp-color-space-grey-100);  /* #ECEEF5 */
--dp-color-surface-inverse-sub: var(--dp-color-space-grey-900);  /* #111B35 */

/* No bloco dark */
--dp-color-surface-inverse:     var(--dp-color-surface);
--dp-color-on-surface-inverse:  var(--dp-color-on-surface);
--dp-color-surface-inverse-sub: var(--dp-color-surface-container-low);
```

### Website — `src/styles/globals.css`

```css
/* Em :root (dark defaults) */
--dp-surface-inverse:     var(--dp-surface);
--dp-surface-inverse-sub: var(--dp-surface-container-low);
--dp-on-surface-inverse:  var(--dp-on-surface);
--dp-outline-inverse:     var(--dp-outline);
--dp-primary-on-dark:     var(--dp-primary);

/* Em [data-color-scheme="light"] */
--dp-surface-inverse:     #080E1E;
--dp-surface-inverse-sub: #111B35;
--dp-on-surface-inverse:  #ECEEF5;
--dp-outline-inverse:     #4D5E85;
--dp-primary-on-dark:     #26CBF5;  /* 11:1 contraste sobre fundo escuro */
```

---

## 2. Hero — Painel Escuro (animação)

- `NetworkBgV2.tsx`: prop `forceDark?: boolean` → canvas sempre renderiza em dark mode alphas
- `Hero.tsx`: `<div class="diagramBg">` como primeiro filho da section (antes do canvas)
- `Hero.module.css`: `.diagramBg` oculto no dark mode; light mode = `position:absolute`, cobrindo left:42% a right:0 com gradiente `transparent → --dp-surface-inverse`

## 3. Metrics Strip — Banda Escura

Light mode override em `Hero.module.css`:
- `.metricsStrip`: `--dp-surface-inverse-sub` bg
- `.metricValue`: `--dp-on-surface-inverse`
- `.metricLabel` / `.metricSep`: variantes com `color-mix()` de `--dp-on-surface-inverse`

## 4. Footer — Fundo Escuro

Light mode overrides em `Footer.module.css`:
- `.footer` → `--dp-surface-inverse`
- `.emailBand` → `--dp-surface-inverse-sub`
- Todos os textos em variantes de `--dp-on-surface-inverse`
- `.emailLink` → `--dp-primary-on-dark` (#26CBF5)
- Logo: override para mostrar versão dark (branca) mesmo em light mode

## 5. Ritmo Visual de Seções

| Seção | Light mode |
|---|---|
| Hero (copy) | `--dp-surface` |
| Hero (diagrama) | `--dp-surface-inverse` via diagramBg |
| metricsStrip | `--dp-surface-inverse-sub` |
| Problem | `--dp-surface-container-low` |
| HowWeBuildIt | `--dp-surface-container-low` (mantém) |
| Proof | `--dp-surface-container` |
| WaysToWork | `--dp-surface-container-low` (mantém) |
| FinalCTA | `--dp-surface-container-low` (mantém) |
| Footer | `--dp-surface-inverse` |
