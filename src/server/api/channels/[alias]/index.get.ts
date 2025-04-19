import { axiosInstance } from '~/services/instance'

export default defineCachedEventHandler(async event => {
	try {
		const param = event.context.params?.alias
		const { data } = await axiosInstance.get(`/channels/${param}`)

		return data
	} catch (e) {
		console.error(`[GET] Error:`, e)
	}
})
