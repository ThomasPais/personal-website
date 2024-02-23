<script lang="ts">
	import Download from '~icons/tabler/download';

	import * as m from '$paraglide/messages';
</script>

<h1>About Me</h1>

<p>
	{m.$about_text_1()}
</p>

<p>
	{m.$about_text_2()}
</p>

<div class="resume">
	<a href="/">{m.resume()} <Download width="1rem" height="1rem" /></a>
</div>

<style>
	p {
		text-align: justify;
	}

	.resume {
		display: flex;
	}

	a {
		text-decoration: none;
		color: inherit;
		border-radius: 0.375rem;
		border: 1px solid var(--border);
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	a:hover {
		background-color: var(--accent);
	}
</style>
