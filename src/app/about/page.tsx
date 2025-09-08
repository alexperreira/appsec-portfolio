export const metadata = { title: 'About' };

export default function AboutPage() {
	return (
		<section className='max-w-2xl'>
			<h1 className='text-3xl font-bold'>About</h1>
			<p className='mt-4 text-slate-600 dark:text-slate-300'>
				I'm Alex. I build and secure web apps with Next.js, TypeScript, Prisma,
				and Supabase. I focus on practical AppSec: threat modeling, code review,
				exploit → patch, and developer enablement (Semgrep/ZAP CI, CSP, rate
				limiting, RLS).
			</p>
			<ul className='mt-6 list-disc pl-6 tex-slate-600 dark:text-slate-300'>
				<li>
					Email:{' '}
					<a href='mailto:alexjop@proton.me' className='underline'>
						alexjop@proton.me
					</a>
				</li>
				<li>
					GitHub:{' '}
					<a
						href='https://github.com/alexperreira'
						className='underline'
						target='_blank'
						rel='noreferrer'
					>
						github.com/alexperreira/
					</a>
				</li>
				<li>
					LinkedIn:{' '}
					<a
						href='https://linkedin.com/in/alexperr'
						target='_blank'
						rel='noreferrer'
						className='underline'
					>
						linkedin.com/in/alexperr/
					</a>
				</li>
				<li>
					Resume:{' '}
					<a
						href='/cyber-sec-resume.pdf'
						target='_blank'
						rel='noreferrer'
						className='underline'
					>
						Download PDF
					</a>
				</li>
			</ul>
		</section>
	);
}
