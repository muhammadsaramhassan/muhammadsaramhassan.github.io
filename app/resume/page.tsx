export default function Resume() {
	return (
		<div className="max-w-[900px] mx-auto px-6 py-12">
			<h1 className="text-3xl font-serif mb-8"><b>Resume</b></h1>
			<p className="text-base text-muted mb-6">You can preview my resume here:</p>
			<iframe
				src="/resume_msaram.pdf"
				width="100%"
				height="600"
				className="border rounded-md mb-6"></iframe>
			<p className="text-base text-muted mb-6">or download it:</p>
			<a
				href="/resume_msaram.pdf"
				className="inline-block px-4 py-2 border border-text text-text rounded-md text-sm hover:bg-text hover:text-background">
				Download PDF
			</a>
		</div>
	);
}
