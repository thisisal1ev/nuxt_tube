<script lang="ts" setup>
interface Item {
	id: number
	poster: string
	title: string
	views: number
	channel: string
}

defineProps<{ items: Item[] }>()
</script>

<template>
	<section class="py-2 my-0.5 space-y-5">
		<CardHistory
			v-for="item in items"
			:key="item.id"
			:id="item.id"
			:title="item.title"
			:views="item.views"
			:poster="item.poster"
			:channel="item.channel"
		/>
	</section>
</template>
