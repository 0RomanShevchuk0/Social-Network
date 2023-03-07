const ADD_MESSAGE = "ADD-MESSAGE";

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
      message: "Bla-bla",
    },
  ]
};

let addMessageId = 4;

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
				let newMessage = {
					id: addMessageId,
          message: action.newMessageText,
        };
				addMessageId++;
				return {
					...state,
					messages : [...state.messages, newMessage]
				}
		}

    default:
      return state;
  }
};


export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default messageReducer;
