<script lang="ts" setup>
const sidebarStore = useSidebarStore()
</script>

<template>
	<Sidebar />

	<UContainer
		class="flex flex-col min-h-screen transition-all duration-300"
		:class="sidebarStore.isCollapsed ? 'max-w-max' : 'max-w-base'"
	>
		<slot />
	</UContainer>
</template>
