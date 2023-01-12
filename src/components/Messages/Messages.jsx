import styles from "./Messages.module.scss";

import DialogsContainer from "./Dialogs/DialogsContainer";
import DialogsContentContainer from "./DialogsContent/DialogsContentContainer";


const Messages = (props) => {
  return (
    <div className={styles.messagesWrapper}>
      <DialogsContainer store={props.store} />
      <DialogsContentContainer store={props.store} />
    </div>
  );
};

export default Messages;
