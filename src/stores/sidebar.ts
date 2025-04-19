export const useSidebarStore = defineStore('sidebar', () => {
	const isCollapsed = ref<boolean>(false)
	const route = useRoute()

	const isStudio = computed(() => {
		return route.fullPath.includes('/studio')
	})

	const isChannel = computed(() => {
		return route.fullPath.includes('/channel/userAlias')
	})

	const sidebarTitle = computed(() => {
		return route.fullPath.includes('/studio') ? 'Studio' : 'NuxtTube'
	})

	function toggle() {
		isCollapsed.value = !isCollapsed.value
	}

	return { isCollapsed, isStudio, isChannel, sidebarTitle, toggle }
})
