const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
	users : [
		{
			id : 1,
			avatarImg : "https://images.pexels.com/photos/6948652/pexels-photo-6948652.jpeg?cs=srgb&dl=pexels-jc-siller-6948652.jpg&fm=jpg",
			fullName : "Daria Melnik",
			status : "Too good to be real",
			location : {city : "Ivano-Frankivsk", country : "Ukraine"},
			followed : true
		},

		{
			id : 2,
			avatarImg : "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=",
			fullName : "Alex Shvetz",
			status : "I love food so much",
			location : {city : "Kyiv", country : "Ukraine"},
			followed : true
		},

		{
			id : 3,
			avatarImg : "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-1200-80.jpg",
			fullName : "Maria Honcharenko",
			status : "I'm so pretty",
			location : {city : "Crimea", country : "Ukraine"},
			followed : false
		},
	]
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
			return {...state, users : [...state.users, ...action.users]}

    default:
      return state;
  }
};


export const followAC = (userId) =>  ({type : FOLLOW, userId});
export const unfollowAC = (userId) => ({type : UNFOLLOW, userId});
export const setUsersAC = (users) => ({type : SET_USERS, users});

export default usersReducer;
