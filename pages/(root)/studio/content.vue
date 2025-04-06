<script lang='ts' setup>
function remove() {
	console.log('remove')
}

function edit() {
	console.log('edit')
}
</script>

<template>
	<section class='py-5'>
		<h2 class='flex items-center gap-2 text-4xl font-bold mb-4'>
			<Icon name='lucide:video' size='32' class='text-dimmed-red' />

			<span>Content</span>
		</h2>

		<ul role='list' class='flex flex-col py-5'>
			<li class='flex items-start justify-between gap-5 py-5 not-last:border-b border-white/10'>
				<NuxtImg
					src='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
					alt='poster' width='250' height='100' />

				<div>
					<p>MACAN, A.V.G - Привыкаю</p>

					<p class='text-white/60'>This is a description for the video</p>
				</div>

				<div>
					<p class='text-white/60'>2 days ago</p>

					<p class='text-white/30'>Published</p>
				</div>

				<p class='text-white/60'>0 views</p>

				<p class='text-white/60'>0 comments</p>

				<p class='text-white/60'>0 likes</p>

				<div class='flex items-center gap-5'>
					<NuxtLink :to='`/video/1`' role='link' target='_blank'>
						<Icon name='lucide:square-arrow-out-up-right' class='text-blue-700' />
					</NuxtLink>

					<button @click='edit'>
						<Icon name='lucide:edit' class='text-yellow-700' />
					</button>

					<button @click='remove'>
						<Icon name='lucide:trash-2' class='text-red-700' />
					</button>
				</div>
			</li>

			<li class='flex items-start justify-between gap-5 py-5 not-last:border-b border-white/10'>
				<NuxtImg
					src='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
					alt='poster' width='250' height='100' />

				<div>
					<p>MACAN, A.V.G - Привыкаю</p>

					<p class='text-white/60'>This is a description for the video</p>
				</div>

				<div>
					<p class='text-white/60'>2 days ago</p>

					<p class='text-white/30'>Published</p>
				</div>

				<p class='text-white/60'>0 views</p>

				<p class='text-white/60'>0 comments</p>

				<p class='text-white/60'>0 likes</p>

				<div class='flex items-center gap-5'>
					<NuxtLink :to='`/video/1`' role='link' target='_blank'>
						<Icon name='lucide:square-arrow-out-up-right' class='text-blue-700' />
					</NuxtLink>

					<button @click='edit'>
						<Icon name='lucide:edit' class='text-yellow-700' />
					</button>

					<button @click='remove'>
						<Icon name='lucide:trash-2' class='text-red-700' />
					</button>
				</div>
			</li>

			<li class='flex items-start justify-between gap-5 py-5 not-last:border-b border-white/10'>
				<NuxtImg
					src='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
					alt='poster' width='250' height='100' />

				<div>
					<p>MACAN, A.V.G - Привыкаю</p>

					<p class='text-white/60'>This is a description for the video</p>
				</div>

				<div>
					<p class='text-white/60'>2 days ago</p>

					<p class='text-white/30'>Published</p>
				</div>

				<p class='text-white/60'>0 views</p>

				<p class='text-white/60'>0 comments</p>

				<p class='text-white/60'>0 likes</p>

				<div class='flex items-center gap-5'>
					<NuxtLink :to='`/video/1`' role='link' target='_blank'>
						<Icon name='lucide:square-arrow-out-up-right' class='text-blue-700' />
					</NuxtLink>

					<button @click='edit'>
						<Icon name='lucide:edit' class='text-yellow-700' />
					</button>

					<button @click='remove'>
						<Icon name='lucide:trash-2' class='text-red-700' />
					</button>
				</div>
			</li>

			<li class='flex items-start justify-between gap-5 py-5 not-last:border-b border-white/10'>
				<NuxtImg
					src='https://i.ytimg.com/vi/7eaURiSE_s8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDPjrX7AiyZWEtlqiqbOCz4-UWKNg'
					alt='poster' width='250' height='100' />

				<div>
					<p>MACAN, A.V.G - Привыкаю</p>

					<p class='text-white/60'>This is a description for the video</p>
				</div>

				<div>
					<p class='text-white/60'>2 days ago</p>

					<p class='text-white/30'>Published</p>
				</div>

				<p class='text-white/60'>0 views</p>

				<p class='text-white/60'>0 comments</p>

				<p class='text-white/60'>0 likes</p>

				<div class='flex items-center gap-5'>
					<NuxtLink :to='`/video/1`' role='link' target='_blank'>
						<Icon name='lucide:square-arrow-out-up-right' class='text-blue-700' />
					</NuxtLink>

					<button @click='edit'>
						<Icon name='lucide:edit' class='text-yellow-700' />
					</button>

					<button @click='remove'>
						<Icon name='lucide:trash-2' class='text-red-700' />
					</button>
				</div>
			</li>
		</ul>
	</section>
</template>