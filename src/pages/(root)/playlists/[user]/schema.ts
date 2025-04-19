import { z } from 'zod'

import { title } from '~/components/Form/schemas'

const playlistFormSchema = z.object({
	title,
	videoId: z
		.string({ message: 'Ссылка не должна быть пустой' })
		.min(6, { message: 'Ссылка должна быть больше 6 символов' }),
})

export const playlistFormSchemaTyped = toTypedSchema(playlistFormSchema)

export type TFormPlaylistValues = z.infer<typeof playlistFormSchema>
