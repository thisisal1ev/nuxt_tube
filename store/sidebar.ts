export const useSidebarStore = defineStore('sidebar', () => {
	const isCollapsed = ref<boolean>(false)
	const route = useRoute()

	const isStudio = computed(() => {
		return route.name === 'studio' || route.name === 'settings'
	})

	const sidebarTitle = computed(() => {
		return route.name === 'studio' || route.name === 'settings'
			? 'Studio'
			: 'NuxtTube'
	})

	function toggle() {
		isCollapsed.value = !isCollapsed.value
	}

	return { isCollapsed, isStudio, sidebarTitle, toggle }
})
