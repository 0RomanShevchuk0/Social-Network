import styles from "./Messages.module.scss";

import Dialogs from "./Dialogs/Dialogs";
import DialogsContent from "./DialogsContent/DialogsContent";
import { DialogType, MessageType } from "../../types/types";
import { FC } from "react";

type PropsType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	addMessage: () => void
}

const Messages: FC<PropsType> = (props) => {
  return (
    <div className={styles.messagesWrapper}>
      <Dialogs dialogs={props.dialogs} />
      <DialogsContent messages={props.messages} addMessage={props.addMessage} />
    </div>
  );
};

export default Messages;
