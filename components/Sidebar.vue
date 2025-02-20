<script lang="ts" setup>
export interface IMenuItem {
	icon: string
	name: string
	link: string
}

const MENU: IMenuItem[] = [
	{
		icon: 'home',
		name: 'Home',
		link: '/',
	},
	{
		icon: 'users',
		name: 'Friends',
		link: '/friends',
	},
	{
		icon: 'circle-check',
		name: 'Todo list',
		link: '/todo',
	},
	{
		icon: 'award',
		name: 'Achievements',
		link: '/achievements',
	},
	{
		icon: 'settings',
		name: 'Settings',
		link: '/settings',
	},
]

const isCollapsed = ref<boolean>(false)

const toggleSidebar = () => {
	isCollapsed.value = !isCollapsed.value
}
</script>

<template>
	<aside
		class="fixed left-0 top-0 border-r border-white/50 h-screen bg-white/5 py-2 transition-all duration-300"
		:class="isCollapsed ? 'w-56' : 'w-12'"
	>
		<button
			class="absolute top-1 right-1 flex w-10 h-10 items-center justify-center cursor-pointer opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
			@click="toggleSidebar()"
		>
			<Icon
				:name="
					isCollapsed ? 'lucide:panel-left-open' : 'lucide:panel-left-close'
				"
				size="18"
			/>
		</button>

		<Menu :items="MENU" :isCollapsed />
	</aside>
</template>
