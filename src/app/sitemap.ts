import { getAllCaseStudies, getAllPosts } from '@/lib/content';

export default async function sitemap() {
	const base = 'https://alexhacks.net';
	const routes = [
		'',
		'/about',
		'/appsec',
		'/swe',
		'/case-studies',
		'/write-ups',
	].map((p) => ({
		url: base + p,
		lastModified: new Date().toISOString(),
	}));
	const cs = (await getAllCaseStudies()).map((i) => ({
		url: `${base}/case-studies/${i.slug}`,
		lastModified: i.dateISO,
	}));
	const posts = (await getAllPosts()).map((i) => ({
		url: `${base}/write-ups/${i.slug}`,
		lastModified: i.dateISO,
	}));
	return [...routes, ...cs, ...posts];
}
