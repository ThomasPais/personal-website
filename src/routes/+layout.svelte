<script lang="ts">
	import { page } from '$app/stores';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { browser } from '$app/environment';
	import ParaglideHead from '$lib/ParaglideHead.svelte';

	import { ModeWatcher } from 'mode-watcher';

	//Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);

	//Set the lang attribute on the html tag
	$: if (browser) document.documentElement.lang = lang;
</script>

<ParaglideHead />

<ModeWatcher />

{#key lang}
	<slot />
{/key}
