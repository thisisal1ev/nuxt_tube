<template>
	<Motion as="div" :initial="{ display: 'none' }" :animate="{ display: 'block' }" :exit="{ display: 'none' }"
		:transition="{ duration: 0.3, type: 'spring', bounce: 0.1 }"
		class="opacity-50 z-40 fixed bg-black top-0 left-0 w-full h-full" />
</template>