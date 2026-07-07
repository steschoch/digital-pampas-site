# Auditoria Site × Design System — Digital Pampas
**Data:** 2026-06-28  
**Escopo:** `website-digital-pampas/src` × `ds-digital-pampas`  
**Critério de acessibilidade:** WCAG 2.1 AA (4.5:1 texto normal, 3:1 texto grande ≥18px ou ≥14px bold, componentes UI)

---

## Problema estrutural raiz

O site define um sistema de tokens paralelo em `src/styles/globals.css` com nomenclatura que diverge do DS canônico:

| DS canônico | Site usa | Desvio |
|---|---|---|
| `--dp-color-surface` | `--dp-surface` | falta infixo `color-` |
| `--dp-sem-font-body` | `--dp-font-body` | falta infixo `sem-` |
| `--dp-font-size-50` (12px) | `--dp-text-xs` | escala com nome diferente |
| `--dp-space-25` (4px) | `--dp-space-1` | convenção numérica diferente |
| `--dp-sem-radius-button` | `--dp-radius-sm` | falta infixo `sem-` |
| `--dp-sem-motion-interactive` | `--dp-motion-interactive` | falta infixo `sem-` |

Todos os desvios abaixo derivam desta separação estrutural.

---

## Seção A — Valores raw (hex / px) que devem ser tokens

### `Nav.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~35 | `.scrolled` | `background-color` | `rgba(8,14,30,0.85)` | `color-mix(in srgb, var(--dp-surface) 85%, transparent)` |
| ~38 | `.scrolled` | `box-shadow` | `0 2px 16px rgba(0,0,0,0.4)` | `var(--dp-shadow-card-hover)` |
| ~45 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~213 | `.cta:hover` | `box-shadow` | `rgba(38,203,245,0.3)` raw | `color-mix(in srgb, var(--dp-primary) 30%, transparent)` |

### `Hero.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~19 | `.section::before` | gradiente | `rgba(38,203,245,0.03)` | `color-mix(in srgb, var(--dp-primary) 3%, transparent)` |
| ~34 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |

### `HeroDiagram.module.css` (5 ocorrências de `#26CBF5` raw)
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~158 | `.badge` | `background-color` | `rgba(38,203,245,0.12)` | `color-mix(in srgb, var(--dp-primary) 12%, transparent)` |
| ~248 | `.meetingCard` | `background-color` | `#26CBF517` | `color-mix(in srgb, var(--dp-primary) 9%, transparent)` |
| ~249 | `.meetingCard` | `border` | `#26CBF599` | `color-mix(in srgb, var(--dp-primary) 60%, transparent)` |
| ~250 | `.meetingCard` | `box-shadow` | `#26CBF533` / `#26CBF517` | `color-mix(in srgb, var(--dp-primary) 20%/9%, transparent)` |
| ~265 | `.meetingCheck` | `background-color` | `#26CBF526` | `color-mix(in srgb, var(--dp-primary) 15%, transparent)` |

### `Problem.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~13 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~147 | `.itemBad` | `background-color` | `color-mix(in srgb, #ffffff 3%, transparent)` | Definir `--dp-on-surface` alpha 3%, ou manter como está (funcional) |

### `Proof.module.css` (22 violações — o arquivo com mais desvios)
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~6 | `.section` | `padding-block` | `96px` | `var(--dp-space-24)` |
| ~10 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~19 | `.eyebrow` | `margin` | `12px` | `var(--dp-space-3)` |
| ~22 | `.eyebrow` | `font-size` | `12px` | `var(--dp-text-xs)` |
| ~31 | `.h2` | `font-size` | `40px` | `var(--dp-text-3xl)` |
| ~50 | `.grid` | `gap` | `20px` | `var(--dp-space-5)` |
| ~52 | `.grid` | `margin-top` | `48px` | `var(--dp-space-12)` |
| ~97 | `.bigNumber` | `margin-top` | `16px` | `var(--dp-space-4)` |
| ~112 | `.metricLabel` | `font-size` | `14px` | `var(--dp-text-sm)` |
| ~119 | `.bullet` | `margin-top` | `12px` | `var(--dp-space-3)` |
| ~126 | `.caseLink` | `padding-top` | `20px` | `var(--dp-space-5)` |
| ~145 | `.testimonials` | `gap + margin-top` | `48px` | `var(--dp-space-12)` |
| ~174 | `.viewAllRow` | `margin-top` | `40px` | `var(--dp-space-10)` |
| ~181 | `.viewAllBtn` | `padding-inline` | `20px` | `var(--dp-space-5)` |

### `HowWeBuildIt.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~49 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~247/253/259 | `.circle-coral/indigo/plum` | `color` | `#fff` | `var(--dp-on-primary)` ou `#ECEEF5` |

### `WaysToWork.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~10 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~59 | `.card` | `padding` | `32px` | `var(--dp-space-8)` |
| ~121 | `.cardCta` | `margin-top` | `24px` | `var(--dp-space-6)` |

### `WhatWeDontDo.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~11 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |

