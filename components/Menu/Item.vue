<script lang="ts" setup>
import type { IMenuItem } from '~/stores/sidebar'

defineProps<IMenuItem>()

const dragStore = useDragStore()
const sidebarStore = useSidebarStore()

function logout() {
	console.log('logout')
}

function onFileChange(event: Event) {
	const input = event.target as HTMLInputElement
	if (input.files?.length) {
		dragStore.droppedFile = input.files[0]
	}
}
</script>

<template>
	<UModal
		v-if="dragStore.isModalOpen"
		:portal="true"
		:close="{
			variant: 'outline',
			color: 'info',
		}"
		v-model:open="dragStore.isModalOpen"
		close-icon="lucide:x"
		title="Upload a video"
		class="!min-w-3xl"
	>
		<template #body>
			<label
				v-if="dragStore.droppedFile === null"
				@dragover.prevent
				@drop.prevent="dragStore.drop"
				class="drag_zone group"
				for="fileInput"
			>
				<input
					id="fileInput"
					type="file"
					@change="onFileChange"
					class="hidden"
					accept=".mp4,.mkv,.mov,.avi,.webm"
				/>

				<Icon
					name="lucide:upload"
					size="44"
					class="transition group-hover:-translate-y-1.5"
				/>

				<p class="text-sm">
					Drag and drop your video file here, or click to select
				</p>
			</label>

			<FormVideo v-else />
		</template>
	</UModal>

	<NuxtLink
		class="group link"
		:to="link"
		:class="sidebarStore.isCollapsed ? '' : 'px-0.5'"
		:title="name"
		@click="
			icon === 'upload'
				? dragStore.toggleModal()
				: icon === 'log-out'
				? logout()
				: ''
		"
	>
		<Icon
			:name="`lucide:${icon}`"
			:class="!sidebarStore.isCollapsed ? '!text-white' : 'mx-auto'"
			class="transition ease-in-out group-hover:!text-info-500 group-hover:rotate-12"
			size="20"
		/>

		<span v-if="!sidebarStore.isCollapsed" class="whitespace-nowrap">
			{{ name }}
		</span>
	</NuxtLink>
</template>

<style scoped>
@reference "tailwindcss";

.link {
	@apply flex items-center gap-3 py-3.5 h-12;
}

.transition {
	@apply transition-all duration-300;
}

.drag_zone {
	@apply border border-white/10 border-dashed rounded flex flex-col items-center justify-center space-y-5 text-white/50 py-2 h-60 hover:bg-white/5 transition-colors duration-300;
}
</style>
