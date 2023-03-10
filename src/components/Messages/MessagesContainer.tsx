import { compose } from "redux"
import { connect } from "react-redux"
import { addMessage } from "../../redux/messages-reducer"
import { withAuthReducer } from "../../hoc/withAuthReducer"
import Messages from "./Messages"
import { GlobalStateType } from "../../redux/redux-store"
import { DialogType, MessageType } from "../../types/types"
import { FC } from "react"


type MapStatePropsType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
}
type MapDispatchPropsType = { addMessage: () => void }

type PropsType = MapStatePropsType & MapDispatchPropsType


const MessagesContainer: FC<PropsType> = (props) => {
	return <Messages {...props} />
}

const mapStateToProps = (state: GlobalStateType): MapStatePropsType => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}


export default compose<FC>(
	connect(mapStateToProps, { addMessage }),
	withAuthReducer
)(MessagesContainer)
