type StateType = {
	offset: number
	isLoading: boolean
	comicData: []
}

// type ActionType = {
//     type:"OFFSET_CHANGE" | "DATA_FETCHED"
//     payload?:
// }

export const initialState: StateType = {
	offset: 0,
	isLoading: true,
	comicData: [],
}
