<script lang='ts' setup>
const items = ref([
	{
		id: 1,
		poster: 'https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg',
		description: 'This is a description for the video',
		createdAt: '2 days ago',
		channel: 'Macan',
		views: '1.5k',
		title: 'MACAN, A.V.G - Привыкаю',
		comments: 100,
		likes: 100,
		videoStatus: 'Pending',
	},
	{
		id: 2,
		poster: 'https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ',
		description: 'This is a description for the video',
		createdAt: '2 days ago',
		channel: 'Rozetked',
		views: '2k',
		title: 'Зачем тебе Switch 2, если ты первый не прошёл?',
		comments: 100,
		likes: 100,
		videoStatus: 'Published',
	},
	{
		id: 3,
		poster: 'https://i9.ytimg.com/vi/Eiu9hzJ-YrE/hq720_custom_2.jpg?sqp=CLy8yL8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHpVQqKf2zhwdm6ucXlFnfmcbDBw',
		description: 'This is a description for the video',
		createdAt: 'a month ago',
		channel: 'RED Group',
		views: '1M',
		title: 'Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS',
		comments: 100,
		likes: 100,
		videoStatus: 'Published',
	},
	{
		id: 4,
		poster: 'https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w',
		description: 'This is a description for the video, which is very long and should be truncated. This description can be long but it should be truncated to fit the design of the card. This is a description for the video, which is very long and should be truncated.',
		createdAt: '2 days ago',
		channel: 'CodeHorizon',
		views: '1.5k',
		title: 'Курс Nuxt 3. Урок 1. Знакомство с фреймворком',
		comments: 100,
		likes: 100,
		videoStatus: 'Published',
	},
	{
		id: 5,
		poster: 'https://i.ytimg.com/vi/_Pv6wfABwF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHZTJ4MYr9t05CTTIQZePej-GKjQ',
		description: 'This is a description for the video',
		channel: 'RED Group',
		createdAt: '3 month ago',
		title: '10 ОШИБОК, которые ЛОМАЮТ ваши ПРОЕКТЫ!',
		views: '65.2k',
		comments: 100,
		likes: 100,
		videoStatus: 'Published',
	}
])

function remove() {
	console.log('remove')
}

function edit() {
	console.log('edit')
}
</script>

<template>
	<section class='py-5'>
		<h2 class='flex items-center gap-2 text-4xl font-bold mb-4'>
			<Icon name='lucide:video' size='32' class='text-dimmed-red' />

			<span>Content</span>
		</h2>

		<ul role='list' class='flex flex-col py-5'>
			<CardStudio v-for='item in items' :key='item.id' :id='item.id' :poster='item.poster' :views='item.views'
				:title='item.title' :createdAt='item.createdAt' :description='item.description' :comments='item.comments'
				:likes='item.likes' :videoStatus='item.videoStatus' @edit='edit' @remove='remove' />
		</ul>
	</section>
</template>