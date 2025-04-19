<script lang='ts' setup>
interface Props {
	id: number
	title: string
	description: string
	poster: string
	createdAt: string
	views: string
	comments: number
	likes: number
	videoStatus: string
}

defineProps<Props>()
defineEmits(['remove', 'edit'])
</script>

<template>
	<li class='flex items-start justify-between gap-5 py-5 not-last:border-b border-white/10'>
		<NuxtImg :src='poster' :alt='title' class='w-64 h-auto aspect-video' width='250' height='100' />

		<div class='w-100 flex flex-col gap-2'>
			<p>{{ title }}</p>

			<p class='text-white/60 text-xs h-full grow line-clamp-6'>{{ description }}</p>
		</div>

		<div>
			<p class='text-white/60'>{{ createdAt }}</p>

			<p class='text-white/30'>{{ videoStatus }}</p>
		</div>

		<p class='text-white/60'>{{ views }} views</p>

		<p class='text-white/60'>{{ comments }} comments</p>

		<p class='text-white/60'>{{ likes }} likes</p>

		<div class='flex items-center gap-5'>
			<NuxtLink :to='`/video/${id}`' role='link' target='_blank'>
				<Icon name='lucide:square-arrow-out-up-right' class='text-blue-700' />
			</NuxtLink>

			<button @click="$emit('edit')">
				<Icon name='lucide:edit' class='text-yellow-700' />
			</button>

			<button @click="$emit('remove')">
				<Icon name='lucide:trash-2' class='text-red-700' />
			</button>
		</div>
	</li>
</template>