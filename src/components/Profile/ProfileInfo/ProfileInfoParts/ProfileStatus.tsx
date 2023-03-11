import { FC, useEffect } from "react";
import { useState } from "react";

import checkMark from "../../../../assets/img/checkMark.png";
import styles from "../ProfileInfo.module.scss";


type PropsType = {
	status: string
	isProfileYours: boolean

	updateUserStatus: (newStatus: string) => void
}

const ProfileStatus: FC<PropsType> = (props) => {
	let [status, setStatus] = useState(props.status);
	let [statusEditMode, setStatusEditMode] = useState(false);

	useEffect(() => {
		if(status !== props.status) setStatus(props.status);
	}, [props.status, statusEditMode]);

	function handleSubmit() {
		props.updateUserStatus(status);
		setStatusEditMode(false);
		
	}

	function onStatusTextChange(e: any) {
		setStatus(e.target.value);
	}

	function removeStatusEditMode() {
		setTimeout(() => {
			setStatusEditMode(false);
			setStatus(props.status);
		}, 200)
	}

	function handleKeyDown(event: any) {
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
						className={styles.statusInput}
						type="text" 
						autoFocus={true} 
						maxLength={80}
					/>
					<button 
						className={styles.confirmStatusChangeButton}
						onClick={handleSubmit}
					>
						<img src={checkMark} alt="confirm" />
					</button>
				</div> :
				<div 
					onClick={props.isProfileYours ? () => setStatusEditMode(true) : undefined} 
					style={{cursor: props.isProfileYours ? "pointer" : "default"}}
				>
					{props.status ? props.status : 'status'}
				</div>
			}
		</div>
  );
};


export default ProfileStatus;
