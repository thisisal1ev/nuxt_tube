<script lang='ts' setup>
interface Props {
	icon: string
	link: string
	label: string
}

defineProps<Props>()
</script>

<template>
	<NuxtLink :to='link' target='_blank'
		class='flex items-center space-x-2 w-full px-3 py-2.5 hover:bg-gray-300/10 transition-colors duration-300 rounded-md group'>
		<Icon :name="icon" size='24' />

		<span>
			{{ label }}
		</span>
	</NuxtLink>
</template>