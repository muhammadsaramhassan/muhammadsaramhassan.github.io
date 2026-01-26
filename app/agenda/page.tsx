import Link from "next/link";

export default function Agenda() {
	return (
		<div className="min-h-[200vh] relative">
			<main className="max-w-[800px] mx-auto px-6 md:px-12 py-16 relative z-10">
				<h1 className="text-3xl md:text-4xl font-normal mb-8">
					Research Agenda
				</h1>

				<p className="text-base md:text-lg leading-[1.8] mb-5">
					My research investigates the essence of machine learning: questioning
					what models truly understand and how such understanding develops.
				</p>

				<hr className="border-none border-t border-border my-5" />

				<div className="space-y-12 mb-16">
					<section className="space-y-4">
						<h2 className="text-2xl font-normal text-primary mb-2.5">
							Measuring Coherence and Understanding in LLMs
						</h2>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							Assessing if language models possess genuine conceptual
							understanding that transfers across contexts, or if they rely on
							brittle pattern matching that collapses under distribution shifts?
						</p>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							With{" "}
							<a
								href="https://www.sri.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline underline-offset-4 hover:text-primary/80">
								SRI International
							</a>
							, I'm developing a model-agnostic evaluation framework that is
							able to distinguish true understanding from spurious correlations.
						</p>
						<p className="text-sm text-text-muted italic">
							Advisors: Dr. Ashish Gehani and Dr. Ramneet Kaur
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-normal text-primary mb-2.5">
							Adversarial Robustness of Autonomous Web Agents
						</h2>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							As LLM-based agents gain autonomy to browse the web and execute
							tasks, they become vulnerable to novel attack vectors. How can
							malicious websites manipulate these agents? Can we detect agent
							traffic before it causes harm?
						</p>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							I'm leading a systematization of knowledge that taxonomizes
							vulnerabilities unique to agentic systems—MCP poisoning, indirect
							prompt injection via DOM manipulation, and visual spoofing. Our
							adversarial testbed demonstrates practical attacks, while our
							behavioral fingerprinting framework analyzes HTTP headers, DOM
							traversal patterns, and timing signatures to identify LLM agents.
						</p>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							Critically, we've discovered that LLM browsers bypass robots.txt
							while masquerading as human users, generating ad revenue without
							detection—exposing regulatory gaps in autonomous agent deployment.
						</p>
						<p className="text-sm text-text-muted italic">
							With Dr. Fareed Zaffar (LUMS) and Dr. Taha Khan (CMU CyLab)
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-normal text-primary mb-2.5">
							Knowledge Retention and Transfer in Fine-Tuned Models
						</h2>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							When we fine-tune language models, what determines whether
							injected knowledge persists and generalizes? My EMNLP Findings
							2025 paper reveals that <em>task structure</em> fundamentally
							shapes knowledge integration.
						</p>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							Across 5 model families (1.5B–72B parameters), comprehension-based
							tasks achieved 48% knowledge retention versus only 17% for
							surface-level mapping tasks. This suggests that deeper semantic
							engagement during fine-tuning produces more durable and
							transferable knowledge representations. We also observed
							systematic scaling advantages—retention improved from 38% to 72%
							with model size—revealing predictable benefits of scale for
							conceptual integration.
						</p>
						<p className="text-sm text-text-muted">
							Related publication:{" "}
							<a
								href="https://arxiv.org/abs/2505.17140"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline underline-offset-4 hover:text-primary/80 text-base md:text-[1.05rem] font-medium">
								Data Doping or True Intelligence? (EMNLP 2025)
							</a>
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-normal text-primary mb-2.5">
							LLM-Generated Passwords: Security Meets Usability
						</h2>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							Can language models generate passwords that are simultaneously
							secure (high entropy, resistant to guessing attacks), usable
							(memorable), and policy-compliant? This project evaluates how
							model architecture, temperature settings, and prompt design affect
							password quality.
						</p>
						<p className="text-base md:text-lg leading-[1.8] mb-5">
							I'm investigating failure modes including policy violations,
							hallucinated requirements, and exploitable patterns in generated
							passwords. This work bridges AI capabilities research with
							practical security implications.
						</p>
						<p className="text-sm text-text-muted italic">
							Collaboration with CMU CyLab (Dr. Taha Khan)
						</p>
					</section>
				</div>

				<hr className="border-none border-t border-border my-5" />

				<h2 className="text-2xl font-normal text-primary mb-2.5">
					Future Directions
				</h2>

				<div className="space-y-8 mb-16">
					<p className="text-base md:text-lg leading-[1.8] mb-5">
						Looking ahead, several questions drive my research trajectory:
					</p>

					<ul className="space-y-6 text-foreground leading-[1.8]">
						<li>
							<em>Mechanistic interpretability at scale.</em> Can we decompose
							the internal representations of frontier models into
							human-interpretable circuits? What do models actually compute, and
							can we verify their reasoning processes?
						</li>
						<li>
							<em>Robustness beyond adversarial examples.</em> How do we build
							AI systems that maintain reliable performance under natural
							distribution shifts, not just crafted perturbations? What
							architectural or training innovations promote genuine robustness?
						</li>
						<li>
							<em>Privacy-preserving machine learning.</em> As models memorize
							training data, how can we rigorously quantify and mitigate privacy
							leakage? Can differential privacy techniques scale to modern LLMs
							without catastrophic utility loss?
						</li>
						<li>
							<em>Efficient and sustainable AI.</em> How can model compression,
							pruning, and quantization techniques maintain capability while
							reducing computational costs? Can we identify and preserve
							critical subnetworks responsible for key behaviors?
						</li>
						<li>
							<em>Multi-agent system security.</em> As AI agents increasingly
							interact with each other and human systems, what are the emergent
							security properties? How do we reason about trust, authentication,
							and coordination in hybrid human-AI ecosystems?
						</li>
					</ul>
				</div>

				<hr className="border-none border-t border-border my-5" />

				<h2 className="text-2xl font-normal text-primary mb-2.5">
					Methodological Approach
				</h2>

				<p className="text-base md:text-lg leading-[1.8] mb-5">
					My research combines multiple methodologies:
				</p>

				<ul className="space-y-4 text-foreground leading-[1.8] mb-12">
					<li>
						<em>Controlled experiments:</em> Isolating variables to understand
						causal mechanisms in model behavior
					</li>
					<li>
						<em>Large-scale empirical evaluation:</em> Systematic benchmarking
						across model families, sizes, and architectures
					</li>
					<li>
						<em>Adversarial stress testing:</em> Building testbeds that expose
						vulnerabilities under worst-case conditions
					</li>
					<li>
						<em>Mechanistic analysis:</em> Probing internal representations to
						understand what models learn and how they compute
					</li>
					<li>
						<em>Systems building:</em> Implementing end-to-end prototypes to
						validate theoretical insights in practice
					</li>
				</ul>

				<hr className="border-none border-t border-border my-5" />

				<h2 className="text-2xl font-normal text-primary mb-2.5">
					Collaborations
				</h2>

				<p className="text-base md:text-lg leading-[1.8] mb-5">
					I'm grateful to work with exceptional researchers across institutions:
				</p>

				<ul className="space-y-3 text-foreground leading-[1.8] mb-12">
					<li>
						Dr. Ashish Gehani and Dr. Ramneet Kaur (SRI International) —
						Conceptual understanding and mechanistic interpretability
					</li>
					<li>
						Dr. Fareed Zaffar (LUMS) — LLM security, knowledge transfer, and
						privacy
					</li>
					<li>
						Dr. Yasir Zaki (NYU Abu Dhabi) — Knowledge retention in fine-tuned
						models
					</li>
					<li>
						Dr. Taha Khan (CMU CyLab) — Web agent security and applied
						cryptography
					</li>
					<li>
						Dr. Muhammad Tahir (LUMS) — Computer vision, model compression, and
						bias-aware learning
					</li>
				</ul>

				<hr className="border-none border-t border-border my-5" />

				<h2 className="text-2xl font-normal text-primary mb-2.5">
					Broader Impact
				</h2>

				<p className="text-base md:text-lg leading-[1.8] mb-5">
					My work aims to contribute to <em>trustworthy AI systems</em> that are
					robust, interpretable, and aligned with human values. Understanding
					what models truly learn—and what they don't—is essential for deploying
					AI safely in high-stakes domains. Identifying and mitigating security
					vulnerabilities in autonomous agents helps prevent misuse. And
					developing efficient, bias-aware models makes powerful AI accessible
					while respecting privacy and fairness constraints.
				</p>

				<p className="text-base md:text-lg leading-[1.8] mt-12 leading-[1.8]">
					Interested in collaboration or have ideas to discuss? Feel free to{" "}
					<Link href="/" className="text-primary no-underline hover:underline">
						reach out
					</Link>
					!
				</p>
			</main>
		</div>
	);
}
