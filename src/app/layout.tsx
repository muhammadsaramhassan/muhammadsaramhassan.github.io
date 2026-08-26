import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import { publications, site } from "@/lib/site";

// CRITICAL: axes: ['opsz'] loads Fraunces as a full variable font so that
// font-variation-settings: "opsz" 144 works. Must NOT combine with a static
// weight array; variable font mode includes all weights automatically.
const fraunces = Fraunces({
	subsets: ["latin"],
	axes: ["opsz"], // enables optical sizing axis
	variable: "--font-fraunces",
	display: "swap",
});

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.name,
		template: `%s · ${site.name}`,
	},
	description: site.tagline,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	alternates: { canonical: "/" },
	openGraph: {
		siteName: site.name,
		locale: "en_US",
		type: "website",
		url: site.url,
		title: site.name,
		description: site.tagline,
		images: ["/og.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: site.name,
		description: site.tagline,
		images: ["/og.png"],
	},
	robots: { index: true, follow: true },
};

// Structured data: binds the name to the institution, the papers, and the
// profiles search engines already know about.
const personLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: site.name,
	alternateName: "Saram Hassan",
	url: site.url,
	email: `mailto:${site.email}`,
	jobTitle: "Computer Science Researcher",
	description: site.tagline,
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Lahore University of Management Sciences",
		alternateName: "LUMS",
	},
	homeLocation: { "@type": "Place", name: "Lahore, Pakistan" },
	knowsAbout: [
		"Mechanistic Interpretability",
		"AI Safety",
		"Agentic Systems",
		"Large Language Models",
		"Machine Learning Systems",
	],
	sameAs: [site.social.github, site.social.linkedin, site.social.scholar],
};

const publicationsLd = publications
	.filter((p) => p.url)
	.map((p) => ({
		"@context": "https://schema.org",
		"@type": "ScholarlyArticle",
		headline: p.title,
		name: p.title,
		author: p.authors.map((a) => ({ "@type": "Person", name: a.name })),
		datePublished: String(p.year),
		isPartOf: { "@type": "Periodical", name: p.venue },
		url: p.url,
	}));

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${fraunces.variable} ${lora.variable}`}>
			<body>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([personLd, ...publicationsLd]),
					}}
				/>
			</body>
		</html>
	);
}
