<script lang="ts">
	import Book from '~icons/tabler/book'
	import Box from '~icons/tabler/box'
	import User from '~icons/tabler/user'

	export let data

	import * as m from '$paraglide/messages'
	import Blockquote from '$lib/components/blockquote/blockquote.svelte'
</script>

<section>
	<h1>{m.$home_title()}</h1>

	<p>
		{m.$home_text()}
	</p>

	<div class="links">
		<a href="/about">
			{m.$about()}
			<User width="1rem" height="1rem" />
		</a>
		<a href="/articles">
			{m.$articles()}
			<Book width="1rem" height="1rem" />
		</a>
		<a href="/projects">
			{m.$projects()}
			<Box width="1rem" height="1rem" />
		</a>
	</div>
</section>

<section>
	<h1>Latest articles</h1>

	{#each data.lastArticles as article}
		<h2>{article.title}</h2>
		<h3>{article.description}</h3>
		<h3>{article.publishedDate}</h3>
	{/each}
</section>

<section>
	<h1>Latest Projects</h1>

	{#each data.lastProjects as project}
		<h2>{project.title}</h2>
		<h3>{project.description}</h3>
		<h3>{project.publishedDate}</h3>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 3rem;
	}

	h1 {
		margin-block: 0;
	}

	p {
		margin-block: 0;
		text-align: justify;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		border-radius: 0.375rem;
		border: 1px solid var(--border);
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	a:hover {
		background-color: var(--accent);
	}
</style>
