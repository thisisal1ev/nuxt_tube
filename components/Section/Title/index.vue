<script lang="ts" setup>
interface Props {
	label: string
	icon: string
}

defineProps<Props>()
</script>

<template>
	<h3 class='flex items-center space-x-2 text-lg font-semibold'>
		<Icon :name="`lucide:${icon}`" size='24' class='text-dimmed-red' />

		<span>{{ label }}</span>
	</h3>
</template>