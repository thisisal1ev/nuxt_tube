<script lang='ts' setup>
definePageMeta({
	layout: 'auth',
})

const tabs = ['Login', 'Register']

const selectedTab = ref(tabs[0])
</script>

<template>
	<div class='rounded-md border border-white/10 p-5 flex flex-col items-center justify-center space-y-5 w-80'>
		<h1 class="flex items-center space-x-1">
			<Icon name="lucide:square-play" size="32" class="text-dimmed-red" />

			<span class="font-extrabold text-2xl">
				NuxtTube
			</span>
		</h1>

		<div class="flex gap-x-5">
			<Motion as="button" v-for="item in tabs" :key="item" tag="li" class="relative" :initial="false"
				@click="selectedTab = item">
				<span :class='{ "!text-red transition-colors duration-300": selectedTab === item }'
					class='text-lg font-semibold text-white/30'>
					{{ item }}
				</span>

				<Motion as="div" v-if="item === selectedTab" class="tabUnderline bg-red" layoutId="underline" id="underline" />
			</Motion>
		</div>


		<AnimatePresence mode="wait">
			<Motion as="div" :key="selectedTab ? selectedTab : 'empty'" :initial="{ y: 10, opacity: 0 }" class='w-full'
				:animate="{ y: 0, opacity: 1 }" :exit="{ y: -10, opacity: 0 }" :transition="{ duration: 0.2 }">
				<FormLogin v-if="selectedTab === 'Login'" />
				<FormRegister v-else />
			</Motion>
		</AnimatePresence>
	</div>
</template>

<style scoped>
@reference "tailwindcss";

.tabUnderline {
	@apply absolute -bottom-0.5 left-0 right-0 h-0.5 mx-[-5px];
}
</style>