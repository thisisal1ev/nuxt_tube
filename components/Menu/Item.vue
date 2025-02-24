<script lang="ts" setup>
import type { IMenuItem } from '~/stores/useSidebarStore'

interface Props extends IMenuItem {
	isCollapsed: boolean
}

defineProps<Props>()
</script>

<template>
	<NuxtLink
		class="group link"
		:to="link"
		:class="isCollapsed ? '' : 'px-0.5'"
		:title="name"
	>
		<Icon
			:name="`lucide:${icon}`"
			:class="!isCollapsed ? '!text-white' : 'mx-auto'"
			class="transition ease-in-out group-hover:!text-info-500 group-hover:rotate-12"
			size="20"
		/>

		<span v-if="!isCollapsed" class="whitespace-nowrap">
			{{ name }}
		</span>
	</NuxtLink>
</template>

<style scoped>
@reference "tailwindcss";

.link {
	@apply flex items-center gap-3 py-3.5 h-12;
}

.transition {
	@apply transition-all duration-300;
}
</style>
