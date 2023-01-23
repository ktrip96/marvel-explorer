import { ComicType } from '../types/comic'

type StateType = {
	offset: number
	comicData: Array<ComicType>
}

export type ActionType = {
	type: 'INCREMENT_OFFSET' | 'FETCH_START' | 'FETCH_SUCCESS'
	payload?: Array<ComicType>
}

export const initialState: StateType = {
	offset: 0,
	comicData: [] as Array<ComicType>,
}

export const comicGridReducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'INCREMENT_OFFSET':
			return {
				...state,
				offset: state.offset + 20,
			}
		case 'FETCH_START':
			const emptyComic: ComicType = {
				isSkeleton: true,
			}
			return {
				...state,
				comicData: [...state.comicData, ...Array(20).fill(emptyComic)],
			}
		case 'FETCH_SUCCESS':
			if (action.payload)
				return {
					...state,
					comicData: state.comicData.filter((comic) => comic.isSkeleton === false).concat(action.payload),
				}
		default:
			throw new Error()
	}
}
