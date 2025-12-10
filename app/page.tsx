import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-[900px] mx-auto px-6 py-12">
			<h1 className="text-5xl font-serif mb-4">Muhammad Saram Hassan</h1>
			<p className="text-lg text-muted mb-8">
				Computer Science Undergrad | ML Researcher | AI Safety Enthusiast
			</p>

			<div className="space-y-8">
				<p className="text-base text-muted leading-relaxed">
					Welcome to my personal website. I&apos;m a Computer Science student at
					LUMS passionate about Machine Learning, AI safety, and
					interpretability. Here you&apos;ll find my thoughts on research,
					projects, and insights into AI systems.
				</p>

				<div className="space-y-4">
					<h2 className="text-2xl font-serif">Explore</h2>
					<div className="space-y-2">
						<Link
							href="/about"
							className="block text-base underline decoration-muted hover:decoration-text">
							→ About Me
						</Link>
						<Link
							href="/blog"
							className="block text-base underline decoration-muted hover:decoration-text">
							→ Blog Posts
						</Link>
						<Link
							href="/resume"
							className="block text-base underline decoration-muted hover:decoration-text">
							→ Resume
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
