<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
	title: '',
	videoId: '',
})

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}
</script>

<template>
	<UForm :state @submit="onSubmit" class="space-y-5 flex flex-col">
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

		<UFormField label="Video public id (from url)" name="videoId">
			<UInput
				v-model="state.videoId"
				variant="outline"
				color="info"
				size="lg"
				class="w-full"
				placeholder="Enter video public id:"
			/>
		</UFormField>

		<UButton
			label="Create"
			color="info"
			type="submit"
			size="lg"
			class="px-5 rounded-sm mx-auto"
		/>
	</UForm>
</template>
