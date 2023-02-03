import { connect } from "react-redux";
import { addMessage, updateNewMessageText } from "../../../redux/messages-reducer";
import DialogsContent from "./DialogsContent";


const mapStateToProps = (state) => {
	return {
		messages : state.messagesPage.messages,
		newMessageText : state.messagesPage.newMessageText
	}
}


export default  connect(mapStateToProps, { addMessage, updateNewMessageText })(DialogsContent);
