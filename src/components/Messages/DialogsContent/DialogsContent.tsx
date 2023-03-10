import { Field, Form, Formik } from "formik";

import Message from "./Message/Message";

import styles from "./DialogsContent.module.scss";
import sendButton from "./../../../assets/img/sendButton.png";
import { validateNewMessage } from "../../../common/validator";
import { FC } from "react";
import { MessageType } from "../../../types/types";


type PropsType = {
	messages: Array<MessageType>
	addMessage: (newMessage: string) => void
}

const DialogsContent: FC<PropsType> = (props) => {

	let dialogsContentItems = props.messages.map((item) => (
		<Message message={item.message} key={item.id} />
	));

  return (
		<div className={styles.DialogsContent}>
			<div className={styles.messages}>
				{dialogsContentItems}
			</div>
				<Formik 
					initialValues={{newMessage: ""}}
					onSubmit={(values, { resetForm }) => {
						props.addMessage(values.newMessage);
						resetForm();
					}}
				>
					{({ errors, touched }) => (
					<Form className={styles.sendingItems}>
						{errors.newMessage && touched.newMessage && <div className={styles.error}>{errors.newMessage}</div>}
						<Field 
							as="textarea"
							name="newMessage"
							validate={validateNewMessage}
							placeholder="Your message..."
							className={styles.messageInput}
						/>
						<button type="submit" className={styles.sendButton}><img src={sendButton} alt="sendButton" /></button>
					</Form>)}
				</Formik>
		</div>
  );
};

export default DialogsContent;
