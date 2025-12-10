import Link from "next/link";

interface Post {
	id: string;
	title: string;
	date: string;
	author: string;
	summary: string;
}

interface PostListProps {
	posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
	return (
		<div className="space-y-8">
			{posts.map((post) => (
				<article key={post.id} className="border-b border-muted pb-8">
					<div className="text-sm text-muted uppercase tracking-wider mb-2">
						{post.date} • {post.author}
					</div>
					<h2 className="text-2xl font-serif leading-tight mt-2 mb-2">
						{post.title}
					</h2>
					<p className="text-base text-muted mb-3">{post.summary}</p>
					<Link
						href={`/post/${post.id}`}
						className="text-sm underline decoration-muted hover:decoration-text">
						Read More
					</Link>
				</article>
			))}
		</div>
	);
}
