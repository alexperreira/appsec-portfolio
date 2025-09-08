import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/content';

export const metadata = { title: 'Software Engineering' };

export default async function SWEPage() {
	const posts = await getAllPosts({ tag: 'swe' });

	return (
		<section>
			<h1 className='text-3xl font-bold'>Software Engineering</h1>
			<p className='mt-3 text-slate-600 dark:text-slate-300 max-w-2xl'>
				Shipping features securely by default: auth, data modeling, CSP, rate
				limiting, RLS, tests, and CI.
			</p>
			<div className='mt-8 grid sm:grid-cols-2 gap-6'>
				{posts.map((post) => (
					<PostCard key={post.slug} item={post} />
				))}
			</div>
		</section>
	);
}
