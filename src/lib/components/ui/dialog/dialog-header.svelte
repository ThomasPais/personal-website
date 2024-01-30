<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };

	//"flex flex-col space-y-1.5 text-center sm:text-left"
</script>

<div class={className} {...$$restProps}>
	<slot />
</div>
