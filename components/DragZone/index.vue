<script lang='ts' setup>
const dragStore = useDragStore()

function onFileChange(event: Event) {
	const input = event.target as HTMLInputElement
	if (input.files?.length) {
		dragStore.droppedFile = input.files[0]
	}
}
</script>

<template>
	<AnimatePresence>
		<Motion as="dialog" key='Modal' :initial="{ scale: 0 }" :exit="{ scale: 0 }"
			:transition="{ duration: 0.35, type: 'spring', bounce: 0.1 }" :animate="{ scale: 1 }"
			class="z-50 w-full max-w-4xl text-white rounded-lg shadow-lg p-6 space-y-5 fixed top-2/6 -translate-x-2/4 left-2/4 bg-gray-800"
			open>
			<div class='space-y-2.5'>
				<div class='flex items-center justify-between'>
					<h3 class='font-bold text-lg'>Upload a video</h3>

					<button @click='dragStore.toggleModal' class='inline-block p-1.5'>
						<Icon name="lucide:x" size="20" class="text-gray-400 hover:text-gray-200 transition-colors" />
					</button>
				</div>

				<hr class='text-gray-700'>

				<label @dragover.prevent @drop.prevent="dragStore.drop" class="drag_zone group" for="fileInput">
					<input id="fileInput" type="file" @change="onFileChange" class="hidden" accept=".mp4,.mkv,.mov,.avi,.webm" />

					<Icon name="lucide:upload" size="44" class="transition group-hover:-translate-y-1.5" />

					<p class="text-sm">
						Drag and drop your video file here, or click to select
					</p>
				</label>
			</div>
		</Motion>
	</AnimatePresence>
</template>

<style scoped>
@reference "tailwindcss";

.drag_zone {
	@apply border border-white/10 border-dashed rounded flex flex-col items-center justify-center space-y-5 text-white/50 py-2 h-60 hover:bg-white/5 transition-colors duration-300;
}
</style>