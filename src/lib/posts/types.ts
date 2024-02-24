export type Categories = 'sveltekit' | 'svelte' | 'unity'

export type Post = {
	title: string
	slug: string
	description: string
	publishedDate: string
	updatedDate: string
	readingTime: number
	categories: Categories[]
	published: boolean
}
