import { FC } from "react";


type PropsType = {
	message: string
}

const Message: FC<PropsType> = (props) => {
  return (
	<div 
		className="messageItem">
		{props.message}
	</div>);
};

export default Message;
