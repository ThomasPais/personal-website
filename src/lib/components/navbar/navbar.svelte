<script lang="ts">
	import EN from '~icons/circle-flags/gb';
	import FR from '~icons/circle-flags/fr';
	import ES from '~icons/circle-flags/es';

	import { page } from '$app/stores';
	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';

	import Tooltip from '$lib/components/tooltip.svelte';
	import ThemeSwitch from '$lib/components/theme-switch/theme-switch.svelte';
	import LangSwitch from '$lib/components/lang-switch/lang-switch.svelte';

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

	<ul>
		<li>
			<Tooltip text={m.$tooltip_theme()}>
				<ThemeSwitch />
			</Tooltip>
		</li>
		<li>
			<Tooltip text={m.$tooltip_lang()}>
				<LangSwitch />
			</Tooltip>
		</li>
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
