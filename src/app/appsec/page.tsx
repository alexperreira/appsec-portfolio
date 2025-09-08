import CaseStudyCard from '@/components/CaseStudyCard';
import { getAllCaseStudies } from '@/lib/content';

export const metadata = {
	title: 'AppSec',
	description: 'Case studies and how I work in Product Security / AppSec.',
};

export default async function AppSecPage() {
	const items = await getAllCaseStudies();
	return (
		<section>
			<h1 className='text-3xl font-bold'>Application Security</h1>
			<p className='mt-3 text-slate-600 dark:text-slate-300 max-w-2xl'>
				Threat modeling → code review → exploit → patch → educate. Below are
				proff-based case studies with vuln→fix diffs and CI evidence.
			</p>
			<div className='mt-8 grid sm:grid-cols-2 gap-6'>
				{items.map((item) => (
					<CaseStudyCard key={item.slug} item={item} />
				))}
			</div>
		</section>
	);
}
