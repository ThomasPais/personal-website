<script lang="ts">
	import { createSelect, melt, type SelectOption } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	import type { Theme } from './types';

	import { mode, userPrefersMode } from 'mode-watcher';

	import Moon from '~icons/lucide/moon';
	import Sun from '~icons/lucide/sun';
	import Monitor from '~icons/lucide/monitor';

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
			fitViewport: true
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
		<Moon color="var(--soft-text-color)" width="2rem" height="2rem" />
	{:else}
		<Sun color="var(--soft-text-color)" width="2rem" height="2rem" />
	{/if}
</button>

{#if $open}
	<div use:melt={$menu} class="menu" transition:fade={{ duration: 100 }}>
		<div use:melt={$arrow} />
		<button
			use:melt={$option({ value: 'dark', label: 'Dark' })}
			class={$isSelected('dark') ? 'option selected' : 'option'}
		>
			<Moon color="inherit" width="1.5rem" height="1.5rem" />
			<span>{m.$dark()}</span>
		</button>

		<button
			use:melt={$option({ value: 'light', label: 'Light' })}
			class={$isSelected('light') ? 'option selected' : 'option'}
		>
			<Sun color="inherit" width="1.5rem" height="1.5rem" />
			<span>{m.$light()}</span>
		</button>

		<button
			use:melt={$option({ value: 'system', label: 'System' })}
			class={$isSelected('system') ? 'option selected' : 'option'}
		>
			<Monitor color="inherit" width="1.5rem" height="1.5rem" />
			<span>{m.$system()}</span>
		</button>
	</div>
{/if}

<style>
	button {
		background: none;
		border: none;
	}

	.trigger {
		font-family: inherit;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	.menu {
		display: flex;
		flex-direction: column;
		padding-block: 0.25rem;
		padding-inline: 0.25rem;
		border-radius: 0.375rem;
		width: 8rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		background-color: var(--surface-color);
	}

	.option {
		font-family: inherit;
		display: flex;
		padding-block: 0.25rem;
		padding-inline: 0.25rem;
		gap: 0.5rem;
		align-items: center;
		border-radius: 0.375rem;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		color: var(--soft-text-color);
	}

	.option:hover {
		background-color: var(--highlight-surface-color);
	}

	.selected {
		color: var(--text-color);
	}

	span {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
	}
</style>
