<script lang='ts' setup>
import { regisFormSchema, type TFormRegisterValues } from '../schemas'

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: regisFormSchema,
	initialValues: {
		email: '',
		password: '',
		confirmPassword: '',
	},
})

const onSubmit = handleSubmit(async (data: TFormRegisterValues) => {
	console.log(data)
})
</script>

<template>
	<form @submit='onSubmit' class='flex flex-col items-center space-y-5'>
		<FormInput type="email" placeholder="Enter email:" class="w-full" name='email' required />

		<FormInput name='password' type="password" placeholder="Enter password:" class="w-full" required />

		<FormInput type="password" name='confirmPassword' placeholder="Confirm password:" class="w-full" required />

		<button :disabled='isSubmitting' type='submit'
			class='bg-dimmed-red px-6 py-1.5 rounded-md hover:bg-dimmed-red/80 transition-colors duration-300'>Register</button>
	</form>
</template>