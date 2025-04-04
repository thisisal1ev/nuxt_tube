<template>
	<aside class='sidebar'>
		<div class='flex items-center space-x-4 mb-8 mx-auto'>
			<button class='group'>
				<Icon class='group-hover:text-white/50 transition_color' name="lucide:menu" size="24" />
			</button>

			<h1 class="flex items-center space-x-1">
				<Icon name="lucide:square-play" size="32" class="text-dimmed-red" />

				<span class="font-extrabold text-2xl">
					NuxtTube
				</span>
			</h1>
		</div>

		<SidebarMenu />
	</aside>
</template>

<style scoped>
@reference "tailwindcss";

.sidebar {
	@apply border-r border-white/10 min-h-screen outline-none py-5 px-8 w-64;
}
</style>