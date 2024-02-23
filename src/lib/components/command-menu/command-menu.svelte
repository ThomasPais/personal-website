<script lang="ts">
	import { goto } from '$app/navigation';
	import { createCombobox, createDialog, melt } from '@melt-ui/svelte';

	import Command from '~icons/tabler/command';
	import LetterKSmall from '~icons/tabler/letter-k-small';
	import Search from '~icons/tabler/search';
	import CaretDown from '~icons/tabler/caret-down';
	import X from '~icons/tabler/x';

	import { onMount } from 'svelte';
	import type {
		Pagefind,
		PagefindSearchFragment,
		PagefindSearchResult,
		PagefindSubResult
	} from './pagefind';

	type Promised<T> = T extends Promise<infer U> ? U : T;

	type AwaitedResult = Omit<PagefindSearchResult, 'data'> & {
		data: Promised<ReturnType<PagefindSearchResult['data']>>;
	};

	let pagefind: Pagefind | null = null;
	let results: AwaitedResult[] = [];

	async function getPagefind() {
		const res = await fetch('');
		if (!res.ok) {
			return null;
		}
		const text = await res.text();
		const blob = new Blob([text], { type: 'application/javascript' });
		const url = URL.createObjectURL(blob);

		return (await import(/* @vite-ignore */ url)) as Pagefind;
	}

	onMount(async () => {
		pagefind = await getPagefind();
		if (!pagefind) return;

		await pagefind.init();
		const promisedResults = (await pagefind.search('')).results;

		results = await Promise.all(
			promisedResults.map(async (result) => ({
				...result,
				data: await result.data()
			}))
		);
	});

	const sanitizeLink = (url: string) => {
		return url.replace('.html', '').replace('src/', '');
	};

	const gotoLink = (url: string) => {
		open.set(false);
		cbOpen.set(false);
		goto(sanitizeLink(url));
	};

	const {
		elements: { input, menu, option },
		states: { open: cbOpen, inputValue }
	} = createCombobox<PagefindSearchFragment | PagefindSubResult>({
		onSelectedChange({ next }) {
			if (next) {
				gotoLink(next.value.url);
			}
			return undefined;
		},
		forceVisible: true,
		positioning: { gutter: 2, placement: 'bottom' },
		preventScroll: false,
		highlightOnHover: false
	});

	let comboboxInput: HTMLInputElement | null = null;

	const {
		elements: { trigger, portalled, content, overlay, close },
		states: { open }
	} = createDialog({
		onOpenChange({ next }) {
			if (!next) {
				inputValue.set('');
				results = [];
			}
			return next;
		},
		openFocus: comboboxInput
	});

	let debounceTimer: ReturnType<typeof setTimeout>;

	const debounce = (callback: () => void) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(callback, 450);
	};

	$: {
		if (pagefind) {
			debounce(() => {
				pagefind?.search($inputValue).then(async (r) => {
					results = await Promise.all(
						r.results.map(async (result) => ({
							...result,
							data: await result.data()
						}))
					);
				});
			});
		}
	}
</script>

<svelte:window
	on:keydown={(e) => {
		const isCtrl = e.ctrlKey || e.metaKey;
		if (e.key === '/' || (e.key === 'k' && isCtrl)) {
			e.preventDefault();
			open.set(true);
		}
	}}
/>

<button class="trigger" use:melt={$trigger}>
	<span>Search...</span>
	<kbd>
		<Command style="width: 1.25rem; height: 1.25rem" />
		<LetterKSmall style="width: 1.25rem; height: 1.25rem" />
	</kbd>
</button>

