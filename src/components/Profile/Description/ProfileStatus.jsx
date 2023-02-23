import { useEffect } from "react";
import { useState } from "react";


const ProfileStatus = (props) => {
	let [status, setStatus] = useState(props.status);
	let [statusEditMode, setStatusEditMode] = useState(false);

	useEffect(() => {
		if(status !== props.status) setStatus(props.status);
	}, [props.status]);

	function onBlur() {
		props.updateUserStatus(status);
		setStatusEditMode(false);
	}

	function onStatusTextChange(e) {
		setStatus(e.target.value);
	}

  return (
		<div className="">
			{ statusEditMode ? 
				<div>
					<input onChange={(e) => onStatusTextChange(e)} type="text" value={status} autoFocus={true} onBlur={() => onBlur()} />
				</div> :
				<div>
					<span onDoubleClick={() => setStatusEditMode(true)} >{props.status ? props.status : 'status'}</span>
				</div> 
			}
		</div>
  );
};


export default ProfileStatus;
