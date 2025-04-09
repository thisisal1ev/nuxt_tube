export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/playlists') {
		return navigateTo('/playlists/userPlaylists')
	}
})
