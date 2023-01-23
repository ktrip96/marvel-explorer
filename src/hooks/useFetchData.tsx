import { useReducer, useEffect } from 'react'
import { comicGridReducer, initialState } from '../reducers/comicGridReducer'
import { apiComicType, ComicType } from '../types/comic'
import { getComicAttributes } from '../utilities/helper'

export function useFetchData() {
	const [state, dispatch] = useReducer(comicGridReducer, initialState)
	const { offset, comicData } = state

	const fetchComicData = async (url: string) => {
		dispatch({ type: 'FETCH_START' })
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const comicAPIdata: Array<ComicType> = data.data.results.map((item: apiComicType) =>
					getComicAttributes(item)
				)
				dispatch({ type: 'FETCH_SUCCESS', payload: comicAPIdata })
			})
	}

	useEffect(() => {
		const url = `http://gateway.marvel.com/v1/public/comics?apikey=0d8a28cf18b921d3ac9b589e6a7186de&hash=d312aa129c1be1a7b70627050863f692&ts=1&offset=${offset}`
		fetchComicData(url)
	}, [offset])

	return { comicData, dispatch }
}
