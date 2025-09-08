import Link from 'next/link';

type Item = {
	slug: string;
	title: string;
	summary?: string;
	date?: string;
	tags?: string[];
};

export default function CaseStudyCard({ item }: { item: Item }) {
	return (
		<Link
			href={`/case-studies/${item.slug}`}
			className='block rounded-lg border p-5 hover:bg-slate-50 dark:hover:bg-slate-900'
		>
			<div className='flex items-center justify-between gap-4'>
				<h3 className='text-lg font-semibold'>{item.title}</h3>
				<span className='text-xs text-slate-500'>{item.date}</span>
			</div>
			<p className='mt-2 text-slate-600 dark:text-slate-300 line-clamp-3'>
				{item.summary}
			</p>
			{item.tags && (
				<div className='mt-3 flex flex-wrap gap-2'>
					{item.tags.map((t) => (
						<span key={t} className='code-pill'>
							{t}
						</span>
					))}
				</div>
			)}
		</Link>
	);
}
