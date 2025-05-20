import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const outputDir = process.env.DEPLOY_TARGET === "gh-pages" ? "build_gh_pages" : "build";
const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/fast-stack" : "";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		appDir: 'app', // gh-pages doesn't play with the default _app directory
		adapter: adapter({
			pages: outputDir,      // The directory to write prerendered pages to
			assets: outputDir,     // The directory to write static assets to
			fallback: 'index.html', // Or '200.html' or null if you want 404.html to handle all non-prerendered paths
		}),
		paths: {
			base: basePath,
		}
	}
};

export default config;
