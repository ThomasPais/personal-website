<script lang="ts">
	import Book from '~icons/tabler/book';
	import Box from '~icons/tabler/box';
	import * as m from '$paraglide/messages';
</script>

<section>
	<div class="hero-content">
		<h1>Hi, I am Thomas, an engineering student</h1>

		<p>
			Studying engineering at Enseeiht in Toulouse, I’m passionate about electronics, aeronautics,
			and computer science. My curiosity drives my love for learning. Explore my journey and diverse
			projects on my site.
		</p>

		<div class="links">
			<a href="/">
				Projects <Box style="color: var(--accent-color); width: 1.5rem; height: 1.5rem;" />
			</a>
			<a href="/">
				Articles <Book style="color: var(--accent-color); width: 1.5rem; height: 1.5rem;" />
			</a>
		</div>
	</div>

	<img src="https://placehold.co/400.png" alt="Thomas Païs" />
</section>

<section>
	<h1>Latest articles</h1>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem animi debitis a quia iure
		voluptatum velit deleniti accusamus neque officiis vitae dolores, quidem sequi sit corrupti
		delectus nam? Sunt, consequatur? Alias quod maxime harum repellendus nulla! Ea aspernatur,
		reiciendis doloribus, eos illo sint, nihil dolorem ipsam saepe quisquam facere voluptates! Ea
		eligendi, nisi a autem rerum voluptatem magnam, nulla et cupiditate enim sunt corrupti iusto.
		Est, itaque voluptate? Voluptas dicta dolor enim, eaque commodi error at cupiditate repellat
		molestiae minima beatae veniam possimus, veritatis neque perferendis sapiente labore delectus
		nemo iste molestias assumenda hic porro corporis eos. Aliquam, a! Lorem ipsum dolor, sit amet
		consectetur adipisicing elit. Laboriosam harum quidem laborum vel ratione rem cum hic,
		reiciendis temporibus blanditiis officiis at totam impedit libero corporis facilis consectetur
		sed ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eligendi alias ad,
		culpa esse repellendus possimus explicabo non? Provident non quae tenetur vitae inventore
		officiis voluptates repellat? Laudantium, adipisci neque optio totam soluta earum, rem porro,
		sunt aliquid saepe consequuntur dolorem quos expedita inventore vero tempora libero impedit
		officiis non! Odio aspernatur saepe necessitatibus? Impedit delectus provident repudiandae ex
		reprehenderit nobis! Repudiandae ex fuga commodi ea, earum, sunt deleniti sint illo ut, quo
		necessitatibus dolore adipisci. Doloribus dolorem dolor sit nulla blanditiis, reprehenderit
		culpa iste at incidunt commodi veritatis molestiae optio non corporis! Provident, nostrum odio
		animi amet enim autem?
	</p>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}

	.hero-content {
		width: 384px;
		flex: 1;
	}

	.links {
		display: flex;
		gap: 2rem;
	}

	a {
		text-decoration: none;
		color: inherit;

		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid var(--accent-color);
		background-color: var(--soft-accent-color);
		padding-inline: 1rem;
		padding-block: 0.5rem;
	}

	img {
		border-radius: 0.5rem;
		max-width: 50%;
	}
</style>
