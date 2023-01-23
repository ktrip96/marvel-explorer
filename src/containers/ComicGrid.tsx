import Comic from '../components/Comic'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useFetchComicData } from '../hooks/useFetchComicData'

const ComicGrid = () => {
	const { comicData, dispatch } = useFetchComicData()
	const { lastElementRef } = useInfiniteScroll(dispatch)

	// lastElementRef is used as a Callback Ref
	// https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
	// Callback refs give more fine-grain control over when refs are set and unset.
	// https://elfi-y.medium.com/react-callback-refs-a-4bd2da317269

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
