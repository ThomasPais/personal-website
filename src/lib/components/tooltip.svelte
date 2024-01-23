<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		forceVisible: true,
		openDelay: 500
	});

	export let text: string;
</script>

<div use:melt={$trigger}>
	<slot />
</div>

{#if $open}
	<div use:melt={$content} transition:fade={{ duration: 100 }} class="tooltip">
		<div use:melt={$arrow} />
		{text}
	</div>
{/if}

<style>
	.tooltip {
		padding-block: 0.25rem;
		padding-inline: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--soft-text-color);
		background-color: var(--surface-color);
	}
</style>
