<script lang='ts' setup>
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ Partial<InputHTMLAttributes> {
	label?: string
	name: string
}

const props = defineProps<Props>()

const { value, handleChange, handleBlur } =
	useField<string>(props.name)
</script>

<template>
	<label :for="name" class='flex flex-col space-y-1 w-full'>
		<span v-if='label' class='text-gray-400 font-semibold'>{{ label }}</span>

		<Input :name :id='name' v-model="value" @input="handleChange" @blur="handleBlur" v-bind="$attrs" />

		<ErrorMessage :name class='text-red-500 text-xs' />
	</label>
</template>