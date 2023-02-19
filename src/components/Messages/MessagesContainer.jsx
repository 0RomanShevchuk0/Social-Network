import { compose } from "redux";
import { connect } from "react-redux";

import { addMessage } from "../../redux/messages-reducer";
import { withAuthReducer } from "../../hoc/withAuthReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
	return <Messages {...props} />
}

const mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
		newMessageText: state.messagesPage.newMessageText
	}
}


export default  compose(
	connect(mapStateToProps, { addMessage }),
	withAuthReducer
)(MessagesContainer);
