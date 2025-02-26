<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const dragStore = useDragStore()
const poster = ref<File | null>(null)
const title = computed(() =>
	dragStore.droppedFile ? dragStore.droppedFile.name : ''
)
const state = reactive({
	title: title.value,
	description: '',
	tags: '',
})

function onFileChange(event: Event) {
	const input = event.target as HTMLInputElement
	if (input.files?.length) {
		poster.value = input.files[0]
	}
}

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}
</script>

<template>
	<UForm :state @submit="onSubmit" class="flex flex-col">
		<div class="flex items-start justify-between space-x-5">
			<div class="grow space-y-4">
				<UFormField label="Title" name="title">
					<UInput
						v-model="state.title"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter title:"
					/>
				</UFormField>

				<UFormField label="Description" name="description">
					<UTextarea
						v-model="state.description"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter description:"
					/>
				</UFormField>

				<NuxtImg
					v-if="poster && !isVideo(poster.type)"
					width="200"
					height="80"
					class="h-28"
					:src="fileUrl(poster)"
					:alt="poster?.name"
				/>

				<UFormField label="Poster" name="poster">
					<UInput
						type="file"
						size="lg"
						icon="lucide:cloud-upload"
						@change="onFileChange"
					/>
				</UFormField>

				<UFormField label="Tags" name="tags">
					<UInput
						v-model="state.tags"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter tags:"
					/>
				</UFormField>
			</div>

			<div class="bg-slate-800/60 rounded-lg">
				<video
					v-if="dragStore.droppedFile && isVideo(dragStore.droppedFile?.type)"
					width="220"
					class="rounded-t-lg"
					:src="fileUrl(dragStore.droppedFile)"
				/>

				<div class="p-1.5 space-y-1.5">
					<div>
						<h5 class="text-xs text-white/50">File name:</h5>

						<p v-if="dragStore.droppedFile" class="text-sm">
							{{ dragStore.droppedFile.name }}
						</p>
					</div>

					<div>
						<h5 class="text-xs text-white/50">File size:</h5>

						<p v-if="dragStore.droppedFile" class="text-sm">
							{{ fileSize(dragStore.droppedFile.size) }} Mb
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="ml-auto space-x-5">
			<UButton
				@click="dragStore.clearDropped"
				class="px-5 py-1.5"
				color="error"
				type="button"
			>
				Cancel
			</UButton>

			<UButton class="px-5 py-1.5 mt-5" type="submit" color="info">
				Publish
			</UButton>
		</div>
	</UForm>
</template>
