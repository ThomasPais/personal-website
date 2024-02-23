<script lang="ts">
	import Menu from '~icons/tabler/menu-2';
	import X from '~icons/tabler/x';

	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { route } from '$lib/i18n';
	import { languageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

	const open = writable(false);
	const {
		elements: { trigger, overlay, content, close, portalled }
	} = createDialog({
		open
	});
</script>

<button use:melt={$trigger}>
	<Menu width="1.5rem" height="1.5rem" />
</button>
<div use:melt={$portalled} class="portalled">
	{#if $open}
		<div use:melt={$overlay} class="overlay" transition:fade={{ duration: 150 }} />
		<div
			use:melt={$content}
			class="content"
			transition:fly={{ x: -768, duration: 300, opacity: 1 }}
		>
			<div class="title">
				<span>Menu</span>
				<button use:melt={$close} aria-label="close">
					<X width="1.5rem" height="1.5rem" />
				</button>
			</div>

			<nav>
				<ul>
					<li>
						<a use:melt={$close} href={route('/', languageTag())} hreflang={languageTag()}>
							{m.$home()}
						</a>
					</li>

					<li>
						<a use:melt={$close} href={route('/about', languageTag())} hreflang={languageTag()}>
							{m.$about()}
						</a>
					</li>
					<li>
						<a use:melt={$close} href={route('/test', languageTag())} hreflang={languageTag()}>
							{m.$articles()}
						</a>
					</li>
					<li>
						<a use:melt={$close} href={route('/', languageTag())} hreflang={languageTag()}>
							{m.$projects()}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</div>

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

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 64;
		backdrop-filter: blur(4px);
		background-color: hsl(var(--background) / 0.8);
	}

	.content {
		position: fixed;
		bottom: 0;
		top: 0;
		z-index: 64;
		padding-inline: 1rem;
		padding-block: 2rem;
		max-width: 24rem;
		width: 50%;
		border-right: 1px solid var(--border);
		background-color: var(--background);
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style: none;
		margin-block: 0;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	a {
		font-size: 0.875rem;
		color: var(--muted-foreground);
		transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
	}

	a:hover {
		color: var(--accent-foreground);
	}

	@media (min-width: 768px) {
		button {
			display: none;
		}

		.portalled {
			display: none;
		}
	}
</style>
