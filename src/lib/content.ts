import fs from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { resolve } from 'node:path';

async function resolveContentRoot(): Promise<string> {
	const roots = [
		path.join(process.cwd(), 'content'),
		path.join(process.cwd(), 'src', 'content'),
		path.join(process.cwd(), 'source', 'content'),
		path.join(process.cwd(), 'app', 'content'),
		path.join(process.cwd(), 'src', 'app', 'content'),
	];
	for (const p of roots) {
		try {
			const stat = await fs.stat(p);
			if (stat.isDirectory()) return p;
		} catch {}
	}
	return path.join(process.cwd(), 'content');
}

const ROOT = await resolveContentRoot();

export type Frontmatter = {
	title: string;
	summary?: string;
	date?: string; // human readable
	tags?: string[];
};

type Meta = {
	slug: string;
	title: string;
	summary?: string;
	date?: string;
	dateISO: string;
	tags?: string[];
};

function parseDate(input?: string) {
	if (!input) return { display: undefined, iso: new Date().toISOString() };
	const d = new Date(input);
	const display = d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
	return { display, iso: d.toISOString() };
}

async function listDir(dir: string) {
	try {
		const entries = await fs.readdir(dir);
		return entries.filter((f) => f.endsWith('.mdx'));
	} catch {
		return [];
	}
}

export async function getAllCaseStudies(): Promise<Meta[]> {
	const dir = path.join(ROOT, 'case-studies');
	const files = await listDir(dir);
	const items = await Promise.all(
		files.map(async (file) => {
			const raw = await fs.readFile(path.join(dir, file), 'utf8');
			const { data } = matter(raw);
			const { display, iso } = parseDate(data.date);
			return {
				slug: file.replace(/\.mdx$/, ''),
				title: data.title ?? 'Untitled',
				summary: data.summary ?? '',
				date: display,
				dateISO: iso,
				tags: data.tags ?? [],
			} as Meta;
		})
	);
	return items.sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export async function getAllPosts({ tag }: { tag?: string } = {}): Promise<
	Meta[]
> {
	const dir = path.join(ROOT, 'posts');
	const files = await listDir(dir);
	const items = await Promise.all(
		files.map(async (file) => {
			const raw = await fs.readFile(path.join(dir, file), 'utf8');
			const { data } = matter(raw);
			const { display, iso } = parseDate(data.date);
			return {
				slug: file.replace(/\.mdx$/, ''),
				title: data.title ?? 'Untitled',
				summary: data.summary ?? '',
				date: display,
				dateISO: iso,
				tags: data.tags ?? [],
			} as Meta;
		})
	);
	const filtered = tag ? items.filter((i) => i.tags?.includes(tag)) : items;
	return filtered.sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export async function getCaseStudyBySlug(slug: string) {
	const filePath = path.join(ROOT, 'case-studies', `${slug}.mdx`);
	const raw = await fs.readFile(filePath, 'utf8');
	const { content, data } = matter(raw);
	const { content: mdxContent } = await compileMDX<{
		frontmatter: Frontmatter;
	}>({
		source: content,
		options: {
			parseFrontmatter: false,
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					[rehypeAutolinkHeadings, { behavior: 'append' }],
				],
			},
		},
	});

	return {
		frontmatter: data as Frontmatter,
		content: mdxContent,
		components: {},
	};
}
export async function getPostBySlug(slug: string) {
	const filePath = path.join(ROOT, 'posts', `${slug}.mdx`);
	const raw = await fs.readFile(filePath, 'utf8');
	const { content, data } = matter(raw);
	const { content: mdxContent } = await compileMDX<{
		frontmatter: Frontmatter;
	}>({
		source: content,
		options: {
			parseFrontmatter: false,
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					[rehypeAutolinkHeadings, { behavior: 'append' }],
				],
			},
		},
	});

	return {
		frontmatter: data as Frontmatter,
		content: mdxContent,
		components: {},
	};
}
