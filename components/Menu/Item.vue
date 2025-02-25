<script lang="ts" setup>
import type { IMenuItem } from '~/stores/useSidebarStore'

interface Props extends IMenuItem {
	isCollapsed: boolean
}

defineProps<Props>()

const isModalOpen = ref<boolean>(false)
const dragActive = ref(false)
const droppedFile = ref<File | null>(null)

function logout() {
	console.log('logout')
}

function toggleModal() {
	isModalOpen.value = !isModalOpen.value
	droppedFile.value = null
}

const toggle_active = () => {
	if (droppedFile.value == null) {
		dragActive.value = !dragActive.value
	}
}

const drop = (event: any) => {
	droppedFile.value = event.dataTransfer.files[0]
}

function onFileChange(event: Event) {
	const input = event.target as HTMLInputElement
	if (input.files?.length) {
		droppedFile.value = input.files[0]
	}
}

const selectedFile = (event: any) => {
	droppedFile.value = event.target.files[0]
	dragActive.value = true
}

const clearDropped = () => {
	droppedFile.value = null
	dragActive.value = false
}
</script>

<template>
	<UModal
		v-if="isModalOpen"
		:portal="true"
		:close="{
			variant: 'outline',
			color: 'info',
		}"
		v-model:open="isModalOpen"
		close-icon="lucide:x"
		title="Upload a video"
		class="!min-w-3xl"
	>
		<template #body>
			<label
				v-if="droppedFile === null"
				@dragenter.prevent="toggle_active()"
				@dragleave.prevent="toggle_active()"
				@dragover.prevent
				@drop.prevent="drop"
				class="border border-white/10 border-dashed rounded flex flex-col items-center justify-center space-y-5 text-white/50 py-2 h-60 hover:bg-white/5"
				for="fileInput"
			>
				<input
					id="fileInput"
					type="file"
					ref="fileInput"
					@change="onFileChange"
					class="hidden"
					multiple
				/>

				<Icon name="lucide:upload" size="44" />

				<p class="text-sm">
					Drag and drop your video file here, or click to select
				</p>
			</label>

			<FormVideo v-else :droppedFile />
		</template>
	</UModal>

	<NuxtLink
		class="group link"
		:to="link"
		:class="isCollapsed ? '' : 'px-0.5'"
		:title="name"
		@click="
			icon === 'upload' ? toggleModal() : icon === 'log-out' ? logout() : ''
		"
	>
		<Icon
			:name="`lucide:${icon}`"
			:class="!isCollapsed ? '!text-white' : 'mx-auto'"
			class="transition ease-in-out group-hover:!text-info-500 group-hover:rotate-12"
			size="20"
		/>

		<span v-if="!isCollapsed" class="whitespace-nowrap">
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
</style>
