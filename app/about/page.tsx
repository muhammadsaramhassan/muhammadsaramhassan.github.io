import Link from "next/link";

export default function About() {
	return (
		<div className="max-w-[900px] mx-auto px-6 py-12">
			<h1 className="text-3xl font-serif mb-8">
				<b>About me.</b>
			</h1>
			<div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
				<img
					src="/profile.png"
					alt="Muhammad Saram Hassan"
					className="w-60 h-100 object-cover rounded-md"
				/>
				<div>
					<p className="text-base mt-2 mb-4">
						Hi, I&apos;m Muhammad Saram Hassan. I&apos;m a Computer Science
						Undergrad at LUMS, Pakistan with a concentration in Machine
						Learning.
					</p>
					<p className="text-base mb-4">
						I am currently working as a Research Intern at Technology for People
						Initiative (TPI) where I focus on leveraging AI for social good.
					</p>
					<p className="text-base">
						I particularly am interested in AI safety, alignment and
						interpretability. My goal is to understand and make AI systems more
						understandable and reliable, ensuring they align with human values
						and ethics.
					</p>
					<p className="text-base mt-4">
						You can find more about my research and projects on my blog. For a
						quick summary of my work, you can check out my&nbsp;
						<Link href="/resume" className="underline">
							resume
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
