export default function Footer() {
	return (
		<footer className='border-t py-10 text-sm text-slate-500'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
				<p>© {new Date().getFullYear()} Alex Perreira</p>
				<p>Built with Next.js</p>
			</div>
		</footer>
	);
}
