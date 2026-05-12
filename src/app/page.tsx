import Link from "next/link";
import Image from "next/image";
import Masthead from "@/components/Masthead";
import FooterColophon from "@/components/FooterColophon";
import SectionHeader from "@/components/SectionHeader";
import Starmap from "@/components/Starmap";
import TweaksPanel from "@/components/TweaksPanel";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
	title: "Muhammad Saram Hassan",
	description:
		"Muhammad Saram Hassan is a computer scientist at LUMS working on agentic systems, mechanistic interpretability, and AI safety.",
};

export default function Home() {
	const recentPosts = getAllPosts().slice(0, 3);

	return (
		<>
			<Masthead />

			{/* ═══ COVER ═══ */}
			<section className="cover">
				<div className="cover-inner">
					<div>
						<div className="cover-status">
							<span className="cs-dot" />
							<span className="cs-label">
								For the love of everything sciency
							</span>
							<span className="cs-sep">—</span>
							<span className="cs-text">
								<em>Lahore, 2026</em>
							</span>
						</div>
						<div className="cover-folio">
							<span className="gr" /> Computer Scientist <span className="gr" />{" "}
							LUMS · Class of &apos;26
						</div>
						<h1 className="cover-title">
							M.{" "}
							<span
								className="me"
								style={{
									color: "#7A1F2B",
									textDecoration: "underline",
									textDecorationThickness: "5px",
								}}>
								Saram
							</span>
							<br />
							Hassan
						</h1>
						<p className="cover-strap">
							Selected papers, projects, and notes from a computer scientist
							working at the intersection of Agentic Systems, Interpretability,
							and AI Safety. Updated when the work warrants.
							<br />
							<br />
							At heart: an amateur astronomer with a soft spot for dark skies
							and high altitudes.
						</p>
					</div>
					<div className="cover-toc">
						<div className="cover-toc-head">— in this volume —</div>
						<ol>
							<li>
								<a href="#about">
									The author,{" "}
									<em
										style={{
											color: "#7A1F2B",
											fontStyle: "italic",
										}}>
										briefly
									</em>
								</a>
								<span className="pg">p. 01</span>
							</li>
							<li>
								<a href="#research">Papers &amp; Preprints</a>
								<span className="pg">p. 03</span>
							</li>
							<li>
								<Link href="/writing">Notes from the workbench</Link>
								<span className="pg">p. 09</span>
							</li>
							<li>
								<a href="#mountains">Mountains &amp; telescopes</a>
								<span className="pg">p. 14</span>
							</li>
							<li>
								<a href="#readings">Readings &amp; marginalia</a>
								<span className="pg">p. 18</span>
							</li>
							<li>
								<a href="#contact">Commission &amp; correspondence</a>
								<span className="pg">p. 22</span>
							</li>
						</ol>
					</div>
				</div>
			</section>

			<main>
				{/* ═══ INTRO ═══ */}
				<section className="intro container" id="about">
					<div className="intro-body">
						<p>
							Hi. I&apos;m a final-year computer science student at LUMS
							fascinated by the mechanics of AI behavior. My research sits at
							the intersection of agentic systems and model understanding, where
							I develop frameworks to measure how autonomous agents scale,
							reason, and stay robust in unscripted settings.
						</p>
						<p>
							I&apos;ve contributed to research published at{" "}
							<strong>EMNLP Findings</strong>, and collaborated with researchers
							at <strong>Stanford Research Institute</strong>,{" "}
							<strong>CMU CyLab</strong>, and <strong>NYUAD</strong>. Beyond the
							workbench, I have a habit of building things from the ground up;
							whether that means revamping the astronomy observatory at LUMS or
							launching rockets a little too confidently into the local
							airspace.
						</p>
						<p>
							Recently I&apos;ve become interested in origami which seems to me
							a kind of physical analog to the work I do with models: taking a
							flat sheet of information and folding it into something
							structured, surprising, and beautiful.
						</p>
					</div>
					<aside className="portrait">
						<figure className="portrait-fig">
							<div
								className="portrait-img"
								role="img"
								aria-label="Portrait of M. Saram Hassan">
								<Image
									src="/profile.png"
									alt="Portrait of M. Saram Hassan"
									fill
									className="portrait-photo"
									priority
								/>
								<div className="portrait-noise" />
							</div>
							<figcaption>
								<span className="p-folio">Plate I.</span>
								<span className="p-title">
									Me,{"  \n"}
									<em>seconds before the wand backfired.</em>
								</span>
								<span className="p-credit">Lahore, Spring 2023</span>
							</figcaption>
						</figure>
					</aside>
				</section>

				{/* ═══ HERO (at-a-glance) ═══ */}
				<section className="hero container">
					<div className="hero-caption">
						— the ledger — <span>at a glance</span>
					</div>
					<div className="hero-index">
						<div>
							<span className="k">research focus</span>
							<span className="v">
								Model Understanding &amp; Agentic Systems
							</span>
						</div>
						<div>
							<span className="k">advisors</span>
							<span className="v">
								<a
									href="https://faculty.lums.edu.pk/faculty/zaffar-maf"
									target="_blank"
									rel="noopener noreferrer"
									style={{ fontWeight: "bold" }}>
									M. F. Zaffar
								</a>
								<span className="sub">
									<a
										href="https://www.sri.com/bios/ashish-gehani/"
										target="_blank"
										rel="noopener noreferrer">
										A. Gehani (SRI)
									</a>{" "}
									·{" "}
									<a
										href="https://www.sri.com/bios/reet-kaur/"
										target="_blank"
										rel="noopener noreferrer">
										R. Kaur (SRI)
									</a>{" "}
									·{" "}
									<a
										href="https://www.cs.cmu.edu/~tahakhan/"
										target="_blank"
										rel="noopener noreferrer">
										T. Khan (CMU)
									</a>{" "}
									·{" "}
									<a
										href="https://nyuad.nyu.edu/en/academics/divisions/science/faculty/yasir-zaki.html"
										target="_blank"
										rel="noopener noreferrer">
										Y. Zaki (NYUAD)
									</a>
								</span>
							</span>
						</div>
						<div>
							<span className="k">latest</span>
							<span className="v">
								<Link href="/writing/ai-safety-systems-engineer">
									<span className="gold">EMNLP Findings</span>
									<span className="sub">
										Accepted · Nov 2025 · 17.35% acceptance
									</span>
								</Link>
							</span>
						</div>
						<div>
							<span className="k">skills</span>
							<span className="v">
								PyTorch, Hugging Face, LangChain
								<span className="sub">Python, Haskell, Go, C/C++</span>
							</span>
						</div>
					</div>
				</section>

				{/* ═══ RESEARCH ═══ */}
				<section id="research" className="container">
					<SectionHeader
						num="§ I · Research"
						title="Papers &amp; Preprints"
						moreHref="#"
					/>
					<ol className="bib">
						<li>
							<div>
								<h3>
									<a href="https://aclanthology.org/2025.findings-emnlp.589/">
										Data Doping or True Intelligence? Evaluating the
										Transferability of Injected Knowledge in LLMs
									</a>
								</h3>
								<p className="auth">
									E. Jan, M. Ali, <span className="me">M. S. Hassan</span>, Y.
									Zaki, M. F. Zaffar
								</p>
								<div className="meta">
									<span className="venue">★ EMNLP Findings · 2025</span>
									<a
										href="https://aclanthology.org/2025.findings-emnlp.589.pdf"
										target="_blank"
										rel="noopener noreferrer">
										pdf
									</a>
									<a
										href="https://aclanthology.org/2025.findings-emnlp.589/"
										target="_blank"
										rel="noopener noreferrer">
										acl anthology
									</a>
									<a
										href="https://arxiv.org/abs/2505.17140"
										target="_blank"
										rel="noopener noreferrer">
										arXiv
									</a>
								</div>
							</div>
						</li>
						<li>
							<div>
								<h3>
									<a href="#">
										Understanding or Imitation? Auditing Conceptual
										Understanding and Reasoning in Large Language Models
									</a>
								</h3>
								<p className="auth">
									<span className="me">M. S. Hassan</span>, et al. · SRI
									International
								</p>
								<div className="meta">
									<span className="venue">
										Manuscript under Review · ACM Conference on Reproducibility
										and Replicability
									</span>
								</div>
							</div>
						</li>
					</ol>
				</section>

				{/* ═══ WRITING PREVIEW ═══ */}
				<section className="container" id="writing">
					<SectionHeader
						num="§ III · Writing"
						title="Notes from the workbench"
						moreLabel="full archive →"
						moreHref="/writing"
					/>
					<p className="writing-blurb">
						Short essays on interpretability, ML systems, and the scaffolding
						around them. Written slowly, revised often. Posted here first - then
						occasionally on LinkedIn.
					</p>
					{recentPosts.length > 0 ? (
						<ul className="essays">
							{recentPosts.map((post) => (
								<li key={post.slug}>
									<span className="e-date">
										{post.displayDate} · {post.year}
									</span>
									<span className="e-title">
										<Link href={`/writing/${post.slug}`}>{post.title}</Link>
									</span>
									{post.dek && <span className="e-dek">{post.dek}</span>}
									<span className="e-read">
										<span className="dots">
											{Array.from({ length: 5 }, (_, i) => (
												<span
													key={i}
													className={
														i < Math.min(Math.ceil(post.readTime / 3), 5)
															? "on"
															: ""
													}
												/>
											))}
										</span>
										{post.readTime} min
									</span>
								</li>
							))}
						</ul>
					) : (
						<p className="writing-empty">
							Posts incoming — check back soon, or subscribe via RSS.
						</p>
					)}
					<div className="writing-ctas">
						<Link href="/writing" className="btn btn-primary">
							Read all writing <span className="arrow">→</span>
						</Link>
						<a href="#readings" className="btn btn-ghost">
							Recommended reads
						</a>
					</div>
				</section>

				{/* ═══ KBD STRIP ═══ */}
				<div className="container">
					<div className="kbd-strip">
						<span className="hint">this page listens:</span>
						<span>
							<kbd>t</kbd> toggle tweaks
						</span>
					</div>
				</div>

				{/* ═══ STARMAP ═══ */}
				<section className="container" id="mountains">
					<SectionHeader
						num="§ IV · Other lives"
						title="Mountains &amp; telescopes"
						moreLabel=""
						moreHref=""
					/>
					<div className="starmap">
						<Starmap />
						<div className="starmap-copy">
							<h3>
								When the papers are off the desk, I&apos;m probably up a
								mountain.
							</h3>
							<p>
								I keep a log of astrophotography sessions from the Karakoram and
								Himalaya, usually paired with reading notes written at 4,000m.
								It&apos;s where I do my best thinking about life, funnily
								enough.
							</p>
							<ul>
								<li>
									Rakaposhi Base Camp (2025) — the Milky Way, properly, for the
									first time
								</li>
								<li>Sharan Forest, 2023 — first deep-sky stack</li>
								<li>Arang Kel, 2022 — first time seeing bortle 1 skies</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ═══ READINGS ═══ */}
				<section id="readings" className="container">
					<SectionHeader
						num="§ V · Readings &amp; marginalia"
						title="Things I find inspiring"
						moreLabel=""
						moreHref=""
					/>
					<div className="readings-grid">
						<div className="readings-col">
							<h4 className="readings-col-head">Quotes to live by</h4>
							<ol className="quotes-list">
								<li>
									<blockquote>
										<p>
											I found God through the dissolving of my resolves and the
											breaking of my intentions{" "}
										</p>
										<cite>— Imam Ali (AS)</cite>
									</blockquote>
								</li>
								<li>
									<blockquote>
										<p>
											We only truly live by following the imagination of our
											nine year old self.
										</p>
										<cite>
											— Aradshar Chaddar (2004-2025),{" "}
											<em> President USA & a Friend</em>
										</cite>
									</blockquote>
								</li>
								<li>
									<blockquote>
										<p>
											But only in their dreams can men be truly free.
											&lsquo;Twas always thus, and always thus will be.
										</p>
										<cite>
											— John Keating, <em>Dead Poets Society</em>
										</cite>
									</blockquote>
								</li>
							</ol>
						</div>
						<div className="readings-col">
							<h4 className="readings-col-head">Books worth reading</h4>
							<ol className="books-list">
								<li>
									<span className="b-title">
										The Ministry of Utmost Happiness
									</span>
									<span className="b-auth">Arundhati Roy</span>
									<span className="b-year">2017</span>
								</li>
								<li>
									<span className="b-title">White Nights</span>
									<span className="b-auth">Fyodor Dostoevsky</span>
									<span className="b-year">1848</span>
								</li>
								<li>
									<span className="b-title">The Forty Rules of Love</span>
									<span className="b-auth">Elif Shafak</span>
									<span className="b-year">2009</span>
								</li>
								<li>
									<span className="b-title">Weapons of Math Destruction</span>
									<span className="b-auth">Cathy O&apos;Neil</span>
									<span className="b-year">2016</span>
								</li>
							</ol>
							<p className="readings-note"></p>
						</div>
					</div>
				</section>
			</main>

			{/* ═══ CONTACT (full-bleed) ═══ */}
			<section className="commission-bleed" id="contact">
				<div className="container">
					<div className="c-eye">§ VI · Write to me</div>
					<h3>
						Got something <em>to say?</em> Send a Hi.
					</h3>
					<p>
						I would love to hear fresh perspectives and new ideas. Ill do my
						best to to jump back in within 48 hours.
					</p>
					<div className="cta-row">
						<a href="mailto:saram.hassan1412@gmail.com" className="cta-gold">
							write to me <span>→</span>
						</a>
						<a
							href="/Muhammad_Saram_Hassan_s_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-ghost-light">
							download cv.pdf
						</a>
					</div>
					<div className="commission-meta-row">
						<div>
							<div className="k">email</div>
							<div className="v">
								<a href="mailto:saram.hassan1412@gmail.com">
									saram.hassan1412 [at] gmail
								</a>
							</div>
						</div>
						<div>
							<div className="k">elsewhere</div>
							<div className="v">
								<a
									href="https://github.com/msaramhassan"
									target="_blank"
									rel="noopener noreferrer">
									github
								</a>{" "}
								·{" "}
								<a
									href="https://linkedin.com/in/msaramhassan"
									target="_blank"
									rel="noopener noreferrer">
									linkedin
								</a>{" "}
								·{" "}
								<a
									href="https://scholar.google.com/scholar?q=Muhammad+Saram+Hassan"
									target="_blank"
									rel="noopener noreferrer">
									scholar
								</a>
							</div>
						</div>
						<div>
							<div className="k">response time</div>
							<div className="v">within 48h · UTC+5</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══ END PLATE ═══ */}
			<section className="end-plate">
				<div className="mark">— fin —</div>
				<h2>
					Thanks for reading to the end.{" "}
					<b>
						<a href="mailto:saram.hassan1412@gmail.com">Drop me a line</a>
					</b>{" "}
					if any of this was useful, wrong, or worth pushing on.
				</h2>
				<p className="sign">
					<span className="who">M. S. H.</span>
				</p>
			</section>

			<FooterColophon variant="portfolio" />

			{/* Tweaks panel — client component, keyboard-shortcut aware */}
			<TweaksPanel />
		</>
	);
}
