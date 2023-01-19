const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_LOADING = "SET_IS_LOADING";


let initialState = {
	users : [ ],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
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
		
    default:
      return state;
  }
};


export const follow = (userId) =>  ({type : FOLLOW, userId});
export const unfollow = (userId) => ({type : UNFOLLOW, userId});
export const setUsers = (users) => ({type : SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type : SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsLoading = (isLoading) => ({type : SET_IS_LOADING, isLoading});

export default usersReducer;
