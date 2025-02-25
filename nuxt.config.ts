import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: { plugins: [tailwindcss()] },
	css: ['./assets/index.css'],
	modules: ['@nuxt/ui', '@pinia/nuxt', 'motion-v/nuxt', '@nuxt/image'],

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
		storesDirs: ['./stores'],
	},

	app: {
		head: {
			script: [
				{
					src: 'https://www.google.com/recaptcha/api.js',
					async: true,
					defer: true,
				},
			],
		},
	},

	compatibilityDate: '2025-02-18',
})
