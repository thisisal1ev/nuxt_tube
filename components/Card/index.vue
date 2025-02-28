<script lang="ts" setup>
interface Props {
	id: number
	title: string
	views: number
	channel: string
	poster: string
	isTrend?: boolean
}

const { views } = defineProps<Props>()
const formatViews = formatter.format(views)
</script>

<template>
	<Motion
		:hover="{
			scale: 1.1,
		}"
		:press="{
			scale: 1,
		}"
		:transition="{
			duration: 0.3,
		}"
	>
		<UCard variant="soft" class="card" :key="id">
			<NuxtLink to="">
				<NuxtImg
					width="300"
					height="165"
					class="w-full rounded-xl mb-3"
					:src="poster"
					:alt="title"
				/>
			</NuxtLink>

			<div class="space-y-1">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-1">
						<Icon v-if="isTrend" name="lucide:flame" class="text-error-500" />

						<span class="text-white/50 text-xs tabular-nums">
							{{ formatViews }}
						</span>
					</div>

					<p class="text-white/50 text-xs">2 days ago</p>
				</div>

				<h4 class="font-medium text-sm">{{ title }}</h4>

				<NuxtLink to="" class="flex items-center text-sm">
					<span class="mr-1.5 text-white/50">{{ channel }}</span>

					<Icon name="lucide:badge-check" class="text-primary-600" />
				</NuxtLink>
			</div>
		</UCard>
	</Motion>
</template>

<style>
@reference "tailwindcss";

.card {
	@apply rounded-none bg-transparent transition-transform duration-300 rounded-b-xl;
}

.card > div {
	@apply !p-0;
}
</style>
