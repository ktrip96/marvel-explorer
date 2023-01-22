import { ComicType, apiComicType } from '../types/comic'

export function getComicAttributes(obj: apiComicType): ComicType {
	const { title, issueNumber, thumbnail, prices } = obj
	const price = prices[0].price
	const image = thumbnail.path + '/portrait_incredible' + '.' + thumbnail.extension
	const isSkeleton = false

	return { title, issueNumber, image, price, isSkeleton }
}
