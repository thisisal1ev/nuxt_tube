<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

interface Props {
	droppedFile: File
}

const props = defineProps<Props>()
const fileSize = computed(() =>
	(props.droppedFile.size / 1024 / 1024).toFixed(2)
)
const poster = ref<null | File>(null)
const state = reactive({
	title: props.droppedFile.name || '',
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

function fileUrl(file: File) {
	return URL.createObjectURL(file)
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
					v-if="poster?.type.startsWith('image/')"
					width="200"
					height="80"
					class="h-28"
					:src="fileUrl(poster)"
					:alt="poster.name"
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
						placeholder="Enter description:"
					/>
				</UFormField>
			</div>

			<div class="bg-slate-800/60 rounded-lg">
				<NuxtImg
					v-if="droppedFile.type.startsWith('image/')"
					width="220"
					class="rounded-t-lg"
					:src="fileUrl(droppedFile)"
					:alt="droppedFile.name"
				/>

				<div class="p-1.5 space-y-1.5">
					<div>
						<h5 class="text-xs text-white/50">File name:</h5>
						<p class="text-sm">{{ droppedFile.name }}</p>
					</div>

					<div>
						<h5 class="text-xs text-white/50">File size:</h5>
						<p class="text-sm">{{ fileSize }} Mb</p>
					</div>
				</div>
			</div>
		</div>

		<UButton
			class="px-5 py-1.5 mt-5 ml-auto"
			type="submit"
			color="info"
			size="lg"
		>
			Publish
		</UButton>
	</UForm>
</template>
