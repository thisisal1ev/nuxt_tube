<script lang="ts" setup>
const sidebarStore = useSidebarStore()
</script>

<template>
	<div class="flex flex-col space-y-5">
		<div>
			<MenuItem
				v-for="item in sidebarStore.UP_MENU_LIST"
				:key="item.icon"
				:icon="item.icon"
				:link="item.link"
				:name="item.name"
				:isCollapsed="sidebarStore.isCollapsed"
			/>
		</div>

		<hr
			class="mx-auto transition-all duration-300 text-white/10"
			:class="!sidebarStore.isCollapsed ? 'w-40' : 'w-5'"
		/>

		<div>
			<MenuItem
				v-for="item in sidebarStore.MID_MENU_LIST"
				:key="item.icon"
				:icon="item.icon"
				:link="item.link"
				:name="item.name"
				:isCollapsed="sidebarStore.isCollapsed"
			/>
		</div>

		<hr
			class="mx-auto transition-all duration-300 text-white/10"
			:class="!sidebarStore.isCollapsed ? 'w-40' : 'w-5'"
		/>

		<div>
			<p
				v-if="!sidebarStore.isCollapsed"
				class="uppercase text-[8px] text-white/40"
			>
				More from NuxtTube
			</p>

			<MenuItem
				v-for="item in sidebarStore.LOW_MENU_LIST"
				:key="item.icon"
				:icon="item.icon"
				:link="item.link"
				:name="item.name"
				:isCollapsed="sidebarStore.isCollapsed"
			/>
		</div>
	</div>
</template>
