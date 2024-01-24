<script lang="ts">
	import '../../app.css';

	import Construction from '$lib/components/construction.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<div class="wrapper">
	<Navbar />

	<main>
		<div class="content">
			<Construction />
			<slot />
		</div>
	</main>

	<Footer />
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 640px) 1fr;
		flex: 1;
	}

	.content {
		grid-column: 2;
	}
</style>
