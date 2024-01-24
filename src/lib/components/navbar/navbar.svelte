<script lang="ts">
	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';

	import Circuit from '~icons/lucide/circuit-board';

	import Tooltip from '$lib/components/tooltip.svelte';
	import ThemeSwitch from '$lib/components/theme-switch/theme-switch.svelte';
	import LangSwitch from '$lib/components/lang-switch/lang-switch.svelte';

	import * as m from '$paraglide/messages';
</script>

<header>
	<div class="grid">
		<div class="flex">
			<a href={route('/', languageTag())} hreflang={languageTag()}
				><Circuit width="3rem" height="3rem" /></a
			>

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
		</div>
	</div>
</header>

<style>
	header {
		box-sizing: border-box;
		border-bottom: 1px solid var(--separator-color);
		height: 64px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 2;
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
