<script lang='ts' setup>
interface Props {
	id: number
	poster: string
	title: string
	views: string
	createdAt: string
	isTrend: boolean
	channel: {
		name: string
		alias: string
		avatar: string
		isOfficial: boolean
	}
}

const { $api } = useNuxtApp()

const { data: items } = await useAsyncData('videos', () => $api('/videos'))
</script>

<template>
	<Section v-if='items' icon='flame' label='Trending'
		:items="items.toSorted((a: Props, b: Props) => Number(b.views) - Number(a.views)).slice(0, 4)" :isTrend='true' />

	<Section v-if='items' icon='compass' label='Explore' :items />
</template>