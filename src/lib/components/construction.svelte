<script lang="ts">
	import Construction from '~icons/lucide/construction';
	import * as m from '$paraglide/messages';
</script>

<div>
	<Construction
		style="color: var(--accent-color);
		width: var(--icon-size);
		height: var(--icon-size);
		display: var(--icon-display);"
	/>
	<p>
		<span>{m.$construction_title()}</span>
		{m.$construction_text()} 🚀
	</p>
</div>

<style>
	div {
		--icon-size: 2rem;
		--icon-display: block;

		display: flex;
		padding: 1rem;
		margin-block: 1rem;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
		border-radius: 0.75rem;
		border: 1px solid var(--accent-color);
		background-color: var(--soft-accent-color);
	}

	p {
		margin: 0;
	}

	span {
		font-weight: 700;
	}

	@media (min-width: 1024px) {
		div {
			--icon-size: 1.5rem;
			--icon-display: inline-block;

			flex-direction: row;
			align-items: center;
		}
	}
</style>
