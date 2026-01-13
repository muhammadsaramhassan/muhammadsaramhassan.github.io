export default function MeLike() {
	const quotes = [
		{
			text: "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.",
			author: "F. Scott Fitzgerald",
			source: "The Crack-Up",
		},
		{
			text: "I am large, I contain multitudes.",
			author: "Walt Whitman",
			source: "Song of Myself",
		},
		{
			text: "We shape our tools and thereafter our tools shape us.",
			author: "Marshall McLuhan",
		},
		{
			text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
			author: "Ralph Waldo Emerson",
		},
	];

	const articles = [
		{
			title: "How to Do Nothing: Resisting the Attention Economy",
			author: "Jenny Odell",
			link: "https://example.com",
			description:
				"A meditation on the importance of contemplation and care in an age of constant productivity.",
		},
		{
			title: "The Garden and the Stream",
			author: "Mike Caulfield",
			link: "https://example.com",
			description:
				"Two metaphors for how we organize and share knowledge online.",
		},
		{
			title: "Against Optimization",
			author: "Devon Zuegel",
			link: "https://example.com",
			description: "Why constant optimization might not lead to the good life.",
		},
		{
			title: "Turing's Cathedral",
			author: "George Dyson",
			link: "https://example.com",
			description:
				"The origins of the digital universe and what it means for humanity.",
		},
	];

	const blogposts = [
		{
			title: "On Care and Scale in HCI Research",
			author: "Various",
			link: "https://example.com",
			description:
				"Reflections on conducting ethical, caring research at scale.",
		},
		{
			title: "The Case for Friction",
			author: "Various",
			link: "https://example.com",
			description: "Why not everything should be frictionless.",
		},
	];

	const books = [
		{
			title: "The ministry of utmost happiness",
			author: "Arundhati Roy",
			year: "2017",
		},
		{
			title: "White nights",
			author: "Froydor Dostoevsky",
			year: "1848",
		},
		{
			title: "40 rules of love",
			author: "Elif Shafak",
			year: "2009",
		},
		{
			title: "Kite Runner",
			author: "Khaled Hosseini",
			year: "2003",
		},
		{
			title: "Weapons of Math Destruction",
			author: "Cathy O'Neil",
			year: "2016",
		},
	];

	return (
		<div className="max-w-[800px] mx-auto px-6 md:px-12 py-16">
			<h1 className="text-5xl font-light mb-4">me like</h1>
			<p className="text-lg text-text-secondary mb-12">
				Things I find inspiring, thought-provoking, or just delightful.
			</p>

			{/* Quotes */}
			<section className="mb-16">
				<h2 className="text-3xl mb-6">quotes</h2>
				<hr className="mb-8" />

				<div className="space-y-8">
					{quotes.map((quote, idx) => (
						<blockquote
							key={idx}
							className="border-l-4 border-primary pl-6 py-2">
							<p className="text-lg italic mb-3">{quote.text}</p>
							<footer className="text-sm text-text-muted">
								— {quote.author}
								{quote.source && `, ${quote.source}`}
							</footer>
						</blockquote>
					))}
				</div>
			</section>

			{/* Articles
			<section className="mb-16">
				<h2 className="text-3xl mb-6">articles & essays</h2>
				<hr className="mb-8" />

				<div className="space-y-6">
					{articles.map((article, idx) => (
						<article key={idx}>
							<h3 className="text-lg font-sans font-medium mb-1">
								<a
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary-hover">
									{article.title}
								</a>
							</h3>
							<p className="text-sm text-text-muted mb-2">{article.author}</p>
							<p className="text-base text-text-secondary">
								{article.description}
							</p>
						</article>
					))}
				</div>
			</section> */}

			{/* Blogposts */}
			{/* <section className="mb-16">
				<h2 className="text-3xl mb-6">blogposts</h2>
				<hr className="mb-8" />

				<div className="space-y-6">
					{blogposts.map((post, idx) => (
						<article key={idx}>
							<h3 className="text-lg font-sans font-medium mb-1">
								<a
									href={post.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary-hover">
									{post.title}
								</a>
							</h3>
							<p className="text-sm text-text-muted mb-2">{post.author}</p>
							<p className="text-base text-text-secondary">
								{post.description}
							</p>
						</article>
					))}
				</div>

			</section> */}

			{/* Books */}
			<section className="mb-16">
				<h2 className="text-3xl mb-6">books worth reading</h2>
				<hr className="mb-8" />

				<ul className="space-y-3">
					{books.map((book, idx) => (
						<li key={idx} className="flex gap-4">
							<span className="text-base">
								<em>{book.title}</em> by {book.author}
							</span>
							<span className="text-sm text-text-muted">({book.year})</span>
						</li>
					))}
				</ul>
			</section>

			{/* Media */}
			{/* <section className="mb-16">
				<h2 className="text-3xl mb-6">media & podcasts</h2>
				<hr className="mb-8" />

				<ul className="space-y-3">
					<li>
						<a
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:text-primary-hover">
							Your Undivided Attention
						</a>
						<span className="text-text-muted"> — Technology and humanity</span>
					</li>
					<li>
						<a
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:text-primary-hover">
							Ezra Klein Show
						</a>
						<span className="text-text-muted">
							{" "}
							— Deep conversations on ideas
						</span>
					</li>
					<li>
						<a
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:text-primary-hover">
							Philosophy Bites
						</a>
						<span className="text-text-muted">
							{" "}
							— Short interviews with philosophers
						</span>
					</li>
				</ul>
			</section> */}

			<hr className="my-8" />

			<p className="text-sm text-text-muted italic">
				This page is a living document—I update it as I discover new things that
				shift my thinking or bring me joy.
			</p>
		</div>
	);
}
