<script lang='ts' setup>
const items = ref([
	{
		id: 1,
		poster: 'https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg',
		avatar: 'https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '2 days ago',
		channel: 'Macan',
		views: '1500',
		title: 'MACAN, A.V.G - Привыкаю',
		isOfficial: true,
		isTrend: false,
	},
	{
		id: 2,
		poster: 'https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ',
		avatar: 'https://yt3.googleusercontent.com/BHcM28mKcOC3ZTUzwCPqZlU7nWfK0iqlOuRUH448NqxNtKAtSU9LYohWgxbKSojlUoKF5kMMvQ=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '2 days ago',
		channel: 'Rozetked',
		views: '2000',
		title: 'Зачем тебе Switch 2, если ты первый не прошёл?',
		isOfficial: true,
		isTrend: false,
	},
	{
		id: 3,
		poster: 'https://i.ytimg.com/vi/hp7RGbb44VY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcDvBBVBBdIg1qKo10uQgAROPUFQ',
		avatar: 'https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj',
		createdAt: 'a month ago',
		channel: 'RED Group',
		views: '1000000',
		title: 'Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS',
		isOfficial: true,
		isTrend: false,
	},
	{
		id: 4,
		poster: 'https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w',
		avatar: 'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '2 days ago',
		channel: 'CodeHorizon',
		views: '1500',
		title: 'Курс Nuxt 3. Урок 1. Знакомство с фреймворком',
		isOfficial: false,
		isTrend: false,
	}, {
		id: 5,
		poster: 'https://i.ytimg.com/vi/_Pv6wfABwF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHZTJ4MYr9t05CTTIQZePej-GKjQ',
		avatar: 'https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj',
		channel: 'RED Group',
		createdAt: '3 month ago',
		title: '10 ОШИБОК, которые ЛОМАЮТ ваши ПРОЕКТЫ!',
		views: '65005',
		isOfficial: true,
		isTrend: false
	}
])
</script>

<template>
	<section class='py-5'>
		<div class='flex items-end gap-10 mb-4'>
			<h2 class='flex items-center gap-2 text-4xl font-bold'>
				<Icon name='lucide:heart' size='32' class='text-dimmed-red' />

				<span>Liked videos</span>
			</h2>

			<span class='inline-block font-semibold'>
				{{ items.length }} videos
			</span>
		</div>

		<ul role='list' class='flex flex-col py-5 gap-5'>
			<CardHistory v-for="item in items" v-if='items.length' :key="item.id" :id="item.id" :title="item.title"
				:views="item.views" :poster="item.poster" :channel="item.channel" :isOfficial='item.isOfficial'
				:createdAt='item.createdAt' />

			<li v-else>You have not any liked videos yet</li>
		</ul>
	</section>
</template>