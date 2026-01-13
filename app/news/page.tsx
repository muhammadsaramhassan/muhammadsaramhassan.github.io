export default function News() {
	const allNews = [
		{
			date: "Dec 20, 2025",
			content:
				"Paper accepted to <a href='#' class='text-primary hover:text-primary-hover'>EMNLP'2025</a>! We'll be presenting our work on the role of tasks in integrating knowledge in LLMs.",
		},
		{
			date: "Nov 15, 2025",
			content:
				"Gave a talk at <a href='#' class='text-primary hover:text-primary-hover'>Stanford HCI Seminar</a> on human-AI collaboration. Thanks for the thoughtful questions!",
		},
		{
			date: "Oct 1, 2025",
			content:
				"Started as a PhD student at <a href='#' class='text-primary hover:text-primary-hover'>University Name</a>. Excited to begin this journey!",
		},
		{
			date: "Sep 12, 2025",
			content:
				"Gave a talk at <a href='#' class='text-primary hover:text-primary-hover'>MIT Media Lab</a> on ethics of AI-mediated communication.",
		},
		{
			date: "Aug 15, 2025",
			content:
				"Attended <a href='#' class='text-primary hover:text-primary-hover'>Summer School on AI Ethics</a> in Berlin. Met wonderful researchers from around the world.",
		},
		{
			date: "Jul 3, 2025",
			content:
				"Our paper on AI writing assistants was featured in <a href='#' class='text-primary hover:text-primary-hover'>Tech Review</a>.",
		},
		{
			date: "Jun 14, 2025",
			content:
				"Received <a href='#' class='text-primary hover:text-primary-hover'>Best Paper Honorable Mention</a> at CSCW 2024! So grateful to my co-authors.",
		},
		{
			date: "May 20, 2025",
			content:
				"Completed summer internship at <a href='#' class='text-primary hover:text-primary-hover'>Tech Company AI Lab</a>. Learned so much about industry research.",
		},
		{
			date: "Apr 8, 2025",
			content:
				"Awarded <a href='#' class='text-primary hover:text-primary-hover'>NSF Graduate Research Fellowship</a>. Thank you to everyone who supported my application!",
		},
		{
			date: "Mar 15, 2025",
			content:
				"Paper accepted to <a href='#' class='text-primary hover:text-primary-hover'>DIS 2024</a> on agency and authenticity in AI systems.",
		},
		{
			date: "Feb 1, 2025",
			content:
				"Started organizing the <a href='#' class='text-primary hover:text-primary-hover'>HCI Reading Group</a> at our department. First meeting next week!",
		},
		{
			date: "Jan 12, 2025",
			content:
				"Joined as a reviewer for <a href='#' class='text-primary hover:text-primary-hover'>CHI 2026</a> and <a href='#' class='text-primary hover:text-primary-hover'>CSCW 2025</a>.",
		},
		{
			date: "Dec 10, 2024",
			content:
				"Presented at <a href='#' class='text-primary hover:text-primary-hover'>CSCW Doctoral Consortium</a> in Indianapolis. Great feedback from mentors!",
		},
		{
			date: "Nov 5, 2024",
			content:
				"Paper on ethical AI design accepted to <a href='#' class='text-primary hover:text-primary-hover'>CSCW 2024</a>.",
		},
		{
			date: "Oct 15, 2024",
			content:
				"Volunteered at <a href='#' class='text-primary hover:text-primary-hover'>CHI 2024</a> in Hamburg. Amazing conference!",
		},
		{
			date: "Sep 1, 2024",
			content:
				"Started teaching assistant position for CS 101. Excited to work with students!",
		},
		{
			date: "Aug 1, 2024",
			content:
				"Moved to <a href='#' class='text-primary hover:text-primary-hover'>University City</a> for grad school. New adventures ahead!",
		},
		{
			date: "Jun 1, 2024",
			content:
				"Graduated from <a href='#' class='text-primary hover:text-primary-hover'>Undergraduate University</a> summa cum laude. Thank you to all my mentors!",
		},
		{
			date: "Apr 15, 2024",
			content:
				"Accepted PhD offer from <a href='#' class='text-primary hover:text-primary-hover'>University Name</a> to work with Prof. Jane Advisor!",
		},
		{
			date: "Mar 10, 2024",
			content:
				"Received <a href='#' class='text-primary hover:text-primary-hover'>Undergraduate Research Award</a> for senior thesis on AI ethics.",
		},
	];

	return (
		<div className="max-w-[800px] mx-auto px-6 md:px-12 py-16">
			<h1 className="text-5xl font-light mb-4">news</h1>
			<p className="text-lg text-text-secondary mb-12">
				Updates on my research, talks, awards, and other milestones.
			</p>

			<hr className="mb-8" />

			<div className="space-y-4">
				{allNews.map((item, index) => (
					<div
						key={index}
						className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-3 border-b border-gray-100 last:border-b-0">
						<div className="flex-shrink-0 sm:w-32 text-sm text-text-muted font-sans">
							{item.date}
						</div>
						<div className="flex-1 text-base">
							<span dangerouslySetInnerHTML={{ __html: item.content }} />
						</div>
					</div>
				))}
			</div>

			<hr className="mt-8" />

			<p className="text-sm text-text-muted mt-6">
				Archive goes back to {allNews[allNews.length - 1].date.split(" ").pop()}
			</p>
		</div>
	);
}
