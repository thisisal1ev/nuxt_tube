export function fileUrl(file: File): string {
	return URL.createObjectURL(file)
}

export function fileSize(size: number): string {
	return (size / 1024 / 1024).toFixed(2)
}

export function isVideo(type: string): boolean {
	return type.startsWith('video/') ? true : false
}

export const formatter = new Intl.NumberFormat('en-EN', {
	notation: 'compact',
})
