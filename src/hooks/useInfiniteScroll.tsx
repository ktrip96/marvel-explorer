import { useRef, useCallback } from 'react'
import { ActionType } from '../reducers/comicGridReducer'

export function useInfiniteScroll(dispatch: React.Dispatch<ActionType>) {
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

	return { lastElementRef }
}
