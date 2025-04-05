<template>
	<header class='header'>
		<div class='header_container'>
			<input type="search" placeholder="Search..." class="search_input transition_color" />

			<div class="space-x-5 flex items-center justify-between">
				<button class='group'>
					<Icon name="lucide:square-plus" class="icon" />
				</button>

				<NuxtLink class='group' to="/studio">
					<Icon name="lucide:layout-grid" class="icon" />
				</NuxtLink>

				<button class='group mr-10'>
					<Icon name="lucide:bell" class="icon" />
				</button>

				<NuxtLink to="/auth" class="auth_button transition_color bg-red hover:bg-red/80">
					<Icon name="lucide:log-in" />

					<span>Auth</span>
				</NuxtLink>
			</div>
		</div>
	</header>
</template>

<style scoped>
@reference "tailwindcss";

.header {
	@apply border-b border-white/10 px-5 py-3;
}

.header_container {
	@apply flex items-center justify-center space-x-10;
}

.search_input {
	@apply grow rounded text-sm px-4 py-2 outline-none hover:bg-white/10 focus:bg-transparent placeholder:text-sm
}

.auth_button {
	@apply text-white rounded-sm px-4 py-1.5 flex items-center space-x-1.5
}

.icon {
	@apply group-hover:text-white/50 transition-colors duration-300;
}
</style>