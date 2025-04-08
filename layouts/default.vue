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
		<Overlay v-if='dragStore.isModalOpen' @click="dragStore.toggleModal" />

		<DragZone v-if='dragStore.isModalOpen' />
	</Teleport>
</template>

<style scoped>
@reference "tailwindcss";

.content {
	@apply flex flex-col min-h-screen min-w-full px-5;
}
</style>