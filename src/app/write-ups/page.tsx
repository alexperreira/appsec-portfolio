import { getAllPosts } from '@/lib/content';
import PostCard from '@/components/PostCard';

export const metadata = { title: 'Write-ups' };

export default async function WriteUpsPage() {
	const posts = await getAllPosts();
	return (
		<section>
			<h1 className='text-3xl font-bold'>Write-ups</h1>
			<div className='mt-8 grid sm:grid-cols-2 gap-6'>
				{posts.map((post) => (
					<PostCard key={post.slug} item={post} />
				))}
			</div>
		</section>
	);
}
