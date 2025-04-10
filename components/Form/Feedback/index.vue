<script lang='ts' setup>
import { feedbackFormSchemaTyped, type TFormFeedbackValues } from '../schemas'

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: feedbackFormSchemaTyped,
	initialValues: {
		email: '',
		message: ''
	}
})

const onSubmit = handleSubmit(async (data: TFormFeedbackValues) => {
	console.log(data)
})
</script>

<template>
	<form @submit='onSubmit' class='space-y-5 w-full grow'>
		<FormInput name='email' label='Email' placeholder='Enter email:' />

		<FormTextarea name='message' placeholder='Enter your message:' rows='4' />

		<button :disabled='isSubmitting' type='submit'
			class='px-8 py-1.5 rounded-md bg-dimmed-red hover:bg-dimmed-red/80 transition-colors duration-300'>
			Submit
		</button>
	</form>
</template>