"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import ArticleCard from "./ArticleCard";
import ReadDots from "./ReadDots";

// Map tag string → CSS variant class
function tagVariant(tag: string): string {
	const map: Record<string, string> = {
		Interpretability: "interp",
		"ML Systems": "systems",
		"AI Safety": "safety",
		"Reading notes": "notes",
		Tools: "tools",
	};
	return map[tag] ?? "default";
}

interface BlogIndexClientProps {
	featured: PostMeta | null;
	posts: PostMeta[];
	tagCounts: [string, number][];
	totalCount: number;
}

export default function BlogIndexClient({
	featured,
	posts,
	tagCounts,
	totalCount,
}: BlogIndexClientProps) {
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const displayed = activeTag
		? posts.filter((p) => p.tags.includes(activeTag))
		: posts;

	// Group by year
	const byYear = new Map<number, PostMeta[]>();
	for (const p of displayed) {
		const list = byYear.get(p.year) ?? [];
		list.push(p);
		byYear.set(p.year, list);
	}
	const years = Array.from(byYear.keys()).sort((a, b) => b - a);

	const thisYear = new Date().getFullYear();
	const thisYearCount = posts.filter((p) => p.year === thisYear).length;

	return (
		<>
			{/* ─── FILTERS ─── */}
			<div className="container">
				<div className="filters">
					<span className="lbl">filter</span>
					<button
						className={`chip${activeTag === null ? " active" : ""}`}
						onClick={() => setActiveTag(null)}>
						All <span className="n">{totalCount}</span>
					</button>
					{tagCounts.map(([tag, count]) => (
						<button
							key={tag}
							className={`chip${activeTag === tag ? " active" : ""}`}
							onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
							{tag} <span className="n">{count}</span>
						</button>
					))}
					<button className="chip active g" style={{ marginLeft: "auto" }}>
						Recent first ↓
					</button>
				</div>
			</div>

			{/* ─── MAIN GRID ─── */}
			<div className="container">
				<div className="blog-grid">
					{/* POSTS COLUMN */}
					<div className="posts">
						{/* FEATURED */}
						{featured && !activeTag && (
							<article className="feat">
								<div className="feat-img" aria-hidden="true">
									<span className="mark">φ</span>
									<span className="mark-label">
										ESSAY · {featured.displayDate.split(" ")[0]} {featured.year}
									</span>
								</div>
								<div className="feat-body">
									<div className="feat-kicker">★ featured · this week</div>
									<h2 className="feat-title">
										<Link href={`/writing/${featured.slug}`}>
											{featured.title}
										</Link>
									</h2>
									{featured.dek && <p className="feat-dek">{featured.dek}</p>}
									<Link
										href={`/writing/${featured.slug}`}
										className="feat-readon">
										read the essay →
									</Link>
									<div className="feat-meta">
										<span>{featured.displayDateFull}</span>
										<span className="dot">●</span>
										<span>{featured.readTime} MIN READ</span>
										{featured.tags[0] && (
											<>
												<span className="dot">●</span>
												<span className="tag">
													{featured.tags[0].toUpperCase()}
												</span>
											</>
										)}
									</div>
								</div>
							</article>
						)}

						{/* YEAR ARCHIVES */}
						{years.map((year) => {
							const yearPosts = byYear.get(year)!;
							return (
								<section key={year} className="year">
									<div className="year-label">
										{year}
										<span className="count">
											{yearPosts.length} piece
											{yearPosts.length !== 1 ? "s" : ""}
										</span>
									</div>
									<ul className="posts-list">
										{yearPosts.map((p) => (
											<ArticleCard
												key={p.slug}
												slug={p.slug}
												title={p.title}
												dek={p.dek}
												date={p.displayDate}
												readTime={p.readTime}
												tags={p.tags.map((t) => ({
													label: t,
													variant: tagVariant(t) as any,
												}))}
												pinned={p.pinned}
											/>
										))}
									</ul>
								</section>
							);
						})}
					</div>

					{/* SIDE RAIL */}
					<aside className="rail">
						<div className="rail-box">
							<h4>About this page</h4>
							<p>
								A slow writing blog, updated <em>roughly monthly</em>. Pieces
								are re-edited sometimes; if a post feels different on your
								second read, that&apos;s probably why.
							</p>
							<p
								style={{
									fontStyle: "normal",
									fontSize: "12px",
									fontFamily: "var(--font-jetbrains), monospace",
									color: "var(--ink-dim)",
									letterSpacing: "0.06em",
								}}></p>
						</div>

						{/* <div className="rail-box">
							<h4>Now reading</h4>
							<ul className="queue">
								<li>
									<em>The Nature of Statistical Learning Theory</em>
									<span className="by">
										Vapnik · <em>reread</em>
									</span>
								</li>
								<li>
									Towards Monosemanticity
									<span className="by">Anthropic · ongoing</span>
								</li>
								<li>
									The Idea of the Brain
									<span className="by">Matthew Cobb</span>
								</li>
								<li>
									<em>Gödel, Escher, Bach</em>
									<span className="by">Hofstadter · annual reread</span>
								</li>
							</ul>
						</div> */}

						{/* <div className="rail-glyph">✦</div> */}

						<div className="rail-box">
							<h4>Tag cloud</h4>
							<p
								style={{
									fontFamily: "var(--font-fraunces), serif",
									fontSize: "14px",
									lineHeight: "1.75",
									fontStyle: "normal",
									color: "var(--ink)",
								}}>
								{tagCounts.map(([tag], i) => (
									<span key={tag}>
										<button
											onClick={() =>
												setActiveTag(activeTag === tag ? null : tag)
											}
											style={{
												background: "none",
												border: "none",
												cursor: "pointer",
												padding: 0,
												color: activeTag === tag ? "var(--maroon)" : "inherit",
												fontFamily: "inherit",
												fontSize: `${12 + (tagCounts.length - 1 - i) * 1.5}px`,
												fontStyle: i % 3 === 0 ? "italic" : "normal",
											}}>
											{tag.toLowerCase()}
										</button>
										{i < tagCounts.length - 1 && " · "}
									</span>
								))}
							</p>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
}
