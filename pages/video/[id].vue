<script lang="ts" setup>
const isLiked = ref<boolean>(false)
const state = ref<boolean>(false)
const subscribers = formatter.format(23289)
const stateOfDescription = ref<boolean>(false)

function description() {
	stateOfDescription.value = !stateOfDescription.value
}

function like() {
	isLiked.value = !isLiked.value
}

function subscribe() {
	state.value = !state.value
}
</script>

<template>
	<div class="video_layout gap-x-14 space-x-14 py-5">
		<video
			src="https://www.youtube.com/watch?v=hp7RGbb44VY&t=1154s"
			class="rounded-lg w-full video"
			controls
		/>

		<div class="video_data w-full space-y-5">
			<div
				class="py-2.5 flex items-start justify-between border-b border-white/10"
			>
				<div>
					<h3 class="text-2xl font-semibold">Title</h3>
					<p class="text-sm text-white/50">2054 views</p>
				</div>

				<div class="flex items-center justify-between space-x-5">
					<UPopover>
						<UButton
							label="Save"
							color="info"
							icon="lucide:list-video"
							variant="ghost"
						/>

						<template #content>
							<div class="px-5 py-1">
								<UButton size="lg" label="Seen" color="info" variant="link" />
							</div>
						</template>
					</UPopover>

					<UButton
						@click="like"
						label="10"
						size="lg"
						color="error"
						variant="ghost"
						:icon="isLiked ? 'lucide:heart' : 'lucide:heart-off'"
					/>
				</div>
			</div>

			<div class="flex items-center justify-between py-2.5">
				<div class="flex justify-between space-x-2">
					<NuxtImg
						class="rounded-xl w-14 h-14"
						width="40"
						height="40"
						src="https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj"
					/>

					<div>
						<h4 class="text-sm flex items-center space-x-1.5">
							<span class="mr-1.5">Name of the channel</span>

							<Icon
								name="lucide:badge-check"
								size="18"
								class="text-primary-500"
							/>
						</h4>

						<p class="text-xs text-white/80">{{ subscribers }} subscribers</p>
					</div>
				</div>

				<UButton
					@click="subscribe"
					color="info"
					size="xl"
					class="flex justify-center py-2 w-40 rounded-md transition-all duration-300 hover:opacity-80"
					:class="state ? 'bg-gray-500' : 'bg-info-500'"
					:label="state ? 'Subscribed' : 'Subscribe'"
				/>
			</div>

			<div class="bg-blue-200/10 my-5 w-full rounded-lg p-2.5">
				<p
					class="text-sm line-clamp-2"
					:class="stateOfDescription ? 'line-clamp-none' : ''"
				>
					This is description of video. This description can be very long.
					However, it should be short. But it is no problem. If it is very long,
					you should use this component. This is description of video. This
					description can be very long. However, it should be short. But it is
					no problem. If it is very long, you should use this component. This is
					description of video. This description can be very long. However, it
					should be short. But it is no problem. If it is very long, you should
					use this component.
				</p>

				<UButton
					@click="description"
					:label="stateOfDescription ? 'Show less' : 'Show more'"
					class="uppercase !p-0"
					variant="link"
					color="neutral"
				/>
			</div>

			<hr class="text-white/10" />

			<div class="flex items-center justify-between space-x-20 py-2.5">
				<UInput
					size="xl"
					color="info"
					variant="outline"
					class="grow mr-20"
					placeholder="Enter comment"
				/>

				<UButton
					size="xl"
					color="info"
					class="font-semibold px-10 rounded-sm"
					label="Comment"
				/>
			</div>
		</div>

		<SectionRecommendation
			class="recommendation"
			:items="[
				{
					id: 1,
					title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
					views: 152546,
					channel: 'Channel 1',
					poster:
						'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
				},
				{
					id: 1,
					title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
					views: 34,
					channel: 'Channel 1',
					poster:
						'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
				},
				{
					id: 1,
					title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
					views: 34,
					channel: 'Channel 1',
					poster:
						'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
				},
				{
					id: 1,
					title: 'Гуф ft. Баста - Гуф Умер (Official Video)',
					views: 34,
					channel: 'Channel 1',
					poster:
						'https://i.ytimg.com/vi/nuJjc8GEp60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlr_ib_pIeHNmRJ5LGm8MSajAwg',
				},
			]"
		/>
	</div>
</template>
