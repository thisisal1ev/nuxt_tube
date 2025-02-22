<template>
	<Sidebar />

	<Header />

	<UContainer class="flex flex-col min-h-screen transition-all duration-300">
		<slot />
	</UContainer>
</template>
