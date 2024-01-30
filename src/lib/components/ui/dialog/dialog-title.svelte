<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type $$Props = DialogPrimitive.TitleProps;

	let className: $$Props['class'] = undefined;
	export { className as class };

	//'text-lg font-semibold leading-none tracking-tight'
</script>

<DialogPrimitive.Title class={className} {...$$restProps}>
	<slot />
</DialogPrimitive.Title>
