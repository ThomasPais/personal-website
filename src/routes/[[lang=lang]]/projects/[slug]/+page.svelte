<script lang="ts">
	import { formatDate } from '$lib/utils'

	import Clock from '~icons/tabler/clock'

	import * as m from '$paraglide/messages'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<h1>{data.meta.title}</h1>
	<div class="info">
		<div class="dates">
			<span class="published">{formatDate(data.meta.publishedDate)}</span>
			|
			<span class="updated">Last updated: {formatDate(data.meta.updatedDate)}</span>
		</div>

		<span class="reading"><Clock width="1rem" height="1rem" />{data.meta.readingTime} min</span>
	</div>

	<!-- Categories -->
	<div class="categories">
		{#each data.meta.categories as category}
			<button class="category">{category}</button>
		{/each}
	</div>

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	h1 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 700;
		margin-bottom: 0;
	}

	.info {
		margin-top: 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.875rem;
	}

	.published {
		color: var(--muted-foreground);
	}

	.reading {
		color: var(--muted-foreground);
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.categories {
		margin-top: 1rem;
		margin-bottom: 3rem;
		display: flex;
		gap: 0.5rem;
	}

	.category {
		cursor: pointer;
		padding-block: 0.25rem;
		padding-inline: 0.75rem;
		border-radius: 0.25rem;
		border: none;
		display: flex;
		gap: 0.25rem;
		align-items: center;
		text-transform: capitalize;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		background-color: var(--secondary);
	}

	.category:hover {
		background-color: var(--border);
	}
</style>
