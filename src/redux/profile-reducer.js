import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "GET_STATUS";


let initialState = {
  posts: [
    {
      id: "1",
      content: "I'm full and happy :)",
      likesCount: "14",
    },
    {
      id: "2",
      content: "I'm so hungry...",
      likesCount: "17",
    },
  ],
	profile: null,
	status: "",
};

let addPostId = 3;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
				let newPost = {
					id: addPostId,
          content: action.newPostText,
          likesCount: 0,
        };
				addPostId++;
				return {
					...state,
					posts : [newPost, ...state.posts]
					
				}
		}

    case SET_USER_PROFILE: {
			return {...state, profile : action.profile}
		}

    case SET_STATUS: {
			return {...state, status : action.status}
		}

    default:
      return state;
  }
};


export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});


export const setUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
		.then(response => dispatch(setUserProfileSuccess(response)));
	}
}

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
		.then(response => dispatch(setStatus(response)));
	}
}

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
		.then(response => {
			if(response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
	}
}

export default profileReducer;
