<script lang='ts' setup>
const items = ref([
	{
		id: 1,
		poster: 'https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg',
		avatar: 'https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '2 days ago',
		channel: 'Macan',
		views: '1.5k',
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
		views: '2k',
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
		views: '1M',
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
		views: '1.5k',
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
		views: '65.2k',
		isOfficial: true,
		isTrend: false
	}
])
</script>

<template>
	<Section icon='list-video' :label="String($route.params?.playlist) || ''" :items />
</template>