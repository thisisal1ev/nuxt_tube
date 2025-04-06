export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/channel') {
		// Redirect to the user's channel page
		return navigateTo('/channel/userAlias')
	}
})
