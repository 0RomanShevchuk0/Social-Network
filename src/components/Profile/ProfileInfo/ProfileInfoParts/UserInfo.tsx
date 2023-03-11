import ProfileStatus from "./ProfileStatus";

import styles from "../ProfileInfo.module.scss";
import editIcon from "../../../../assets/img/edit-icon.png";
import { FC } from "react";
import { ProfileType } from "../../../../types/types";


type PropsType = {
	profile: ProfileType
	contacts: any
	isProfileYours: boolean
	status: string

	setIsProfileEditMode: (value: boolean) => void
	updateUserStatus: (newStatus: string) => void
}

const UserInfo: FC<PropsType> = (props) => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.upperBlock}>
				<div className={styles.fullName}>
					{props.profile.fullName}
				</div>
				{ props.isProfileYours &&
					<button
						onClick={() => props.setIsProfileEditMode(true)}
						className={styles.editProfileButton}
						title={"Edit profile"}
					>
					<img src={editIcon} alt="Edit" />
					</button>
				}
			</div>

			<div className={styles.statusContainer} title={props.isProfileYours ? "Change status" : undefined}>
				<ProfileStatus 
					status={props.status} 
					updateUserStatus={props.updateUserStatus} 
					isProfileYours={props.isProfileYours} 
				/>
			</div>

			<div className={styles.contacts}>
				{props.contacts}
			</div>
		</div>
	);
}

export default UserInfo;