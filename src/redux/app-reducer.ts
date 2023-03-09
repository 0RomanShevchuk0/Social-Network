import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type StateType = {
	initialized: boolean
}

let initialState: StateType = {
	initialized: false,
};


const appReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { 
				...state,
				initialized: true
			}

    default:
      return state
  }
};

type InitializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initialize = () => {
	return async (dispatch: any) => {
		await dispatch(getAuthUserData())
		dispatch(initializedSuccess())
	}
}


export default appReducer
