<script lang="ts" context="module">
	import type { Select, SelectOption } from '@melt-ui/svelte';

	import { createSelect, melt } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';
</script>

<script lang="ts">
	import type { Position } from './types';

	type T = $$Generic;

	export let position: Position = 'bottom';
	export let defaultSelected: SelectOption<T>;

	export function getCtx() {
		return getContext<Select<T>>('value');
	}

	function setThemeCtx(ctx: Select<T>) {
		setContext('value', ctx);
	}

	const select = createSelect<T>({
		positioning: { placement: position },
		defaultSelected: defaultSelected,
		onSelectedChange: ({ curr, next }) => {
			const definedNext = next ?? curr ?? defaultSelected;
			return definedNext;
		}
	});

	setThemeCtx(select);

	const {
		elements: { trigger, menu, arrow },
		states: { open }
	} = select;
</script>

<button use:melt={$trigger} class="trigger"> <slot name="trigger" /></button>

{#if $open}
	<div use:melt={$menu} class="menu">
		<div use:melt={$arrow} />
		<ul>
			<slot name="items" />
		</ul>
	</div>
{/if}
