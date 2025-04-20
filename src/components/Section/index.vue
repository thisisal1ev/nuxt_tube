<script lang='ts' setup>
interface Item {
	id?: number
	poster?: string
	title?: string
	views?: number
	createdAt?: string
	channel?: {
		name?: string
		alias?: string
		avatar?: string
		isOfficial?: boolean
	}
}

interface Props {
	items?: Item[]
	isTrend?: boolean
	label?: string
	icon?: string
	class?: string
	classBody?: string
}

defineProps<Props>()
</script>

<template>
	<section class='flex flex-col space-y-4 py-2.5' :class='classBody'>
		<SectionTitle v-if='label' :icon :label />

		<ul role='list' class='wrapper' :class>
			<Card v-for='item in items' :key='item?.id' v-bind='item' :isTrend />
		</ul>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-1 gap-5 py-0.5 md:grid-cols-2 lg:grid-cols-4;
}
</style>