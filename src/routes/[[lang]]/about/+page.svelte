<script lang="ts">
	import Download from '~icons/tabler/download';
</script>

<h1>About Me</h1>

<p>
	As an engineering student at Enseeiht, a renowned institution in Toulouse with a focus on
	electronics, I am deeply passionate about electronics, aeronautics, and computer science.
</p>

<p>
	My insatiable curiosity drives me to understand the inner workings of things and fuels my love for
	continuous learning and self-improvement. I invite you to delve into my journey, or explore my
	diverse array of articles and projects that span across multiple fields.
</p>

<div class="resume">
	<a href="/">Resume <Download width="1rem" height="1rem" /></a>
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
