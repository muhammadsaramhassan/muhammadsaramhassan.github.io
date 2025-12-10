import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-muted py-8">
			<div className="max-w-[900px] mx-auto px-6">
				<div className="flex justify-between items-center">
					<p className="text-sm text-muted">© 2025 Your Name</p>
					<div className="flex space-x-4">
						<Link href="/rss" className="text-sm text-muted hover:text-text">
							RSS
						</Link>
						<Link
							href="/contact"
							className="text-sm text-muted hover:text-text">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
