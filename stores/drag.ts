export const useDragStore = defineStore('drag', () => {
	const droppedFile = ref<File | null>(null)
	const isModalOpen = ref<boolean>(false)

	function clearDropped() {
		droppedFile.value = null
	}

	function drop(event: any) {
		droppedFile.value = event.dataTransfer.files[0]
	}

	function toggleModal() {
		isModalOpen.value = !isModalOpen.value
		droppedFile.value = null
	}

	return {
		droppedFile,
		isModalOpen,
		drop,
		clearDropped,
		toggleModal,
	}
})
