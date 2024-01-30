<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';

	type $$Props = CommandPrimitive.CommandProps;

	export let value: $$Props['value'] = undefined;

	let className: string | undefined | null = undefined;

	//'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',

	export { className as class };
</script>

<CommandPrimitive.Root class={className} bind:value {...$$restProps}>
	<slot />
</CommandPrimitive.Root>
