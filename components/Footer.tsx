export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-6 md:px-12 py-16 border-t border-border mt-16 relative z-10">
			<p className="text-text-dim text-[13px] m-0">
				© Copyright {currentYear} Muhammad Saram Hassan.
				{/* . Words from{" "} */}
				{/* <a
					href="https://www.dictionaryofobscuresorrows.com/"
					className="text-primary no-underline hover:underline"
					target="_blank"
					rel="noopener noreferrer">
					Dictionary of Obscure Sorrows
				</a>
				. */}
			</p>
		</footer>
	);
}
