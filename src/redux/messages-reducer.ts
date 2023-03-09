const SEND_MESSAGE = "SEND-MESSAGE"

type DialogType = {
	id: number,
	name: string,
}
type MessageType = {
	id: number,
	message: string,
}

let initialState = {
  dialogs: [
    {
      id: 19,
      name: "Mish",
    },
    {
      id: 76,
      name: "Nikita",
    },
    {
      id: 43,
      name: "Vlad",
    },
  ] as Array<DialogType>,
  messages: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "What`s up?",
    },
    {
      id: 3,
      message: "Bla-bla",
    },
  ] as Array<MessageType>,
}

type StateType = typeof initialState

let addMessageId = 4

const messageReducer = (state = initialState, action: any): StateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
				let newMessage = {
					id: addMessageId,
          message: action.newMessageText,
        };
				addMessageId = addMessageId + 1
				return {
					...state,
					messages : [...state.messages, newMessage]
				}
		}

    default:
      return state
  }
};

type SendMessageActionType = {
	type: typeof SEND_MESSAGE,
	newMessageText: string,
}

export const addMessage = (newMessageText: string): SendMessageActionType => ({
	type: SEND_MESSAGE, newMessageText
})

export default messageReducer
