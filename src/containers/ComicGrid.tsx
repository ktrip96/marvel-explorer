import { useEffect, useRef, useCallback, useReducer } from 'react'
import Comic from '../components/Comic'
import { comicGridReducer, initialState } from '../reducers/comicGridReducer'
import { ComicType } from '../types/comic'
import { getComicAttributes } from '../utilities/helper'
import { apiComicType } from '../types/comic'

// TODO
// Explain why Intersection Works this way
// Custom Hook

const ComicGrid = () => {
	const [state, dispatch] = useReducer(comicGridReducer, initialState)
	const { offset, comicData } = state

	const observer = useRef<any>(null)

	const lastElementRef = useCallback((element: HTMLDivElement) => {
		if (observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch({ type: 'INCREMENT_OFFSET' })
			}
		})
		if (element) observer.current.observe(element)
	}, [])

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

	return (
		<div className='w-full my_grid'>
			{comicData.map((i, index) => (
				<div ref={index === comicData.length - 1 ? lastElementRef : undefined} key={index}>
					<Comic data={i} />
				</div>
			))}
		</div>
	)
}

export default ComicGrid
