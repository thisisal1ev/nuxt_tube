<script lang="ts" setup>
import type { IMenuItem } from '../Sidebar.vue'

interface Props extends IMenuItem {
	isCollapsed: boolean
}

defineProps<Props>()
</script>

<template>
	<NuxtLink
		:to="link"
		class="flex items-center gap-2.5 py-3.5 transition-all duration-300 ease-in-out h-12 hover:bg-white/10 group"
		:class="isCollapsed ? 'px-5' : 'px-0.5'"
	>
		<Icon
			:name="`lucide:${icon}`"
			class="block group-hover:text-primary-500 transition-colors duration-300 ease-in-out"
			:class="isCollapsed ? '' : 'mx-auto'"
			size="18"
		/>

		<span v-if="isCollapsed" class="transition-all duration-1000">
			{{ name }}
		</span>
	</NuxtLink>
</template>
