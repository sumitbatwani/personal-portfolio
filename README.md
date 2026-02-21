# Sumit Kumar — Personal Portfolio

A personal portfolio and blog built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and MDX. Features a blog, projects showcase, RSS feed, sitemap, and SEO optimizations.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Content**: MDX via `@astrojs/mdx`
- **RSS**: `@astrojs/rss`
- **Sitemap**: `@astrojs/sitemap`

## Project Structure

```text
/
├── public/             # Static assets (favicon, OG images, etc.)
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # MDX blog posts and content collections
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes (index, about, blog, projects)
│   └── styles/         # Global styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

```sh
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Pages

| Route | Description |
| :---- | :---------- |
| `/` | Home / landing page |
| `/about` | Work history and background |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Individual blog post |
| `/projects` | Projects showcase |
| `/rss.xml` | RSS feed |
| `/sitemap-index.xml` | Sitemap |

## Writing Blog Posts

Blog posts live in `src/content/blog/` as `.mdx` files. Each post requires frontmatter:

```mdx
---
title: "Your Post Title"
description: "A short description"
pubDate: 2026-02-21
tags: ["tag1", "tag2"]
---

Post content here...
```

## License

MIT
