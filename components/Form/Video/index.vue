<script lang='ts' setup>
import { videoFormSchemaTyped, type TFormVideoValues } from '../schemas'

const dragStore = useDragStore()
const poster = ref<File | null>(null)
const title = computed(() =>
	dragStore.droppedFile?.name
)

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: videoFormSchemaTyped,
	initialValues: {
		title: title.value,
		description: '',
		tags: '',
		video: dragStore.droppedFile || '',
		poster: poster.value || '',
	},
})

function onFileChange(event: Event) {
	const input = event.target as HTMLInputElement
	if (input.files?.length) {
		poster.value = input.files[0]
	}
}

const onSubmit = handleSubmit(async (data: TFormVideoValues) => {
	console.log(data)

	dragStore.isModalOpen = false
	dragStore.droppedFile = null
})
</script>

<template>
	<form @submit='onSubmit' class="flex flex-col">
		<div class="flex items-start justify-between space-x-5">
			<div class="grow h-auto w-full space-y-4">
				<FormInput :value='title' name='title' label='Title' placeholder="Enter title:" required />

				<FormTextarea name='description' label='Description' placeholder='Enter description:' />

				<NuxtImg v-if="poster && !isVideo(poster.type)" width="200" height="80" class="h-28" :src="fileUrl(poster)"
					:alt="poster?.name" />

				<FormInput type='file' name='poster' label='Poster' accept="image/*" @change="onFileChange"
					placeholder='Upload poster:' />

				<FormInput name='tags' label='Tags' placeholder='Enter tags:' />
			</div>

			<div v-if="dragStore.droppedFile && isVideo(dragStore.droppedFile?.type)" class="bg-slate-800/60 rounded-lg">
				<video width="400" class="rounded-t-lg" :src="fileUrl(dragStore.droppedFile)" />

				<div class="p-1.5 space-y-1.5">
					<div>
						<h5 class="text-xs text-white/50">File name:</h5>

						<p v-if="dragStore.droppedFile" class="text-sm line-clamp-1">
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
			<button @click="dragStore.clearDropped"
				class="px-5 py-1.5 bg-blue-700 rounded-md transition-colors duration-300 hover:bg-blue-500" type="button">
				Cancel
			</button>

			<button :disabled='isSubmitting'
				class="px-5 py-1.5 mt-5 bg-red hover:bg-red-400 transition-colors duration-300 rounded-md" type="submit">
				Publish
			</button>
		</div>
	</form>
</template>