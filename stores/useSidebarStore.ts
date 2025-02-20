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
	])
	const isCollapsed = ref<boolean>(false)

	function toggleSidebar() {
		isCollapsed.value = !isCollapsed.value
	}

	return {
		UP_MENU_LIST,
		MID_MENU_LIST,
		LOW_MENU_LIST,
		isCollapsed,
		toggleSidebar,
	}
})
