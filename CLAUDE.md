# CLAUDE.md — Digital Pampas Website

## O que é este projeto

Site de conversão B2B da Digital Pampas, agência de outbound especializada em Clay. É um SPA em React + Vite + TypeScript, pensado para leads frios vindos de outreach — o objetivo é convencer o visitante de que a DP entende o problema dele antes que ele precise perguntar.

A homepage é composta exclusivamente por seções vindas do Design System (`@steschoch/digital-pampas-ds`); o site não tem estilos de layout próprios — todos os tokens e componentes visuais vêm do DS. Páginas secundárias (blog, case studies) têm lógica própria em `src/pages/`, mas também consomem o DS para layout e tipografia.

---

## Estrutura de pastas

```
src/
  App.tsx              — roteamento (react-router-dom v7)
  main.tsx             — entry point
  styles/
    globals.css        — reset + base styles; NUNCA usa hex direto, só var(--dp-*)
    fonts.css          — carregamento das fontes
    index.css          — importa globals + fonts
  pages/
    BlogListPage/      — listagem de posts
    BlogPostPage/      — post individual
    CaseStudiesPage/   — grid de cases
    CaseStudyPage/     — case individual
    PreviewPage/       — sandbox interno (/preview/1, /preview/2, /preview/3)
  data/
    caseStudies.ts     — conteúdo dos cases (editar aqui para add/alterar cases)
    blogPosts.ts       — conteúdo dos posts

public/
  images/cases/        — imagens dos case studies (jpg)
  logos/               — logos de ferramentas (Clay, Apollo, Instantly…)
  logo-nav.png / logo-nav-light.png / logo-footer.png / logo-footer-light.png

docs/                  — planos de trabalho datados (local only, .gitignore)
  auditoria-site-design-system-2026-06-28.md
  plano-light-mode.md
  plano-mobile-ipad.md
```

A pasta `animação hero figma make/` é um protótipo Figma Make local — não é código do produto e não vai para o GitHub.

---

## Comandos

```bash
npm run dev        # inicia dev server (localhost:5173)
npm run build      # tsc + vite build → dist/
npm run preview    # serve o dist/ localmente
```

Deploy é automático via Vercel ao fazer push para `main` (GitHub: `steschoch/digital-pampas-site`).

O DS é instalado via `npm ci` no build da Vercel; autenticação via variável `NPM_TOKEN` (GitHub PAT com `read:packages`).

---

## Regras e convenções

**Design System é a única fonte de verdade visual.**
- Nunca escrever hex direto no CSS do site. Sempre `var(--dp-*)`.
- Precisa de um novo token visual (cor, espaçamento, tipografia)? O token vai primeiro ao DS (`ds-digital-pampas/src/globals/globals.css`), depois é consumido aqui.
- Antes de qualquer decisão visual, consultar o DS. Figma do DS: https://www.figma.com/design/FKlBIIIs3aUuwrgWmnCrdR/DS-Digital-Pampas

**Componentes da homepage vêm do DS, não do site.**
- `Nav`, `Hero`, `Problem`, `WhatWeDontDo`, `HowWeBuildIt`, `Proof`, `WaysToWork`, `FinalCTA`, `Footer`, `PageLayout` — todos importados de `@steschoch/digital-pampas-ds`.
- Para mudar comportamento ou visual dessas seções, editar o DS e republicar, não criar override aqui.

**CSS Modules para componentes de página.**
- Cada página tem seu `NomeDaPagina.module.css` colocalizado.

**Conteúdo é dado estático em `src/data/`.**
- Adicionar/editar case studies: `src/data/caseStudies.ts`.
- Adicionar/editar posts: `src/data/blogPosts.ts`.
- Imagens de cases: `public/images/cases/` (jpg).

**Planos de trabalho ficam em `docs/`.**
- Nome de arquivo com data: `plano-nome-YYYY-MM-DD.md`.
- A pasta `docs/` está no `.gitignore` — é local, não vai para o GitHub.

---

## Estado atual (2026-07-21)

**Produção:** https://digital-pampas-site.vercel.app/ (ou URL Vercel do projeto)
**GitHub:** https://github.com/steschoch/digital-pampas-site

**Case studies redesenhados (APROVADO pela Ste, commitado e deployado em 2026-07-22, commit 4dc5f1b):**
Também no mesmo commit: blog post com hero de imagem full-bleed + scrim escuro com blur (imagens em `public/images/blog/<slug>.jpg`), corpo do post alinhado ao título, CTA do case como seção full-bleed, logos das ferramentas na Stack (`public/logos/`, favicons baixados), light mode acessível (acentos 300→600 via `[data-color-scheme='light']`), TL;DR colorido (Problem = coral/salmão).
Detalhes do que foi feito:
- Ste aprovou o card "Opção 2" (foto do setor com tint + título + métricas + View case). Implementado na página real `/case-studies` com filtro por setor (All, Cybersecurity, Healthcare, Data & AI, Agencies & Talent) e cor fixa por setor: cybersecurity=cyan, healthcare=plum, data-ai=coral, agencies-talent=sky (mapa `SECTOR_HUE` em `CaseStudiesPage.tsx`).
- `src/data/caseStudies.ts` reescrito FIEL ao site atual do cliente (digitalpampas.com/case-studies): 8 cases com tldr, constraints, layers, callout, timeline, tabelas de resultados, quotes, fit e stack. Números conferidos com as páginas originais.
- `CaseStudyPage` remontada: hero com métricas, TL;DR em 4 cards, constraints, camadas numeradas, callout, timeline (cyber), resultados (destaques + tabela), quotes, fit, stack, CTA, more builds.
- Decisões a validar com a Ste: case SAP agrupado no filtro Data & AI (no site do cliente ele só aparece em All); Tremmun reclassificado de "B2B SaaS" para "Tech Talent" (fidelidade ao cliente).
- Fotos dos cards: banco do Magnific (curadoria feita); a do healthcare/clínica é upload da Ste (recortada). Backup das fotos antigas no scratchpad da sessão (efêmero).
- `/preview/cards/1..3` mantida como página de comparação das 3 opções.
- Dev server: usar porta 5180 (`npm run dev -- --port 5180 --strictPort`; 5173 costuma estar ocupada por outro projeto).

**Em aberto (ver docs/):**
- `plano-mobile-ipad.md` — scroll horizontal indesejado no mobile/iPad; `HowWeBuildIt` precisa virar acordeão vertical em ≤1024px; `metricsStrip` precisa de scroll horizontal suave no mobile. **Não iniciado.**
- `plano-light-mode.md` — light mode estava visualmente plano; plano define tokens semânticos novos no DS e alternância de superfícies por seção. **Não iniciado.**

Esses dois planos têm os passos detalhados com arquivos e trechos de CSS prontos — ler antes de implementar.
