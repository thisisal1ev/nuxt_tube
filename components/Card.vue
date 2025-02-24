<script lang="ts" setup>
interface Props {
	id: number
	title: string
	views: number
	channel: string
	poster: string
	isTrend?: boolean
}

defineProps<Props>()
</script>

<template>
	<UCard variant="soft" class="card" :key="id">
		<NuxtLink to="">
			<NuxtImg class="w-full rounded-xl mb-3" :src="poster" :alt="title" />
		</NuxtLink>

		<div class="space-y-1">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-1">
					<Icon v-if="isTrend" name="lucide:flame" class="text-error-500" />

					<span class="text-white/50">{{ views }}k</span>
				</div>

				<p class="text-white/50">2 days ago</p>
			</div>

			<h4>{{ title }}</h4>

			<NuxtLink to="" class="flex items-center">
				<span class="mr-1.5 text-white/50">{{ channel }}</span>

				<Icon name="lucide:badge-check" class="text-primary-600" />
			</NuxtLink>
		</div>
	</UCard>
</template>

<style>
@reference "tailwindcss";

.card {
	@apply rounded-none bg-transparent transition-transform duration-300 rounded-b-xl hover:scale-105;
}

.card > div {
	@apply !p-0;
}
</style>
