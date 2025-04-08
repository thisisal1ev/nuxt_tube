<template>
	<Motion as="div" :initial="{ opacity: 0 }" :animate="{ opacity: 0.6 }" :exit="{ opacity: 0 }"
		:transition="{ duration: 0.3, type: 'spring', bounce: 0.1 }"
		class="z-40 fixed top-0 left-0 w-full h-full bg-black" />
</template>