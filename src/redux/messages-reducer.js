const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: "19",
      name: "Apelsinka",
    },
    {
      id: "76",
      name: "Nikita",
    },
    {
      id: "43",
      name: "Vlad",
    },
  ],
  messages: [
    {
      id: "1",
      message: "Hi",
    },
    {
      id: "2",
      message: "What`s up?",
    },
    {
      id: "3",
      message: "We could go somewhere tonight if u don't mind",
    },
  ],
  newMessageText: "",
};

let addMessageId = 4;

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {			
			if (state.newMessageText !== "") {
				let newMessage = {
					id: addMessageId,
          message: state.newMessageText,
        };
				addMessageId++;
				return {
					...state,
					messages : [...state.messages, newMessage],
					newMessageText : ""
				}
      }
		}

    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
				...state,
				newMessageText : action.newMessageText
			};
		}

    default:
      return state;
  }
};


export const updateNewMessageText = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText});
export const addMessage = () => ({type: ADD_MESSAGE});

export default messageReducer;
