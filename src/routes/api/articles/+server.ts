import { json } from '@sveltejs/kit'
import type { Post } from '$lib/posts/types'

async function getArticles() {
	let posts: Post[] = []

	const paths = import.meta.glob('$lib/posts/articles/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.published && posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) =>
			new Date(second.publishedDate).getTime() - new Date(first.publishedDate).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getArticles()
	return json(posts)
}
