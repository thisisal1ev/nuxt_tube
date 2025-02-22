<script lang="ts" setup>
import type { IMenuItem } from '~/stores/useSidebarStore'

interface Props extends IMenuItem {
	isCollapsed: boolean
}

defineProps<Props>()
</script>

<template>
	<NuxtLink
		:to="link"
		class="flex items-center gap-3 py-3.5 transition-all duration-300 ease-in-out h-12 group"
		:class="isCollapsed ? '' : 'px-0.5'"
		:title="name"
	>
		<Icon
			:name="`lucide:${icon}`"
			class="block group-hover:!text-info-500 transition-colors duration-300 ease-in-out"
			:class="!isCollapsed ? '!text-white' : 'mx-auto'"
			size="20"
		/>

		<span
			v-if="!isCollapsed"
			class="transition-all duration-300 whitespace-nowrap"
		>
			{{ name }}
		</span>
	</NuxtLink>
</template>
