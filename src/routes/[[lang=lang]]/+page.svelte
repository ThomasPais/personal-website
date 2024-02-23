<script lang="ts">
	import Book from '~icons/tabler/book';
	import Box from '~icons/tabler/box';
	import User from '~icons/tabler/user';

	import * as m from '$paraglide/messages';
</script>

<section>
	<h1>{m.$home_title()}</h1>

	<p>
		{m.$home_text()}
	</p>

	<div class="links">
		<a href="/about">
			{m.$about()}
			<User width="1rem" height="1rem" />
		</a>
		<a href="/articles">
			{m.$articles()}
			<Book width="1rem" height="1rem" />
		</a>
		<a href="/projects">
			{m.$projects()}
			<Box width="1rem" height="1rem" />
		</a>
	</div>
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

<section>
	<h1>Latest Projects</h1>

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
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 3rem;
	}

	h1 {
		margin-block: 0;
	}

	p {
		margin-block: 0;
		text-align: justify;
	}

	.links {
		display: flex;
		gap: 1rem;
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
