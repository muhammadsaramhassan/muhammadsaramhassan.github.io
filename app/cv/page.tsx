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
			year: "Aug 2022 - May 2026 (Expected)",
			advisor: "Fareed Zaffar",
			details:
				"Dean's Honor List (2022-2025) · Graduate Coursework: Advanced Topics in ML, Foundations of Generative AI, Topics in Network Security, Distributed Systems, HCI",
		},
	];

	const experience = [
		{
			title: "Research Assistant",
			organization: "CommNets Lab, NYU Abu Dhabi & TPI, LUMS",
			location: undefined,
			year: "Jan 2025 - Present",
			supervisor: "Supervised by Dr. Fareed Zaffar and Dr. Yasir Zaki",
			details: [
				"Investigated knowledge retention and transferability in fine-tuned LLMs across model sizes",
				"Discovered comprehension-based tasks to achieve 48% retention of fine-tuned knowledge compared to only 17% transfer in surface-level tasks",
				"Published at EMNLP Findings 2025",
			],
		},
		{
			title: "Research Intern",
			organization: "Stanford Research Institute (SRI) International",
			location: undefined,
			year: "Aug 2025 - Present",
			supervisor: "Supervised by Dr. Ashish Gehani and Dr. Ramneet Kaur",
			details: [
				"Developing model-agnostic evaluation framework to distinguish genuine conceptual understanding from brittle pattern matching",
				"Analyzing failure modes under distribution shifts to identify spurious correlations",
			],
		},
		{
			title: "Research Intern",
			organization: "CMU CyLab",
			location: undefined,
			year: "September 2025 - Present",
			supervisor: "Supervised by Dr. Taha Khan & Dr. Fareed Zaffar",
			details: [
				"Leading Systematization of Knowledge (SoK) on vulnerabilities in autonomous LLM-based web agents",
				"Built adversarial testbed demonstrating MCP poisoning, prompt injection, and visual spoofing attacks",
				"Developing behavioral fingerprinting framework analyzing HTTP headers, DOM patterns, and timing signatures to distinguish agents from humans",
			],
		},
		{
			title: "Student Researcher",
			organization: "CITY Lab, LUMS",
			location: undefined,
			year: "Sep 2024 - May 2025",
			supervisor: "Supervised by Dr. Muhammad Tahir",
			details: [
				"Exploratory work on a theoretical bias-aware pruning framework for CNNs and Vision Transformers",
				"Implemented interpretable pruning methodology for selective bias retention/removal",
				"Introduced filter-locking mechanism preserving domain-invariant features",
			],
		},
	];

	const projects = [
		{
			title:
				"LLM Password Generation: Security, Usability, and Policy Compliance",
			year: "June 2025 - August 2025",
			details: [
				"Evaluated LLM-generated passwords across security, usability, and policy compliance dimensions; analyzed how model size, temperature, and prompting strategies affect generation quality",
				"Work conducted with CMU CyLab",
			],
		},
		{
			title: "Voice AI for Regional Languages",
			year: "Jun 2024 - Jul 2024",
			details: [
				"Led cross-functional team of 100+ students with Uplift AI (YC startup)",
				"Collected and curated 35,000+ regional language speech samples",
				"Designed quality control pipelines ensuring 95%+ transcription accuracy",
				"Work contributed to UpliftAI securing Y-Combinator funding",
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
			role: "Student Instructor",
			venue:
				"Fundamentals of Machine Learning (LUMS Science School & UpliftAI)",
		},
		{
			role: "Student Instructor",
			venue:
				"Exploring the Universe with Code: CS for Astronomy (FAST University)",
		},
	];

	return (
		<div className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
			<div className="flex justify-between items-baseline mb-12">
				<h1 className="text-5xl font-light text-secondary">curriculum vitae</h1>
				<a
					href="content/cv.pdf"
					className="text-sm text-primary hover:text-primary-hover font-medium">
					Download PDF →
				</a>
			</div>

			{/* Education */}
			<section className="mb-14">
				<h2 className="text-3xl mb-6 text-primary">Education</h2>
				<hr className="mb-8 border-gray-300" />

				<div className="space-y-8">
					{education.map((edu, idx) => (
						<div key={idx} className="flex gap-8">
							<div className="flex-shrink-0 w-40 text-sm text-text-muted font-sans text-right pt-1">
								{edu.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-semibold mb-2 text-foreground">
									{edu.degree}
								</h3>
								<p className="text-text-secondary mb-2 font-medium">
									{edu.institution}
								</p>
								{edu.advisor && (
									<p className="text-sm text-primary mb-2 italic">
										Advisor: {edu.advisor}
									</p>
								)}
								<p className="text-sm text-text-muted leading-relaxed">
									{edu.details}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Publications */}
			<section className="mb-14" id="papers">
				<h2 className="text-3xl mb-6 text-primary">Publications</h2>
				<hr className="mb-8 border-gray-300" />

				{publications.map((yearGroup) => (
					<div key={yearGroup.year} className="mb-10">
						<h3 className="text-xl font-sans font-semibold text-primary mb-6">
							{yearGroup.year}
						</h3>

						<div className="space-y-8">
							{yearGroup.items.map((pub, idx) => (
								<article
									key={idx}
									className="pl-6 border-l-2 border-primary/30">
									<h4 className="text-lg font-sans font-medium mb-3">
										<a
											href={pub.links.pdf}
											className="text-primary hover:text-primary-hover hover:underline">
											{pub.title}
										</a>
									</h4>
									<p className="text-sm text-text-secondary mb-2 leading-relaxed">
										{pub.authors}
									</p>
									<p className="text-sm text-text-muted mb-3">
										<em>{pub.venue}</em>
									</p>
									{pub.award && (
										<p className="text-sm font-medium text-primary mb-3">
											🏆 {pub.award}
										</p>
									)}
									<div className="flex gap-3">
										<a
											href={pub.links.pdf}
											className="text-xs text-primary hover:underline font-medium">
											arXiv →
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				))}
			</section>

			{/* Research Experience */}
			<section className="mb-14">
				<h2 className="text-3xl mb-6 text-primary">Research Experience</h2>
				<hr className="mb-8 border-gray-300" />

				<div className="space-y-8">
					{experience.map((exp, idx) => (
						<div key={idx} className="flex gap-8">
							<div className="flex-shrink-0 w-40 text-sm text-text-muted font-sans text-right pt-1">
								{exp.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-semibold mb-2 text-foreground">
									{exp.title}
								</h3>
								<p className="text-text-secondary mb-2 font-medium">
									{exp.organization}
									{exp.location && ` · ${exp.location}`}
								</p>
								{exp.supervisor && (
									<p className="text-sm text-primary mb-3 italic">
										{exp.supervisor}
									</p>
								)}
								<ul className="list-disc list-outside ml-5 space-y-2 text-sm text-text-secondary leading-relaxed">
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
			<section className="mb-14">
				<h2 className="text-3xl mb-6 text-primary">Selected Projects</h2>
				<hr className="mb-8 border-gray-300" />

				<div className="space-y-8">
					{projects.map((project, idx) => (
						<div key={idx} className="flex gap-8">
							<div className="flex-shrink-0 w-40 text-sm text-text-muted font-sans text-right pt-1">
								{project.year}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-sans font-semibold mb-3 text-foreground">
									{project.title}
								</h3>
								<ul className="list-disc list-outside ml-5 space-y-2 text-sm text-text-secondary leading-relaxed">
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
			<section className="mb-14">
				<h2 className="text-3xl mb-6 text-primary">teaching experience</h2>
				<hr className="mb-8 border-gray-300" />

				<div className="space-y-4">
					{teaching.map((item, idx) => (
						<div key={idx} className="">
							<span className="text-sm font-semibold text-text-muted uppercase tracking-wide">
								{item.role}
							</span>
							<p className="text-base text-foreground mt-1">{item.venue}</p>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className="mb-14">
				<h2 className="text-3xl mb-6 text-primary">Technical Skills</h2>
				<hr className="mb-8 border-gray-300" />

				<div className="space-y-5">
					<div className="flex gap-4">
						<span className="text-sm font-semibold text-text-muted font-sans uppercase tracking-wide w-32 flex-shrink-0">
							Languages
						</span>
						<span className="text-base text-foreground leading-relaxed flex-1">
							Python, Haskell, Go, C/C++, JavaScript, C#
						</span>
					</div>
					<div className="flex gap-4">
						<span className="text-sm font-semibold text-text-muted font-sans uppercase tracking-wide w-32 flex-shrink-0">
							Frameworks
						</span>
						<span className="text-base text-foreground leading-relaxed flex-1">
							PyTorch, Hugging Face (Transformers, Diffusers, timm, unsloth),
							TensorFlow, WordPress
						</span>
					</div>
					<div className="flex gap-4">
						<span className="text-sm font-semibold text-text-muted font-sans uppercase tracking-wide w-32 flex-shrink-0">
							Tools
						</span>
						<span className="text-base text-foreground leading-relaxed flex-1">
							Git, Docker, LangChain, Figma
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}
