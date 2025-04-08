import { z } from 'zod'

export const passwordSchema = z
	.string()
	.min(8, { message: 'Пароль должен быть больше 8 символов' })

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

export const regisFormSchemaTyped = toTypedSchema(formRegisterSchema)
export const loginFormSchemaTyped = toTypedSchema(formLoginSchema)

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>
