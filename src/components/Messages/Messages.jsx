import styles from "./Messages.module.scss";

import Dialogs from "./Dialogs/Dialogs";
import DialogsContent from "./DialogsContent/DialogsContent";


const Messages = (props) => {
  return (
    <div className={styles.messagesWrapper}>
      <Dialogs dialogs={props.dialogs} />
      <DialogsContent 
				messages={props.messages} newMessageText={props.newMessageText} 
				updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage} 
			/>
    </div>
  );
};

export default Messages;
