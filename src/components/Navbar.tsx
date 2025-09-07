import Link from 'next/link';
export default function Navbar() {
	return (
		<header className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-slate-950/70'>
			<div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14'>
				<Link href='/' className='font-semibold'>
					Alex Perreira
				</Link>
				<nav className='flex items-center gap-4 text-sm'>
					<Link href='/appsec' className='hover:underline'>
						AppSec
					</Link>
					<Link href='/swe' className='hover:underline'>
						SWE
					</Link>
					<Link href='/case-studies' className='hover:underline'>
						Case Studies
					</Link>
					<Link href='/write-ups' className='hover:underline'>
						Write-ups
					</Link>
					<Link href='/about' className='hover:underline'>
						About
					</Link>
				</nav>
			</div>
		</header>
	);
}
