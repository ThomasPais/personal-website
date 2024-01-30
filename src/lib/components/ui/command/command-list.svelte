<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';

	type $$Props = CommandPrimitive.ListProps;
	let className: string | undefined | null = undefined;
	export { className as class };

	//"max-h-[300px] overflow-y-auto overflow-x-hidden"
</script>

<CommandPrimitive.List class={className} {...$$restProps}>
	<slot />
</CommandPrimitive.List>
