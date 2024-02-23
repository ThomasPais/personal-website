<script lang="ts">
	import { onMount } from 'svelte';

	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

	import Circuit from '~icons/tabler/cpu';

	import CommandMenu from '../command-menu/command-menu.svelte';
	import LangSwitch from '../lang-switch/lang-switch.svelte';
	import ThemeSwitch from '../theme-switch/theme-switch.svelte';
	import MobileMenu from './mobile-menu.svelte';

	let headerClass: string = 'big-header';

	onMount(() => {
		const checkScroll = () => {
			headerClass = window.scrollY > 64 ? 'small-header' : 'big-header';
		};

		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	});
</script>

<header class={headerClass}>
	<div class="container">
		<nav>
			<a href={route('/', languageTag())} hreflang={languageTag()} class="logo">
				<Circuit style="width: 1.5rem; height: 1.5rem; color: var(--primary);" />
				<span>Thomas Païs</span>
			</a>

			<ul>
				<li>
					<a href={route('/about', languageTag())} hreflang={languageTag()}>{m.$about()}</a>
				</li>
				<li>
					<a href={route('/articles', languageTag())} hreflang={languageTag()}>{m.$articles()}</a>
				</li>
				<li>
					<a href={route('/projects', languageTag())} hreflang={languageTag()}>{m.$projects()}</a>
				</li>
			</ul>
		</nav>

		<div class="utilities">
			<CommandMenu />
			<ThemeSwitch />
			<LangSwitch />
			<MobileMenu />
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: calc((100vw - 0.5rem));
		top: 0;
		display: grid;
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
		column-gap: 1.5rem;
		background-color: var(--background);
		transition: height 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.big-header {
		height: 128px;
	}

	.small-header {
		height: 64px;
		border-bottom: 1px solid var(--border);
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 2;
		height: inherit;
	}

	nav {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	span {
		font-weight: 700;
	}

	ul {
		list-style: none;
		display: none;
		gap: 1.5rem;
		padding-left: 0;
		margin-block: 0;
	}

	ul a {
		font-size: 0.875rem;
		color: var(--muted-foreground);
		transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}

	ul a:hover {
		color: var(--accent-foreground);
	}

	.utilities {
		display: flex;
		gap: 0.5rem;
	}

	@media (min-width: 480px) {
	}

	@media (min-width: 768px) {
		ul {
			display: flex;
		}
	}
</style>
