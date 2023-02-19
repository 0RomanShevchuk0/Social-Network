export function validateNewPost(value) {
	let error;
	if(!value) error = "Post can't be empty";
	else if(value.length > 50) error = "Max length 50 symbols"
	return error;
}

export function validateNewMessage(value) {
	let error;
	if(!value) error = "Post can't be empty";
	else if(value.length > 50) error = "Max length 50 symbols"
	return error;
}

export function validateLogin(value) {
	let error;
	if(!value) error = "Required";
	return error;
}

export function validatePassword(value) {
	let error;
	if(!value) error = "Required";
	return error;
}
