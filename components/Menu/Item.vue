<script lang="ts" setup>
import type { IMenuItem } from '~/stores/useSidebarStore'

interface Props extends IMenuItem {
	isCollapsed: boolean
}

const isModalOpen = ref<boolean>(false)

function logout() {
	console.log('logout')
}

function toggleModal() {
	isModalOpen.value = !isModalOpen.value
}

defineProps<Props>()
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
		close-icon="i-lucide-x"
		title="Upload a video"
	>
		<template #body>
			<div
				class="border border-white/10 border-dashed rounded h-52 flex flex-col items-center justify-center space-y-5 text-white/50"
			>
				<Icon name="lucide:upload" size="44" />

				<p class="text-sm">
					Drag and drop your video file here, or click to select
				</p>
			</div>
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
