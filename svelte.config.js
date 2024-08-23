import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/digital-express-website';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
		prerender: {
			crawl: true,  // Ajoute cette option pour que SvelteKit explore les routes
			entries: ['/']  // Tu peux ajouter ici les routes dynamiques
		}
	}
};

export default config;
