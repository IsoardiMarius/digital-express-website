import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/digital-express-website';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
	}
};

export default config;
