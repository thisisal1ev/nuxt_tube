<script lang="ts" setup>
interface Props {
	text: string | string[]
	icon: string
}

defineProps<Props>()
</script>

<template>
	<h2 class="flex items-center space-x-2">
		<Icon :name="`lucide:${icon}`" size="24" class="text-info-500" />

		<span class="text-lg font-bold">{{ text }}</span>
	</h2>
</template>
