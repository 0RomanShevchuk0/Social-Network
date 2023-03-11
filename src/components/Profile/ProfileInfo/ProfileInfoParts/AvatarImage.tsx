import { FC } from "react";
import defaultAvatarImg from "../../../../assets/img/DialogPersone.png";
import { ProfileType } from "../../../../types/types";

import styles from "../ProfileInfo.module.scss";



type PropsType = {
	profile: ProfileType
	isProfileYours: boolean

	toggleIsUploadPhotoVisible: () => void
}
const AvatarImage: FC<PropsType> = (props) => {
	return (
		<div className={styles.avatarImgWrapper}>
			{props.isProfileYours && 
				<div className={styles.changePhoto} onClick={props.toggleIsUploadPhotoVisible} id="changePhoto">Change Photo</div>
			}
			<img
				className={styles.avatarImg}
				src={
					props.profile.photos.small ?
					props.profile.photos.small : 
					defaultAvatarImg	
				}
				alt="AvatarImage"
			/>
		</div>
	);
}


export default AvatarImage