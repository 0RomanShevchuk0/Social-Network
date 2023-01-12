import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/messages-reducer";
import DialogsContent from "./DialogsContent";


const mapStateToProps = (state) => {
	return {
		messages : state.messagesPage.messages,
		newMessageText : state.messagesPage.newMessageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage : () => dispatch(addMessageActionCreator()),
		updateNewMessageText : (newText) => dispatch(updateNewMessageTextActionCreator(newText))
	}
}

const DialogsContentContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsContent);

export default DialogsContentContainer;
