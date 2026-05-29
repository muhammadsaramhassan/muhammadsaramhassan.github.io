import Masthead from "@/components/Masthead";
import FooterColophon from "@/components/FooterColophon";
import TweaksPanel from "@/components/TweaksPanel";

export const metadata = {
	title: "Contact",
	description: "Get in touch with Muhammad Saram Hassan",
};

export default function ContactPage() {
	return (
		<>
			<Masthead />

			<main>
				<section className="commission-bleed contact-page">
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
			</main>

			<FooterColophon variant="portfolio" />
			<TweaksPanel />
		</>
	);
}
