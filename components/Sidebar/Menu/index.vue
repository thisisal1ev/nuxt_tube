<template>
	<nav class='flex flex-col space-y-5'>
		<div>
			<SidebarMenuItem icon="compass" label="Explore" route="" />
			<SidebarMenuItem icon="flame" label="Trending" route="trend" />
			<SidebarMenuItem icon="gamepad-2" label="Video games" route="games" />
			<SidebarMenuItem icon="circle-play" label="Subscriptions" route="subscriptions" />
		</div>

		<hr class="horizontal_line" />

		<div>
			<SidebarMenuItem icon="tv-minimal-play" label="My channel" route="watch-later" />
			<SidebarMenuItem icon="list-video" label="Playlist" route="playlist" />
			<SidebarMenuItem icon="history" label="History" route="history" />
			<SidebarMenuItem icon="folder-heart" label="Liked videos" route="liked" />
		</div>

		<hr class="horizontal_line" />

		<div>
			<SidebarMenuItem icon="layout-grid" label="Studio" route="studio" />
			<SidebarMenuItem icon="settings" label="Settings" route="settings" />
			<SidebarMenuItem icon="upload" label="Upload" route="" />
		</div>

		<hr class="horizontal_line" />

		<div>
			<p class="uppercase text-white/40 text-[8px]">
				More from NuxtTube
			</p>

			<SidebarMenuItem icon="info" label="Send feedback" route="feedback" />
			<SidebarMenuItem icon="log-out" label="Logout" route="" />
		</div>

	</nav>
</template>

<style scoped>
@reference "tailwindcss";

.horizontal_line {
	@apply mx-auto transition-all duration-300 text-white/10 h-0.5 w-full;
}
</style>