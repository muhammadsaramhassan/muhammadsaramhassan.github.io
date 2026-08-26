# muhammadsaramhassan.github.io

Personal site of Muhammad Saram Hassan, a computer science graduate from LUMS
working on the security of autonomous LLM agents.

Next.js static export, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev
```

## Where things live

| What | Where |
| --- | --- |
| Name, email, links, publications | `src/lib/site.ts` |
| Front page (bio, news, publications) | `src/app/page.tsx` |
| Mountains, books, quotes | `src/app/other/page.tsx` |
| Colours and type scale | `:root` in `src/app/globals.css` |
| Social preview image | `src/app/opengraph-image.tsx` |

`/research`, `/cv`, `/writing` and `/projects` are placeholders rendered by
`src/components/ComingSoon.tsx`.
