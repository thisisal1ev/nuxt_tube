<script lang="ts" setup>
import { motion } from 'motion-v'

const sidebarStore = useSidebarStore()

const sidebarAnimation = computed(() => ({
	width: sidebarStore.isCollapsed ? 64 : 256,
	paddingInline: sidebarStore.isCollapsed ? '8px' : '32px',
}))
</script>

<template>
	<motion.aside class='sidebar' :initial="{ width: 256 }" :animate="sidebarAnimation" :exit="{ opacity: 0 }">
		<div class='flex items-center space-x-4 mb-8'>
			<button @click='sidebarStore.toggle' class='group' :class="{ 'mx-auto': sidebarStore.isCollapsed }">
				<Icon class='group-hover:text-white/50 transition_color' name="lucide:menu" size="24" />
			</button>

			<h1 v-if='!sidebarStore.isCollapsed' class="flex items-center space-x-1">
				<Icon name="lucide:square-play" size="32" class="text-dimmed-red" />

				<span class="font-extrabold text-2xl">
					{{ sidebarStore.sidebarTitle }}
				</span>
			</h1>
		</div>

		<SidebarMenu />
	</motion.aside>
</template>

<style scoped>
@reference "tailwindcss";

.sidebar {
	@apply border-r border-white/10 min-h-screen outline-none py-5 px-8 w-64;
}
</style>