<script lang='ts' setup>
interface Props {
	id?: number
	poster?: string
	title?: string
	views?: number
	createdAt?: string
	isTrend?: boolean
	channel?: {
		name?: string
		alias?: string
		avatar?: string
		isOfficial?: boolean
	}
}

defineProps<Props>()
</script>

<template>
	<Motion as='li' :hover="{ scale: 1.05 }" :transition="{ duration: 0.5, type: 'spring', bounce: 0.5 }"
		class='w-full flex flex-col'>
		<div class='relative'>
			<NuxtLink :to="`/video/${id}`">
				<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow" :src="poster" :alt="title" />

			</NuxtLink>

			<NuxtLink :to='`/channel/${channel?.alias}`' class='absolute bottom-4 left-2.5'>
				<NuxtImg width='40' height='40' :src="channel?.avatar" :alt='channel?.name' class='rounded-full' />
			</NuxtLink>
		</div>

		<div class="space-y-1.5 grow">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-0.5">
					<Icon v-if='isTrend' name="lucide:flame" class="text-dimmed-red" size='16' />

					<span class="text-white/50 text-xs tabular-nums">
						{{ formatter.format(+views) }} views
					</span>
				</div>

				<p class="text-white/50 text-xs">{{ timeAgo(createdAt) }}</p>
			</div>

			<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
				<NuxtLink :to='`/video/${id}`' class="transition-colors duration-300 hover:text-white/70 no-underline">
					{{ title }}
				</NuxtLink>
			</h4>

			<NuxtLink :to="`/channel/${channel?.alias}`" class="inline-flex items-center text-xs no-underline">
				<span class="mr-1.5 text-white/70">{{ channel?.name }}</span>

				<Icon v-if='channel?.isOfficial' name="lucide:badge-check" class="text-green-600" />
			</NuxtLink>
		</div>
	</Motion>
</template>