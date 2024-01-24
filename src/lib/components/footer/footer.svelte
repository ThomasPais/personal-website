<script lang="ts">
	import Mail from '~icons/lucide/mail';
	import Github from '~icons/simple-icons/github';
	import Whatsapp from '~icons/simple-icons/whatsapp';
	import Linkedin from '~icons/simple-icons/linkedin';
	import Circuit from '~icons/lucide/circuit-board';

	import * as m from '$paraglide/messages';
</script>

<footer>
	<div class="grid">
		<div class="flex">
			<div class="links">
				<div>
					<h3>{m.$contact()}</h3>
					<ul>
						<li>
							<a href="/">
								<Mail style="width: 1.5rem; height: 1.5rem; display: inline-block;" />
								thomaspais@outlook.com
							</a>
						</li>
						<li>
							<a href="/">
								<Whatsapp style="width: 1.5rem; height: 1.5rem; display: inline-block;" />
								WhatsApp
							</a>
						</li>
						<li>
							<a href="/">
								<Github style="width: 1.5rem; height: 1.5rem; display: inline-block;" />
								Github
							</a>
						</li>
						<li>
							<a href="/">
								<Linkedin style="width: 1.5rem; height: 1.5rem; display: inline-block;" />
								Linkedin
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>{m.$navigation()}</h3>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Mimi</a>
						</li>
					</ul>
				</div>
				<div>
					<h3>{m.$categories()}</h3>
					<ul>
						<li>
							<a href="/">Web</a>
						</li>
						<li>
							<a href="/">Game</a>
						</li>
						<li>
							<a href="/">Mimi</a>
						</li>
						<li>
							<a href="/">Mimi</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="copyrights">
				<p>
					&copy; {new Date().getFullYear()} Thomas Païs —— <em>Toulouse</em>
				</p>

				<Circuit width="2em" height="2em" />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--separator-color);
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
	}

	.flex {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-block: 1.5rem;
		grid-column: 2;
	}

	.links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-left: 0;
		margin-block: 0;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
		color: var(--soft-text-color);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	a:hover {
		color: var(--text-color);
	}

	.copyrights {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 48px;
	}

	p {
		font-weight: 500;
		margin-block: 0;
	}
	em {
		color: var(--soft-text-color);
	}
</style>
