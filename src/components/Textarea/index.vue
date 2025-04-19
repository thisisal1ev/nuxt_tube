<script lang='ts' setup>
import type { TextareaHTMLAttributes } from 'vue'

defineProps< /* @vue-ignore */ Partial<TextareaHTMLAttributes>>()
</script>

<template>
	<textarea
		class='border border-white/10 px-2.5 py-1.5 outline-none rounded focus:border-white/30 transition-colors duration-300 appearance-none resize-none'
		v-bind='$attrs'></textarea>
</template>