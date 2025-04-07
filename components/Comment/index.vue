<script lang="ts" setup>
interface Props {
	avatar: string
	name: string
	channelAlias: string
	comment: string
	createdAt: string
}

const props = defineProps<Props>()

const oldComment = ref<string>(props.comment)
const state = ref<boolean>(false)
const newComment = ref<string | number>(oldComment.value)
</script>

<template>
	<div v-if="!(newComment === '')" class="flex items-start space-x-2.5">
		<NuxtImg :src="avatar" height="40" width="40" class="h-10 w-10 rounded-xl" />

		<div class="space-y-1.5">
			<h5 class="text-sm flex items-center space-x-1.5">
				<NuxtLink :to="`/channel/${channelAlias}`">{{ name }}</NuxtLink>

				<Icon name="lucide:badge-check" size="18" class="text-green-600 mr-2.5" />

				<span class="text-xs text-white/60">{{ createdAt }}</span>
			</h5>

			<p v-if="!state" @click="state = !state" class="text-xs">
				{{ newComment }}
			</p>

			<textarea v-else v-model="newComment" class='outline-none text-xs'></textarea>

			<div class="flex items-center space-x-2.5" :class="state ? 'block' : 'hidden'">
				<button @click="state = false" class="text-blue-600 text-xs">Save</button>

				<button @click="newComment = ''" class="text-red-500 text-xs">Delete</button>
			</div>
		</div>
	</div>
</template>