<script lang="ts" setup>
interface Props {
	id: number
	poster: string
	title: string
	description: string
	views: number
	comments: number
	likes: number
}

const { comments, likes, views } = defineProps<Props>()

function open() {
	console.log('open')
}

function edit() {
	console.log('edit')
}

function remove() {
	console.log('remove')
}

const formatViews = formatter.format(views)
const formatLikes = formatter.format(likes)
const formatComments = formatter.format(comments)
</script>

<template>
	<div
		class="flex items-start justify-between space-x-1.5 py-5 not-last:border-b border-white/10"
		:key="id"
	>
		<NuxtImg height="80" width="200" :src="poster" :alt="title" />

		<div class="w-sm space-y-1.5">
			<h5 class="text-sm">{{ title }}</h5>
			<p class="text_style">{{ description }}</p>
		</div>

		<div>
			<p class="text-sm text-white/70">25 Nov 2007</p>
			<p class="text-sm text-white/40">Published</p>
		</div>

		<p class="text-sm text-white/70 tabular-nums">{{ formatViews }} views</p>

		<p class="text-sm text-white/70 tabular-nums">
			{{ formatComments }} comments
		</p>

		<p class="text-sm text-white/70 tabular-nums">{{ formatLikes }} likes</p>

		<div class="flex items-center justify-between space-x-1">
			<UButton
				@click="open"
				:to="`/video/${id}`"
				target="_blank"
				variant="link"
				color="info"
				class="!p-1.5"
			>
				<Icon name="lucide:external-link" />
			</UButton>

			<UButton
				@click="edit"
				:to="`/video/edit/${id}`"
				variant="link"
				color="warning"
				class="!p-1.5"
			>
				<Icon name="lucide:square-pen" />
			</UButton>

			<UButton @click="remove" variant="link" color="error" class="!p-1.5">
				<Icon name="lucide:trash-2" />
			</UButton>
		</div>
	</div>
</template>
