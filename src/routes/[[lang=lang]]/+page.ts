import type { Post } from '$lib/posts/types'

export async function load({ fetch }) {
	// Fetch articles
	const responseArticles = await fetch('api/articles')
	const articles: Post[] = await responseArticles.json()
	const lastArticles: Post[] = articles.slice(-2)

	// Fetch projects
	const responseProjects = await fetch('api/projects')
	const projects: Post[] = await responseProjects.json()
	const lastProjects: Post[] = projects.slice(-2)

	return { lastArticles, lastProjects }
}
