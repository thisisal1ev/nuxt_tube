<script lang="ts" setup>
const items = ref([
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: 3.4,
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: 3.4,
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: 3.4,
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: 3.4,
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
])
</script>

<template>
	<section class="py-2 my-0.5">
		<SectionTitle text="Trending" icon="flame" />

		<div class="wrapper">
			<Card
				v-for="item in items"
				:id="item.id"
				:title="item.title"
				:views="item.views"
				:channel="item.channel"
				:poster="item.poster"
				:isTrend="true"
			/>
		</div>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply h-auto grid grid-cols-4 gap-5 py-5;
}
</style>
