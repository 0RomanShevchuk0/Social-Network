import { useState, useEffect } from "react";

import ProfileStatus from "./ProfileStatus";
import UploadImage from "./UploadImage";

import styles from "./Description.module.scss";

import defaultBackgroundImg from "./../../../assets/img/panda.jpg";
import defaultAvatarImg from "../../../assets/img/DialogPersone.png";


const Description = (props) => {
	const [isUploadPhotoVisible, setIsUploadPhotoVisible] = useState(false);
	const [uploadPhotoClasses, setUploadPhotoClasses] = useState([styles.uploadPhoto, styles.hidden]);

	useEffect(() => {
		function hideUploadPhoto(e) {
			if(isUploadPhotoVisible && 
				e.target.closest('div').id !== "uploadPhoto" &&
				(!e.target.closest('img') ||
				e.target.closest('img').alt !== "AvatarImage")
			) {
				setIsUploadPhotoVisible(false);
				setUploadPhotoClasses([styles.uploadPhoto, styles.hidden]);
			}
		}
		window.addEventListener('click', hideUploadPhoto);

		return () => window.removeEventListener('click', hideUploadPhoto);
	}, [isUploadPhotoVisible]);
	
	function toggleIsUploadPhotoVisible() {
		if(!isUploadPhotoVisible) {
			setIsUploadPhotoVisible(true);
			setUploadPhotoClasses([styles.uploadPhoto]);
		}
	}

  return (
    <div className={styles.description}>
			<UploadImage classes={uploadPhotoClasses.join(' ')} updateUserPhoto={props.updateUserPhoto}
				setUploadPhotoClasses={setUploadPhotoClasses} setIsUploadPhotoVisible={setIsUploadPhotoVisible}
			/>
      <div className={styles.main}>
        <div className={styles.backgroundImgWrapper}>
          <img
            className={styles.backgroundImg}
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : defaultBackgroundImg
            }
            alt="backgroundImage"
          />
        </div>
        <div className={styles.content}>
				<div className={styles.avatarImgWrapper}>
					<img
						onClick={toggleIsUploadPhotoVisible}
						className={styles.avatarImg}
						src={
							props.profile.photos.small ?
							props.profile.photos.small : 
							defaultAvatarImg	
						}
						alt="AvatarImage"
					/>
				</div>
          <div className={styles.userInfo}>
            <div className={styles.fullName}>{props.profile.fullName}</div>
            <div className={styles.about}>
							<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Description;
