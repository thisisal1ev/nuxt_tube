export interface Channel {
	id: number
	banner: string
	avatar: string
	name: string
	alias: string
	description: string
	videos: Video[]
}

interface Video {
	id: number
	title: string
	poster: string
	views: number
	channel: ChannelInfoInVideo
}

interface ChannelInfoInVideo {
	name?: string
	alias?: string
	avatar?: string
	isOfficial?: boolean
}
