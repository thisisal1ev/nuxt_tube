<script lang='ts' setup>
const sidebarStore = useSidebarStore()
const dragStore = useDragStore()

function logout() {
	console.log('logout')
}
</script>

<template>
	<nav class='flex flex-col space-y-2' :class="{ 'items-center': sidebarStore.isCollapsed }">
		<SidebarMenuItem icon="compass" label="Explore" route="/" />
		<SidebarMenuItem icon="flame" label="Trending" route="/trend" />
		<SidebarMenuItem icon="gamepad-2" label="Video games" route="/games" />
		<SidebarMenuItem icon="circle-play" label="Subscriptions" route="/subscriptions" />

		<hr class="horizontal_line" />

		<SidebarMenuItem icon="tv-minimal-play" label="My channel" route="/channel/userAlias" />
		<SidebarMenuItem icon="list-video" label="Playlists" route="/playlists/userPlaylists" />
		<SidebarMenuItem icon="history" label="History" route="/history" />
		<SidebarMenuItem icon="folder-heart" label="Liked videos" route="/liked" />

		<hr v-if='sidebarStore.isStudio' class="horizontal_line" />

		<p v-if='!sidebarStore.isCollapsed && sidebarStore.isStudio' class="uppercase text-white/40 text-[8px]">
			Studio
		</p>

		<SidebarMenuItem v-if='sidebarStore.isStudio' icon="layout-grid" label="Studio" route="/studio/content" />
		<SidebarMenuItem v-if='sidebarStore.isStudio' icon="settings" label="Settings" route="/studio/settings" />
		<SidebarMenuItem v-if='sidebarStore.isStudio' icon="upload" label="Upload" route=""
			@click='dragStore.toggleModal' />

		<hr class="horizontal_line" />

		<p v-if='!sidebarStore.isCollapsed' class="uppercase text-white/40 text-[8px]">
			More from NuxtTube
		</p>

		<SidebarMenuItem icon="info" label="Send feedback" route="/feedback" />
		<SidebarMenuItem icon="log-out" label="Logout" route="" @click='logout' />
	</nav>
</template>

<style scoped>
@reference "tailwindcss";

.horizontal_line {
	@apply mx-auto my-2 transition-all duration-300 text-white/10 w-full;
}
</style>