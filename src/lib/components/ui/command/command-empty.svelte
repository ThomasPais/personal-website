<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';

	type $$Props = CommandPrimitive.EmptyProps;
	let className: string | undefined | null = undefined;
	export { className as class };

	//'py-6 text-center text-sm'
</script>

<CommandPrimitive.Empty class={className} {...$$restProps}>
	<slot />
</CommandPrimitive.Empty>
