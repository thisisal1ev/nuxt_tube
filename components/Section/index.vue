<script lang="ts" setup>
interface Item {
	id: number
	title: string
	views: number
	channel: string
	poster: string
}

defineProps<{
	items: Item[]
	text: string
	icon: string
	isTrend?: boolean
}>()
</script>

<template>
	<section class="py-2 my-0.5">
		<SectionTitle :text :icon />

		<div class="wrapper">
			<Card
				v-for="item in items"
				:id="item.id"
				:title="item.title"
				:views="item.views"
				:channel="item.channel"
				:poster="item.poster"
				:isTrend
			/>
		</div>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-4 gap-5 py-5;
}
</style>
