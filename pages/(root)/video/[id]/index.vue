<script lang='ts' setup>
const isLiked = ref<boolean>(false)
const state = ref<boolean>(false)
const stateOfDescription = ref<boolean>(false)
const items = ref([
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: '34',
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
		isOfficial: true,
		isTrend: true,
		avatar: 'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: '34',
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
		isOfficial: true,
		isTrend: true,
		avatar: 'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: '34',
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
		isOfficial: true,
		isTrend: true,
		avatar: 'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '',
	},
	{
		id: 1,
		title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
		views: '34',
		channel: 'Channel 1',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
		isOfficial: true,
		isTrend: true,
		avatar: 'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		createdAt: '',
	},
])

function description() {
	stateOfDescription.value = !stateOfDescription.value
}

function like() {
	isLiked.value = !isLiked.value
}

function subscribe() {
	state.value = !state.value
}
</script>

<template>
	<div class="video_layout gap-x-10 py-5">
		<div class='video'>
			<video src="https://cdn.pixabay.com/video/2025/01/19/253423_large.mp4"
				class="rounded-lg w-full mb-10 aspect-video" controls />

			<div class="w-full space-y-5">
				<div class="flex items-start justify-between">
					<div>
						<h3 class="text-3xl font-semibold">Title {{ $route.params.id }}</h3>
						<p class="text-sm text-white/50">2054 views</p>
					</div>

					<div class="flex items-center justify-between space-x-5">
						<button class='flex items-center space-x-1.5'>
							<Icon name='lucide:list-video' size='18' />

							<span>Save</span>
						</button>

						<button @click='like' class='flex items-center space-x-1.5'>
							<Icon :name="isLiked ? 'lucide:heart' : 'lucide:heart-off'" size='18' />

							<span>{{ isLiked ? 10 + 1 : 10 }}</span>
						</button>
					</div>
				</div>

				<hr class='text-gray-700'>

				<div class="flex items-center justify-between py-2.5">
					<div class="flex justify-between space-x-2">
						<NuxtImg class="rounded-xl w-14 h-14" width="40" height="40"
							src="https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj" />

						<div>
							<h4 class="text-sm flex items-center space-x-1.5">
								<NuxtLink :to="`/channel/mychannel`" class="mr-1.5">Name of the channel</NuxtLink>

								<Icon name="lucide:badge-check" size="18" class="text-green-600" />
							</h4>

							<p class="text-xs text-white/60">100 subscribers</p>
						</div>
					</div>

					<button @click="subscribe"
						class="flex justify-center px-6 py-2 w-40 rounded-md transition-all duration-300 hover:opacity-80"
						:class="state ? 'bg-gray-500' : 'bg-dimmed-red'">
						{{ state ? 'Subscribed' : 'Subscribe' }}
					</button>
				</div>

				<div class="bg-blue-200/10 my-5 w-full rounded-lg p-2.5">
					<p class="text-sm line-clamp-2 mb-1.5" :class="stateOfDescription ? 'line-clamp-none' : ''">
						This is description of video. This description can be very long.
						However, it should be short. But it is no problem. If it is very long,
						you should use this component. This is description of video. This
						description can be very long. However, it should be short. But it is
						no problem. If it is very long, you should use this component. This is
						description of video. This description can be very long. However, it
						should be short. But it is no problem. If it is very long, you should
						use this component.
					</p>

					<button @click="description" class="uppercase !p-0 text-neutral-400 text-sm font-semibold">
						{{ stateOfDescription ? 'Show less' : 'Show more' }}
					</button>
				</div>

				<hr class="text-gray-700" />

				<div class="flex items-center justify-between space-x-16 py-2.5">
					<Input class="grow py-2" placeholder="Enter comment" />

					<button class="font-semibold px-10 rounded-sm bg-neutral-600 py-2">Comment</button>
				</div>
			</div>
		</div>

		<Section class="recommendation !flex !flex-col" classBody='!py-0' :items />
	</div>
</template>