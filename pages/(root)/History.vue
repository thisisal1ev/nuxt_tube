<script lang="ts" setup>
const items = ref([
	{
		id: 1,
		title:
			'ФИНАЛ И КОНЦОВКА ОСНОВНОГО СЮЖЕТА! - Vice City Nextgen Edition Прохождение #14',
		views: 3.4,
		channel: 'SpecterChannel',
		poster:
			'https://i.ytimg.com/vi/wtima36SGDA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCuLGYK7I4IXtQYzGhFfuTJrawLg',
	},
	{
		id: 2,
		title: 'В ПОГОНЕ ЗА РАССВЕТОМ! - ГОДНОТА ПОДЪЕХАЛА) - Warcraft 3',
		views: 3.4,
		channel: `ARROW'S PATH`,
		poster:
			'https://i.ytimg.com/vi/ctYQMuJNA8M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDq58ZKGgiXQKVX_LjQigaDkSE4_Q',
	},
	{
		id: 3,
		title:
			'НОВЫЕ СПОСОБЫ ПРОХОЖДЕНИЯ И ВОССТАНОВЛЕННЫЙ КОНТЕНТ - Vice City Nextgen Edition Прохождение #2',
		views: 3.4,
		channel: 'SpecterChannel',
		poster:
			'https://i.ytimg.com/vi/voncH30Xqrs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjcygmW_LN9F2E8B0xXMSdsQcyxw',
	},
	{
		id: 4,
		title: 'ПРИЕХАЛИ К НЕОЖИДАННОМУ ПОВОРОТУ | PUBG',
		views: 3.4,
		channel: 'Ally',
		poster:
			'https://i.ytimg.com/vi/0dny8H4gHlQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCX3SPISYsNEpznevHb_mo3nDaPA',
	},
])
</script>

<template>
	<div class="flex items-start justify-between">
		<h1 class="flex items-center space-x-3 mb-5">
			<Icon name="lucide:history" size="32" class="text-info-500" />

			<span class="font-bold text-3xl">History</span>
		</h1>

		<UButton
			label="Clear history"
			color="info"
			size="lg"
			class="px-5 rounded-sm"
		/>
	</div>

	<SectionHistory :items />
</template>
