<script lang='ts' setup>
import { loginFormSchema, type TFormLoginValues } from '../schemas'

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: loginFormSchema,
	initialValues: {
		email: '',
		password: '',
	},
})

const onSubmit = handleSubmit(async (data: TFormLoginValues) => {
	console.log(data)
})
</script>

<template>
	<form @submit='onSubmit' class='flex flex-col items-center space-y-5'>
		<FormInput name='email' type="email" placeholder="Enter email:" class="w-full" required />

		<FormInput name='password' type="password" placeholder="Enter password:" class="w-full" required />

		<button :disabled='isSubmitting' type='submit'
			class='bg-dimmed-red px-6 py-1.5 rounded-md hover:bg-dimmed-red/80 transition-colors duration-300'>Login</button>
	</form>
</template>