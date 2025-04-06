<script lang='ts' setup>
import { motion } from 'motion-v'

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
			<motion.button v-for="item in tabs" :key="item" tag="li" class="relative" :initial="false"
				@click="selectedTab = item">
				<span :class='{ "!text-red transition-colors duration-300": selectedTab === item }'
					class='text-lg font-semibold text-white/30'>
					{{ item }}
				</span>

				<motion.div v-if="item === selectedTab" class="tabUnderline" layoutId="underline" id="underline" />
			</motion.button>
		</div>


		<AnimatePresence mode="wait">
			<motion.div :key="selectedTab ? selectedTab : 'empty'" :initial="{ y: 10, opacity: 0 }"
				:animate="{ y: 0, opacity: 1 }" :exit="{ y: -10, opacity: 0 }" :transition="{ duration: 0.2 }">
				{{ selectedTab === 'Login' ? 'Login' : "Register" }}
			</motion.div>
		</AnimatePresence>
	</div>
</template>

<style scoped>
.tabUnderline {
	position: absolute;
	bottom: -2px;
	left: 0;
	right: 0;
	height: 2px;
	margin-inline: -5px;
	background: var(--color-red);
}
</style>