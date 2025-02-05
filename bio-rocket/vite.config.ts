import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    sponsors: ['./src/lib/assets/sponsors.svelte']
                }
            }
        }
    }
});