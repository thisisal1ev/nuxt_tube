import { z } from 'zod'

export const passwordSchema = z
	.string()
	.min(6, { message: 'Введите корректный пароль' })

export const formLoginSchema = z.object({
	email: z.string().email({ message: 'Введите корректную почту' }),
	password: passwordSchema,
})

export const formRegisterSchema = formLoginSchema
	.merge(
		z.object({
			confirmPassword: passwordSchema,
		})
	)
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export const regisFormSchema = toTypedSchema(formRegisterSchema)
export const loginFormSchema = toTypedSchema(formLoginSchema)

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>
