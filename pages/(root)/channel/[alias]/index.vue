<script lang='ts' setup>
const route = useRoute()
const isSubscribed = ref(false)

function subscribe() {
	isSubscribed.value = !isSubscribed.value
}

const { data: channel } = useFetch(`/channels/${route.params.alias}`, {
	baseURL: '/api',
	method: 'GET',
})
</script>

<template>
	<section class='py-5 space-y-5'>
		<NuxtImg :src='channel?.banner' :alt="$route.params.alias + ' channel banner'" height='200'
			class='w-full rounded-xl' />

		<div class='flex space-x-5'>
			<NuxtImg :src="channel?.avatar" :alt="$route.params.alias + ' channel avatar'" height='150' width='150'
				class='rounded-lg aspect-square w-40 h-40' />

			<div class='flex flex-col justify-between space-y-2'>
				<h2 class='flex items-center space-x-1.5'>
					<span class='text-3xl font-bold'>
						{{ channel?.name }}
					</span>

					<Icon name='lucide:badge-check' size='24' class="text-green-600" />
				</h2>

				<div class='flex items-center space-x-2 text-gray-400 text-sm'>
					<span>/{{ $route.params.alias }}</span>

					<span>•</span>

					<span>1 subscribers</span>

					<span>•</span>

					<span>{{ channel?.videos.length }} videos</span>
				</div>

				<p class='text-gray-400 text-sm line-clamp-6'>
					{{ channel?.description }}
				</p>

				<button
					class='px-6 py-1.5 w-40 rounded-md bg-dimmed-red hover:bg-dimmed-red/80 transition-colors duration-300 shrink-0'
					:class="{ ' bg-gray-500 hover:bg-gray-400': isSubscribed }" @click='subscribe'>
					{{ isSubscribed ? 'Subscribed' : 'Subscribe' }}
				</button>
			</div>
		</div>

		<Section icon='video' label='Videos' :items='channel?.videos' />
	</section>
</template>