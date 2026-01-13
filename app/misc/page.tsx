export default function Misc() {
	// const personalEssays = [
	// 	{
	// 		title: "On becoming a researcher",
	// 		date: "December 2025",
	// 		preview:
	// 			"Reflections on the transition from undergraduate to PhD student, and what it means to ask good questions...",
	// 		link: "#essay1",
	// 	},
	// 	{
	// 		title: "Why I care about AI ethics",
	// 		date: "October 2025",
	// 		preview:
	// 			"A personal account of how I came to focus on the ethical dimensions of artificial intelligence...",
	// 		link: "#essay2",
	// 	},
	// 	{
	// 		title: "The joy of slow thinking",
	// 		date: "August 2025",
	// 		preview:
	// 			"In an age of instant answers, why I'm learning to sit with questions longer...",
	// 		link: "#essay3",
	// 	},
	// ];
	// const photography = [
	// 	{
	// 		title: "Urban Landscapes",
	// 		description: "Cities I've visited during conferences",
	// 		count: "24 photos",
	// 	},
	// 	{
	// 		title: "Campus Walks",
	// 		description: "Moments from daily walks around campus",
	// 		count: "15 photos",
	// 	},
	// 	{
	// 		title: "Coffee Shops",
	// 		description: "My favorite places to think and write",
	// 		count: "12 photos",
	// 	},
	// ];
	// const projects = [
	// 	{
	// 		title: "Reading Notes Archive",
	// 		description:
	// 			"Public notes from papers, books, and articles I've read. A work in progress.",
	// 		link: "#notes",
	// 		status: "ongoing",
	// 	},
	// 	{
	// 		title: "Philosophy of Computing Course",
	// 		description:
	// 			"Materials from a course I designed on philosophical questions in computing",
	// 		link: "#course",
	// 		status: "complete",
	// 	},
	// 	{
	// 		title: "Creative AI Experiments",
	// 		description: "Small artistic projects exploring generative systems",
	// 		link: "#experiments",
	// 		status: "sporadic",
	// 	},
	// ];
	// return (
	// 	<div className="max-w-[800px] mx-auto px-6 md:px-12 py-16">
	// 		<h1 className="text-5xl font-light mb-4">misc</h1>
	// 		<p className="text-lg text-text-secondary mb-12">
	// 			Personal essays, side projects, and other miscellany that doesn't fit
	// 			neatly into academic categories.
	// 		</p>
	// 		{/* Personal Essays */}
	// 		<section className="mb-16">
	// 			<h2 className="text-3xl mb-6">personal essays</h2>
	// 			<hr className="mb-8" />
	// 			<div className="space-y-8">
	// 				{personalEssays.map((essay, idx) => (
	// 					<article key={idx} className="border-l-2 border-primary pl-6">
	// 						<h3 className="text-xl font-sans font-medium mb-2">
	// 							<a
	// 								href={essay.link}
	// 								className="text-primary hover:text-primary-hover">
	// 								{essay.title}
	// 							</a>
	// 						</h3>
	// 						<p className="text-sm text-text-muted mb-3">{essay.date}</p>
	// 						<p className="text-base text-text-secondary">{essay.preview}</p>
	// 					</article>
	// 				))}
	// 			</div>
	// 		</section>
	// 		{/* Side Projects */}
	// 		<section className="mb-16">
	// 			<h2 className="text-3xl mb-6">side projects</h2>
	// 			<hr className="mb-8" />
	// 			<div className="space-y-6">
	// 				{projects.map((project, idx) => (
	// 					<article key={idx}>
	// 						<div className="flex items-baseline gap-3 mb-2">
	// 							<h3 className="text-lg font-sans font-medium">
	// 								<a
	// 									href={project.link}
	// 									className="text-primary hover:text-primary-hover">
	// 									{project.title}
	// 								</a>
	// 							</h3>
	// 							<span className="text-xs px-2 py-1 rounded bg-gray-100 text-text-muted">
	// 								{project.status}
	// 							</span>
	// 						</div>
	// 						<p className="text-base text-text-secondary">
	// 							{project.description}
	// 						</p>
	// 					</article>
	// 				))}
	// 			</div>
	// 		</section>
	// 		{/* Photography */}
	// 		<section className="mb-16">
	// 			<h2 className="text-3xl mb-6">photography</h2>
	// 			<hr className="mb-8" />
	// 			<p className="text-base text-text-secondary mb-6">
	// 				I take photos as a way of paying attention. Here are some collections:
	// 			</p>
	// 			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
	// 				{photography.map((collection, idx) => (
	// 					<div
	// 						key={idx}
	// 						className="border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
	// 						<div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-text-muted">
	// 							📷
	// 						</div>
	// 						<h3 className="text-lg font-sans font-medium mb-2">
	// 							{collection.title}
	// 						</h3>
	// 						<p className="text-sm text-text-secondary mb-2">
	// 							{collection.description}
	// 						</p>
	// 						<p className="text-xs text-text-muted">{collection.count}</p>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</section>
	// 		{/* Fun Facts */}
	// 		<section className="mb-16">
	// 			<h2 className="text-3xl mb-6">fun facts</h2>
	// 			<hr className="mb-8" />
	// 			<ul className="space-y-3 text-base">
	// 				<li>☕ I've tried over 50 different coffee shops in my city</li>
	// 				<li>📚 I keep a commonplace book of interesting quotes and ideas</li>
	// 				<li>🎵 I play piano (badly) to decompress after long days</li>
	// 				<li>
	// 					🌱 I'm attempting to keep houseplants alive (success rate: 60%)
	// 				</li>
	// 				<li>🚶 I do my best thinking while walking</li>
	// 				<li>
	// 					🎨 I believe in the importance of making things with your hands
	// 				</li>
	// 			</ul>
	// 		</section>
	// 		{/* Currently */}
	// 		<section className="mb-16">
	// 			<h2 className="text-3xl mb-6">currently</h2>
	// 			<hr className="mb-8" />
	// 			<div className="space-y-4 text-base">
	// 				<div>
	// 					<h3 className="font-sans font-medium text-text-muted mb-1">
	// 						Reading:
	// 					</h3>
	// 					<p className="text-text-secondary">
	// 						<em>The Dawn of Everything</em> by David Graeber & David Wengrow
	// 					</p>
	// 				</div>
	// 				<div>
	// 					<h3 className="font-sans font-medium text-text-muted mb-1">
	// 						Watching:
	// 					</h3>
	// 					<p className="text-text-secondary">
	// 						Classic Criterion Collection films
	// 					</p>
	// 				</div>
	// 				<div>
	// 					<h3 className="font-sans font-medium text-text-muted mb-1">
	// 						Learning:
	// 					</h3>
	// 					<p className="text-text-secondary">
	// 						Trying to get better at data visualization
	// 					</p>
	// 				</div>
	// 				<div>
	// 					<h3 className="font-sans font-medium text-text-muted mb-1">
	// 						Thinking about:
	// 					</h3>
	// 					<p className="text-text-secondary">
	// 						What it means to live well with technology
	// 					</p>
	// 				</div>
	// 			</div>
	// 		</section>
	// 		<hr className="my-8" />
	// 		<p className="text-sm text-text-muted italic">
	// 			This page exists because not everything worth sharing fits into a
	// 			traditional academic portfolio. Sometimes we need space for the
	// 			in-between things.
	// 		</p>
	// 	</div>
	// );
	return (
		<div className="min-h-screen flex items-center justify-center">
			<p className="text-2xl text-center">
				{
					"This page is under construction. Check back soon for more miscellany!"
				}
			</p>
		</div>
	);
}
