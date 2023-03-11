import { FC } from "react";

type PropsType = {
	link: string
	icon: string
}

const Contact: FC<PropsType> = (props) => {
	return (
		<div>
			<a 
				href={props.link} 
				target="_blank" 
				rel="noreferrer"
			>
				<img src={props.icon} alt="contact" />
			</a>
		</div>
	);
}

export default Contact;