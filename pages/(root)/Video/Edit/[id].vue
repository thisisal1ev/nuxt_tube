<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const poster = ref<File | null>(null)
const state = reactive({
	title: '',
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
	<section class="w-4xl mx-auto py-2.5">
		<h1 class="flex items-center space-x-3 mb-5">
			<Icon name="lucide:square-pen" size="32" class="text-info-500" />

			<span class="font-bold text-3xl">Edit video</span>
		</h1>

		<UForm :state class="flex flex-col" @submit="onSubmit">
			<div class="flex items-start justify-between space-x-5">
				<div class="grow h-auto w-full space-y-4 mr-5">
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

					<UFormField label="Poster" name="poster">
						<UInput
							type="file"
							color="info"
							size="lg"
							icon="lucide:cloud-upload"
							accept=".jpg,.png,.jpeg,.webp,.avif"
							@change="onFileChange"
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
						width="400"
						class="rounded-t-lg"
						src="https://cdn.pixabay.com/video/2025/01/19/253423_large.mp4"
					/>

					<div class="p-1.5">
						<h5 class="text-xs text-white/50">File name:</h5>

						<p class="text-sm">fileName</p>
					</div>
				</div>
			</div>

			<UButton
				class="px-5 py-1.5 mt-5 rounded-sm ml-auto"
				type="submit"
				color="info"
				label="Update"
			/>
		</UForm>
	</section>
</template>
