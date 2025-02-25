<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

interface Props {
	droppedFile: File
}

const props = defineProps<Props>()
const state = reactive({
	title: props.droppedFile.name || '',
	description: '',
	tags: '',
})

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}

function fileUrl(file: File) {
	return URL.createObjectURL(file)
}
</script>

<template>
	<UForm :state @submit="onSubmit" class="flex flex-col">
		<div class="flex items-start justify-between space-x-6">
			<div class="grow space-y-5">
				<UFormField label="Title" name="title" size="lg">
					<UInput
						v-model="state.title"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter title:"
					/>
				</UFormField>

				<UFormField label="Description" name="description" size="lg">
					<UTextarea
						v-model="state.description"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter description:"
					/>
				</UFormField>

				<UFormField label="Poster" name="poster" size="lg">
					<UInput type="file" />
				</UFormField>

				<UFormField label="Tags" name="tags" size="lg">
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

				<div class="p-1.5">
					<h5 class="text-xs text-white/50">File name</h5>
					<p class="text-sm">{{ droppedFile.name }}</p>
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
