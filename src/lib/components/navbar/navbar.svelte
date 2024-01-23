<script lang="ts">
	import EN from '~icons/circle-flags/gb';
	import FR from '~icons/circle-flags/fr';
	import ES from '~icons/circle-flags/es';

	import { page } from '$app/stores';
	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';

	import Tooltip from '$lib/components/tooltip.svelte';
	import ThemeSwitch from '../theme-switcher/theme-switch.svelte';

	import * as m from '$paraglide/messages';
</script>

<header>
	<ul>
		<li>
			<a href={route('/', languageTag())} hreflang={languageTag()}>{m.$home()}</a>
		</li>
		<li>
			<a href={route('/about', languageTag())} hreflang={languageTag()}>{m.$about()}</a>
		</li>
	</ul>

	<Tooltip text={m.$tooltip_theme()}>
		<ThemeSwitch />
	</Tooltip>
	<ul>
		<Tooltip text="Switch to english">
			<li>
				<a href={route($page.url.pathname, 'en')} hreflang={'en'}
					><EN width="1.5rem" height="1.5rem" /></a
				>
			</li>
		</Tooltip>
		<li>
			<a href={route($page.url.pathname, 'fr')} hreflang={'fr'}
				><FR width="1.5rem" height="1.5rem" /></a
			>
		</li>
		<Tooltip text="Switch to spanish">
			<li>
				<a href={route($page.url.pathname, 'es')} hreflang={'es'}
					><ES width="1.5rem" height="1.5rem" /></a
				>
			</li>
		</Tooltip>
	</ul>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		padding: 0;
		list-style: none;
		display: flex;
		gap: 0.5rem;
	}

	a {
		color: currentColor;
		text-decoration: none;
	}
</style>
