<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';

	type $$Props = CommandPrimitive.SeparatorProps;
	let className: string | undefined | null = undefined;
	export { className as class };

	//'-mx-1 h-px bg-border'
</script>

<CommandPrimitive.Separator class={className} {...$$restProps} />
