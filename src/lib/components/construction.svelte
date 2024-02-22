<script lang="ts">
	import Tool from '~icons/tabler/tool';
	import * as m from '$paraglide/messages';
</script>

<div>
	<p>
		<Tool
			style="color: var(--primary);
			width: var(--icon-size);
			height: var(--icon-size);
			display: var(--icon-display);
			vertical-align: var(--icon-align);"
		/>
		<span>{m.$construction_title()}</span>
		{m.$construction_text()} 🚀
	</p>
</div>

<style>
	div {
		--icon-size: 2rem;
		--icon-display: block;
		--icon-align: baseline;

		padding: 1rem;
		margin-top: 3rem;
		border-radius: 0.5rem;
		border: 1px solid var(--border);
		background-color: var(--background);
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
			--icon-align: middle;
		}
	}
</style>
