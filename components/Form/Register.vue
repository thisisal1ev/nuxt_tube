<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
	email: '',
	password: '',
	confirmPassword: '',
})

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data)
}
</script>

<template>
	<UForm :state @submit="onSubmit" class="space-y-4">
		<UFormField label="Email" name="email">
			<UInput
				v-model="state.email"
				variant="outline"
				color="info"
				size="xl"
				class="w-full rounded-sm"
				placeholder="Enter email:"
			/>
		</UFormField>

		<UFormField label="Password" name="password">
			<UInput
				variant="outline"
				color="info"
				size="xl"
				class="w-full"
				placeholder="Enter password:"
				v-model="state.password"
				type="password"
			/>
		</UFormField>

		<UFormField label="Password confirmation" name="password" class="relative">
			<UInput
				variant="outline"
				color="info"
				size="xl"
				class="w-full"
				placeholder="Enter password again:"
				v-model="state.confirmPassword"
				type="password"
			/>
		</UFormField>

		<Recaptcha />

		<div class="flex items-center justify-center">
			<UButton type="submit" variant="solid" color="info" class="px-6 py-2">
				Register
			</UButton>
		</div>
	</UForm>
</template>
