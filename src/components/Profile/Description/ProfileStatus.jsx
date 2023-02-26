import { useEffect } from "react";
import { useState } from "react";

import checkMark from "../../../assets/img/checkMark.png";

import styles from "./Description.module.scss";


const ProfileStatus = (props) => {
	let [status, setStatus] = useState(props.status);
	let [statusEditMode, setStatusEditMode] = useState(false);

	useEffect(() => {
		if(status !== props.status) setStatus(props.status);
	}, [props.status]);

	function handleSubmit() {
		props.updateUserStatus(status);
		setStatusEditMode(false);
	}

	function onStatusTextChange(e) {
		setStatus(e.target.value);
	}

	function removeStatusEditMode() {
		setTimeout(() => {
			setStatusEditMode(false);
			setStatus(props.status);
		}, 100)
	}

	function handleKeyDown(event) {
    if (event.key === 'Enter') {
			handleSubmit();
    }
  };

  return (
		<div>
			{ statusEditMode ? 
				<div className={styles.editStatus}>
					<input 
						onChange={onStatusTextChange} 
						onBlur={removeStatusEditMode}
						onKeyDown={handleKeyDown}
						value={status} 
						type="text" 
						autoFocus={true} 
					/>
					<button 
						className={styles.confirmStatusChangeButton}
						onClick={handleSubmit}
					>
						<img src={checkMark} alt="confirm" />
					</button>
				</div> :
				<div>
					<div onClick={() => setStatusEditMode(true)} >
						{props.status ? props.status : 'status'}
					</div>
				</div> 
			}
		</div>
  );
};


export default ProfileStatus;
