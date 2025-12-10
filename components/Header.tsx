"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 w-full bg-background border-b border-muted z-10">
			<div className="max-w-[900px] mx-auto px-6 py-4 flex justify-between items-center">
				<a href="#main" className="sr-only">
					Skip to Content
				</a>
				<Link href="/" className="text-xl font-serif font-bold">
					Muhammad Saram Hassan
				</Link>
				<nav className="hidden md:flex space-x-6">
					<Link href="/about" className="text-sm hover:text-muted">
						About
					</Link>
					<Link href="/blog" className="text-sm hover:text-muted">
						Blog
					</Link>
					<Link href="/resume" className="text-sm hover:text-muted">
						Resume
					</Link>
				</nav>
				<div className="flex items-center space-x-4">
					<a
						href="https://www.linkedin.com/in/muhammadsaramhassan/"
						className="text-sm">
						LinkedIn
					</a>
					<a href="https://github.com/muhammadsaramhassan" className="text-sm">
						GitHub
					</a>
					<a href="https://www.instagram.com/msaramhassan/" className="text-sm">
						Instagram
					</a>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="md:hidden text-sm">
						{menuOpen ? "Close" : "Open"} Menu
					</button>
				</div>
			</div>
			{menuOpen && (
				<div className="md:hidden bg-background border-t border-muted">
					<nav className="max-w-[900px] mx-auto px-6 py-4 flex flex-col space-y-2">
						<Link href="/about" className="text-sm hover:text-muted">
							About
						</Link>
						<Link href="/blog" className="text-sm hover:text-muted">
							Blog
						</Link>
						<Link href="/resume" className="text-sm hover:text-muted">
							Resume
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
