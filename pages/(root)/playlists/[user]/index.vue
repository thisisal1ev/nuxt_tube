<script lang='ts' setup>
import { playlistFormSchemaTyped, type TFormPlaylistValues } from './schema'

const isModalOpen = ref<boolean>(false)
const items = ref([
	{
		title: 'PUBG',
		poster:
			'https://i.ytimg.com/vi/0dny8H4gHlQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCX3SPISYsNEpznevHb_mo3nDaPA',
	},
	{
		title: 'Vice City Nextgen Edition Прохождение',
		poster:
			'https://i.ytimg.com/vi/voncH30Xqrs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjcygmW_LN9F2E8B0xXMSdsQcyxw',
	},
	{
		title: 'Music',
		poster:
			'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
	},
])

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: playlistFormSchemaTyped,
	initialValues: {
		title: '',
		videoId: '',
	}
})

const onSubmit = handleSubmit(async (data: TFormPlaylistValues) => {
	console.log(data)

	isModalOpen.value = false
})

function toggleModal() {
	isModalOpen.value = !isModalOpen.value
}
</script>

<template>
	<section class='py-5'>
		<div class='flex items-center justify-between mb-4'>
			<h2 class='flex items-center gap-2 text-4xl font-bold'>
				<Icon name='lucide:list-video' size='32' class='text-dimmed-red' />

				<span>Playlists</span>
			</h2>

			<button @click='toggleModal'
				class='font-semibold rounded-sm w-50 px-6 py-1.5 bg-gray-500 hover:bg-gray-400 transition-colors duration-300'>
				Create a playlist
			</button>
		</div>

		<div class="py-2 my-0.5 wrapper">
			<CardPlaylist v-for="item in items" :key="item.title" :title="item.title" :poster="item.poster"
				:length='item.title.length' />
		</div>
	</section>

	<Teleport to='body'>
		<AnimatePresence>
			<Overlay v-if='isModalOpen' @click="toggleModal" />
		</AnimatePresence>

		<AnimatePresence>
			<Motion v-if='isModalOpen' as="dialog" key='Modal' :initial="{ scale: 0 }" :exit="{ scale: 0 }"
				:transition="{ duration: 0.35, type: 'spring', bounce: 0.1 }" :animate="{ scale: 1 }"
				class="z-50 w-full max-w-md text-white rounded-lg shadow-lg p-6 space-y-5 fixed top-2/10 -translate-x-2/4 left-2/4 bg-gray-800"
				open>
				<div class='space-y-2.5'>
					<div class='flex items-center justify-between'>
						<h3 class='font-bold text-lg'>Create a playlist</h3>

						<button @click='toggleModal' class='inline-block p-1.5'>
							<Icon name="lucide:x" size="20" class="text-gray-400 hover:text-gray-200 transition-colors" />
						</button>
					</div>

					<FormPlaylist @onSubmit='onSubmit' :disabled='isSubmitting' />
				</div>
			</Motion>
		</AnimatePresence>
	</Teleport>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-4 gap-5 py-5;
}
</style>