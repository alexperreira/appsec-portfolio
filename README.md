# Alex Portfolio (Next.js)

A small, evidence-first portfolio for AppSec + SWE. Content lives in `content/` as MDX.

## Quick start

```bash
# 1) Create & init project
pnpm create next-app alex-portfolio --typescript --eslint --app --src-dir=false --import-alias "@/*"
cd alex-portfolio

# 2) Replace files with the ones in this repo skeleton
# (copy everything above into your project directory)

# 3) Install deps (Tailwind v4)
pnpm add next react react-dom gray-matter next-mdx-remote remark-gfm rehype-slug rehype-autolink-headings
pnpm add -D tailwindcss @tailwindcss/typography postcss autoprefixer typescript @types/node @types/react @types/react-dom

# 4) Run
```
