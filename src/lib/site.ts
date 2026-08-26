import type { Metadata } from "next";

export const site = {
	name: "Muhammad Saram Hassan",
	url: "https://muhammadsaramhassan.github.io",
	email: "saram.hassan1412@gmail.com",
	tagline:
		"Computer scientist, LUMS '26. I work on the security of autonomous LLM agents, and the interpretability needed to tell when one has been compromised.",
	cvPdf: "/Muhammad_Saram_Hassan_s_Resume.pdf",
	social: {
		github: "https://github.com/muhammadsaramhassan",
		linkedin: "https://www.linkedin.com/in/muhammadsaramhassan/",
		scholar: "https://scholar.google.com/scholar?q=Muhammad+Saram+Hassan",
	},
} as const;

/**
 * Next shallow-merges metadata: a page's `openGraph` replaces the layout's
 * entirely. This rebuilds the shared fields so nothing is silently dropped.
 */
export function og({
	title,
	description,
	path = "",
}: {
	title: string;
	description: string;
	path?: string;
}): NonNullable<Metadata["openGraph"]> {
	return {
		siteName: site.name,
		locale: "en_US",
		type: "website",
		url: `${site.url}${path}`,
		title,
		description,
		images: ["/og.png"],
	};
}

export interface Publication {
	title: string;
	/** Author list; `me: true` marks the entry to bold. */
	authors: { name: string; me?: boolean }[];
	venue: string;
	year: number;
	status?: string;
	links?: { label: string; href: string }[];
	/** Canonical URL for structured data, if published. */
	url?: string;
}

export const publications: Publication[] = [
	{
		title:
			"Understanding or Imitation? Auditing Conceptual Understanding and Reasoning in Large Language Models",
		authors: [
			{ name: "M. S. Hassan", me: true },
			{ name: "E. Jan" },
			{ name: "R. Kaur" },
			{ name: "E. Yeh" },
			{ name: "F. Zaffar" },
			{ name: "A. Gehani" },
		],
		venue: "ACM Conference on Reproducibility and Replicability (REP)",
		year: 2026,
		status: "first author · DARPA HR0011-24-9-0424",
		url: "https://www.csl.sri.com/users/gehani/papers/REP-2026.Potemkin.pdf",
		links: [
			{
				label: "pdf",
				href: "https://www.csl.sri.com/users/gehani/papers/REP-2026.Potemkin.pdf",
			},
			{
				label: "code",
				href: "https://github.com/SRI-CSL/PotemkinBenchmarkReproducibility",
			},
		],
	},
	{
		title:
			"Data Doping or True Intelligence? Evaluating the Transferability of Injected Knowledge in LLMs",
		authors: [
			{ name: "E. Jan" },
			{ name: "M. Ali" },
			{ name: "M. S. Hassan", me: true },
			{ name: "Y. Zaki" },
			{ name: "M. F. Zaffar" },
		],
		venue: "Findings of EMNLP",
		year: 2025,
		url: "https://aclanthology.org/2025.findings-emnlp.589/",
		links: [
			{
				label: "pdf",
				href: "https://aclanthology.org/2025.findings-emnlp.589.pdf",
			},
			{
				label: "acl anthology",
				href: "https://aclanthology.org/2025.findings-emnlp.589/",
			},
			{ label: "arxiv", href: "https://arxiv.org/abs/2505.17140" },
		],
	},
];

/**
 * Unpublished work. Statuses here are deliberately conservative: nothing is
 * described as "under submission" until it has actually been submitted.
 * Flip these on the submission dates, not before.
 */
export const inProgress: Publication[] = [
	{
		title:
			"Compromised by Context: Systematizing Prompt Injection Against Autonomous LLM Agents",
		authors: [{ name: "M. S. Hassan", me: true }, { name: "et al." }],
		venue: "Systematization of Knowledge",
		year: 2027,
		status: "in preparation · targeting IEEE S&P 2027",
	},
	{
		title:
			"Escalate, Don't Improvise: Comparability in Autonomous Measurement Fleets (AmiClaw)",
		authors: [{ name: "M. S. Hassan", me: true }, { name: "et al." }],
		venue: "Position paper with prototype",
		year: 2027,
		status: "in preparation · targeting HotMobile 2027",
	},
	{
		title: "SENTRY: Adversarial Agent Detection in Open Multi-Agent Systems",
		authors: [{ name: "M. S. Hassan", me: true }],
		venue: "Manuscript",
		year: 2027,
		status: "in progress",
	},
];
