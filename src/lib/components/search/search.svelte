<script lang="ts">
	import { createTagsInput, melt } from '@melt-ui/svelte';
	import X from '~icons/tabler/x';
	import Search from '~icons/tabler/search';

	const {
		elements: { root, input, tag, deleteTrigger, edit },
		states: { tags }
	} = createTagsInput({
		unique: true,
		add(tag) {
			return { id: tag, value: tag };
		},
		addOnPaste: true
	});
</script>

<div class="container">
	<div use:melt={$root} class="a">
		{#each $tags as t}
			<div use:melt={$tag(t)} class="b">
				<span class="c">{t.value}</span>
				<button use:melt={$deleteTrigger(t)} class="d">
					<X width="1rem" height="1rem" />
				</button>
			</div>
			<div use:melt={$edit(t)} class="e" />
		{/each}

		<input use:melt={$input} type="text" placeholder="Not implemented yet" class="f" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: flex-start;
	}

	.a {
		display: flex;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.625rem;
		border-radius: 0.375rem;
		background-color: #ffffff;
	}

	.b {
		display: flex;
		overflow: hidden;
		align-items: center;
		border-radius: 0.375rem;
	}

	.c {
		display: flex;
		padding-left: 0.375rem;
		padding-right: 0.375rem;
		align-items: center;
		border-right-width: 1px;
	}

	.d {
		display: flex;
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		align-items: center;
		height: 100%;
	}

	.e {
		display: flex;
		overflow: hidden;
		padding-left: 0.375rem;
		padding-right: 0.375rem;
		align-items: center;
		border-radius: 0.375rem;
	}

	.f {
		flex-basis: 0px;
		border-width: 0;
		outline-style: none;
		color: #000000;
	}
</style>
