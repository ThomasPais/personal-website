<script lang="ts">
	import Construction from '$lib/components/construction.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<div>
	<Navbar />
	<Construction />
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

	div {
		font-family: 'Inter', sans-serif;
	}
</style>
