import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../../lib/posts/projects/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};

	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
