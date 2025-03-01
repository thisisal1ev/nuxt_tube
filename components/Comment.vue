<script lang="ts" setup>
interface Props {
	avatar: string
	name: string
	comment: string
	createdAt: string
}

const props = defineProps<Props>()

const oldComment = ref<string>(props.comment)
const state = ref<boolean>(false)
const newComment = ref<string>(oldComment.value)
</script>

<template>
	<div v-if="!(newComment === '')" class="flex items-start space-x-2.5">
		<NuxtImg
			:src="avatar"
			height="40"
			width="40"
			class="h-10 w-10 rounded-xl"
		/>

		<div class="space-y-1.5">
			<h5 class="text-sm flex items-center space-x-1.5">
				<span>{{ name }}</span>

				<Icon
					name="lucide:badge-check"
					size="18"
					class="text-primary-500 mr-2.5"
				/>

				<span class="text-xs text-white/60">{{ createdAt }}</span>
			</h5>

			<p v-if="!state" @click="state = !state" class="text-xs">
				{{ newComment }}
			</p>

			<UTextarea v-else v-model="newComment" variant="soft" size="xs" />

			<div
				class="flex items-center space-x-2.5"
				:class="state ? 'block' : 'hidden'"
			>
				<UButton
					@click="state = false"
					class="!p-0"
					variant="link"
					color="info"
					label="Save"
				/>

				<UButton
					@click="newComment = ''"
					class="!p-0"
					variant="link"
					color="error"
					label="Delete"
				/>
			</div>
		</div>
	</div>
</template>
