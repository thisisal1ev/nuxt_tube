<script lang="ts" setup>
definePageMeta({
	layout: 'auth-layout',
})

const form = ref<'login' | 'register'>('login')
const active = ref<number | string>('0')

const items = ref([
	{
		label: 'Login',
	},
	{
		label: 'Register',
	},
])

watchEffect(() => {
	if (active.value === '0') {
		form.value = 'login'
	} else {
		form.value = 'register'
	}
})
</script>

<template>
	<div class="grow h-auto w-full flex flex-col items-center justify-center">
		<div class="form">
			<h1 class="flex items-center space-x-1 justify-center">
				<Icon name="lucide:square-play" size="32" class="text-info-400" />

				<span class="font-extrabold text-2xl">NuxtTube</span>
			</h1>

			<div class="flex items-center justify-center">
				<UTabs color="info" variant="link" size="xl" v-model="active" :items />
			</div>

			<FormLogin v-if="form === 'login'" />
			<FormRegister v-else />
		</div>
	</div>
</template>

<style scoped>
@reference 'tailwindcss';

.form {
	@apply p-5 border border-white/10 rounded-sm space-y-5 w-xs;
}
</style>
