import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['./assets/index.css'],
	vite: { plugins: [tailwindcss()] },
	modules: [
		'@nuxt/image',
		'@nuxt/fonts',
		'@nuxt/icon',
		'motion-v/nuxt',
		'@pinia/nuxt',
	],

	routeRules: {
		'/**': { isr: true, swr: true, cache: { maxAge: 60 } },
	},

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

	pinia: {
		storesDirs: ['./store'],
	},
})
