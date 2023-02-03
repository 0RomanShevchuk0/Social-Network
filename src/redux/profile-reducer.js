import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


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
  newPostText: "",
	profile: null,
};

let addPostId = 3;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{			
      if (state.newPostText !== "") {
				let newPost = {
					id: addPostId,
          content: state.newPostText,
          likesCount: 0,
        };
				addPostId++;
				return {
					...state,
					posts : [newPost, ...state.posts],
					newPostText : ""
				}
      }
		}
			
    case UPDATE_NEW_POST_TEXT: {
			return {...state, newPostText : action.newPostText}
		}

    case SET_USER_PROFILE: {
			return {...state, profile : action.profile}
		}

    default:
      return state;
  }
};

export const updateNewPostText = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const addPost = () => ({type: ADD_POST});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
		.then(response => dispatch(setUserProfileSuccess(response)));
	}
}

export default profileReducer;
