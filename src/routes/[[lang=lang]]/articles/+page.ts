import type { Post } from '$lib/posts/types';

export async function load({ fetch }) {
	const response = await fetch('api/articles');
	const posts: Post[] = await response.json();
	return { posts };
}
