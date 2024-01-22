<script lang="ts">
	import '../../app.css';

	import Construction from '$lib/components/construction.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<Navbar />
<Construction />
<slot />
