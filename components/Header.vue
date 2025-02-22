<script lang="ts" setup>
const sidebarStore = useSidebarStore()
</script>

<template>
	<Motion
		as="header"
		class="border-b border-white/10 fixed top-0 left-56 min-w-full p-5"
		:animate="sidebarStore.isCollapsed ? { left: '48px' } : { left: '224px' }"
		:transition="{ duration: 0.3 }"
	>
		<Motion
			class="flex items-center justify-center space-x-10"
			:animate="
				sidebarStore.isCollapsed ? { width: '1440px' } : { width: '1240px' }
			"
			:transition="{ duration: 0.3, bounce: 0.1, mass: 0.3, type: 'spring' }"
		>
			<input
				type="search"
				class="outline-none px-5 w-xl grow"
				placeholder="Type to search"
			/>

			<div class="space-x-5 flex items-center justify-between">
				<button class="group">
					<Icon
						name="lucide:square-plus"
						class="group-hover:text-white/50 transition-colors duration-300"
					/>
				</button>

				<button class="group">
					<Icon
						name="lucide:layout-grid"
						class="group-hover:text-white/50 transition-colors duration-300"
					/>
				</button>

				<button class="group">
					<Icon
						name="lucide:bell"
						class="group-hover:text-white/50 transition-colors duration-300"
					/>
				</button>

				<UButton
					variant="solid"
					color="info"
					class="text-white rounded-sm px-2"
				>
					<Icon name="lucide:log-in" />

					<span>Auth</span>
				</UButton>
			</div>
		</Motion>
	</Motion>
</template>
