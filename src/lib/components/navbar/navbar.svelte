<script lang="ts">
	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

	import Circuit from '~icons/tabler/cpu';

	import { onMount } from 'svelte';

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
				<Circuit style="width: 2rem; height: 2rem;" />
				Thomas Païs
			</a>

			Search

			<ul>
				<li>
					<a href={route('/', languageTag())} hreflang={languageTag()}>Projects</a>
				</li>
				<li>
					<a href={route('/test', languageTag())} hreflang={languageTag()}>Articles</a>
				</li>
				<li>
					<a href={route('/about', languageTag())} hreflang={languageTag()}>About Me</a>
				</li>
			</ul>
		</nav>

		<a href="/" class="resume-button">Resume</a>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		top: 0;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
		column-gap: 1.5rem;
		transition: height 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		background-color: var(--background);
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
		align-items: center;
		grid-column: 2;
		height: inherit;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	ul {
		padding: 0;
		list-style: none;
		display: flex;
		gap: 1.5rem;
		margin: 0;
	}

	.separator {
		background-color: var(--text-color);
		height: 1.5rem;
		width: 1px;
		margin-inline: 1.5rem;
	}

	.resume-button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--primary-foreground);
		background-color: var(--primary);
		border-radius: var(--radius);
		padding: 0.5rem 1rem;
	}

	.resume-button:hover {
		background-color: var(--primary);
	}

	@media (min-width: 480px) {
	}

	@media (min-width: 768px) {
	}
</style>
