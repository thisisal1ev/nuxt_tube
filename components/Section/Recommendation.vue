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
	isTrend?: boolean
}>()
</script>

<template>
	<section class="wrapper">
		<Card
			v-for="item in items"
			:id="item.id"
			:title="item.title"
			:views="item.views"
			:channel="item.channel"
			:poster="item.poster"
			:isTrend
		/>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply flex flex-col space-y-5 gap-5;
}
</style>
