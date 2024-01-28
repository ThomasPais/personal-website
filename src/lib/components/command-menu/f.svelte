<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

<input type="search" placeholder="Search..." />

<style>
	input {
		display: none;
		height: 2.25rem;
		border-radius: 0.5rem;
		border: 1px solid var(--border);
		background-color: var(--background);
	}

	@media (min-width: 768px) {
		input {
			display: inline-block;
			width: 128px;
		}
	}

	@media (min-width: 1024px) {
		input {
			width: 256px;
		}
	}
</style>
