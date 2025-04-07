<script lang='ts' setup>
const route = useRoute()
const isSubscribed = ref(false)

function subscribe() {
	isSubscribed.value = !isSubscribed.value
}

const items = ref([
	{
		id: 1,
		poster: 'https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg',
		avatar: 'https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '2 days ago',
		channel: String(route.params.name),
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
		channel: String(route.params.name),
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
		channel: String(route.params.name),
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
		channel: String(route.params.name),
		views: '1.5k',
		title: 'Курс Nuxt 3. Урок 1. Знакомство с фреймворком',
		isOfficial: false,
		isTrend: false,
	}, {
		id: 5,
		poster: 'https://i.ytimg.com/vi/_Pv6wfABwF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHZTJ4MYr9t05CTTIQZePej-GKjQ',
		avatar: 'https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj',
		channel: String(route.params.name),
		createdAt: '3 month ago',
		title: '10 ОШИБОК, которые ЛОМАЮТ ваши ПРОЕКТЫ!',
		views: '65.2k',
		isOfficial: true,
		isTrend: false
	}
])
</script>

<template>
	<section class='py-5 space-y-5'>
		<NuxtImg
			src='https://yt3.googleusercontent.com/wvhj7g9Ue3EO2JDutWunw-GFKcy_fkrV4juRtmBa1Jx8Rkq79cJG30zfZ3CtPFfU1NH1mqLUvcQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
			:alt="$route.params.name + ' channel banner'" height='200' class='w-full rounded-xl' />

		<div class='flex space-x-5'>
			<NuxtImg
				src="https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj"
				:alt="$route.params.name + ' channel avatar'" height='150' width='150' class='rounded-lg' />

			<div class='flex flex-col justify-between space-y-2'>
				<h2 class='flex items-center space-x-1.5'>
					<span class='text-3xl font-bold'>{{ $route.params.name }}</span>

					<Icon name='lucide:badge-check' size='24' class="text-green-600" />
				</h2>

				<div class='flex items-center space-x-2 text-gray-400 text-sm'>
					<span>/{{ $route.params.name }}</span>

					<span>1 subscribers</span>

					<span>1 videos</span>
				</div>

				<p class='text-gray-400 text-sm line-clamp-6'>This is a description. This description can be long.</p>

				<button
					class='px-6 py-1.5 w-40 rounded-md bg-dimmed-red hover:bg-dimmed-red/80 transition-colors duration-300 shrink-0'
					:class="{ ' bg-gray-500 hover:bg-gray-400': isSubscribed }" @click='subscribe'>
					{{ isSubscribed ? 'Subscribed' : 'Subscribe' }}
				</button>
			</div>
		</div>

		<Section icon='video' label='Videos' :items />
	</section>
</template>