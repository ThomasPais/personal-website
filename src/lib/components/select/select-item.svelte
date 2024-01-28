<script lang="ts">
	import type { Select, SelectOption } from '@melt-ui/svelte';
	import { melt } from '@melt-ui/svelte';
	import getCtx from './select.svelte';

	type T = $$Generic;

	export let item: SelectOption<T>;
</script>
