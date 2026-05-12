import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, Inter_Tight } from 'next/font/google'
import './globals.css'

// CRITICAL: axes: ['opsz'] loads Fraunces as a full variable font so that
// font-variation-settings: "opsz" 144 works. Must NOT combine with a static
// weight array — variable font mode includes all weights automatically.
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],  // enables optical sizing axis
  variable: '--font-fraunces',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Saram Hassan',
    template: '%s — Muhammad Saram Hassan',
  },
  description:
    'Muhammad Saram Hassan is a computer scientist at LUMS working on agentic systems, mechanistic interpretability, and AI safety. Research published at EMNLP Findings 2025. Based in Lahore, Pakistan.',
  keywords: [
    'Muhammad Saram Hassan',
    'Saram Hassan',
    'LUMS computer science',
    'mechanistic interpretability',
    'AI safety',
    'agentic systems',
    'LLM research',
    'EMNLP 2025',
    'SRI International',
    'CMU CyLab',
  ],
  authors: [{ name: 'Muhammad Saram Hassan' }],
  openGraph: {
    siteName: 'Muhammad Saram Hassan',
    locale: 'en_US',
    type: 'website',
    title: 'Muhammad Saram Hassan',
    description:
      'Computer scientist at LUMS. Research on agentic systems, interpretability, and AI safety. EMNLP Findings 2025.',
  },
  twitter: {
    card: 'summary',
    title: 'Muhammad Saram Hassan',
    description: 'Computer scientist · LUMS · AI safety & interpretability research',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