### `FinalCTA.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~11 | `.container` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~71 | `.panel, .form` | `padding` | `40px` | `var(--dp-space-10)` |
| ~83 | `.panelTitle` | `margin-top` | `12px` | `var(--dp-space-3)` |
| ~101 | `.bookButton` | `margin-top` | `20px` | `var(--dp-space-5)` |
| ~144 | `.divider` | `padding-block` | `32px` | `var(--dp-space-8)` |
| ~183 | `.row` | `gap` | `12px` | `var(--dp-space-3)` |

### `Footer.module.css`
| Linha | Seletor | Propriedade | Valor atual | Token correto |
|---|---|---|---|---|
| ~16 | `.emailBandInner` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~47 | `.body` | `padding-block` | `40px` | `var(--dp-space-10)` |
| ~52 | `.bodyInner` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |
| ~112 | `.colTitle` | `margin-bottom` | `16px` | `var(--dp-space-4)` |
| ~157 | `.legal` | `padding` | `16px 0` | `var(--dp-space-4) 0` |
| ~163 | `.legalInner` | `padding-inline` | `120px` | `var(--dp-grid-margin)` |

---

## Seção B — Tokens com valores incorretos no site

| Token | Valor no site (dark) | Valor correto DS (dark) | Impacto |
|---|---|---|---|
| `--dp-tertiary` | `#7455D3` (indigo-400) | `#9880DE` (indigo-300) | Falha de contraste: 3.65:1 → deveria ser 5.93:1 |
| `--dp-surface-bright` | `#35436A` | `#202D4F` (= surface-container) | Confusão semântica; level errado |
| `--dp-shadow-card` | `0 2px 8px rgba(0,0,0,.4)` | Stack de 2 camadas per DS | Visual divergente |
| `--dp-shadow-card-hover` | `0 8px 32px rgba(0,0,0,.6)` | Stack de 2 camadas per DS | Visual divergente |

### Divergências light mode
| Token | Valor no site (light) | Valor correto DS (light) |
|---|---|---|
| `--dp-surface` | `#FFFFFF` | `#F6F7FB` (grey-50) |
| `--dp-surface-bright` | `#D0D4E8` | `#FFFFFF` (white) |
| `--dp-on-surface` | `#0A0F1E` | `#111B35` (grey-900) |
| `--dp-outline` | `#B0B8D4` | `#94A0BE` (grey-400) |

### Tokens definidos mas nunca usados nos CSS modules
- `--dp-grid-margin: 120px` — definido, mas todo componente hardcoda `120px` diretamente
- `--dp-plum` e `--dp-sky-blue` — usados como primitivos soltos, sem cadeia semântica equivalente no DS

---

## Seção C — Falhas de acessibilidade (contraste WCAG AA)

### C1 — Dark mode (crítico)

| Cor texto | Cor fundo | Ratio | Status | Onde é usado |
|---|---|---|---|---|
| `--dp-plum` `#682972` | `--dp-surface` `#080E1E` | **1.97:1** | ❌ FALHA TOTAL | `HowWeBuildIt`: `.scoreFooterVal`, `.color-plum`, badge fase AI Score |
| `--dp-plum` `#682972` | `--dp-surface-container-low` `#111B35` | **1.74:1** | ❌ FALHA TOTAL | Mesmo em backgrounds de cards |
| `--dp-tertiary` `#7455D3` | `--dp-surface` `#080E1E` | **3.65:1** | ❌ Falha AA texto normal | `Proof` eyebrow, `HowWeBuildIt` fase Enrich badges/dots |
| `--dp-tertiary` `#7455D3` | `--dp-surface-container-low` `#111B35` | **3.23:1** | ❌ Falha AA texto normal | Idem em cards |
| `--dp-on-surface-variant` `#94A0BE` | `--dp-surface-bright` `#35436A` | **3.71:1** | ❌ Falha AA texto normal | Textos/labels em containers surface-bright |

### C2 — Light mode (site-wide, crítico)

**Nenhum dos tokens de acento (`--dp-primary`, `--dp-secondary`, `--dp-sky-blue`, `--dp-plum`) tem override para light mode.** Todos permanecem como cores mid-tone saturadas de dark mode quando renderizados em fundos claros:

| Cor texto | Fundo light | Ratio | Status | Onde é usado |
|---|---|---|---|---|
| `--dp-primary` `#26CBF5` | `#FFFFFF` | **1.92:1** | ❌ FALHA TOTAL | Todos os eyebrows, links, ícones no site |
| `--dp-primary` `#26CBF5` | `--dp-surface-container` light | **1.60:1** | ❌ FALHA TOTAL | Idem em cards |
| `--dp-secondary` `#EB7874` | `#FFFFFF` | **2.81:1** | ❌ FALHA TOTAL | `WhatWeDontDo` títulos de cards |
| `--dp-sky-blue` `#2AABC9` | `#FFFFFF` | **2.70:1** | ❌ FALHA TOTAL | `Problem` card "What we do instead" |

