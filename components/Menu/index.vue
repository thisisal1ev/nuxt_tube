<script lang="ts" setup>
import type { IMenuItem } from '../Sidebar.vue'

interface Props {
	items: IMenuItem[]
	isCollapsed: boolean
}

defineProps<Props>()
</script>

<template>
	<div class="pt-8">
		<MenuItem
			v-for="item in items"
			:key="item.icon"
			:icon="item.icon"
			:link="item.link"
			:name="item.name"
			:isCollapsed
		/>
	</div>
</template>
