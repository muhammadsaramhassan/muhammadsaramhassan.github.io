export default function CV() {
	const publications = [
		{
			year: "2025",
			items: [
				{
					title:
						"Data Doping or True Intelligence? Evaluating the Transferability of Injected Knowledge in LLMs",
					authors:
						"Essa Jan, Moiz Ali, Muhammad Saram Hassan, Fareed Zaffar, Yasir Zaki",
					venue: "EMNLP Findings 2025 · Acceptance Rate: 17.35%",
					award: undefined,
					links: {
						pdf: "https://arxiv.org/abs/2505.17140",
					},
				},
			],
		},
	];

	const education = [
		{
			degree: "Bachelor of Science in Computer Science",
			institution: "Lahore University of Management Sciences (LUMS)",
			year: "Aug 2022 – May 2026 (Expected)",
			advisor: undefined,
			details:
				"Dean's Honor List (2022-2025) · Graduate Coursework: Advanced Topics in ML, Foundations of Generative AI, Topics in Network Security, Distributed Systems",
		},
	];

	const experience = [
		{
			title: "Research Intern",
			organization: "Stanford Research Institute (SRI) International",
			location: undefined,
			year: "Aug 2025 – Present",
			details: [
				"Supervised by Dr. Ashish Gehani and Dr. Ramneet Kaur",
				"Developing model-agnostic evaluation framework to distinguish genuine conceptual understanding from brittle pattern matching",
				"Designed dual-metric system: Behavioral Consistency Score and Representation Consistency Score",
				"Introduced Concept Coherence Index (CCI) with Latent Direction Score (LDS) for causal probing via Sparse Autoencoders",
				"Targeting ICML 2026",
			],
		},
		{
			title: "Research Assistant",
			organization: "TPI Lab, LUMS & CommNets Lab, NYUAD",
			location: undefined,
			year: "Jan 2025 – Jul 2025",
			details: [
				"Supervised by Dr. Fareed Zaffar (LUMS) and Dr. Yasir Zaki (NYU Abu Dhabi)",
				"Investigated knowledge retention and transferability in fine-tuned LLMs across model sizes (1.5B-72B parameters)",
				"Discovered comprehension-based tasks achieved 48% retention vs. 17% for surface-level tasks",
				"Observed scaling improvements in knowledge retention from 38% to 72% across models",
				"Published at EMNLP Findings 2025",
			],
		},
		{
			title: "Research Assistant",
			organization: "Security & Privacy Lab, LUMS",
			location: undefined,
			year: "Ongoing",
			details: [
				"Supervised by Dr. Fareed Zaffar (LUMS) and Dr. Taha Khan (CMU CyLab)",
				"Leading Systematization of Knowledge (SoK) on vulnerabilities in autonomous LLM-based web agents",
				"Built adversarial testbed demonstrating MCP poisoning, prompt injection, and visual spoofing attacks",
				"Developed behavioral fingerprinting framework analyzing HTTP headers, DOM patterns, and timing signatures",
				"Discovered LLM browsers bypass robots.txt while masquerading as humans",
			],
		},
		{
			title: "Research Assistant",
			organization: "CITY Lab, LUMS",
			location: undefined,
			year: "Sep 2024 – May 2025",
			details: [
				"Supervised by Dr. Muhammad Tahir",
				"Developed bias-aware pruning framework for CNNs and Vision Transformers",
				"Implemented interpretable pruning methodology for selective bias retention/removal",
				"Introduced filter-locking mechanism preserving domain-invariant features",
			],
		},
	];

	const projects = [
		{
			title:
				"LLM Password Generation: Security, Usability, and Policy Compliance",
			year: "Present",
			details: [
				"Evaluating LLM-generated passwords across security, usability, and policy compliance dimensions",
				"Analyzing how model size, temperature, and prompting strategies affect generation quality",
				"Collaboration with CMU CyLab (Dr. Taha Khan)",
			],
		},
		{
			title: "Voice AI for Regional Languages",
			year: "Jun 2024 - Jul 2024",
			details: [
				"Led cross-functional team of 100+ students with Uplift AI (YC startup)",
				"Collected and curated 35,000+ regional language speech samples",
				"Designed quality control pipelines ensuring 95%+ transcription accuracy",
				"Contributed to UpliftAI securing Y-Combinator funding",
			],
		},
		{
			title: "Raft-Based Fault-Tolerant Distributed Key-Value Store",
			year: "Oct 2024 - Dec 2024",
			details: [
				"Implemented complete Raft consensus module in Go with leader election and log replication",
				"Built distributed key-value store with strong consistency and automatic crash recovery",
			],
		},
		{
			title: "Model Compression via Structured and Unstructured Pruning",
			year: "Aug 2024",
			details: [
				"Applied L2-norm unstructured and channel-wise structured pruning to VGG16",
				"Achieved 65.9% post-fine-tuning accuracy (7.5% lift from baseline)",
				"Implemented PTQ and QAT across multiple bit-widths (FP16, BF16, INT8, INT4)",
			],
		},
	];

	const teaching = [
		{
			role: "Teaching Assistant",
			venue: "CS-210: Discrete Mathematics (Dr. Malik Jahan, LUMS)",
		},
		{
			role: "Teaching Assistant",
			venue: "CS-100: Computational Problem Solving (Dr. Fareed Zaffar, LUMS)",
		},
		{
			role: "Instructor",
			venue:
				"Fundamentals of Machine Learning (LUMS Science School & UpliftAI)",
		},
		{
			role: "Instructor",
			venue:
				"Exploring the Universe with Code: CS for Astronomy (FAST University)",
		},
	];

	return (
		<div className="max-w-[800px] mx-auto px-6 md:px-12 py-16">
			<div className="flex justify-between items-baseline mb-8">
				<h1 className="text-5xl font-light">curriculum vitae</h1>
				<a
					href="content/cv.pdf"
					className="text-sm text-primary hover:text-primary-hover">
					Download PDF →
				</a>
			</div>

			{/* Education */}
			<section className="mb-12">
				<h2 className="text-3xl mb-6">education</h2>
				<hr className="mb-6" />

				<div className="space-y-6">
					{education.map((edu, idx) => (
						<div key={idx} className="flex gap-6 items-baseline">
							<div className="flex-shrink-0 w-32 text-sm text-text-muted font-sans text-right">
								{edu.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-medium mb-1">
									{edu.degree}
								</h3>
								<p className="text-text-secondary mb-1">{edu.institution}</p>
								<p className="text-sm text-text-muted">{edu.details}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Publications */}
			<section className="mb-12" id="papers">
				<h2 className="text-3xl mb-6">publications</h2>
				<hr className="mb-6" />

				{publications.map((yearGroup) => (
					<div key={yearGroup.year} className="mb-8">
						<h3 className="text-xl font-sans font-medium text-primary mb-4">
							{yearGroup.year}
						</h3>

						<div className="space-y-6">
							{yearGroup.items.map((pub, idx) => (
								<article key={idx} className="pl-6 border-l-2 border-gray-200">
									<h4 className="text-lg font-sans mb-2">
										<a
											href={pub.links.pdf}
											className="text-primary hover:text-primary-hover">
											{pub.title}
										</a>
									</h4>
									<p className="text-sm text-text-secondary mb-1">
										{pub.authors}
									</p>
									<p className="text-sm text-text-muted mb-2">
										<em>{pub.venue}</em>
									</p>
									{pub.award && (
										<p className="text-sm font-medium text-primary mb-2">
											🏆 {pub.award}
										</p>
									)}
									<div className="flex gap-2">
										<a
											href={pub.links.pdf}
											className="text-xs text-primary hover:underline">
											arXiv
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				))}
			</section>

			{/* Research Experience */}
			<section className="mb-12">
				<h2 className="text-3xl mb-6">research experience</h2>
				<hr className="mb-6" />

				<div className="space-y-6">
					{experience.map((exp, idx) => (
						<div key={idx} className="flex gap-6 items-baseline">
							<div className="flex-shrink-0 w-32 text-sm text-text-muted font-sans text-right">
								{exp.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-medium mb-1">
									{exp.title}
								</h3>
								<p className="text-text-secondary mb-2">
									{exp.organization}
									{exp.location && ` · ${exp.location}`}
								</p>
								<ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
									{exp.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Selected Projects */}
			<section className="mb-12">
				<h2 className="text-3xl mb-6">selected projects</h2>
				<hr className="mb-6" />

				<div className="space-y-6">
					{projects.map((project, idx) => (
						<div key={idx} className="flex gap-6 items-baseline">
							<div className="flex-shrink-0 w-32 text-sm text-text-muted font-sans text-right">
								{project.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-medium mb-2">
									{project.title}
								</h3>
								<ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Teaching Experience */}
			<section className="mb-12">
				<h2 className="text-3xl mb-6">teaching experience</h2>
				<hr className="mb-6" />

				<div className="space-y-3">
					{teaching.map((item, idx) => (
						<div key={idx} className="flex gap-6 items-baseline">
							<div className="flex-shrink-0 w-32 text-sm text-text-muted font-sans text-right">
								{item.role}
							</div>
							<div className="flex-1 text-base">{item.venue}</div>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className="mb-12">
				<h2 className="text-3xl mb-6">technical skills</h2>
				<hr className="mb-6" />

				<div className="space-y-3">
					<div>
						<span className="text-sm font-medium text-text-muted font-sans mr-3">
							Languages:
						</span>
						<span className="text-base">
							Python, Haskell, Go, C/C++, JavaScript, C#
						</span>
					</div>
					<div>
						<span className="text-sm font-medium text-text-muted font-sans mr-3">
							Frameworks:
						</span>
						<span className="text-base">
							React, Node.js, WordPress, PyTorch, Hugging Face (Transformers,
							Diffusers, timm, unsloth)
						</span>
					</div>
					<div>
						<span className="text-sm font-medium text-text-muted font-sans mr-3">
							Tools:
						</span>
						<span className="text-base">
							Git, Docker, VS Code, LLVM, LangChain
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}
