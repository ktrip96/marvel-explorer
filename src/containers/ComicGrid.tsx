import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import Comic from '../components/Comic'
import { ComicType } from '../types/comic'

type Props = {}

// TODO
// Replace State logic with useReducer logic
// Calculate the hash through .env\
// infinite scrolling

const ComicGrid = (props: Props) => {
	const [offset, setOffset] = useState(0)
	const [comicData, setComicData] = useState<Array<ComicType>>([] as Array<ComicType>)

	// Observer
	const observer = useRef<any>(null) // ref to store observer

	const lastElementRef = useCallback((element: HTMLDivElement) => {
		//element is the react element being referenced

		// disconnect observer set on previous last element
		if (observer.current) observer.current.disconnect()

		// set new observer
		observer.current = new IntersectionObserver((entries) => {
			// increase page number when element enters (is intersecting with) viewport.
			// This triggers the pagination hook to fetch more items in the new page
			if (entries[0].isIntersecting) {
				console.log('Callback fired')
				setOffset((prev) => prev + 20)
			}
		})
		// observe/monitor last element
		if (element) observer.current.observe(element)
	}, [])

	const fetchComicData = async (url: string) => {
		const emptyComic: ComicType = {
			isSkeleton: true,
		}
		setComicData((prev) => [...prev, ...Array(20).fill(emptyComic)])

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const comicAPIdata: Array<ComicType> = data.data.results.map((item: any) => getComicAttributes(item))
				setComicData((prev) => prev.filter((comic) => comic.isSkeleton === false).concat(comicAPIdata))
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

			<h1>offset:{offset}</h1>
		</div>
	)
}

function getComicAttributes(obj: any): ComicType {
	// destructs and returns { item , title, issueNumber, price, image}
	const { title, issueNumber, thumbnail, prices } = obj
	const price = prices[0].price
	const image = thumbnail.path + '.' + thumbnail.extension
	const isSkeleton = false

	return { title, issueNumber, image, price, isSkeleton }
}

export default ComicGrid
