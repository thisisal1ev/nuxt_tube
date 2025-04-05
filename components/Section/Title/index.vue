<script lang="ts" setup>
interface Props {
	text: string
	icon: string
}

defineProps<Props>()
</script>

<template>
	<h3 class='flex items-center space-x-2 text-lg font-semibold'>
		<Icon :name="`lucide:${icon}`" size='24' class='text-dimmed-red' />

		<span>{{ text }}</span>
	</h3>
</template>