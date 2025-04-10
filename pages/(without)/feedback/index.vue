<script lang='ts' setup>
definePageMeta({
	layout: 'without',
})

const socials = ref([
	{
		id: 1,
		icon: 'simple-icons:telegram',
		label: 'Telegram',
		link: 'https://t.me/thisisal1ev',
	},
	{
		id: 2,
		icon: 'simple-icons:instagram',
		label: 'Instagram',
		link: 'https://instagram.com/thisisal1ev',
	},
])
</script>

<template>
	<div>
		<div class='flex justify-between items-center mb-5'>
			<h1 class='text-3xl font-bold'>Send your feedback</h1>

			<NuxtLink to='/' class='flex items-center gap-x-2 font-semibold'>
				<Icon name='lucide:arrow-left' size='18' />

				<span class='text-lg'>Home</span>
			</NuxtLink>
		</div>

		<div class='flex justify-start border border-white/10 rounded-md p-5 items-start gap-10 min-w-3xl'>
			<FormFeedback />

			<div class='w-full'>
				<h2 class='font-semibold text-xl mb-2'>Our social networks</h2>

				<SocialMediaLink v-for='social in socials' :key='social.id' :label='social.label' :link='social.link'
					:icon='social.icon' />
			</div>
		</div>
	</div>
</template>