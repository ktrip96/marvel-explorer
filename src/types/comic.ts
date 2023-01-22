export interface ComicType {
	title?: string
	price?: number
	issueNumber?: number
	image?: string
	isSkeleton: boolean
}

export interface apiComicType extends ComicType {
	thumbnail: {
		path: string
		extension: string
	}
	prices: Array<{ price: number }>
}
