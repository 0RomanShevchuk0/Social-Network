import { usersAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_LOADING = "SET_IS_LOADING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";


let initialState = {
	users : [ ],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
	followingProgress: [],
};


const usersReducer = (state = initialState, action) => {
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


export const followSuccess = (userId) =>  ({type : FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type : UNFOLLOW, userId});
export const setUsers = (users) => ({type : SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type : SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsLoading = (isLoading) => ({type : SET_IS_LOADING, isLoading});
export const setFollowingProgress = (isLoading, userId) => ({type : TOGGLE_FOLLOWING_PROGRESS, isLoading, userId});

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(setIsLoading(true));
		dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(setIsLoading(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(setFollowingProgress(true, userId));
		usersAPI.follow(userId)
		.then(() => {
			dispatch(followSuccess(userId));
			dispatch(setFollowingProgress(false, userId));
		})
	}
}
export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(setFollowingProgress(true, userId));
		usersAPI.unfollow(userId)
		.then(() => {
			dispatch(unfollowSuccess(userId));
			dispatch(setFollowingProgress(false, userId));
		})
	}
}

export default usersReducer;
