import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Masthead from "@/components/Masthead";
import FooterColophon from "@/components/FooterColophon";
import { getPost, getAllSlugs } from "@/lib/posts";

interface Params {
	slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
	return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return {};
	return {
		title: post.title,
		description: post.dek,
	};
}

// MDX component overrides — maps HTML elements to styled equivalents
const components = {
	// Blockquote rendered as pull-quote
	blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
		<blockquote className="lead-pull" {...props} />
	),
};

// Dots indicator: filled based on read time
function ReadDots({ minutes }: { minutes: number }) {
	const max = 5;
	const filled = Math.min(Math.ceil(minutes / 3), max);
	return (
		<span className="read-dots">
			{Array.from({ length: max }, (_, i) => (
				<span key={i} className={i < filled ? "on" : ""} />
			))}
		</span>
	);
}

export default async function PostPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();

	return (
		<>
			<Masthead />

			<main>
				<article>
					{/* ─── POST HEADER ─── */}
					<div className="prose-post">
						{/* Kicker / breadcrumb */}
						<div
							style={{
								fontFamily: "var(--font-jetbrains), monospace",
								fontSize: "10.5px",
								color: "var(--ink-dim)",
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								marginBottom: "32px",
								display: "flex",
								gap: "14px",
								alignItems: "center",
								flexWrap: "wrap",
							}}>
							<Link
								href="/writing"
								style={{
									color: "var(--ink-mid)",
									borderBottom: "1px solid var(--rule)",
									paddingBottom: "2px",
								}}>
								← writing
							</Link>
							<span style={{ color: "var(--ink-dim)" }}>·</span>
							<span>{post.displayDateFull}</span>
							{post.tags[0] && (
								<>
									<span style={{ color: "var(--gold)" }}>·</span>
									<span>{post.tags[0].toUpperCase()}</span>
								</>
							)}
						</div>

						<h1
							style={{
								fontFamily: "var(--font-fraunces), serif",
								fontWeight: 400,
								fontSize: "clamp(38px, 6vw, 64px)",
								lineHeight: 1.05,
								letterSpacing: "-0.03em",
								margin: "0 0 20px",
								color: "var(--ink)",
								fontVariationSettings: '"opsz" 144',
							}}>
							{post.title}
						</h1>

						{post.dek && (
							<p
								style={{
									fontFamily: "var(--font-fraunces), serif",
									fontStyle: "italic",
									fontSize: "20px",
									lineHeight: 1.5,
									color: "var(--ink-mid)",
									margin: "0 0 32px",
									textWrap: "pretty",
								}}>
								{post.dek}
							</p>
						)}

						{/* Byline */}
						<div className="post-byline">
							<span>{post.displayDateFull}</span>
							<span className="dot">●</span>
							<ReadDots minutes={post.readTime} />
							<span>{post.readTime} MIN READ</span>
							{post.tags.map((t) => (
								<span key={t} className="tag">
									{t.toUpperCase()}
								</span>
							))}
						</div>

						{/* ─── PROSE BODY ─── */}
						<div className="prose-post">
							<MDXRemote source={post.content} components={components} />
						</div>

						{/* ─── POST FOOTER ─── */}
						<div
							style={{
								borderTop: "1px solid var(--rule)",
								marginTop: "64px",
								paddingTop: "32px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								flexWrap: "wrap",
								gap: "14px",
								fontFamily: "var(--font-jetbrains), monospace",
								fontSize: "11px",
								color: "var(--ink-dim)",
								letterSpacing: "0.08em",
								textTransform: "uppercase",
							}}>
							<Link
								href="/writing"
								style={{
									color: "var(--maroon)",
									borderBottom: "1px solid var(--maroon)",
									paddingBottom: "2px",
								}}>
								← back to writing
							</Link>
							<a
								href={`mailto:26100197@lums.edu.pk?subject=Re: ${post.title}`}
								style={{ color: "var(--ink-mid)" }}>
								reply by email →
							</a>
						</div>
					</div>
				</article>
			</main>

			<FooterColophon variant="blog" />
		</>
	);
}
