import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    port: 5174,
		proxy: {
			'/logux': {
				target: 'ws://127.0.0.1:31337',
				changeOrigin: true,
				ws: true,
				rewrite: path => path.replace(/^\/logux/, '')
			},
			'/api': {
				target: 'http://127.0.0.1:31337',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
});
