# Clavo — Next.js 16 Creative Agency Template

A production-ready creative / design-agency template built on **Next.js 16**
(App Router) + **React 19** + **TypeScript**. 37 pages, no CMS or backend required.

**Live demo:** https://clavo-peach.vercel.app

Full documentation is in `documentation/index.html` (in the download).

## Approach

The template reuses its **original hand-crafted stylesheet**
(`public/assets/css/styles.css` + `fonts.css`) and reproduces the original markup
and class names inside React components, so the design is pixel-faithful and there's
no utility-framework or build-time CSS pipeline to learn.

- **Styling** — the original `styles.css` is linked from the root layout. Brand
  colors, fonts, type scale and spacing are CSS custom properties in the `:root`
  block of that file; change them once to re-theme the whole site. All assets live
  under `public/assets/`. A small `checkout.css` adds layout to the (otherwise
  unstyled) commerce pages.
- **Interactivity** — `src/components/clavo-scripts.tsx` is a single client
  component handling the full-screen nav overlay, Pages mega-dropdown, FAQ
  accordion, pricing tabs, promo slider, localStorage cart, checkout and demo forms,
  scroll-reveal and hover states.
- **Layout** — `src/app/layout.tsx` provides the shared `<Header>`, `<Footer>`,
  cart drawer and the linked stylesheets; each route under `src/app/` renders its
  own content.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm run start    # serve the production build
npm run typecheck
```

## Editing content

- **Blog, works & services** — MDX content collections in `src/content/blog/*.mdx`,
  `src/content/works/*.mdx` and `src/content/services/*.mdx` (YAML frontmatter +
  Markdown body). Add or edit a file and the listing links + `[slug]` detail route
  pick it up automatically (loader in `src/lib/content.ts`).
- **Other pages** — edit text and `<img>` sources directly in
  `src/app/<route>/page.tsx`. Each page mirrors the original template markup.
- **Theme** — edit the CSS custom properties at the top of
  `public/assets/css/styles.css`.
- **Header / footer / cart** — shared, edited once in `src/components/layout/`.

## Structure

```
src/
  app/                 one folder per route (page.tsx)
    blog/[slug]        blog detail template (MDX)
    work/[slug]        project detail template (MDX)
    service/[slug]     service detail template (MDX)
    layout.tsx         shared shell: stylesheet links, Header, Footer, cart, scripts
    not-found.tsx      404 boundary
  components/
    layout/            header.tsx, footer.tsx, cart-modal.tsx
    ui/                mdx-body.tsx
    clavo-scripts.tsx  client interaction layer
  content/
    blog/*.mdx         6 blog posts
    works/*.mdx        9 projects
    services/*.mdx     5 services
  lib/content.ts       MDX collection loader
public/
  assets/css|fonts|images   original template assets
```
