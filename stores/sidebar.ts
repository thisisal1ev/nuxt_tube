export interface IMenuItem {
	icon: string
	name: string
	link: string
}

export const useSidebarStore = defineStore('sidebar', () => {
	const UP_MENU_LIST = ref<IMenuItem[]>([
		{
			icon: 'compass',
			name: 'Explore',
			link: '/',
		},
		{
			icon: 'flame',
			name: 'Trending',
			link: '/trend',
		},
		{
			icon: 'gamepad-2',
			name: 'Video games',
			link: '/games',
		},
		{
			icon: 'circle-play',
			name: 'Subscriptions',
			link: '/subscriptions',
		},
	])

	const MID_MENU_LIST = ref<IMenuItem[]>([
		{
			icon: 'tv-minimal-play',
			name: 'My channel',
			link: '/channel',
		},
		{
			icon: 'list-video',
			name: 'Playlist',
			link: '/playlist',
		},
		{
			icon: 'history',
			name: 'History',
			link: '/history',
		},
		{
			icon: 'folder-heart',
			name: 'Liked videos',
			link: '/liked',
		},
	])

	const LOW_MENU_LIST = ref<IMenuItem[]>([
		{
			icon: 'info',
			name: 'Send feedback',
			link: '/feedback',
		},
		{
			icon: 'log-out',
			name: 'Logout',
			link: '',
		},
	])

	const STUDIO_MENU_LIST = ref<IMenuItem[]>([
		{
			icon: 'layout-grid',
			name: 'Studio',
			link: 'studio',
		},
		{
			icon: 'settings',
			name: 'Settings',
			link: 'settings',
		},
		{
			icon: 'upload',
			name: 'Upload a video',
			link: '',
		},
	])

	const isCollapsed = ref<boolean>(false)
	const route = useRoute()

	function toggleSidebar() {
		isCollapsed.value = !isCollapsed.value
	}

	const isStudio = computed(() => {
		return route.name === 'Studio' || route.name === 'Settings'
	})

	const sidebarTitle = computed(() => {
		return route.name === 'Studio' || route.name === 'Settings'
			? 'Studio'
			: 'NuxtTube'
	})

	return {
		UP_MENU_LIST,
		MID_MENU_LIST,
		LOW_MENU_LIST,
		STUDIO_MENU_LIST,
		isCollapsed,
		isStudio,
		sidebarTitle,
		toggleSidebar,
	}
})
