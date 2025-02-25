<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const show = ref(false)
const state = reactive({
	email: '',
	password: '',
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
				placeholder="Email"
			/>
		</UFormField>

		<UFormField label="Password" name="password" class="relative">
			<UInput
				variant="outline"
				color="info"
				size="xl"
				class="w-full"
				placeholder="Password"
				v-model="state.password"
				:type="show ? 'text' : 'password'"
				:ui="{ trailing: 'pe-1' }"
			>
				<template #trailing>
					<UButton
						color="neutral"
						variant="link"
						size="md"
						:icon="show ? 'lucide:eye-off' : 'lucide:eye'"
						:aria-label="show ? 'Hide password' : 'Show password'"
						:aria-pressed="show"
						@click="show = !show"
						aria-controls="password"
					/>
				</template>
			</UInput>
		</UFormField>

		<Recaptcha />

		<div class="flex items-center justify-center">
			<UButton type="submit" variant="solid" color="info" class="px-6 py-2">
				Login
			</UButton>
		</div>
	</UForm>
</template>
