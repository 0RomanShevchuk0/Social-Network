import defaultAvatarImg from "../../../../assets/img/DialogPersone.png";

import styles from "../ProfileInfo.module.scss";


const AvatarImage = (props) => {
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