<script lang='ts' setup>
defineProps<{ collapsed: boolean }>()
</script>

<template>
	<nav class='flex flex-col space-y-2' :class="collapsed ? 'items-center' : ''">
		<SidebarMenuItem :collapsed icon="compass" label="Explore" route="" />
		<SidebarMenuItem :collapsed icon="flame" label="Trending" route="trend" />
		<SidebarMenuItem :collapsed icon="gamepad-2" label="Video games" route="games" />
		<SidebarMenuItem :collapsed icon="circle-play" label="Subscriptions" route="subscriptions" />

		<hr class="horizontal_line" />

		<SidebarMenuItem :collapsed icon="tv-minimal-play" label="My channel" route="watch-later" />
		<SidebarMenuItem :collapsed icon="list-video" label="Playlist" route="playlist" />
		<SidebarMenuItem :collapsed icon="history" label="History" route="history" />
		<SidebarMenuItem :collapsed icon="folder-heart" label="Liked videos" route="liked" />

		<hr class="horizontal_line" />

		<SidebarMenuItem :collapsed icon="layout-grid" label="Studio" route="studio" />
		<SidebarMenuItem :collapsed icon="settings" label="Settings" route="settings" />
		<SidebarMenuItem :collapsed icon="upload" label="Upload" route="" />

		<hr class="horizontal_line" />

		<p v-if='!collapsed' class="uppercase text-white/40 text-[8px]">
			More from NuxtTube
		</p>

		<SidebarMenuItem :collapsed icon="info" label="Send feedback" route="feedback" />
		<SidebarMenuItem :collapsed icon="log-out" label="Logout" route="" />

	</nav>
</template>

<style scoped>
@reference "tailwindcss";

.horizontal_line {
	@apply mx-auto my-2 transition-all duration-300 text-white/10 w-full;
}
</style>