<script lang='ts' setup>
function toggleModal() {
	console.log('Modal toggled')
}

const items = ref([
	{
		title: 'PUBG',
		poster:
			'https://i.ytimg.com/vi/0dny8H4gHlQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCX3SPISYsNEpznevHb_mo3nDaPA',
	},
	{
		title: 'Vice City Nextgen Edition Прохождение',
		poster:
			'https://i.ytimg.com/vi/voncH30Xqrs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjcygmW_LN9F2E8B0xXMSdsQcyxw',
	},
	{
		title: 'Music',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
])
</script>

<template>
	<section class='py-5'>
		<div class='flex items-center justify-between mb-4'>
			<h2 class='flex items-center gap-2 text-4xl font-bold'>
				<Icon name='lucide:list-video' size='32' class='text-dimmed-red' />

				<span>Playlists</span>
			</h2>

			<button @click='toggleModal'
				class='font-semibold rounded-sm w-50 px-6 py-1.5 bg-gray-500 hover:bg-gray-400 transition-colors duration-300'>
				Create a playlist
			</button>
		</div>

		<div class="py-2 my-0.5 wrapper">
			<CardPlaylist v-for="item in items" :key="item.title" :title="item.title" :poster="item.poster"
				:length='item.title.length' />
		</div>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-4 gap-5 py-5;
}
</style>