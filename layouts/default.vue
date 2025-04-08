<script lang='ts' setup>
const dragStore = useDragStore()
</script>

<template>
	<main class='layout'>
		<Sidebar class='sidebar' />

		<Header class='header' />

		<div class='content'>
			<slot />
		</div>
	</main>

	<Teleport to='body'>
		<AnimatePresence>
			<Overlay v-if='dragStore.isModalOpen' @click="dragStore.toggleModal" />
		</AnimatePresence>

		<AnimatePresence>
			<Motion v-if='dragStore.isModalOpen' as="dialog" key='Modal' :initial="{ scale: 0 }" :exit="{ scale: 0 }"
				:transition="{ duration: 0.35, type: 'spring', bounce: 0.1 }" :animate="{ scale: 1 }"
				class="z-50 w-full max-w-4xl text-white rounded-lg shadow-lg p-6 space-y-5 fixed top-2/10 -translate-x-2/4 left-2/4 bg-gray-800"
				open>
				<div class='space-y-2.5'>
					<div class='flex items-center justify-between'>
						<h3 class='font-bold text-lg'>Upload a video</h3>

						<button @click='dragStore.toggleModal' class='inline-block p-1.5'>
							<Icon name="lucide:x" size="20" class="text-gray-400 hover:text-gray-200 transition-colors" />
						</button>
					</div>

					<hr class='text-gray-700'>

					<DragZone v-if='!dragStore.droppedFile' />

					<FormVideo v-else />
				</div>
			</Motion>
		</AnimatePresence>

	</Teleport>
</template>

<style scoped>
@reference "tailwindcss";

.content {
	@apply flex flex-col min-h-screen min-w-full px-5;
}
</style>