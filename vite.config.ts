import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		Icons({
			compiler: 'svelte',
			// experimental
			autoInstall: true
		})
	]
});
