<script lang="ts">
	import * as m from '$paraglide/messages'

	import Card from '$lib/components/card/Card.svelte'

	export let data
</script>

<h1>{m.$projects()}</h1>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<Card
					title={post.title}
					description={post.description}
					date={post.publishedDate}
					slug={`/projects/${post.slug}`}
				/>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		padding-left: 0;
	}

	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		list-style: none;
	}
</style>
