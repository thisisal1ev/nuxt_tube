<script lang='ts' setup>
interface Props {
	icon: string
	label: string
	route: string
}

defineProps<Props>()
const sidebarStore = useSidebarStore()
</script>

<template>
	<NuxtLink :to="`/${route}`" class='link group'>
		<Icon :name="`lucide:${icon}`" size='24'
			class="transition duration-300 group-hover:!text-red group-hover:rotate-12" />

		<span v-if='!sidebarStore.isCollapsed'>
			{{ label }}
		</span>
	</NuxtLink>
</template>

<style scoped>
@reference "tailwindcss";

.link {
	@apply flex items-center gap-3 py-2.5;
}
</style>