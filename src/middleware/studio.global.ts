export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/studio') {
		return navigateTo('/studio/content')
	}
})