<div use:melt={$portalled} class="portalled">
	<div use:melt={$overlay} class="overlay" />
	<div use:melt={$content} class="content">
		<div class="menu-header">
			<Search
				style="width: 1.25rem; height: 1.25rem; position: absolute; 
                    top: 50%; margin-left: 0.5rem; transform: translate(0,-50%);"
			/>

			<input
				bind:this={comboboxInput}
				use:melt={$input}
				placeholder="Search..."
				on:keydown={(e) => {
					if (e.key === 'Escape') {
						cbOpen.set(false);
						open.set(false);
					}
				}}
			/>
			<button use:melt={$close} aria-label="close" class="close">
				<X width="1.5rem" height="1.5rem" />
			</button>
		</div>

		<div class="results" use:melt={$menu} class:hidden={!$inputValue}>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="e">
				<p aria-live="polite" class="f">
					{results.length === 0 ? 'No results' : `Found ${results.length} results`}
				</p>
				{#each results as { data }, index (index)}
					{@const isLast = index === results.length - 1}

					<div use:melt={$option({ value: data, label: data.meta.title })} class="g">
						<a
							class="title text-lg font-semibold underline hover:opacity-75"
							href={sanitizeLink(data.url)}>{data.meta.title}</a
						>
						<p class="mt-1 font-light">
							{@html data.excerpt}
						</p>
					</div>
					{#each data.sub_results.filter(({ title }) => title !== data.meta.title) as subresult}
						<div
							class="subresult ml-3 scroll-my-2 rounded-md py-2 pl-3"
							use:melt={$option({ value: subresult, label: subresult.title })}
						>
							<div class="flex items-center gap-1">
								<CaretDown class="opacity-75 square-4" />
								<a
									class="font-semibold underline hover:opacity-75"
									href={sanitizeLink(subresult.url)}
								>
									{subresult.title}
								</a>
							</div>
							<p class="mt-2 text-sm font-light opacity-75">
								{@html subresult.excerpt}
							</p>
						</div>
					{/each}
					{#if !isLast}
						<hr class="mx-4 my-2 border-neutral-700" />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.trigger {
		cursor: pointer;
		font-family: inherit;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 14rem;
		height: 2.25rem;
		padding-left: 1rem;
		padding-right: 0.375rem;
		color: var(--muted-foreground);
		background-color: var(--background);
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		transition-property: color, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}

	.trigger:hover {
		color: var(--accent-foreground);
		background-color: var(--accent);
	}

	kbd {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.125rem 0.25rem;
		background-color: var(--muted);
		border-radius: 0.25rem;
	}

	.portalled {
		display: contents;
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
		top: 50%;
		left: 50%;
		z-index: 64;
		width: 100%;
		max-width: 32rem;
		transform: translate(-50%);
		display: grid;
		place-items: center;
	}

	.menu-header {
		position: relative;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		width: 100%;
		height: 100%;
		border: 1px solid var(--border);
		background-color: var(--background);
		border-radius: 0.5rem 0.5rem 0 0;
		padding-bottom: 1px;
	}

	input {
		display: flex;
		padding-right: 2rem;
		padding-left: 2rem;
		justify-content: space-between;
		align-items: center;
		border: none;
		height: 2.5rem;
		background: none;
		max-width: 600px;
	}

	input:focus {
		outline: none;
	}

	.close {
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translate(0, -50%);
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

	.close:hover {
		color: var(--accent-foreground);
		background-color: var(--accent);
	}

	.results {
		display: flex;
		z-index: 10;
		box-sizing: border-box;
		flex-direction: column;
		max-height: min(600px, 50vh);
		background-color: var(--background);
		border-bottom: 1px solid var(--border);
		border-left: 1px solid var(--border);
		border-right: 1px solid var(--border);
		border-radius: 0 0 0.5rem 0.5rem;
		width: 100%;
	}

	.e {
		display: flex;
		overflow-y: auto;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		flex-direction: column;
		gap: 0;
		border-radius: 0.5rem;
		max-height: 100%;
	}

	.f {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-weight: 300;
		opacity: 0.5;
	}

	.g {
		position: relative;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border-radius: 0.375rem;
		scroll-margin-top: 0.5rem;
		scroll-margin-bottom: 0.5rem;
	}

	/*[data-melt-combobox-menu] :global(mark) {
		background-color: theme('colors.magnum.400/0.5');
		color: theme('colors.white');
		border-radius: theme('borderRadius.sm');
		padding-inline: 1px;
		font-weight: 500;
	}

	.subresult :global(mark) {
		background-color: theme('colors.magnum.400/0.5');
		color: theme('colors.white');
		font-weight: 300;
	}

	[data-highlighted] {
		background-color: theme('colors.magnum.400/0.25');
		color: theme('colors.white');

		/* :global(mark) {
			background-color: theme('colors.magnum.500');
			color: theme('colors.magnum.100');
		} */

	/*
	}*/
</style>
