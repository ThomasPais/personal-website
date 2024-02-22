<script lang="ts">
	import { createSelect, melt, type SelectOption } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	import type { Theme } from './types';

	import { mode, userPrefersMode } from 'mode-watcher';

	import Moon from '~icons/tabler/moon';
	import Sun from '~icons/tabler/sun';
	import Monitor from '~icons/tabler/device-desktop';

	import * as m from '$paraglide/messages';

	const themes: SelectOption<Theme>[] = [
		{ value: 'dark', label: 'Dark' },
		{ value: 'light', label: 'Light' },
		{ value: 'system', label: 'System' }
	];

	const {
		elements: { trigger, menu, arrow, option },
		states: { open },
		helpers: { isSelected }
	} = createSelect<Theme>({
		forceVisible: true,
		defaultSelected: modeToOption($userPrefersMode),
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			gutter: 8
		},
		onSelectedChange: ({ curr, next }) => {
			const definedNext = next ?? curr ?? themes[0];
			$userPrefersMode = optionToMode(definedNext);
			return definedNext;
		}
	});

	function modeToOption(mode: Theme): SelectOption<Theme> {
		return themes.find(({ value }) => value === mode) ?? themes[0];
	}

	function optionToMode(option: SelectOption<Theme>): Theme {
		return option.value;
	}
</script>

<button class="trigger" aria-label="Open theme switcher" use:melt={$trigger}>
	{#if $mode === 'dark'}
		<Moon width="1.5rem" height="1.5rem" />
	{:else}
		<Sun width="1.5rem" height="1.5rem" />
	{/if}
</button>

{#if $open}
	<div use:melt={$menu} class="menu" transition:fade={{ duration: 100 }}>
		<div use:melt={$arrow} />
		<button
			use:melt={$option({ value: 'dark', label: 'Dark' })}
			class={$isSelected('dark') ? 'option selected' : 'option'}
		>
			<Moon width="1.5rem" height="1.5rem" />
			<span>{m.$dark()}</span>
		</button>

		<button
			use:melt={$option({ value: 'light', label: 'Light' })}
			class={$isSelected('light') ? 'option selected' : 'option'}
		>
			<Sun width="1.5rem" height="1.5rem" />
			<span>{m.$light()}</span>
		</button>

		<button
			use:melt={$option({ value: 'system', label: 'System' })}
			class={$isSelected('system') ? 'option selected' : 'option'}
		>
			<Monitor width="1.5rem" height="1.5rem" />
			<span>{m.$system()}</span>
		</button>
	</div>
{/if}

<style>
	button {
		cursor: pointer;
		border: none;
		background: none;
		display: flex;
		align-items: center;
		border-radius: 0.375rem;
		color: var(--muted-foreground);
		transition-property: color, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}

	button:hover {
		color: var(--accent-foreground);
		background-color: var(--accent);
	}

	.trigger {
		width: 2.25rem;
		height: 2rem;
		padding-inline: 0;
		justify-content: center;
	}

	.menu {
		display: flex;
		flex-direction: column;
		padding: 0.25rem;
		border-radius: 0.375rem;
		min-width: 8rem;
		border: 1px solid var(--border);
		background-color: var(--background);
	}

	.option {
		font-family: inherit;
		padding-block: 0.375rem;
		padding-inline: 0.5rem;
		gap: 0.5rem;
	}

	.selected {
		color: var(--accent-foreground);
	}

	span {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
