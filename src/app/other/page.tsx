import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { og } from "@/lib/site";

export const metadata: Metadata = {
	title: "Other",
	description:
		"Astrophotography from the Karakoram and Himalaya, books worth rereading, and a few lines I keep coming back to.",
	alternates: { canonical: "/other" },
	openGraph: og({
		title: "Other · Muhammad Saram Hassan",
		description: "Mountains, telescopes, books, and a few lines worth keeping.",
		path: "/other",
	}),
};

const sessions = [
	{
		place: "Rakaposhi Base Camp",
		note: "The Milky Way, properly, for the first time.",
		year: "2025",
	},
	{ place: "Sharan Forest", note: "First deep-sky stack.", year: "2023" },
	{
		place: "Arang Kel",
		note: "First time under Bortle 1 skies.",
		year: "2022",
	},
];

const books = [
	{ title: "White Nights", author: "Fyodor Dostoevsky", year: "2025" },
	{
		title: "The Ministry of Utmost Happiness",
		author: "Arundhati Roy",
		year: "2022",
	},
	{ title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: "2020" },
	{ title: "The Forty Rules of Love", author: "Elif Shafak", year: "2019" },
];

export default function OtherPage() {
	return (
		<>
			<a href="#main" className="skip-link">
				Skip to content
			</a>
			<Masthead />

			<main id="main" className="wrap pad-bottom">
				<div className="page-head">
					<h1>Other</h1>
					<p>
						The parts that aren&apos;t research: mountains, telescopes, and
						things worth rereading.
					</p>
				</div>

				<section className="section" aria-labelledby="mountains">
					<div className="section-head">
						<h2 id="mountains">Mountains &amp; telescopes</h2>
					</div>
					<div className="prose-narrow">
						<p>
							I helped revamp the astronomy observatory at LUMS, and when the
							papers are off the desk I&apos;m usually somewhere above 3,000m
							with a camera. I keep a log of astrophotography sessions from the
							Karakoram and Himalaya, usually paired with notes scribbled at
							altitude. I also launch rockets, occasionally a little too
							confidently, into the local airspace.
						</p>
					</div>
					<ul className="rows" style={{ marginTop: "22px" }}>
						{sessions.map((s) => (
							<li key={s.place}>
								<div className="row-link">
									<span className="row-main">
										{s.place}
										<span className="row-sub">{s.note}</span>
									</span>
									<span className="row-aside">{s.year}</span>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section className="section" aria-labelledby="books">
					<div className="section-head">
						<h2 id="books">Books worth reading</h2>
					</div>
					<ul className="rows">
						{books.map((b) => (
							<li key={b.title}>
								<div className="row-link">
									<span className="row-main">
										{b.title}
										<span className="row-sub">{b.author}</span>
									</span>
									<span className="row-aside">{b.year}</span>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section className="section" aria-labelledby="quotes">
					<div className="section-head">
						<h2 id="quotes">Lines I keep</h2>
					</div>
					<ol className="quotes">
						<li>
							<blockquote>
								<p>
									I found God through the dissolving of my resolves and the
									breaking of my intentions.
								</p>
								<cite>Imam Ali (AS)</cite>
							</blockquote>
						</li>
						<li>
							<blockquote>
								<p>
									We only truly live by following the imagination of our
									nine-year-old self.
								</p>
								<cite>Aradshar Chaddar (2004–2025), a friend</cite>
							</blockquote>
						</li>
						<li>
							<blockquote>
								<p>
									But only in their dreams can men be truly free. &lsquo;Twas
									always thus, and always thus will be.
								</p>
								<cite>John Keating, Dead Poets Society</cite>
							</blockquote>
						</li>
					</ol>
				</section>
			</main>

			<SiteFooter />
		</>
	);
}
