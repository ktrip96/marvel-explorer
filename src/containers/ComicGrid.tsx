import Comic from '../components/Comic'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useFetchData } from '../hooks/useFetchData'

const ComicGrid = () => {
	const { comicData, dispatch } = useFetchData()
	const { lastElementRef } = useInfiniteScroll(dispatch)

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
