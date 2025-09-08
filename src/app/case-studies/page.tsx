import { getAllCaseStudies } from '@/lib/content';
import CaseStudyCard from '@/components/CaseStudyCard';

export const metadata = { title: 'Case Studies' };

export default async function CaseStudiesIndex() {
	const items = await getAllCaseStudies();
	return (
		<section>
			<h1 className='text-3xl font-bold'>Case Studies</h1>
			<div className='mt-8 grid sm:grid-cols-2 gap-6'>
				{items.map((item) => (
					<CaseStudyCard key={item.slug} item={item} />
				))}
			</div>
		</section>
	);
}
