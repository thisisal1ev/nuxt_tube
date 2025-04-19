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

export function timeAgo(dateString: string) {
	const now = new Date()
	const past = new Date(dateString)
	const seconds = Math.floor((now.getTime() - past.getTime()) / 1000)

	const rtf = new Intl.RelativeTimeFormat('en', {
		numeric: 'auto',
	})

	const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
		{ unit: 'year', seconds: 31536000 },
		{ unit: 'month', seconds: 2592000 },
		{ unit: 'week', seconds: 604800 },
		{ unit: 'day', seconds: 86400 },
		{ unit: 'hour', seconds: 3600 },
		{ unit: 'minute', seconds: 60 },
		{ unit: 'second', seconds: 1 },
	]

	for (const { unit, seconds: unitSeconds } of units) {
		const delta = Math.floor(seconds / unitSeconds)
		if (delta >= 1) return rtf.format(-delta, unit)
	}

	return 'just now'
}
