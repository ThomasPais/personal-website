<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };

	//"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
</script>

<div class={className} {...$$restProps}>
	<slot />
</div>
