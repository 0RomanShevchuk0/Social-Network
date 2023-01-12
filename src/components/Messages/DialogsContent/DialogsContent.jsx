import styles from "./DialogsContent.module.scss";
import sendButton from "./../../../assets/img/sendButton.png";

import Message from "./Message/Message";

const DialogsContent = (props) => {

	let dialogsContentItems = props.messages.map((item) => (
		<Message message={item.message} key={item.id} />
	));

	const onAddMessage = () => {
		props.addMessage();
	}

	const onMessageTextChange = (e) => {
		let newText = e.target.value;
		props.updateNewMessageText(newText);
	}


  return (
    <div className={styles.DialogsContent}>
      <div className={styles.messages}>
				{dialogsContentItems}
			</div>
			<div className={styles.sendingItems}>
				<textarea 
					placeholder="Your message..."
					className={styles.messageInput}
					onChange={onMessageTextChange}
					value={props.newMessageText}
				/>
				<img onClick={onAddMessage} className={styles.sendButton} src={sendButton} alt="sendButton"/>
			</div>
    </div>
  );
};

export default DialogsContent;
