<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
	email: '',
	password: '',
	name: '',
	alias: '',
	description: '',
})

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}
</script>

<template>
	<UForm :state @submit="onSubmit">
		<div class="flex items-start space-x-5 mb-5">
			<div class="space-y-4 w-xl">
				<UFormField label="Email" name="email" size="xl">
					<UInput
						v-model="state.email"
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter email:"
					/>
				</UFormField>

				<UFormField label="Password" name="password" size="xl">
					<UInput
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter password:"
						v-model="state.password"
						type="password"
					/>
				</UFormField>

				<UFormField label="Name" name="name" size="xl">
					<UInput
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter name:"
						v-model="state.name"
					/>
				</UFormField>

				<UFormField label="Alias" name="alias" size="xl">
					<UInput
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter alias:"
						v-model="state.alias"
					/>
				</UFormField>

				<UFormField label="Description" name="description" size="xl">
					<UTextarea
						variant="outline"
						color="info"
						size="lg"
						class="w-full"
						placeholder="Enter description:"
						v-model="state.description"
					/>
				</UFormField>
			</div>

			<div class="space-y-4">
				<UFormField label="Avatar" size="xl">
					<UInput size="lg" type="file" icon="lucide:cloud-upload" />
				</UFormField>

				<UFormField label="Banner" size="xl">
					<UInput size="lg" type="file" icon="lucide:cloud-upload" />
				</UFormField>
			</div>
		</div>

		<UButton type="submit" color="info" size="lg" class="px-5 py-1.5">
			Update
		</UButton>
	</UForm>
</template>
