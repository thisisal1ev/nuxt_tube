<template>
	<section class='flex flex-col space-y-4 py-2.5'>
		<h3 class='flex items-center space-x-2 text-lg font-semibold'>
			<Icon name='lucide:flame' size='24' class='text-dimmed-red' />

			<span>Trending</span>
		</h3>

		<ul role='list' class='wrapper'>
			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-0.5">
							<Icon name="lucide:flame" class="text-dimmed-red" size='16' />

							<span class="text-white/50 text-xs tabular-nums">
								1.5k views
							</span>
						</div>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						MACAN, A.V.G - Привыкаю
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">Macan</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/BHcM28mKcOC3ZTUzwCPqZlU7nWfK0iqlOuRUH448NqxNtKAtSU9LYohWgxbKSojlUoKF5kMMvQ=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-0.5">
							<Icon name="lucide:flame" class="text-dimmed-red" size='16' />

							<span class="text-white/50 text-xs tabular-nums">
								1.5k views
							</span>
						</div>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Зачем тебе Switch 2, если ты первый не прошёл?
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">Rozetked</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i9.ytimg.com/vi/Eiu9hzJ-YrE/hq720_custom_2.jpg?sqp=CKzexL8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIJw9Oo9QKyHGaMXpI00cVv1KrdA"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-0.5">
							<Icon name="lucide:flame" class="text-dimmed-red" size='16' />

							<span class="text-white/50 text-xs tabular-nums">
								1.5k views
							</span>
						</div>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">RED Group</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-0.5">
							<Icon name="lucide:flame" class="text-dimmed-red" size='16' />

							<span class="text-white/50 text-xs tabular-nums">
								1.5k views
							</span>
						</div>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Курс Nuxt 3. Урок 1. Знакомство с фреймворком
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">CodeHorizon</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>
		</ul>
	</section>

	<section class='flex flex-col space-y-4 py-2.5'>
		<h3 class='flex items-center space-x-2 text-lg font-semibold'>
			<Icon name='lucide:compass' size='24' class='text-dimmed-red' />

			<span>Explore</span>
		</h3>

		<ul role='list' class='wrapper'>
			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/q_M_xI1c2K2osn5jwuJ69rbYA4qJCpN_thaojC5V-dlNhlEiGBbMsjuh9vHvvKLkEPSI6KYF=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<span class="text-white/50 text-xs tabular-nums">
							1.5k views
						</span>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						MACAN, A.V.G - Привыкаю
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">Macan</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/7dnvtlYi0Vc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdzT0JHTKBuBAqXj6uvuBTHT1UbQ"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/BHcM28mKcOC3ZTUzwCPqZlU7nWfK0iqlOuRUH448NqxNtKAtSU9LYohWgxbKSojlUoKF5kMMvQ=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<span class="text-white/50 text-xs tabular-nums">
							1.5k views
						</span>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Зачем тебе Switch 2, если ты первый не прошёл?
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">Rozetked</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i9.ytimg.com/vi/Eiu9hzJ-YrE/hq720_custom_2.jpg?sqp=CKzexL8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIJw9Oo9QKyHGaMXpI00cVv1KrdA"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<span class="text-white/50 text-xs tabular-nums">
							1.5k views
						</span>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Я ПРЕДУПРЕЖДАЛ! УЯЗВИМОСТЬ в NEXT JS
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">RED Group</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/cPYTxu0vTOk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzMTm4uhVqGJGmeJyo7NDRnX90w"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.googleusercontent.com/8Ux80QiA5C5NgasL0mETDJUYVZObERuoQykwCiviSVFgr1q05AuvFwX5yoXUNtotLE8kLkQsqA=s160-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<span class="text-white/50 text-xs tabular-nums">
							1.5k views
						</span>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						Курс Nuxt 3. Урок 1. Знакомство с фреймворком
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">CodeHorizon</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>

			<li class='w-full flex flex-col'>
				<NuxtLink :to="`/video/1`" class='relative'>
					<NuxtImg width="300" height="150" class="w-full rounded-md mb-2 aspect-video grow"
						src="https://i.ytimg.com/vi/_Pv6wfABwF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHZTJ4MYr9t05CTTIQZePej-GKjQ"
						alt="title" />

					<NuxtImg width='40' height='40'
						src="https://yt3.ggpht.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s88-c-k-c0x00ffffff-no-rj"
						alt='Avatar' class='absolute rounded-full bottom-4 left-2.5' />
				</NuxtLink>

				<div class="space-y-1.5 grow">
					<div class="flex items-center justify-between">
						<span class="text-white/50 text-xs tabular-nums">
							1.5k views
						</span>

						<p class="text-white/50 text-xs">2 days ago</p>
					</div>

					<h4 class="font-semibold text-sm overflow-hidden line-clamp-2">
						10 ОШИБОК, которые ЛОМАЮТ ваши ПРОЕКТЫ!
					</h4>

					<NuxtLink :to="`/channel/macan`" class="flex items-center text-sm">
						<span class="mr-1.5 text-white/70 text-sm">RED Group</span>

						<Icon name="lucide:badge-check" class="text-green-600" />
					</NuxtLink>
				</div>
			</li>
		</ul>
	</section>
</template>

<style scoped>
@reference "tailwindcss";

.wrapper {
	@apply grid grid-cols-1 gap-5 py-0.5 md:grid-cols-2 lg:grid-cols-4;
}
</style>