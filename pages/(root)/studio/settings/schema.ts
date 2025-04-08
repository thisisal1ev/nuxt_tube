import { z } from 'zod'

import { formLoginSchema } from '~/components/Form/schemas'

export const settingsFormSchema = formLoginSchema.merge(
	z.object({
		name: z.string().min(4, { message: 'Имя должно быть больше 4 символов' }),
		alias: z.string().min(3, { message: 'Ник должен быть больше 3 символов' }),
		description: z.string().min(10, { message: 'Слишком короткое описание' }),
		avatar: z.union([z.string(), z.instanceof(File)]).optional(),
		banner: z.union([z.string(), z.instanceof(File)]).optional(),
	})
)

export const settingsFormSchemaTyped = toTypedSchema(settingsFormSchema)

export type TFormSettingsValues = z.infer<typeof settingsFormSchema>
