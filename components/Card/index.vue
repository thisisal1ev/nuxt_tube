<script lang='ts' setup>
interface Props {
	id: number
	poster: string
	avatar: string
	title: string
	views: string
	channel: string
	createdAt: string
	isOfficial: boolean
	isTrend: boolean
}

defineProps<Props>()
</script>

<template>
	<li class='w-full flex flex-col'>
		<NuxtLink :to="`/video/${id}`" class='relative'>
			<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow" :src="poster" :alt="title" />

			<NuxtLink :to='`/channel/${channel}`' class='absolute bottom-4 left-2.5'>
				<NuxtImg width='40' height='40' :src="avatar" :alt='channel' class='rounded-full' />
			</NuxtLink>
		</NuxtLink>

		<div class="space-y-1.5 grow">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-0.5">
					<Icon v-if='isTrend' name="lucide:flame" class="text-dimmed-red" size='16' />

					<span class="text-white/50 text-xs tabular-nums">
						{{ views }} views
					</span>
				</div>

				<p class="text-white/50 text-xs">{{ createdAt }}</p>
			</div>

			<h4 class="font-semibold text-sm overflow-hidden line-clamp-2 group">
				<NuxtLink :to='`/video/${id}`' class="transition-colors duration-300 group-hover:text-white/70">
					{{ title }}
				</NuxtLink>
			</h4>

			<NuxtLink :to="`/channel/${channel}`" class="inline-flex items-center text-sm">
				<span class="mr-1.5 text-white/70 text-sm">{{ channel }}</span>

				<Icon v-if='isOfficial' name="lucide:badge-check" class="text-green-600" />
			</NuxtLink>
		</div>
	</li>
</template>