<script lang="ts" setup>
const items = ref([
	{
		id: 1,
		title:
			'ФИНАЛ И КОНЦОВКА ОСНОВНОГО СЮЖЕТА! - Vice City Nextgen Edition Прохождение #14',
		description: 'ljaskhdkjfahskjd',
		comments: 22,
		likes: 150,
		views: 3156,
		poster:
			'https://i.ytimg.com/vi/wtima36SGDA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCuLGYK7I4IXtQYzGhFfuTJrawLg',
	},
	{
		id: 2,
		title: 'В ПОГОНЕ ЗА РАССВЕТОМ! - ГОДНОТА ПОДЪЕХАЛА) - Warcraft 3',
		views: 500,
		description: 'akljsdfksdkfhakj',
		comments: 150,
		likes: 78,
		poster:
			'https://i.ytimg.com/vi/ctYQMuJNA8M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDq58ZKGgiXQKVX_LjQigaDkSE4_Q',
	},
	{
		id: 3,
		title:
			'НОВЫЕ СПОСОБЫ ПРОХОЖДЕНИЯ И ВОССТАНОВЛЕННЫЙ КОНТЕНТ - Vice City Nextgen Edition Прохождение #2',
		views: 15000,
		description: 'laksjfdkahsdkjfh',
		comments: 1000,
		likes: 2500,
		poster:
			'https://i.ytimg.com/vi/voncH30Xqrs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjcygmW_LN9F2E8B0xXMSdsQcyxw',
	},
	{
		id: 4,
		title: 'ПРИЕХАЛИ К НЕОЖИДАННОМУ ПОВОРОТУ | PUBG',
		views: 12368,
		description: 'kjkhjghffhggahsjd',
		comments: 500,
		likes: 1000,
		poster:
			'https://i.ytimg.com/vi/0dny8H4gHlQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCX3SPISYsNEpznevHb_mo3nDaPA',
	},
])
</script>

<template>
	<section class="py-2 my-0.5">
		<div>
			<CardStudio
				v-for="item in items"
				:key="item.id"
				:poster="item.poster"
				:title="item.title"
				:views="item.views"
				:description="item.description"
				:comments="item.comments"
				:likes="item.likes"
			/>
		</div>
	</section>
</template>
