import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mapped exactly to CSS variables — use these instead of Tailwind defaults
        bg:       'var(--bg)',
        'bg-warm':'var(--bg-warm)',
        'bg-deep':'var(--bg-deep)',
        surface:  'var(--surface)',
        ink:      'var(--ink)',
        'ink-mid':'var(--ink-mid)',
        'ink-dim':'var(--ink-dim)',
        maroon:   'var(--maroon)',
        'maroon-d':'var(--maroon-d)',
        gold:     'var(--gold)',
        'gold-l': 'var(--gold-l)',
        rule:     'var(--rule)',
        'rule-2': 'var(--rule-2)',
      },
      fontFamily: {
        serif:  ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono:   ['var(--font-jetbrains)', 'monospace'],
        sans:   ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1080px',
      },
    },
  },
  plugins: [],
}

export default config
