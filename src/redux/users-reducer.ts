import { usersAPI } from "../API/api"
import { UserType } from "../types/types"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_LOADING = "SET_IS_LOADING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"


let initialState = {
	users : [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
	followingProgress: [] as Array<number>, // array of users ids
};

type StateType = typeof initialState

const usersReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users : state.users.map( user =>  user.id === action.userId ? {...user, followed : true} : user)
			}

		case UNFOLLOW:
			return {
				...state,
				users : state.users.map( user =>  user.id === action.userId ? {...user, followed : false} : user)
			}

			case SET_USERS:
				return {...state, users: action.users}
				
			case SET_CURRENT_PAGE:
				return {...state, currentPage: action.currentPage}

			case SET_TOTAL_USERS_COUNT:
				return {...state, totalUsersCount: action.totalUsersCount}

			case SET_IS_LOADING:
				return {...state, isLoading: action.isLoading}

			case TOGGLE_FOLLOWING_PROGRESS:
				return {
					...state, 
					followingProgress: action.isLoading === true ? 
						[...state.followingProgress, action.userId] :
						[...state.followingProgress.filter(id => id !== action.userId)]
				}
		
    default:
      return state;
  }
};

type FollowSuccessActionType = {
	type: typeof FOLLOW
	userId: number
}
const followSuccess = (userId: number): FollowSuccessActionType =>  ({
	type : FOLLOW, userId
});

type UnfollowSuccessSuccessActionType = {
	type: typeof UNFOLLOW
	userId: number
}
const unfollowSuccess = (userId: number): UnfollowSuccessSuccessActionType => ({
	type : UNFOLLOW, userId
});

type SetUsersActionType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersActionType => ({
	type : SET_USERS, users
});

type SetCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
	type : SET_CURRENT_PAGE, currentPage
});

type SetTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT
	totalUsersCount: number
}
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
	type : SET_TOTAL_USERS_COUNT, totalUsersCount
});

type SetIsLoadingActionType = {
	type: typeof SET_IS_LOADING
	isLoading: boolean
}
const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ({
	type : SET_IS_LOADING, isLoading
});

type SetFollowingProgressActionType = {
	type: typeof TOGGLE_FOLLOWING_PROGRESS
	isLoading: boolean
	userId: number
}
const setFollowingProgress = (isLoading: boolean, userId: number): SetFollowingProgressActionType => ({
	type : TOGGLE_FOLLOWING_PROGRESS, isLoading, userId
});

export const getUsers = (currentPage: number, pageSize: number) => {
	return async (dispatch: any) => {
		dispatch(setIsLoading(true));
		dispatch(setCurrentPage(currentPage));
		
    const data = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
		dispatch(setIsLoading(false));
	}
}

async function followUnfollowFlow(dispatch: any, apiMethod: any, actionCreator: any, userId: number) {
	dispatch(setFollowingProgress(true, userId));
		const response = await apiMethod(userId);
		if(response.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
	return (dispatch: any) => {
		const apiMethod = usersAPI.follow;
		const actionCreator = followSuccess;
		followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
	}
}
export const unfollow = (userId: number) => {
	return (dispatch: any) => {
		const apiMethod = usersAPI.unfollow;
		const actionCreator = unfollowSuccess;
		followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
	}
}

export default usersReducer;
