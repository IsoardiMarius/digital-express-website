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
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (status === 404) {
					return;  // Ignorer les erreurs 404 et continuer
				}
				throw new Error(`Failed to prerender ${path}: ${status}`);
			},
			crawl: true,  // Ajoute cette option pour que SvelteKit explore les routes
			entries: [`${base}/`]  // Préfixez l'entrée avec la base
		}
	}
};

export default config;
