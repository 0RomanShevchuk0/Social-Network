import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTOS = "SET_PHOTOS";


let initialState = {
  posts: [
    {
      id: "1",
      content: "I'm full and happy :)",
      likesCount: "14",
    },
    {
      id: "2",
      content: "I'm starving...",
      likesCount: "17",
    },
  ],
	profile: null,
	status: "",
};

let addPostId = 3;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
				let newPost = {
					id: addPostId,
          content: action.newPostText,
          likesCount: 0,
        };
				addPostId++;
				return {
					...state,
					posts: [newPost, ...state.posts]
				}
		}

		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.postId)
			}
		}

    case SET_USER_PROFILE: {
			return {...state, profile : action.profile}
		}

    case SET_STATUS: {
			return {...state, status : action.status}
		}

    case SET_PHOTOS: {
			return {...state, profile: {...state.profile, photos: action.photos}}
		}

    default:
      return state;
  }
};


export default profileReducer;

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const setPhotos = (photos) => ({type: SET_PHOTOS, photos});


export const setUserProfile = (userId) => {
	return async (dispatch) => {
		const response = await profileAPI.getProfile(userId);
		dispatch(setUserProfileSuccess(response));
	}
}

export const getUserStatus = (userId) => {
	return async (dispatch) => {
		const response = await profileAPI.getStatus(userId);
		dispatch(setStatus(response));
	}
}

export const updateUserStatus = (status) => {
	return async (dispatch) => {
		const response = await profileAPI.updateStatus(status);
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	}
}

export const updateUserPhoto = (image) => {
	return async (dispatch) => {
		const response = await profileAPI.updateAvatar(image);
		if(response.data.resultCode === 0) {
			dispatch(setPhotos(response.data.data.photos));
		}
	}
}
