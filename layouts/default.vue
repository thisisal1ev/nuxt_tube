<template>
	<main class="layout">
		<Sidebar />

		<Header />

		<UContainer class="content">
			<slot />
		</UContainer>
	</main>
</template>

<style scoped>
@reference "tailwindcss";

.content {
	@apply flex flex-col min-h-screen min-w-full my-3.5;
}
</style>
