import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/content';
import { Metadata } from 'next';
import { MDXContent } from '../../../components/MDXContent';

export async function generateStaticParams() {
	const items = await getAllCaseStudies();
	return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const doc = await getCaseStudyBySlug(params.slug);
	return {
		title: doc.frontmatter.title,
		description: doc.frontmatter.summary,
	};
}

export default async function CaseStudyPage({
	params,
}: {
	params: { slug: string };
}) {
	const doc = await getCaseStudyBySlug(params.slug);
	return (
		<article className='prose dark:prose-invert max-w-3xl'>
			<h1 className='mb-2'>{doc.frontmatter.title}</h1>
			<p className='text-sm text-slate-500'>
				{doc.frontmatter.date} • {doc.frontmatter.tags?.join(', ')}
			</p>
			<MDXContent source={doc.content} components={doc.components} />
		</article>
	);
}
