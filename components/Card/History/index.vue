<script lang="ts" setup>
interface Props {
	id: number
	poster: string
	title: string
	views: string
	channel: string
	createdAt: string
	isOfficial: boolean
}

const { views } = defineProps<Props>()

const formatViews = formatter.format(+views)
</script>

<template>
	<li class="flex items-start space-x-5">
		<NuxtLink :to="`/video/${id}`">
			<NuxtImg :src="poster" :alt="title" width="200" height="100" />
		</NuxtLink>

		<div class="w-md space-y-1 flex flex-col">
			<NuxtLink :to="`/video/${id}`">
				<h3 class="font-semibold line-clamp-2">
					{{ title }}
				</h3>
			</NuxtLink>

			<NuxtLink :to="`/channel/${channel}`" class="flex items-center space-x-1.5 mb-8 text-sm">
				<span>{{ channel }}</span>

				<Icon v-if='isOfficial' name="lucide:badge-check" size="14" class="text-green-600" />
			</NuxtLink>

			<div class="grow h-auto flex items-start text-gray-400 text-xs">
				<div class="flex items-center space-x-1.5">
					<p class="text_style">{{ formatViews }} views</p>

					<span> • </span>

					<p class="text_style">{{ createdAt }}</p>
				</div>
			</div>
		</div>
	</li>
</template>