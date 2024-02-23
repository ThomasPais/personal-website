<script lang="ts">
	import '../../app.css';

	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Construction from '$lib/components/construction.svelte';
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
		column-gap: 1rem;
		flex: 1;
		margin-top: 128px;
		margin-bottom: 2rem;
	}

	.content {
		grid-column: 2;
	}
</style>
