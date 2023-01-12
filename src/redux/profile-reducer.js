const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


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
			return {
				...state,
				newPostText : action.newPostText
			}
		}

    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newText,
  };
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export default profileReducer;