**O que passa em light mode:**
- `--dp-on-surface` `#0A0F1E` sobre branco → 19.09:1 ✅
- `--dp-on-surface-variant` light `#4A5280` sobre branco → 7.47:1 ✅
- `--dp-tertiary` `#7455D3` sobre branco → 5.27:1 ✅ (passa no light, falha no dark — confirma primitivo errado)
- `--dp-plum` `#682972` sobre branco → 9.77:1 ✅ (passa no light, falha no dark)

---

## Seção D — Tokens do DS definidos mas não referenciados no site

### D1 — Grupos inteiros ausentes

| Grupo DS | Tokens | Impacto |
|---|---|---|
| Action color system | `--dp-color-action-primary-*` (default/hover/focus/active/disabled) | Botões usam primitivos diretamente |
| Text color aliases | `--dp-color-text-primary/secondary/disabled/on-primary/inverse` | Ausente do site |
| Status | `--dp-color-error/on-error/error-container` e todos `status-info/success/warning` | Ausente |
| Support chains | `coral/sky-blue/plum` container chains (`--dp-color-support-*`) | Site usa primitivos soltos |
| Inverse surface | `--dp-color-inverse-surface/on/primary` | Ausente |

### D2 — Grupos semânticos com analógicos de nome diferente (DS nunca referenciado)

| Grupo DS | DS tokens | Gap no site |
|---|---|---|
| `--dp-sem-space-inset-*` (xs/sm/md/lg) | 4 tokens | Botões usam `28px`, `10px 14px` raw |
| `--dp-sem-space-gap-*` (xs/sm/md/lg/xl) | 5 tokens | Site usa `--dp-space-N` diretamente |
| `--dp-sem-space-section-*` (sm/md/lg) | 3 tokens | `padding-block: 96px` hardcoded |
| `--dp-sem-radius-chip/card-sm/pill` | 3 de 7 | Site cobre 5 de 7 radius tokens |
| `--dp-sem-shadow-button/tooltip/dropdown/sidebar/modal` | 5 de 7 | Apenas `card` e `card-hover` usados |
| `--dp-sem-tracking-display/body/ui/caps` | 4 tokens | Site usa valores raw (`0.15em`, `-0.03em`) |
| `--dp-sem-leading-display/ui/body/long` | 4 tokens | Site usa `1.1`, `1.6`, `1.65` raw |
| `--dp-sem-icon-size-*/color/stroke` | 7 tokens | Tamanhos de ícone completamente não-tokenizados |
| `--dp-sem-stroke-divider/border/focus` | 3 tokens | `border: 1px solid` hardcoded |

---

## Prioridades de correção

### 🔴 Imediato (bloqueadores de acessibilidade)

1. **`--dp-tertiary`: `#7455D3` → `#9880DE`** (indigo-300 per DS). Uma linha. Corrige contraste de 3.65:1 → 5.93:1.
2. **`--dp-plum` não deve ser usado como cor de texto em dark mode.** Ratio 1.97:1 é inacessível. Usar `#C869D1` (plum-300) para texto, ou remover usos como `color`.
3. **Overrides de light mode para `--dp-primary`, `--dp-secondary`, `--dp-sky-blue`** onde usados como foreground text. Toda a tipografia de acento é ilegível em light mode.

### 🟡 Próximo (consistência de tokens)

4. **`--dp-grid-margin` definido mas nunca usado.** Substituir todas as 8+ instâncias de `padding-inline: 120px` por `var(--dp-grid-margin)`.
5. **5 hex raw em `HeroDiagram.module.css`** → `color-mix(in srgb, var(--dp-primary) N%, transparent)`.
6. **`Proof.module.css`** tem 22 violações de pixels raw com tokens equivalentes diretos.
7. **`--dp-surface-bright`** valor errado (`#35436A` vs DS `#202D4F`) — corrigir no arquivo de tokens global.

### 🟢 Backlog (alinhamento estrutural)

8. **Renomear tokens do site** para seguir nomenclatura canônica do DS (`--dp-color-surface`, `--dp-sem-*`) e importar `globals.css` do DS.
9. **Implementar token chains de suporte** (coral/sky-blue/plum container chains) em vez de primitivos soltos.
10. **Tokenizar tipografia** (`letter-spacing`, `line-height`) com `--dp-sem-tracking-*` e `--dp-sem-leading-*`.
11. **Tokenizar icon sizing** com `--dp-sem-icon-size-*`.

---

## Resumo executivo

| Categoria | Qtd. | Severidade |
|---|---|---|
| Hex/px raw sem token equivalente | 60+ instâncias | Média |
| Valores de token incorretos (DS vs site) | 4 tokens | Alta |
| Falhas de contraste dark mode | 5 pares | **Crítico** |
| Falhas de contraste light mode (site-wide) | 4+ pares | **Crítico** |
| Grupos DS inteiros ausentes | 5 grupos | Média |
| Tokens semânticos DS nunca referenciados | 30+ tokens | Baixa |

O problema mais urgente é o **light mode**: todos os acentos (cyan, coral, sky-blue) ficam abaixo de 2:1 em fundos claros. O segundo problema mais urgente é `--dp-plum` em texto dark mode (1.97:1). Ambos requerem apenas overrides de variável CSS — não mudanças de layout.
