<script lang='ts' setup>
const isLiked = ref<boolean>(false)
const state = ref<boolean>(false)
const stateOfDescription = ref<boolean>(false)
const inputValue = ref<string>('')
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
const comments = ref([
	{
		id: 1,
		avatar:
			'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		name: 'Name of the channel',
		channelAlias: 'myChannel',
		comment: 'This is comment',
		createdAt: '2 days ago',
	},
])

function onComment() {
	comments.value.push({
		id: Math.random(),
		avatar:
			'https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj',
		name: 'Name of the channel',
		channelAlias: 'myChannel',
		comment: inputValue.value,
		createdAt: '2 days ago',
	})

	inputValue.value = ''
}

function description() {
	stateOfDescription.value = !stateOfDescription.value
}

function like() {
	isLiked.value = !isLiked.value
}

function subscribe() {
	state.value = !state.value
}

const { $api } = useNuxtApp()
const route = useRoute()

const { data: video } = await useAsyncData('video', () =>
	$api(`/videos/${route.params.id}`)
)
</script>

<template>
	<div class="video_layout gap-x-10 py-5">
		<div class='video'>
			<video src="https://cdn.pixabay.com/video/2025/01/19/253423_large.mp4" :poster='video?.poster'
				class="rounded-lg w-full mb-10 aspect-video" controls />

			<div class="w-full space-y-5">
				<div class="flex items-start justify-between">
					<div>
						<h3 class="text-xl font-semibold">
							{{ video?.title }}
						</h3>

						<p class="text-sm text-white/50">
							{{ formatter.format(+video?.views) }} views
						</p>
					</div>

					<div class="flex items-center justify-between space-x-5">
						<button class='flex items-center space-x-1.5'>
							<Icon name='lucide:list-video' size='18' />

							<span>Save</span>
						</button>

						<button @click='like' class='flex items-center space-x-1.5'>
							<Icon :name="isLiked ? 'lucide:heart' : 'lucide:heart-off'" size='18' />

							<span>{{ formatter.format(video?.likes) }}</span>
						</button>
					</div>
				</div>

				<hr class='text-gray-700'>

				<div class="flex items-center justify-between py-2.5">
					<div class="flex justify-between space-x-2">
						<NuxtImg class="rounded-xl w-14 h-14" width="40" height="40" :src="video?.channel.avatar" />

						<div>
							<h4 class="text-sm flex items-center space-x-1.5">
								<NuxtLink :to="`/channel/mychannel`" class="mr-1.5">
									{{ video.channel.name }}
								</NuxtLink>

								<Icon v-if='video.channel.isOfficial' name="lucide:badge-check" size="18" class="text-green-600" />
							</h4>

							<p class="text-xs text-white/60">
								{{ video.channel.subscribers.length }} subscribers
							</p>
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
						{{ video?.description }}
					</p>

					<button @click="description"
						class="uppercase !p-0 text-neutral-400 text-sm font-semibold hover:text-neutral-300 transition-colors duration-300">
						{{ stateOfDescription ? 'Show less' : 'Show more' }}
					</button>
				</div>

				<hr class="text-gray-700" />

				<form @submit.prevent='onComment' class="flex items-center justify-between space-x-16 py-2.5">
					<input v-model='inputValue' type='text'
						class="grow border border-white/10 px-2.5 py-1.5 outline-none rounded focus:border-white/30 transition-colors duration-300"
						placeholder="Enter comment" />

					<button type='submit'
						class="font-semibold px-10 rounded-sm bg-neutral-600 py-2 hover:bg-neutral-500 transition-colors duration-300">Comment</button>
				</form>


				<div class="space-y-2.5 py-2.5">
					<Comment v-for='comment in comments' :key='comment.id' :channelAlias='comment.channelAlias'
						:avatar='comment.avatar' :name='comment.name' :createdAt='comment.createdAt' :comment='comment.comment' />
				</div>
			</div>
		</div>

		<Section class="recommendation !flex !flex-col" classBody='!py-0' :items />
	</div>
</template>