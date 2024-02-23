<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
