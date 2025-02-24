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
	<section>
		<h2 class="flex items-center space-x-2">
			<Icon name="lucide:compass" size="24" class="text-info-500" />

			<span class="text-lg font-bold">Explore</span>
		</h2>

		<div class="wrapper">
			<Card
				v-for="item in items"
				:id="item.id"
				:title="item.title"
				:views="item.views"
				:channel="item.channel"
				:poster="item.poster"
			/>
		</div>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grow h-auto grid grid-cols-4 gap-5 py-5;
}
</style>
