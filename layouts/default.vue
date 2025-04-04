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
	@apply flex flex-col min-h-screen min-w-full my-3.5 px-5;
}
</style>