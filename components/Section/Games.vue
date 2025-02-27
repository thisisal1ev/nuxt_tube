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
		channel: "ARROW'S PATH",
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
	<section class="py-2 my-0.5">
		<SectionTitle text="Video games" icon="gamepad-2" />

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
