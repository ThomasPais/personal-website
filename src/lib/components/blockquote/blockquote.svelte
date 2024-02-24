<script lang="ts">
	import type { Blockquote } from './types'

	import InfoCircle from '~icons/tabler/info-circle'
	import Bulb from '~icons/tabler/bulb'
	import MessageReport from '~icons/tabler/message-report'
	import AlertTriangle from '~icons/tabler/alert-triangle'
	import AlertOctagon from '~icons/tabler/alert-octagon'

	export let variant: Blockquote
</script>

<section class={variant}>
	<header>
		{#if variant === 'note'}
			<InfoCircle width="1.5rem" height="1.5rem" />
		{:else if variant === 'tip'}
			<Bulb width="1.5rem" height="1.5rem" />
		{:else if variant === 'important'}
			<MessageReport width="1.5rem" height="1.5rem" />
		{:else if variant === 'warning'}
			<AlertTriangle width="1.5rem" height="1.5rem" />
		{:else}
			<AlertOctagon width="1.5rem" height="1.5rem" />
		{/if}

		<h3>{variant}</h3>
	</header>

	<p>
		<slot />
	</p>
</section>

<style>
	.note {
		--color: royalblue;
	}

	.tip {
		--color: green;
	}

	.important {
		--color: blueviolet;
	}

	.warning {
		--color: orange;
	}

	.caution {
		--color: orangered;
	}

	section {
		border: 1px solid var(--border);
		border-left: 4px solid var(--color);
		border-radius: 0.25rem;
		padding: 1rem;
		margin-bottom: 1.5rem;
	}

	header {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--color);
		margin-bottom: 1rem;
	}

	h3 {
		margin-block: 0;
		text-transform: capitalize;
	}

	p {
		margin-block: 0;
		text-align: justify;
	}
</style>
