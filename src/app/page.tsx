import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import { og, publications, inProgress, site } from "@/lib/site";

export const metadata: Metadata = {
	description:
		"Muhammad Saram Hassan is a computer scientist from LUMS working on the security of autonomous LLM agents. Published at ACM REP 2026 and Findings of EMNLP 2025.",
	alternates: { canonical: "/" },
	openGraph: og({
		title: site.name,
		description:
			"Security of autonomous LLM agents. SRI International, CMU CyLab, LUMS.",
	}),
};

const X = (props: { href: string; children: React.ReactNode }) => (
	<a href={props.href} target="_blank" rel="noopener noreferrer">
		{props.children}
	</a>
);

/** Dated updates, newest first. Keep to roughly the last two years. */
const news: { when: string; body: React.ReactNode }[] = [
	{
		when: "Jun 2026",
		body: (
			<>
				I presented my{" "}
				<X href="https://www.csl.sri.com/users/gehani/papers/REP-2026.Potemkin.pdf">
					paper
				</X>{" "}
				on whether a widely cited benchmark for conceptual understanding in LLMs
				actually reproduces at{" "}
				<X href="https://acm-rep.github.io/2026/">ACM REP 2026</X> in Delft.
			</>
		),
	},
	{
		when: "May 2026",
		body: <>Graduated from LUMS with a BS in Computer Science.</>,
	},
	{
		when: "Nov 2025",
		body: (
			<>
				My{" "}
				<X href="https://aclanthology.org/2025.findings-emnlp.589/">paper</X> on
				whether knowledge injected during fine-tuning is genuinely usable or
				only recitable appeared at{" "}
				<X href="https://2025.emnlp.org/">Findings of EMNLP 2025</X> in Miami.
			</>
		),
	},
	{
		when: "Aug 2025",
		body: (
			<>
				Started working with mentors at
				SRI International measuring models understanding of the concepts
				they can correctly define.
			</>
		),
	},	
	{
		when: "Jan 2025",
		body: (
			<>
				Joined the Security &amp; Privacy Lab at LUMS researching prompt injection attacks
				 against autonomous web agents and techniques for identifying agent-generated traffic in the wild.
			</>
		),
	},
];

export default function Home() {
	return (
		<>
			<main className="op">
				<header className="op-head">
					<Image
						className="op-photo"
						src="/profile.png"
						alt="Muhammad Saram Hassan"
						width={400}
						height={400}
						priority
					/>
					<h1 className="op-name">Muhammad Saram Hassan</h1>
					<p className="op-role">
						Research Assistant, Security &amp; Privacy Lab
						<br />
						LUMS &middot; Lahore, Pakistan
					</p>
					<p className="op-links">
						<a href={`mailto:${site.email}`}>Email</a>
						<i>·</i>
						<X href={site.social.scholar}>Google Scholar</X>
						<i>·</i>
						<X href={site.social.github}>GitHub</X>
						<i>·</i>
						<X href={site.social.linkedin}>LinkedIn</X>
						<i>·</i>
						<X href={site.cvPdf}>CV</X>
					</p>
				</header>

				<p>
					I am a computer science graduate from{" "}
					<X href="https://sbasse.lums.edu.pk/department-of-computer-science">
						LUMS
					</X>
					, where I am advised by Professor{" "}
					<X href="https://dblp.org/pid/59/3605.html">Fareed Zaffar</X>
					.
				</p>

				<p>
					My research focuses on the security of autonomous LLM agents. I study
					whether autonomous LLM agents can be trusted, develop methods to detect
					compromised or malicious agents, and build evaluation frameworks that
					test whether claims about LLM behavior actually hold up.
				</p>

				<p>
					I am currently working with Dr.{" "}
					<X href="https://www.sri.com/bios/ashish-gehani/">Ashish Gehani</X>
					, Dr.{" "}
					<X href="https://ramneetk.github.io/Website/">Ramneet Kaur</X>{" "}
					and{" "}
					<X href="https://www.sri.com/people/eric-yeh/">Eric Yeh</X>{" "}
					at SRI International, and with Professor{" "}
					<X href="https://nyuad.nyu.edu/en/academics/divisions/science/faculty/yasir-zaki.html">
						Yasir Zaki
					</X>{" "}
					at NYU Abu Dhabi.
				</p>

				<p className="op-note">I am applying to graduate programs this cycle.</p>

				<h2>News</h2>
				<dl className="news">
					{news.map((n) => (
						<div className="news-row" key={n.when}>
							<dt>{n.when}</dt>
							<dd>{n.body}</dd>
						</div>
					))}
				</dl>

				<h2>Publications</h2>
				<ol className="plist">
					{publications.map((p) => (
						<li key={p.title}>
							<span className="p-title">{p.title}</span>
							<span className="p-auth">
								{p.authors.map((a, i) => (
									<span key={a.name}>
										{a.me ? <b>{a.name}</b> : a.name}
										{i < p.authors.length - 1 ? ", " : ""}
									</span>
								))}
							</span>
							<span className="p-venue">
								{p.venue}, {p.year}
							</span>
							{p.links && (
								<span className="p-links">
									{p.links.map((l, i) => (
										<span key={l.label}>
											{i > 0 && <i>·</i>}
											<X href={l.href}>{l.label}</X>
										</span>
									))}
								</span>
							)}
						</li>
					))}
				</ol>

				<h3 className="plist-sub">In submission and in preparation</h3>
				<ol className="plist">
					{inProgress.map((p) => (
						<li key={p.title}>
							<span className="p-title">{p.title}</span>
							<span className="p-venue">{p.status}</span>
						</li>
					))}
				</ol>

				<h2>Elsewhere</h2>
				<p>
					Away from the desk I am usually up a mountain with a telescope. There
					are notes on that, and on the books I keep going back to,{" "}
					<Link href="/other">here</Link>.
				</p>

			</main>
			<SiteFooter />
		</>
	);
}
