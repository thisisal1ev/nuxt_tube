import { axiosInstance } from '~/services/instance'

export default defineCachedEventHandler(async event => {
	try {
		const { data } = await axiosInstance.get('/videos')

		return data
	} catch (e) {
		console.error(`[GET] Error:`, e)
	}
})
