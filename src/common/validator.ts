export function validateNewPost(value: string) {
	let error: string | undefined;
	if(!value) error = "Post can't be empty";
	else if(value.length > 50) error = "Max length 50 symbols"
	return error;
}

export function validateNewMessage(value: string) {
	let error: string | undefined;
	if(!value) error = "Post can't be empty";
	else if(value.length > 50) error = "Max length 50 symbols"
	return error;
}

export function RequiredField(value: string) {
	let error: string | undefined;
	if(!value) error = "Required";
	return error;
}
