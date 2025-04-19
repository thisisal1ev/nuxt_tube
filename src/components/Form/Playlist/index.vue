<script lang='ts' setup>
defineProps<{ disabled: boolean }>()
defineEmits(['onSubmit'])
</script>

<template>
	<form @submit.prevent="$emit('onSubmit')" class="space-y-5 flex flex-col">
		<FormInput name='title' label='Title' placeholder='Enter title:' required />

		<FormInput name='videoId' label='Video public id (from url)' placeholder='Enter video public id:' required />

		<button type='submit' :disabled
			class='bg-dimmed-red px-6 py-1.5 rounded-md mx-auto w-30 hover:bg-dimmed-red/80 transition-colors duration-300'>
			Create
		</button>
	</form>
</template>