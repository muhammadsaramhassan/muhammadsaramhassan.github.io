import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
	slug: string;
	title: string;
	dek?: string;
	date: string; // ISO: "2026-04-18"
	tags: string[];
	readTime: number; // minutes (rounded)
	pinned?: boolean;
	featured?: boolean;
	/** Display date: "APR 18" */
	displayDate: string;
	displayDateFull: string; // "APR 18, 2026"
	year: number;
}

export interface Post extends PostMeta {
	content: string;
}

function formatDate(iso: string): {
	display: string;
	displayFull: string;
	year: number;
} {
	const d = new Date(iso);
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];
	const m = months[d.getUTCMonth()];
	const day = String(d.getUTCDate()).padStart(2, "0");
	const yr = d.getUTCFullYear();
	return {
		display: `${m} ${day}`,
		displayFull: `${m} ${day}, ${yr}`,
		year: yr,
	};
}

export function getAllPosts(): PostMeta[] {
	if (!fs.existsSync(POSTS_DIR)) return [];

	const files = fs
		.readdirSync(POSTS_DIR)
		.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

	const posts = files.map((filename) => {
		const slug = filename.replace(/\.(md|mdx)$/, "");
		const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
		const { data, content } = matter(raw);
		const rt = readingTime(content);
		const { display, displayFull, year } = formatDate(
			data.date ?? "2024-01-01",
		);

		return {
			slug,
			title: data.title ?? slug,
			dek: data.dek,
			date: data.date ?? "2024-01-01",
			tags: data.tags ?? [],
			readTime: Math.max(1, Math.round(rt.minutes)),
			pinned: data.pinned ?? false,
			featured: data.featured ?? false,
			displayDate: display,
			displayDateFull: displayFull,
			year,
		} satisfies PostMeta;
	});

	// Sort newest first
	return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post | null {
	const exts = [".md", ".mdx"];
	for (const ext of exts) {
		const filepath = path.join(POSTS_DIR, `${slug}${ext}`);
		if (!fs.existsSync(filepath)) continue;

		const raw = fs.readFileSync(filepath, "utf-8");
		const { data, content } = matter(raw);
		const rt = readingTime(content);
		const { display, displayFull, year } = formatDate(
			data.date ?? "2024-01-01",
		);

		return {
			slug,
			title: data.title ?? slug,
			dek: data.dek,
			date: data.date ?? "2024-01-01",
			tags: data.tags ?? [],
			readTime: Math.max(1, Math.round(rt.minutes)),
			pinned: data.pinned ?? false,
			featured: data.featured ?? false,
			displayDate: display,
			displayDateFull: displayFull,
			year,
			content,
		};
	}
	return null;
}

export function getPostsByYear(posts: PostMeta[]): Map<number, PostMeta[]> {
	const map = new Map<number, PostMeta[]>();
	for (const p of posts) {
		const list = map.get(p.year) ?? [];
		list.push(p);
		map.set(p.year, list);
	}
	return map;
}

export function getAllTags(posts: PostMeta[]): Map<string, number> {
	const counts = new Map<string, number>();
	for (const p of posts) {
		for (const t of p.tags) {
			counts.set(t, (counts.get(t) ?? 0) + 1);
		}
	}
	return counts;
}

export function getAllSlugs(): string[] {
	if (!fs.existsSync(POSTS_DIR)) return [];
	return fs
		.readdirSync(POSTS_DIR)
		.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
		.map((f) => f.replace(/\.(md|mdx)$/, ""));
}
