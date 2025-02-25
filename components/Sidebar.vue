<script lang="ts" setup>
const sidebarStore = useSidebarStore()
</script>

<template>
	<Motion
		as="aside"
		class="sidebar"
		:initial="{ width: '224px', paddingLeft: '32px', paddingRight: '32px' }"
		:animate="
			sidebarStore.isCollapsed
				? { width: '48px', paddingLeft: '8px', paddingRight: '8px' }
				: {
						width: '224px',
						paddingLeft: '32px',
						paddingRight: '32px',
				  }
		"
		:transition="{ duration: 0.3 }"
	>
		<div class="flex items-center space-x-4">
			<button
				title="Menu"
				class="cursor-pointer transition-opacity duration-300 ease-in-out"
				:class="sidebarStore.isCollapsed ? 'mx-auto' : ''"
				@click="sidebarStore.toggleSidebar()"
			>
				<Icon name="lucide:menu" size="24" />
			</button>

			<h1 v-if="!sidebarStore.isCollapsed" class="flex items-center space-x-1">
				<Icon name="lucide:square-play" size="28" class="text-info-400" />

				<span class="font-extrabold text-xl">NuxtTube</span>
			</h1>
		</div>

		<Menu />
	</Motion>
</template>

<style scoped>
@reference "tailwindcss";

.sidebar {
	@apply border-r border-white/10 min-h-screen !py-5 space-y-5;
}
</style>
