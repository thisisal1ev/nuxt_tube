import { z } from 'zod'

export const passwordSchema = z
	.string()
	.min(8, { message: 'Пароль должен быть больше 8 символов' })

export const title = z.string({
	message: 'Название видео не должно быть пустым',
})

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

const formVideoSchema = z.object({
	title: title,
	description: z.string().optional(),
	tags: z.string().optional(),
	video: z.union([
		z.string({ message: 'Видео не должно быть пустым' }),
		z.instanceof(File),
	]),
	poster: z.union([z.string(), z.instanceof(File)]).optional(),
})

export const regisFormSchemaTyped = toTypedSchema(formRegisterSchema)
export const loginFormSchemaTyped = toTypedSchema(formLoginSchema)
export const videoFormSchemaTyped = toTypedSchema(formVideoSchema)

export type TFormLoginValues = z.infer<typeof formLoginSchema>
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>
export type TFormVideoValues = z.infer<typeof formVideoSchema>
