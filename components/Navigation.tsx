"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [collectionsOpen, setCollectionsOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	const navLinks = [
		{ href: "/", label: "about" },
		{ href: "/agenda", label: "agenda" },
		{ href: "/cv", label: "cv" },
	];

	const collections = [
		{ href: "/me-like", label: "me like" },
		{ href: "/misc", label: "misc" },
	];

	// Track scroll progress
	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const scrollableHeight = documentHeight - windowHeight;
			const progress = (scrollTop / scrollableHeight) * 100;
			setScrollProgress(Math.min(progress, 100));
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial calculation
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Progress bar */}
			<div className="fixed top-0 left-0 right-0 h-1 bg-border/30 z-[60]">
				<div
					className="h-full bg-primary transition-all duration-150 ease-out"
					style={{ width: `${scrollProgress}%` }}
				/>
			</div>

			<nav className="fixed top-0 left-0 right-0 bg-[#1a0a0a]/95 backdrop-blur-sm border-b border-border py-5 z-50">
				<div className="max-w-[800px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8 text-[15px]">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link, i) => (
							<Link
								key={link.href}
								href={link.href}
								className={`no-underline transition-colors ${
									pathname === link.href
										? "text-primary"
										: "text-text-tertiary hover:text-primary"
								}`}>
								{link.label}
								{pathname === link.href && (
									<span className="text-text-muted text-xs ml-1">
										(current)
									</span>
								)}
							</Link>
						))}

						{/* Collections Dropdown */}
						<div className="relative">
							<button
								onClick={() => setCollectionsOpen(!collectionsOpen)}
								className={`no-underline transition-colors ${
									collections.some((c) => c.href === pathname)
										? "text-primary"
										: "text-text-tertiary hover:text-primary"
								}`}>
								collections ▾
							</button>

							{collectionsOpen && (
								<>
									<div
										className="fixed inset-0 z-10"
										onClick={() => setCollectionsOpen(false)}
									/>
									<div className="absolute left-0 mt-2 w-40 bg-[#2a1515] border border-border rounded-md shadow-lg z-20">
										{collections.map((link) => (
											<Link
												key={link.href}
												href={link.href}
												className={`block px-4 py-2 text-sm ${
													pathname === link.href
														? "text-primary bg-primary/10"
														: "text-text-secondary hover:text-primary hover:bg-primary/5"
												}`}
												onClick={() => setCollectionsOpen(false)}>
												{link.label}
											</Link>
										))}
									</div>
								</>
							)}
						</div>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden text-foreground focus:outline-none"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor">
							{mobileMenuOpen ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<path d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>

					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden absolute top-full left-0 right-0 bg-[#1a0a0a] border-t border-border px-6 py-4 space-y-3">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`block text-base ${
										pathname === link.href
											? "text-primary font-medium"
											: "text-text-secondary"
									}`}
									onClick={() => setMobileMenuOpen(false)}>
									{link.label}
									{pathname === link.href && (
										<span className="text-text-muted text-sm ml-1">
											(current)
										</span>
									)}
								</Link>
							))}

							<div className="pt-2 border-t border-border">
								<p className="text-xs text-text-muted mb-2">COLLECTIONS</p>
								{collections.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`block text-base py-1 ${
											pathname === link.href
												? "text-primary font-medium"
												: "text-text-secondary"
										}`}
										onClick={() => setMobileMenuOpen(false)}>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Spacer to prevent content from going under fixed nav */}
			<div className="h-[72px]" />
		</>
	);
}
