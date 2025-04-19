export default defineCachedEventHandler(async event => {
	const { $axios } = useNuxtApp()

	try {
		const param = event.context.params?.alias
		const { data } = await $axios.get(`/channels/${param}`)

		return data
	} catch (e) {
		console.error(`[GET] Error:`, e)
	}
})
