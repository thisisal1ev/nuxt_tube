<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<UApp :toaster="{ position: 'top-center', portal: true, duration: 3000 }">
			<NuxtPage />
		</UApp>
	</NuxtLayout>
</template>
