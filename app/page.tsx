import Link from "next/link";

export default function Home() {
	const news = [
		{
			date: "Dec 25, 2025",
			content: "Something exciting happened! Check out the details here.",
		},
		{
			date: "Nov 15, 2025",
			content: "New paper accepted to a prestigious venue!",
		},
		{
			date: "Oct 1, 2025",
			content: "Started new research position at University.",
		},
	];

	return (
		<div className="min-h-[200vh] relative">
			{/* Main Content */}
			<main className="max-w-[800px] mx-auto px-6 md:px-12 py-16 relative z-10">
				{/* Name Header */}
				<h1 className="text-3xl md:text-4xl font-normal mb-8">
					<span className="text-foreground font-light">M. </span>
					<span className="text-primary underline decoration-primary underline-offset-8">
						Saram
					</span>{" "}
					<span className="text-foreground font-light">Hassan</span>
				</h1>

				{/* Bio with profile image */}
				<div className="flex flex-col md:flex-row gap-10 items-start mb-20">
					<div className="flex-1">
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							I am a researcher working in{" "}
							<strong className="text-primary font-semibold">
								AI safety and Interpretability
							</strong>
							, collaborating across CMU CyLab, Stanford Research Institute, and
							NYU Abu Dhabi. When we deploy LLMs as autonomous agents, we
							implicitly trust that their outputs reflect genuine understanding.
							I want to interrogate and formalize this trust: developing precise
							vocabulary to describe when models truly grasp concepts versus
							merely pattern-match surface associations. My philosophical
							commitments are to transparency and robustness: I believe we
							cannot responsibly deploy AI systems we cannot explain, and we
							cannot trust systems that shatter under adversarial pressure.
						</p>

						<p className="text-base md:text-[1.05rem] leading-[1.7] mb-4">
							Advised by{" "}
							<Link
								href="https://dblp.org/pid/59/3605.html"
								className="text-primary no-underline hover:underline">
								Muhammad Fareed Zaffar
							</Link>
							.
						</p>

						<p className="text-base md:text-[1.05rem] leading-[1.7] mb-4">
							Co-Advisors:{" "}
							<Link
								href="https://www.csl.sri.com/people/gehani/"
								className="text-primary no-underline hover:underline">
								Ashish Gehani
							</Link>
							,{" "}
							<Link
								href="https://ramneetk.github.io/Website/"
								className="text-primary no-underline hover:underline">
								Ramneet Kaur
							</Link>
							,{" "}
							<Link
								href="https://yasirzaki.net/"
								className="text-primary no-underline hover:underline">
								Yasir Zaki
							</Link>
							,{" "}
							<Link
								href="https://www.cmu.edu/ini/about/team/taha-khan.html"
								className="text-primary no-underline hover:underline">
								Taha Khan
							</Link>
						</p>
						<p className="text-base md:text-[1.05rem] leading-[1.7] mb-4">
							My email is{" "}
							<code className="bg-primary/12 text-primary px-2.5 py-1 rounded font-mono text-[0.95rem] whitespace-nowrap">
								26100197 [at] lums [dot] edu
							</code>
						</p>

						<p className="text-base md:text-[1.05rem] leading-[1.7]">
							Please see my{" "}
							<Link
								href="/agenda"
								className="text-primary no-underline border-[1.5px] border-primary rounded-[20px] px-3.5 py-1 inline-block transition-all hover:bg-primary/10">
								agenda
							</Link>{" "}
							and my{" "}
							<Link
								href="/cv"
								className="text-primary no-underline border-[1.5px] border-primary rounded-[20px] px-3.5 py-1 inline-block transition-all hover:bg-primary/10">
								CV
							</Link>
							!
						</p>
					</div>

					{/* Profile Image */}
					<div className="w-full md:w-[280px] h-[320px] rounded-lg overflow-hidden flex-shrink-0 border-[3px] border-primary bg-gradient-to-br from-[#2a1515] to-[#1a0a0a] flex items-center justify-center">
						<img
							src="content/profile.png"
							alt="Profile photo of Muhammad Saram Hassan"
							className="object-cover w-full h-full"
							loading="lazy"
						/>
					</div>
				</div>

				{/* Papers Section */}
				<section className="mt-20">
					<h2 className="text-2xl font-normal text-foreground mb-2.5">
						Papers
					</h2>

					<Link
						href="/cv"
						className="text-text-muted text-sm no-underline hover:text-primary">
						[See more in CV]
					</Link>
					<hr className="border-none border-t border-border my-5" />
					<div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
						<div className="mb-2">
							<a
								href="https://aclanthology.org/2025.findings-emnlp.589/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline underline-offset-4 hover:text-primary/80 text-base md:text-[1.05rem] font-medium">
								Data Doping or True Intelligence? Evaluating the Transferability
								of Injected Knowledge in LLMs
							</a>
							<span className="block text-text-muted text-sm mt-1">
								EMNLP Findings 2025
							</span>
						</div>
					</div>
					<hr className="border-none border-t border-border my-5" />
				</section>

				{/* News Section */}
				<section className="mt-16">
					<h2 className="text-2xl font-normal text-foreground mb-2.5">news</h2>
					<Link
						href="/news"
						className="text-text-muted text-sm no-underline hover:text-primary">
						[See all news]
					</Link>
					<hr className="border-none border-t border-border my-5" />

					<table className="w-full border-collapse">
						<tbody>
							{news.map((item, i) => (
								<tr key={i}>
									<td className="py-3 pr-5 text-text-muted text-sm align-top whitespace-nowrap">
										{item.date}
									</td>
									<td className="py-3 text-text-secondary text-[15px] leading-[1.6]">
										{item.content}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</main>
		</div>
	);
}
