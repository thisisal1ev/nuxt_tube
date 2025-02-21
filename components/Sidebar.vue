<script lang="ts" setup>
const sidebarStore = useSidebarStore()
</script>

<template>
	<Motion
		as="aside"
		class="fixed left-0 top-0 border-r border-white/50 h-screen bg-white/5 pt-5 py-2 space-y-5"
		:class="sidebarStore.isCollapsed ? 'p-2' : 'p-8'"
		:initial="{ width: '224px' }"
		:animate="sidebarStore.isCollapsed ? { width: '48px' } : { width: '224px' }"
	>
		<div class="flex items-center space-x-2">
			<button
				class="cursor-pointer transition-opacity duration-300 ease-in-out"
				:class="sidebarStore.isCollapsed ? 'mx-auto' : ''"
				@click="sidebarStore.toggleSidebar()"
			>
				<Icon name="lucide:menu" size="24" />
			</button>

			<h1
				v-if="!sidebarStore.isCollapsed"
				class="flex items-center space-x-1 transition-all duration-300"
			>
				<Icon name="lucide:square-play" size="28" class="text-info-400" />

				<span class="font-extrabold">NuxtTube</span>
			</h1>
		</div>

		<Menu />
	</Motion>
</template>
