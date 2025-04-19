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
	<slot>
		<label @dragover.prevent @drop.prevent="dragStore.drop" class="drag_zone group" for="fileInput">
			<input id="fileInput" type="file" @change="onFileChange" class="hidden" accept=".mp4,.mkv,.mov,.avi,.webm" />

			<Icon name="lucide:upload" size="44" class="transition group-hover:-translate-y-1.5" />

			<p class="text-sm">
				Drag and drop your video file here, or click to select
			</p>
		</label>
	</slot>
</template>

<style scoped>
@reference "tailwindcss";

.drag_zone {
	@apply border border-white/10 border-dashed rounded flex flex-col items-center justify-center space-y-5 text-white/50 py-2 h-60 hover:bg-white/5 transition-colors duration-300;
}
</style>