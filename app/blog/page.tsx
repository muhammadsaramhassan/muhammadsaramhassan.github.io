import { getSortedPostsData } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Blog() {
	const posts = getSortedPostsData();
	return (
		<div className="max-w-[900px] mx-auto px-6 py-12">
			<h1 className="text-3xl font-serif mb-8">Blog</h1>
			<PostList posts={posts} />
		</div>
	);
}
