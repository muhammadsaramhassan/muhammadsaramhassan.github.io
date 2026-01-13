import Link from "next/link";

export default function Agenda() {
	return (
		<div className="max-w-[800px] mx-auto px-6 md:px-12 py-16">
			<h1 className="text-5xl font-light mb-8">research agenda</h1>

			<div className="prose prose-lg max-w-none">
				<p className="text-xl text-text-secondary mb-8">
					My research investigates the foundations of machine intelligence, with
					emphasis on understanding what models truly learn, ensuring their
					robustness against adversarial threats, and developing trustworthy AI
					systems.
				</p>

				<hr className="my-8" />

				<h2>current projects</h2>

				<div className="space-y-8 mb-12">
					<section>
						<h3 className="text-2xl font-sans mb-3">
							Conceptual Understanding in Large Language Models
						</h3>
						<p>
							Do language models possess genuine{" "}
							<strong>conceptual understanding</strong> that transfers across
							contexts, or do they rely on brittle pattern matching that
							collapses under distribution shifts? At SRI International, I'm
							developing model-agnostic evaluation frameworks that distinguish
							true understanding from spurious correlations.
						</p>
						<p>
							This work introduces dual metrics—Behavioral Consistency Score
							(output stability) and Representation Consistency Score (embedding
							coherence)—unified into a Concept Coherence Index. By combining
							behavioral analysis with mechanistic interpretability through
							Sparse Autoencoders, we can probe whether models build robust
							internal representations of concepts or merely memorize surface
							patterns.
						</p>
						<p>
							<em>
								Collaboration with Dr. Ashish Gehani and Dr. Ramneet Kaur ·
								Targeting ICML 2026
							</em>
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-sans mb-3">
							Adversarial Robustness of Autonomous Web Agents
						</h3>
						<p>
							As LLM-based agents gain autonomy to browse the web and execute
							tasks, they become vulnerable to novel attack vectors. How can
							malicious websites manipulate these agents? Can we detect agent
							traffic before it causes harm?
						</p>
						<p>
							I'm leading a <strong>Systematization of Knowledge</strong> that
							taxonomizes vulnerabilities unique to agentic systems—MCP
							poisoning, indirect prompt injection via DOM manipulation, and
							visual spoofing. Our adversarial testbed demonstrates practical
							attacks, while our behavioral fingerprinting framework analyzes
							HTTP headers, DOM traversal patterns, and timing signatures to
							identify LLM agents.
						</p>
						<p>
							Critically, we've discovered that LLM browsers bypass robots.txt
							while masquerading as human users, generating ad revenue without
							detection—exposing regulatory gaps in autonomous agent deployment.
						</p>
						<p>
							<em>
								With Dr. Fareed Zaffar (LUMS) and Dr. Taha Khan (CMU CyLab)
							</em>
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-sans mb-3">
							Knowledge Retention and Transfer in Fine-Tuned Models
						</h3>
						<p>
							When we fine-tune language models, what determines whether
							injected knowledge persists and generalizes? My EMNLP Findings
							2025 paper reveals that <em>task structure</em> fundamentally
							shapes knowledge integration.
						</p>
						<p>
							Across 5 model families (1.5B–72B parameters), comprehension-based
							tasks achieved 48% knowledge retention versus only 17% for
							surface-level mapping tasks. This suggests that deeper semantic
							engagement during fine-tuning produces more durable and
							transferable knowledge representations. We also observed
							systematic scaling advantages—retention improved from 38% to 72%
							with model size—revealing predictable benefits of scale for
							conceptual integration.
						</p>
						<p>
							Related publication:{" "}
							<a
								href="https://arxiv.org/abs/2505.17140"
								target="_blank"
								rel="noopener noreferrer">
								Data Doping or True Intelligence? (EMNLP 2025)
							</a>
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-sans mb-3">
							LLM-Generated Passwords: Security Meets Usability
						</h3>
						<p>
							Can language models generate passwords that are simultaneously
							secure (high entropy, resistant to guessing attacks), usable
							(memorable), and policy-compliant? This project evaluates how
							model architecture, temperature settings, and prompt design affect
							password quality.
						</p>
						<p>
							I'm investigating failure modes including policy violations,
							hallucinated requirements, and exploitable patterns in generated
							passwords. This work bridges AI capabilities research with
							practical security implications.
						</p>
						<p>
							<em>Collaboration with CMU CyLab (Dr. Taha Khan)</em>
						</p>
					</section>
				</div>

				<hr className="my-8" />

				<h2>future directions</h2>

				<div className="space-y-6 mb-12">
					<p>Looking ahead, several questions drive my research trajectory:</p>

					<ul className="space-y-3">
						<li>
							<strong>Mechanistic interpretability at scale:</strong> Can we
							decompose the internal representations of frontier models into
							human-interpretable circuits? What do models actually compute, and
							can we verify their reasoning processes?
						</li>
						<li>
							<strong>Robustness beyond adversarial examples:</strong> How do we
							build AI systems that maintain reliable performance under natural
							distribution shifts, not just crafted perturbations? What
							architectural or training innovations promote genuine robustness?
						</li>
						<li>
							<strong>Privacy-preserving machine learning:</strong> As models
							memorize training data, how can we rigorously quantify and
							mitigate privacy leakage? Can differential privacy techniques
							scale to modern LLMs without catastrophic utility loss?
						</li>
						<li>
							<strong>Efficient and sustainable AI:</strong> How can model
							compression, pruning, and quantization techniques maintain
							capability while reducing computational costs? Can we identify and
							preserve critical subnetworks responsible for key behaviors?
						</li>
						<li>
							<strong>Multi-agent system security:</strong> As AI agents
							increasingly interact with each other and human systems, what are
							the emergent security properties? How do we reason about trust,
							authentication, and coordination in hybrid human-AI ecosystems?
						</li>
					</ul>
				</div>

				<hr className="my-8" />

				<h2>methodological approach</h2>

				<p>My research combines multiple methodologies:</p>

				<ul className="space-y-3 mb-8">
					<li>
						<strong>Controlled experiments:</strong> Isolating variables to
						understand causal mechanisms in model behavior
					</li>
					<li>
						<strong>Large-scale empirical evaluation:</strong> Systematic
						benchmarking across model families, sizes, and architectures
					</li>
					<li>
						<strong>Adversarial stress testing:</strong> Building testbeds that
						expose vulnerabilities under worst-case conditions
					</li>
					<li>
						<strong>Mechanistic analysis:</strong> Probing internal
						representations to understand what models learn and how they compute
					</li>
					<li>
						<strong>Systems building:</strong> Implementing end-to-end
						prototypes to validate theoretical insights in practice
					</li>
				</ul>

				<hr className="my-8" />

				<h2>collaborations</h2>

				<p>
					I'm grateful to work with exceptional researchers across institutions:
				</p>

				<ul className="space-y-2 mb-8">
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

				<hr className="my-8" />

				<h2>broader impact</h2>

				<p>
					My work aims to contribute to <strong>trustworthy AI systems</strong>{" "}
					that are robust, interpretable, and aligned with human values.
					Understanding what models truly learn—and what they don't—is essential
					for deploying AI safely in high-stakes domains. Identifying and
					mitigating security vulnerabilities in autonomous agents helps prevent
					misuse. And developing efficient, bias-aware models makes powerful AI
					accessible while respecting privacy and fairness constraints.
				</p>

				<p className="text-lg text-text-secondary mt-8">
					Interested in collaboration or have ideas to discuss? Feel free to{" "}
					<Link href="/">reach out</Link>!
				</p>
			</div>
		</div>
	);
}
