<script lang='ts' setup>
interface Item {
	id: number
	poster: string
	avatar: string
	title: string
	views: string
	channel: string
	createdAt: string
	isOfficial: boolean
	isTrend: boolean
}

interface Props {
	items: Item[]
	label: string
	icon: string
}

defineProps<Props>()
</script>

<template>
	<section class='flex flex-col space-y-4 py-2.5'>
		<SectionTitle :icon :label />

		<ul role='list' class='wrapper'>
			<Card v-for='item in items' :key='item.id' v-bind='item' />
		</ul>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-1 gap-5 py-0.5 md:grid-cols-2 lg:grid-cols-4;
}
</style>