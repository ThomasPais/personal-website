<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: string | undefined | null = undefined;
	export { className as class };

	// 'ml-auto text-xs tracking-widest text-muted-foreground'
</script>

<span class={className} {...$$restProps}>
	<slot />
</span>
