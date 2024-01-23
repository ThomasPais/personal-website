<script lang="ts">
	import { createSelect, melt, type SelectOption } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	import { route } from '$lib/i18n';
	import { page } from '$app/stores';

	import { languageTag } from '$paraglide/runtime';
	import type { Language } from './types';

	import EN from '~icons/circle-flags/en';
	import FR from '~icons/circle-flags/fr';
	import ES from '~icons/circle-flags/es';
	import Languages from '~icons/lucide/languages';

	import * as m from '$paraglide/messages';

	const languages: SelectOption<Language>[] = [
		{ value: 'en', label: 'English' },
		{ value: 'fr', label: 'Français' },
		{ value: 'es', label: 'Español' }
	];

	const {
		elements: { trigger, menu, arrow, option },
		states: { open },
		helpers: { isSelected }
	} = createSelect<Language>({
		forceVisible: true,
		defaultSelected: langToOption(languageTag()),
		positioning: {
			placement: 'bottom',
			fitViewport: true
		},
		onSelectedChange: ({ curr, next }) => {
			const definedNext = next ?? curr ?? languages[0];
			return definedNext;
		}
	});

	function langToOption(mode: Language): SelectOption<Language> {
		return languages.find(({ value }) => value === mode) ?? languages[0];
	}
</script>

<button class="trigger" aria-label="Open language switcher" use:melt={$trigger}>
	<Languages color="var(--soft-text-color)" width="2rem" height="2rem" />
</button>

{#if $open}
	<div use:melt={$menu} class="menu" transition:fade={{ duration: 100 }}>
		<div use:melt={$arrow} />
		<a
			href={route($page.url.pathname, 'en')}
			hreflang={'en'}
			use:melt={$option({ value: 'en', label: 'English' })}
			class={$isSelected('en') ? 'option selected' : 'option'}
		>
			<EN color="inherit" width="1.5rem" height="1.5rem" />
			<span>{'English'}</span>
		</a>

		<a
			href={route($page.url.pathname, 'fr')}
			hreflang={'fr'}
			use:melt={$option({ value: 'fr', label: 'Français' })}
			class={$isSelected('fr') ? 'option selected' : 'option'}
		>
			<FR color="inherit" width="1.5rem" height="1.5rem" />
			<span>{'Français'}</span>
		</a>

		<a
			href={route($page.url.pathname, 'es')}
			hreflang={'es'}
			use:melt={$option({ value: 'es', label: 'Español' })}
			class={$isSelected('es') ? 'option selected' : 'option'}
		>
			<ES color="inherit" width="1.5rem" height="1.5rem" />
			<span>{'Español'}</span>
		</a>
	</div>
{/if}

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
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
		text-decoration: none;
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
