<script lang="ts">
	import Mail from '~icons/tabler/mail';
	import Github from '~icons/tabler/brand-github';
	import Whatsapp from '~icons/tabler/brand-whatsapp';
	import Linkedin from '~icons/tabler/brand-linkedin';

	import * as m from '$paraglide/messages';
</script>

<footer>
	<div>
		<ul>
			<li>
				<a href="/"><Mail style="width: 1.5rem; height: 1.5rem;" /></a>
			</li>
			<li>
				<a href="/"><Whatsapp style="width: 1.5rem; height: 1.5rem;" /></a>
			</li>
			<li>
				<a href="/"><Github style="width: 1.5rem; height: 1.5rem;" /></a>
			</li>
			<li>
				<a href="/"><Linkedin style="width: 1.5rem; height: 1.5rem;" /></a>
			</li>
		</ul>

		<p>
			{m.footer()} <a href="/">Sveltekit</a><br />
			&copy; {new Date().getFullYear()} <a href="/">Thomas Païs</a> —
			<em>Toulouse</em>
		</p>
	</div>
</footer>

<style>
	footer {
		background-color: var(--background);
		border-top: 1px solid var(--border);
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
		column-gap: 1.5rem;
		height: 128px;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		grid-column: 2;
		height: inherit;
		color: var(--muted-foreground);
	}

	ul {
		list-style: none;
		display: flex;
		gap: 0.5rem;
		padding-left: 0;
		margin-block: 0;
	}

	a {
		color: inherit;
		transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}

	a:hover {
		color: var(--accent-foreground);
	}

	ul a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.25rem;
		height: 2rem;
		border-radius: 0.375rem;
		transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}

	ul a:hover {
		background-color: var(--accent);
	}

	p {
		text-align: center;
		line-height: 2;
		font-size: 0.875rem;
		font-weight: 500;
		text-underline-offset: 4px;
		margin-block: 0;
	}

	@media (min-width: 640px) {
		footer {
			height: 96px;
		}

		div {
			flex-direction: row;
			justify-content: space-between;
		}

		ul {
			order: 2;
		}

		p {
			text-align: left;
		}
	}
</style>
