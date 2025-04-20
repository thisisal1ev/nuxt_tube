export default defineNuxtPlugin(nuxtApp => {
	const api = $fetch.create({
		baseURL: 'http://localhost:4200/v1',
	})

	nuxtApp.provide('api', api)
})
