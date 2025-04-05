<template>
	<main class='layout'>
		<Sidebar class='sidebar' />

		<Header class='header' />

		<div class='content'>
			<slot />
		</div>
	</main>
</template>

<style scoped>
@reference "tailwindcss";

.content {
	@apply flex flex-col min-h-screen min-w-full px-5;
}
</style>