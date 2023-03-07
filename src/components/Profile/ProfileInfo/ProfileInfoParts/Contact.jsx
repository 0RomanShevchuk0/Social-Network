const Contact = (props) => {
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