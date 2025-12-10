import { getPostData, getSortedPostsData } from "@/lib/posts";

export async function generateStaticParams() {
	const posts = getSortedPostsData();
	return posts.map((post) => ({
		slug: post.id,
	}));
}

export default async function Post({ params }: { params: { slug: string } }) {
	const postData = await getPostData(params.slug);
	return (
		<div className="max-w-[900px] mx-auto px-6 py-12">
			<article>
				<header className="mb-8">
					<div className="text-sm text-muted uppercase tracking-wider mb-2">
						{postData.date} • {postData.author}
					</div>
					<h1 className="text-3xl font-serif leading-tight">
						{postData.title}
					</h1>
				</header>
				<div
					className="prose max-w-none"
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</div>
	);
}
