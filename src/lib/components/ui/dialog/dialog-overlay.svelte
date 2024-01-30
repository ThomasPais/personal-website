<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { fade } from 'svelte/transition';

	type $$Props = DialogPrimitive.OverlayProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = fade;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 150
	};
	export { className as class };

	//"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
</script>

<DialogPrimitive.Overlay {transition} {transitionConfig} class={className} {...$$restProps} />
