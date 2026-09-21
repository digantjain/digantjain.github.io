# Villo portfolio rebuild

A responsive React/Vite implementation of the supplied Villo Framer reference, including the home page, all primary pages, project and article detail views, navigation, forms, responsive layouts, motion, and the sticky footer reveal.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run verify
npm run preview
```

The deployable output is generated in `dist/`. The included Netlify and Vercel rewrite rules preserve client-side routes such as `/projects/logo-design` and `/writing/abstract-concept-in-design`.

## Personalize later

Most editable content is grouped at the top of `src/App.jsx`: navigation, projects, experience, education, posts, tools, and skills. Global styling and responsive breakpoints are in `src/styles.css`; image and font assets are in `public/`.
