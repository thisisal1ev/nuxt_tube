import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
	const instance = axios.create({
		baseURL: 'http://localhost:4200/v1',
	})

	nuxtApp.provide('axios', instance)
})
