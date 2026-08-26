"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navLinks = [
	{ href: "/", label: "home" },
	{ href: "/other", label: "other" },
	{ href: "/contact", label: "contact" },
];

export default function Masthead() {
	const pathname = usePathname();

	function isActive(href: string) {
		return href === "/" ? pathname === "/" : pathname.startsWith(href);
	}

	return (
		<header className="masthead wrap">
			<div className="mast-top">
				<div>
					<Link href="/" className="mast-brand">
						{site.name}
					</Link>
					<div className="mast-tagline">
						Security of autonomous LLM agents · LUMS &rsquo;26
					</div>
				</div>
			</div>
			<nav className="tab-nav" aria-label="Main">
				{navLinks.map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						className={isActive(href) ? "active" : ""}
						aria-current={isActive(href) ? "page" : undefined}>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}
