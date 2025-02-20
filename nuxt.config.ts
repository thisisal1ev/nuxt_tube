import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: { plugins: [tailwindcss()] },
	css: ['./assets/index.css'],
	modules: ['@nuxt/ui', '@pinia/nuxt'],

	fonts: {
		families: [{ name: 'Nunito', provider: 'google', global: true }],
		experimental: {
			processCSSVariables: true,
		},
	},

	icon: {
		mode: 'svg',
		size: '16px',
	},

	pinia:{
		storesDirs: ['./stores'],
	},

	compatibilityDate: '2025-02-18',
})
