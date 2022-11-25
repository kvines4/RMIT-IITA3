import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')

export default defineConfig({
	root,
	base: '/RMIT-IITA3/',
	publicDir: resolve(__dirname, 'assets'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		rollupOptions: {
			input: {
				main:				resolve(root, 'index.html'),
				tools:				resolve(root, 'tools/index.html'),
				projectplan:		resolve(root, 'projectplan/index.html'),
				skillsandjobs:		resolve(root, 'skillsandjobs/index.html'),
				groupreflection:	resolve(root, 'groupreflection/index.html'),
			}
		},
	},
})

