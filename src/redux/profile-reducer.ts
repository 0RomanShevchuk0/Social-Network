import { profileAPI } from "../API/api"
import { PostType, ProfileType, ContactsType, PhotosType } from './../types/types';

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_PHOTOS = "SET_PHOTOS"
const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"



let initialState = {
  posts: [
		{
			id: 3,
			content: "Time to sleep",
			likesCount: 10,
		},
    {
      id: 2,
      content: "I'm full and happy :)",
      likesCount: 14,
    },
    {
      id: 1,
      content: "I'm starving...",
      likesCount: 17,
    },
  ] as Array<PostType>,
	profile: {
		aboutMe: null,
		contacts:{
			facebook: null,
			github: null,
			website: null,
			youtube: null,
			vk: null,
			twitter: null,
			instagram: null,
			mainLink: null,
		},
		fullName: null,
		lookingForAJob: false,
		lookingForAJobDescription: null ,
		photos: {small: null, large: null},
		userId: null,
	} as ProfileType,
	status: "",
}

type StateType = typeof initialState

let addPostId: number = 4

const profileReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
    case ADD_POST: {
				let newPost = {
					id: addPostId,
          content: action.newPostText,
          likesCount: 0,
        };
				addPostId = addPostId + 1
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

    case UPDATE_PROFILE_SUCCESS: {
			debugger
			return {...state, profile: {...state.profile, ...action.updatedProfile}}
		}

    default:
      return state
  }
};


export default profileReducer

type AddPostActionType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})

type DeletePostActionType = {
	type: typeof DELETE_POST
	postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

type SetUserProfileSuccessActionType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
const setUserProfileSuccess = (profile: ProfileType): SetUserProfileSuccessActionType => ({
	type: SET_USER_PROFILE, profile
})

type SetStatusActionType = {
	type: typeof SET_STATUS
	status: string
}
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

type SetPhotosActionType = {
	type: typeof SET_PHOTOS
	photos: PhotosType
}
const setPhotos = (photos: PhotosType): SetPhotosActionType => ({type: SET_PHOTOS, photos})

type UpdateProfileSuccessActionType = {
	type: typeof UPDATE_PROFILE_SUCCESS
	updatedProfile: ProfileType
}
const updateProfileSuccess = (updatedProfile: ProfileType): UpdateProfileSuccessActionType => ({
	type: UPDATE_PROFILE_SUCCESS, updatedProfile
})


export const setUserProfile = (userId: number) => {
	return async (dispatch: any) => {
		const response = await profileAPI.getProfile(userId)
		dispatch(setUserProfileSuccess(response))
	}
}

export const getUserStatus = (userId: number) => {
	return async (dispatch: any) => {
		const response = await profileAPI.getStatus(userId)
		dispatch(setStatus(response))
	}
}

export const updateUserStatus = (status: string) => {
	return async (dispatch: any) => {
		const response = await profileAPI.updateStatus(status)
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	}
}

export const updateUserPhoto = (image: string) => {
	return async (dispatch: any) => {
		const response = await profileAPI.updateAvatar(image)
		if(response.data.resultCode === 0) {
			dispatch(setPhotos(response.data.data.photos))
		}
	}
}

export const updateProfile = (updatedProfile: ProfileType, setFormikStatus: any) => {
	return async (dispatch: any) => {
		const response = await profileAPI.updateProfile(updatedProfile)
		if(response.data.resultCode === 0) {
			dispatch(updateProfileSuccess(updatedProfile))
		}
		else {
			setFormikStatus({ error: response.data.messages[0] })
		}
		return response.data
	}
}
