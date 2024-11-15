import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 8001,
		strictPort: true,
	},
	build: {
		outDir: "../frontend-build",
		emptyOutDir: true,
	},
	define: {
		'process.env': process.env
	}
})
