export const useSidebarStore = defineStore('sidebar', () => {
	const isCollapsed = ref<boolean>(false)
	const route = useRoute()

	const isStudio = computed(() => {
		return route.name === 'Studio' || route.name === 'Settings'
	})

	const sidebarTitle = computed(() => {
		return route.name === 'Studio' || route.name === 'Settings'
			? 'Studio'
			: 'NuxtTube'
	})

	function toggle() {
		isCollapsed.value = !isCollapsed.value
	}

	return { isCollapsed, isStudio, sidebarTitle, toggle }
})
