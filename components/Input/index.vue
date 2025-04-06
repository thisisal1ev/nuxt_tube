<script lang='ts' setup>
import type { InputHTMLAttributes } from 'vue'

defineProps< /* @vue-ignore */ Partial<InputHTMLAttributes>>()
</script>

<template>
	<input
		class='border border-white/10 px-2.5 py-1.5 outline-none rounded focus:border-white/30 transition-colors duration-300'
		v-bind="$attrs" />
</template>