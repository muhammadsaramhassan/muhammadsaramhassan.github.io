"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/#about", label: "about" },
	{ href: "/#research", label: "research" },
	{ href: "/writing", label: "writing" },
	{ href: "/contact", label: "contact" },
	{
		href: "/Muhammad_Saram_Hassan_s_Resume.pdf",
		label: "cv ↗",
		external: true,
	},
];

export default function Masthead() {
	const pathname = usePathname();

	function isActive(href: string) {
		if (href === "/writing") return pathname.startsWith("/writing");
		return false;
	}

	return (
		<header className="masthead">
			<div className="mast-inner">
				<Link href="/" className="mast-brand">
					M. Saram Hassan
				</Link>
				<nav className="mast-nav">
					{navLinks.map(({ href, label, external }) => (
						<Link
							key={href}
							href={href}
							className={isActive(href) ? "active" : ""}
							{...(external
								? { target: "_blank", rel: "noopener noreferrer" }
								: {})}>
							{label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
