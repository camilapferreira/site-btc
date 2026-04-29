# BTC — Business Training Company

Site institucional da BTC construído com **React 18 + Vite + Tailwind CSS**, com 3 páginas principais:

- `/` — Home
- `/sobre-a-btc` — Sobre a BTC
- `/gbp` — General Business Program

## Stack

- React 18 + React Router DOM 6
- Vite 5 (dev/build)
- Tailwind CSS 3
- Tipografia: Inter + Fraunces (Google Fonts)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # serve o build localmente
```

## Estrutura

```
site-btc/
├─ index.html              # entry do Vite
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.jsx             # bootstrap
│  ├─ App.jsx              # rotas
│  ├─ index.css            # Tailwind + estilos base
│  ├─ components/
│  │  ├─ Layout.jsx        # shell com Header + Footer
│  │  ├─ Header.jsx        # navegação
│  │  ├─ Footer.jsx
│  │  ├─ Icon.jsx          # ícones SVG inline
│  │  └─ SectionEyebrow.jsx
│  └─ pages/
│     ├─ Home.jsx
│     ├─ Sobre.jsx
│     ├─ Gbp.jsx
│     └─ NotFound.jsx
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ _legacy/                # versão estática (HTML puro) preservada
```

## Design system

Tokens definidos em `tailwind.config.js`:

- **ink** (navy/preto) — fundo escuro premium
- **gold** (amber) — accent de destaque e CTAs
- **sand** — neutros quentes para seções claras
- Fontes: `font-display` (Fraunces serif) para títulos, `font-sans` (Inter) para corpo

## Observações

- Imagens usadas são placeholders do Unsplash/pravatar — substitua pelos assets oficiais da BTC.
- O formulário de inscrição está com handler local (apenas exibe confirmação). Plugue seu CRM/email service quando for para produção.
- Para deploy em SPA (Vercel/Netlify), garanta o fallback `index.html` para todas as rotas.
