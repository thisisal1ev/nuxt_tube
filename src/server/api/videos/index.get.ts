export default defineCachedEventHandler(async event => {
	const { $axios } = useNuxtApp()

	try {
		const data = await $axios.get('/videos')

		return data
	} catch (e) {
		console.error(`[GET] Error:`, e)
	}
})
