import { useState, useEffect, FC } from "react";

import UploadImage from "./ProfileInfoParts/UploadImage";
import ProfileEditForm from "./ProfileInfoParts/ProfileEditForm";
import UserInfo from "./ProfileInfoParts/UserInfo";
import Contact from "./ProfileInfoParts/Contact";

import styles from "./ProfileInfo.module.scss";

import defaultBackgroundImg from "./../../../assets/img/panda.jpg";

import facebookIcon from "../../../assets/img/contacts/facebook-icon.png";
import gitHubIcon from "../../../assets/img/contacts/GitHub-icon.png";
import instagramIcon from "../../../assets/img/contacts/instagram-icon.png";
import linkedInIcon from "../../../assets/img/contacts/linkedin-icon.png";
import telegramIcon from "../../../assets/img/contacts/telegram-icon.png";
import twitterIcon from "../../../assets/img/contacts/twitter-icon.png";
import webSiteIcon from "../../../assets/img/contacts/website-icon.png";
import youTubeIcon from "../../../assets/img/contacts/youtube-icon.png";
import AvatarImage from "./ProfileInfoParts/AvatarImage";
import { ProfileType } from "../../../types/types";


type PropsType = {
	profile: ProfileType
	isProfileEditMode: boolean
	isProfileYours: boolean
	status: string

	store: any

	setIsProfileEditMode: (value: boolean) => void
	updateUserStatus: (newStatus: string) => void
	updateUserPhoto: (photo: string) => void
}

const ProfileInfo: FC<PropsType> = ({profile, ...props}) => {
	
	const [isUploadPhotoVisible, setIsUploadPhotoVisible] = useState(false);
	const [uploadPhotoClasses, setUploadPhotoClasses] = useState([styles.uploadPhoto, styles.hidden]);

	

	useEffect(() => {
		function hideUploadPhoto(e: any) {
			if(isUploadPhotoVisible && 
				e.target.closest('div').id !== "uploadPhoto" &&
				e.target.closest('div').id !== "changePhoto"
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

	const contactsArray = [
		{link: profile.contacts.vk, icon: telegramIcon},
		{link: profile.contacts.mainLink, icon: linkedInIcon},
		{link: profile.contacts.github, icon: gitHubIcon},
		{link: profile.contacts.website, icon: webSiteIcon},
		{link: profile.contacts.youtube, icon: youTubeIcon},
		{link: profile.contacts.instagram, icon: instagramIcon},
		{link: profile.contacts.facebook, icon: facebookIcon},
		{link: profile.contacts.twitter, icon: twitterIcon},
	];
	const contacts = contactsArray.map(item => {
		if(item.link) {
			return <Contact link={item.link} icon={item.icon} key={item.icon} />;
		}
		return null
	});

  return (
    <div className={styles.description}>
			<UploadImage classes={uploadPhotoClasses.join(' ')} updateUserPhoto={props.updateUserPhoto}
				setUploadPhotoClasses={setUploadPhotoClasses} setIsUploadPhotoVisible={setIsUploadPhotoVisible}
			/>
			{props.isProfileEditMode &&
				<ProfileEditForm 
					profile={profile} {...props} store={props.store} 
					setIsProfileEditMode={props.setIsProfileEditMode} 
				/>
			}

      <div className={styles.main}>
        <div className={styles.backgroundImgWrapper}>
          <img
            className={styles.backgroundImg}
            src={
								profile.photos.large
                ? profile.photos.large
                : defaultBackgroundImg
            }
            alt="backgroundImage"
          />
        </div>
        <div className={styles.content}>
					<AvatarImage profile={profile} isProfileYours={props.isProfileYours} toggleIsUploadPhotoVisible={toggleIsUploadPhotoVisible} />
					<UserInfo
						profile={profile} {...props} contacts={contacts}
						setIsProfileEditMode={props.setIsProfileEditMode} 
					/>
        </div>
      </div>
    </div>
  );
};


export default ProfileInfo;
