<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type $$Props = DialogPrimitive.DescriptionProps;

	let className: $$Props['class'] = undefined;
	export { className as class };

	//"text-sm text-muted-foreground"
</script>

<DialogPrimitive.Description class={className} {...$$restProps}>
	<slot />
</DialogPrimitive.Description>
