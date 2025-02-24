<template>
	<div class="layout">
		<Sidebar />

		<Header />

		<UContainer class="content">
			<slot />
		</UContainer>
	</div>
</template>

<style scoped>
@reference "tailwindcss";

.content {
	@apply flex flex-col min-h-screen min-w-full space-y-3;
}
</style>
