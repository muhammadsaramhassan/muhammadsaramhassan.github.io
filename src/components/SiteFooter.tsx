import { site } from "@/lib/site";

export default function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="foot-inner">
				<span>© {new Date().getFullYear()} Muhammad Saram Hassan</span>
				<span className="foot-links">
					<a href={`mailto:${site.email}`}>email</a>
					<a
						href={site.social.github}
						target="_blank"
						rel="noopener noreferrer">
						github
					</a>
					<a
						href={site.social.scholar}
						target="_blank"
						rel="noopener noreferrer">
						scholar
					</a>
					<a
						href={site.social.linkedin}
						target="_blank"
						rel="noopener noreferrer">
						linkedin
					</a>
				</span>
			</div>
		</footer>
	);
}
