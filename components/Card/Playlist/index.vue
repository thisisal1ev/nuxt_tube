<script lang="ts" setup>
interface Props {
	title: string
	poster: string
	length: number
}

defineProps<Props>()
</script>

<template>
	<Motion as='li' :hover="{ scale: 1.05 }" :transition="{ duration: 0.5, type: 'spring', bounce: 0.5 }">
		<NuxtLink :to="`/playlists/${$route.params.user}/${title}`" class="space-y-2.5 relative">

			<div class="relative w-full">
				<NuxtImg :src="poster" :alt="title" width="300" height="200" class="w-full h-40 rounded-lg" />

				<span class="absolute right-2 bottom-2 text-xs bg-black/70 px-2.5 rounded-sm">
					{{ length }} videos
				</span>
			</div>

			<p class="text-sm line-clamp-1">{{ title }}</p>
		</NuxtLink>
	</Motion>
</template>