import Link from 'next/link';
import { ArrowRight } from '../components/icons';

export default function HomePage() {
	return (
		<section className='mx-auto max-w-3xl text-center'>
			<h1 className='text-3xl sm:text-5xl font-bold tracking-tight'>
				I build and secure modern web apps
			</h1>
			<p className='mt-4 text-lg text-slate-600 dark:text-slate-300'>
				Next.js • TypeScript • Prisma • Supabase • AppSec (Semgrep, ZAP, CSP,
				RLS)
			</p>
			<div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-3'>
				<Link
					className='inline-flex items-center rounded-lg bg-brand px-5 py-3 font-medium tex-white hover:bg-brand-700'
					href='/appsec'
				>
					I secure web apps <ArrowRight className='ml-2 h-4 w-4' />
				</Link>
				<Link
					className='inline-flex items-center rounded-lg border px-5 py-3 font-medium hover:bg-slate-50 dark:hover:bg-slate-800'
					href='/swe'
				>
					I build web apps <ArrowRight className='ml-2 h-4 w-4' />
				</Link>
			</div>
			<div className='mt-10 text-sm text-slate-400'>
				<span className='code-pill'>
					Open to Product Security / AppSec / SWE / Pentesting{' '}
				</span>
			</div>
		</section>
	);
}
