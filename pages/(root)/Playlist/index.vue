<template>
	<div class="flex items-start justify-between">
		<h1 class="flex items-center space-x-3 mb-5">
			<Icon name="lucide:list-video" size="32" class="text-info-500" />

			<span class="font-bold text-3xl">Playlist</span>
		</h1>

		<UModal
			:close="{
				variant: 'outline',
				color: 'info',
			}"
			close-icon="lucide:x"
			title="Create a playlist"
		>
			<template #body>
				<FormPlaylist />
			</template>

			<UButton
				label="Create playlist"
				color="info"
				size="lg"
				class="px-5 rounded-sm !w-auto"
			/>
		</UModal>
	</div>

	<SectionPlaylist />
</template>
