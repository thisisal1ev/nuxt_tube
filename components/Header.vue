<script lang="ts" setup>
const dragStore = useDragStore()
</script>

<template>
	<header class="header">
		<div class="header_container">
			<UInput
				variant="ghost"
				type="search"
				size="lg"
				class="outline-none grow"
				placeholder="Type to search"
			/>

			<div class="space-x-5 flex items-center justify-between">
				<UButton
					variant="link"
					color="secondary"
					class="!p-0 group"
					@click="dragStore.toggleModal"
				>
					<Icon name="lucide:square-plus" class="icon" />
				</UButton>

				<UButton
					variant="link"
					color="secondary"
					class="!p-0 group"
					to="/studio"
				>
					<Icon name="lucide:layout-grid" class="icon" />
				</UButton>

				<UButton variant="link" color="secondary" class="!p-0 group">
					<Icon name="lucide:bell" class="icon" />
				</UButton>

				<UButton
					color="info"
					to="/auth"
					class="text-white rounded-sm px-4 py-2"
				>
					<Icon name="lucide:log-in" />

					<span>Auth</span>
				</UButton>
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

.icon {
	@apply group-hover:text-white/50 transition-colors duration-300;
}
</style>
