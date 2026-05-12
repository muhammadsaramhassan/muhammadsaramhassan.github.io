import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import FooterColophon from "@/components/FooterColophon";
import BlogIndexClient from "@/components/BlogIndexClient";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
	title: "Writing",
	description:
		"Short essays on interpretability, ML systems, and the scaffolding around them.",
};

export default function WritingPage() {
	const posts = getAllPosts();
	const featured = posts.find((p) => p.featured) ?? posts[0] ?? null;
	const tagMap = getAllTags(posts);
	const tagCounts = Array.from(tagMap.entries()).sort((a, b) => b[1] - a[1]);

	const thisYear = new Date().getFullYear();
	const thisYearCount = posts.filter((p) => p.year === thisYear).length;
	const avgWords = 1800; // static placeholder until we compute from content

	return (
		<>
			<Masthead />

			<main>
				{/* ─── VOLUME PLATE ─── */}
				<section className="vol">
					<div className="container">
						<div className="vol-kicker">
							<Link href="/">← back to portfolio</Link>
							<span className="sep">·</span>
							<span>Section § III · Notes from my workbench</span>
							<span className="sep">·</span>
							<span>2024—2026</span>
						</div>
						<h1 className="vol-title">
							Notes from my <em>workbench</em>
							<span className="dot">.</span>
						</h1>
						<p className="vol-sub">
							Short essays on interpretability, ML systems, and the scaffolding
							around them. Written slowly, revised often; filed here without
							much of a plan.
						</p>
						<dl className="vol-stats">
							<div>
								<dt>Total pieces</dt>
								<dd>
									<em>{posts.length}</em>
								</dd>
							</div>
							<div>
								<dt>This year</dt>
								<dd>
									<span className="gold">{thisYearCount}</span>
								</dd>
							</div>
							<div>
								<dt>Avg. length</dt>
								<dd>{avgWords.toLocaleString()}w</dd>
							</div>
							<div>
								<dt>Reply rate</dt>
								<dd>48h</dd>
							</div>
						</dl>
					</div>
				</section>

				{/* Filters + grid — client component for interactivity */}
				<BlogIndexClient
					featured={featured}
					posts={posts}
					tagCounts={tagCounts}
					totalCount={posts.length}
				/>
			</main>

			<FooterColophon variant="blog" />
		</>
	);
}
