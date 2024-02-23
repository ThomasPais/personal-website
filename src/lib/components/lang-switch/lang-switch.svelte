<script lang="ts">
	import { createSelect, melt, type SelectOption } from '@melt-ui/svelte';
	import type { Language } from './types';
	import { fade } from 'svelte/transition';

	import { languageTag } from '$paraglide/runtime';

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
			placement: 'bottom',
			fitViewport: true,
			gutter: 8
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
						href={$page.url.pathname}
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
	button,
	a {
		display: flex;
		align-items: center;
		border-radius: 0.375rem;
		color: var(--muted-foreground);
		transition-property: color, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}

	button:hover,
	a:hover {
		color: var(--accent-foreground);
		background-color: var(--accent);
	}

	button {
		cursor: pointer;
		border: none;
		background: none;
		justify-content: center;
		padding-inline: 0;
		width: 2.25rem;
		height: 2rem;
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

	ul {
		list-style: none;
		padding-left: 0;
		margin-block: 0;
	}

	a {
		font-family: inherit;
		padding-block: 0.375rem;
		padding-inline: 0.5rem;
		gap: 0.5rem;
		text-decoration: none;
	}

	.selected {
		color: var(--text-color);
	}

	span {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
