<script lang="ts">
	import { createSelect, melt, type SelectOption } from '@melt-ui/svelte';
	import type { Language } from './types';
	import { fade } from 'svelte/transition';

	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

	import { page } from '$app/stores';

	import EN from '~icons/circle-flags/en';
	import FR from '~icons/circle-flags/fr';
	import ES from '~icons/circle-flags/es';
	import Languages from '~icons/tabler/language';

	function langToOption(language: Language): SelectOption<Language> {
		return languages.find(({ value }) => value === language) ?? languages[0];
	}

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
			placement: 'bottom-end',
			gutter: 16
		},
		onSelectedChange: ({ curr, next }) => {
			const definedNext = next ?? curr ?? languages[0];
			return definedNext;
		}
	});
</script>

<button aria-label="Open language switcher" use:melt={$trigger}>
	<Languages width="1.5rem" height="1.5rem" />
</button>

{#if $open}
	<div use:melt={$menu} class="menu" transition:fade={{ duration: 100 }}>
		<div use:melt={$arrow} />
		<ul>
			{#each languages as { value, label }}
				<li>
					<a
						href={route($page.url.pathname, value)}
						hreflang={value}
						use:melt={$option({ value, label })}
						class={$isSelected(value) ? 'selected' : ''}
					>
						{#if value === 'en'}
							<EN width="1.5rem" height="1.5rem" />
						{:else if value === 'fr'}
							<FR width="1.5rem" height="1.5rem" />
						{:else}
							<ES width="1.5rem" height="1.5rem" />
						{/if}
						<span>{label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	button {
		cursor: pointer;
		border: none;
		background: none;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 0;
		width: 2.25rem;
		height: 2rem;
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

	.menu {
		display: flex;
		flex-direction: column;
		padding-block: 0.25rem;
		padding-inline: 0.25rem;
		border-radius: 0.375rem;
		width: 8rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		background-color: var(--muted);
	}

	ul {
		list-style: none;
		padding-left: 0;
		margin-block: 0;
	}

	a {
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
