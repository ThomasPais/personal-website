<script lang="ts">
	import Poo from '~icons/tabler/poo';
	//import { Circle, File, Laptop, Moon, Sun } from 'radix-icons-svelte';
	import * as Command from '$lib/components/ui/command';
	import { Button } from 'bits-ui';
	import { onMount } from 'svelte';
	import { docsConfig } from '$lib/config/docs';
	import { goto } from '$app/navigation';
	import { resetMode, setMode } from 'mode-watcher';

	let open = false;

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = true;
			}
		}
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}

	const mainNav = docsConfig.mainNav.filter((item) => !item.external);
	const sidebarNav = docsConfig.sidebarNav;
</script>

<Button.Root class="trigger" on:click={() => (open = true)} {...$$restProps}>
	<span class="hidden lg:inline-flex"> Search documentation... </span>
	<span class="inline-flex lg:hidden">Search...</span>
	<kbd
		class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">⌘</span>K
	</kbd>
</Button.Root>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Links">
			{#each mainNav as navItem}
				<Command.Item
					value={navItem.title}
					onSelect={() =>
						runCommand(() => {
							navItem.href && goto(navItem.href);
						})}
				>
					<Poo class="mr-2 h-4 w-4" />
					{navItem.title}
				</Command.Item>
			{/each}
		</Command.Group>
		{#each sidebarNav as group}
			<Command.Group heading={group.title}>
				{#each group.items as navItem}
					<Command.Item
						value={navItem.title}
						onSelect={() =>
							runCommand(() => {
								navItem.href && goto(navItem.href);
							})}
					>
						<div class="mr-2 flex h-4 w-4 items-center justify-center">
							<Poo class="h-3 w-3" />
						</div>
						{navItem.title}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
		<Command.Separator />
		<Command.Group heading="Theme">
			<Command.Item value="light" onSelect={() => runCommand(() => setMode('light'))}>
				<Poo class="mr-2 h-4 w-4" />
				Light
			</Command.Item>
			<Command.Item value="dark" onSelect={() => runCommand(() => setMode('dark'))}>
				<Poo class="mr-2 h-4 w-4" />
				Dark
			</Command.Item>
			<Command.Item value="system" onSelect={() => runCommand(() => resetMode())}>
				<Poo class="mr-2 h-4 w-4" />
				System
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>

<style>
	.trigger {
		cursor: pointer;
		font-family: inherit;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 16rem;
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
</style>
