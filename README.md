# Personal Website

This is a simplified Next.js static site for a personal website with black and white minimalistic design.

## Pages

- Home
- About
- Blog (with Markdown posts)
- Resume (links to PDF)

## Getting Started

1. Install dependencies: `npm install`

2. Run dev server: `npm run dev`

3. Build: `npm run build`

## Adding Posts

Add Markdown files to `content/posts/` with frontmatter.

## Customization

- **Nav Links**: Edit `components/Header.tsx`
- **Colors**: Update `tailwind.config.js` (currently black and white)
- **Add Posts**: Create `.md` files in `content/posts/`
- **Resume PDF**: Place in `public/resume.pdf`
- **Social Links**: Update links in `components/Header.tsx`
