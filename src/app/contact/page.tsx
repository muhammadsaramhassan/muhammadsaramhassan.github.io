import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { og, site } from "@/lib/site";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Muhammad Saram Hassan: email, GitHub, Google Scholar, and LinkedIn.",
	alternates: { canonical: "/contact" },
	openGraph: og({
		title: "Contact · Muhammad Saram Hassan",
		description: "Email, GitHub, Google Scholar, and LinkedIn.",
		path: "/contact",
	}),
};

export default function ContactPage() {
	return (
		<>
			<a href="#main" className="skip-link">
				Skip to content
			</a>
			<Masthead />

			<main id="main" className="wrap pad-bottom">
				<div className="page-head">
					<h1>Contact</h1>
					<p>
						I&apos;m always glad to hear about new work, and I read everything.
						I&apos;ll do my best to reply within 48 hours.
					</p>
				</div>

				<ul className="contact-rows">
					<li>
						<span className="k">Email</span>
						<span className="v">
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</span>
					</li>
					<li>
						<span className="k">CV</span>
						<span className="v">
							<a
								href={site.cvPdf}
								target="_blank"
								rel="noopener noreferrer">
								Download PDF
							</a>
						</span>
					</li>
					<li>
						<span className="k">Elsewhere</span>
						<span className="v">
							<a
								href={site.social.github}
								target="_blank"
								rel="noopener noreferrer">
								GitHub
							</a>{" "}
							·{" "}
							<a
								href={site.social.scholar}
								target="_blank"
								rel="noopener noreferrer">
								Google Scholar
							</a>{" "}
							·{" "}
							<a
								href={site.social.linkedin}
								target="_blank"
								rel="noopener noreferrer">
								LinkedIn
							</a>
						</span>
					</li>
					<li>
						<span className="k">Based in</span>
						<span className="v">Lahore, Pakistan · UTC+5</span>
					</li>
				</ul>
			</main>

			<SiteFooter />
		</>
	);
}
