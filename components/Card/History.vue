<script lang="ts" setup>
interface Props {
	id: number
	poster: string
	title: string
	views: number
	channel: string
}

const { views } = defineProps<Props>()

const formatViews = formatter.format(views)
</script>

<template>
	<div class="flex items-start space-x-5">
		<NuxtLink :to="`/video/${id}`">
			<NuxtImg
				:src="poster"
				:alt="title"
				width="200"
				height="100"
				class="w-52 h-28"
			/>
		</NuxtLink>

		<div class="w-md space-y-1 flex flex-col">
			<h3 class="text-sm line-clamp-3">
				{{ title }}
			</h3>

			<NuxtLink
				:to="`/channel/${channel}`"
				class="text_style flex items-center space-x-0.5 mb-8"
			>
				<span>{{ channel }}</span>

				<Icon name="lucide:badge-check" size="14" class="text-primary-500" />
			</NuxtLink>

			<div class="grow h-auto flex items-end">
				<div class="flex items-center space-x-1.5">
					<p class="text_style">{{ formatViews }} views</p>
					<span> • </span>
					<p class="text_style">2 days ago</p>
				</div>
			</div>
		</div>
	</div>
</template>
