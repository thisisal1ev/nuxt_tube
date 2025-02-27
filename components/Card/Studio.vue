<script lang="ts" setup>
interface Props {
	poster: string
	title: string
	description: string
	views: number
	comments: number
	likes: number
}

defineProps<Props>()
</script>

<template>
	<div
		class="flex items-start justify-between space-x-1.5 py-5 not-last:border-b border-white/10"
	>
		<NuxtImg height="80" width="200" :src="poster" :alt="title" />

		<div class="w-sm space-y-1.5">
			<h5 class="text-sm">{{ title }}</h5>
			<p class="text-xs text-white/70">{{ description }}</p>
		</div>

		<div>
			<p class="text-sm text-white/70">25 Nov 2007</p>
			<p class="text-sm text-white/40">Published</p>
		</div>

		<p class="text-sm text-white/70">{{ views }} views</p>

		<p class="text-sm text-white/70">{{ comments }} comments</p>

		<p class="text-sm text-white/70">{{ likes }} likes</p>

		<div class="flex items-center justify-between space-x-2.5">
			<UButton variant="link" color="info">
				<Icon name="lucide:square-arrow-out-up-right" />
			</UButton>

			<UButton variant="link" color="warning">
				<Icon name="lucide:square-pen" />
			</UButton>

			<UButton variant="link" color="error">
				<Icon name="lucide:trash-2" />
			</UButton>
		</div>
	</div>
</template>
