<script lang='ts' setup>
import { settingsFormSchemaTyped, type TFormSettingsValues } from './schema'

const avatar = ref<File | null>(null)
const banner = ref<File | null>(null)
const { handleSubmit, isSubmitting } = useForm({
	validationSchema: settingsFormSchemaTyped,
	initialValues: {
		email: '',
		password: '',
		name: '',
		alias: '',
		description: '',
		avatar: avatar.value || '',
		banner: banner.value || '',
	},
})

const onSubmit = handleSubmit(async (data: TFormSettingsValues) => {
	console.log(data)
})
</script>

<template>
	<section class='py-5'>
		<h2 class='flex items-center gap-2 text-4xl font-bold mb-4'>
			<Icon name='lucide:settings' size='32' class='text-dimmed-red' />

			<span>Settings</span>
		</h2>

		<form @submit='onSubmit' class='flex flex-col gap-5'>
			<div class='flex items-start justify-start gap-x-10'>
				<div class='space-y-5 w-xl'>
					<FormInput type='email' name='email' placeholder='Enter email' label='Email' required />

					<FormInput type='password' name='password' placeholder='Enter password' label='Password' required />

					<FormInput type='text' name='name' placeholder='Enter name' label='Name' required />

					<FormInput type='text' name='alias' placeholder='Enter alias' label='Alias' required />

					<FormTextarea name='description' placeholder='Enter description' label='Description' />
				</div>

				<div class='space-y-5'>
					<FormInput type='file' name='avatar' label='Avatar' accept='image/*' @change="
						event => {
							const input = event.target as HTMLInputElement
							input.files ? (avatar = input.files[0]) : null
						}
					" />

					<NuxtImg v-if="avatar && !isVideo(avatar.type)" :src="fileUrl(avatar)" width="128" height="128"
						class="w-32 h-32" />

					<FormInput type='file' name='banner' label='Banner' accept='image/*' @change="
						event => {
							const input = event.target as HTMLInputElement
							input.files ? (banner = input.files[0]) : null
						}
					" />

					<NuxtImg v-if="banner && !isVideo(banner.type)" :src="fileUrl(banner)" width="384" height="128"
						class="w-96 h-40" />
				</div>
			</div>

			<button :disabled='isSubmitting' type='submit'
				class='px-8 py-1.5 bg-red rounded-md hover:bg-red/50 transition-colors duration-300 w-40'>
				Update
			</button>
		</form>
	</section>
</template>