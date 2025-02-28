<template>
	<div class="space-y-5">
		<NuxtImg
			src="https://yt3.googleusercontent.com/wvhj7g9Ue3EO2JDutWunw-GFKcy_fkrV4juRtmBa1Jx8Rkq79cJG30zfZ3CtPFfU1NH1mqLUvcQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
			alt="Banner"
			height="200"
			class="w-full rounded-2xl"
		/>

		<div class="flex space-x-5">
			<NuxtImg
				src="https://yt3.googleusercontent.com/aiw73zdQg8OFJXVUK0m4rFJnxSUn5GArkXrLWD3sDh8LJ0eAVpdn9ECmXSKyHyyoX98pbKYVWQ=s160-c-k-c0x00ffffff-no-rj"
				width="128"
				height="128"
				alt="Avatar"
				class="rounded-xl mr-5"
			/>

			<div class="flex flex-col space-y-3.5">
				<div class="flex items-center">
					<h3 class="text-3xl font-bold mr-1.5">thisisal1ev</h3>

					<Icon name="lucide:badge-check" class="text-primary-500" />
				</div>

				<div class="text-white/50 space-y-1.5">
					<p>/slug - subscribers - videos</p>

					<p>this is a description</p>
				</div>

				<UButton
					color="info"
					class="grow flex justify-center py-2.5"
					label="Subscribe"
				/>
			</div>
		</div>

		<SectionVideo />
	</div>
</template>
