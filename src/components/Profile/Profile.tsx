import { FC, useState } from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Loader from "../../common/Loader/Loader";

import styles from "./Profile.module.scss";
import { PostType, ProfileType } from "../../types/types";


type PropsType = {
	profile: ProfileType
	status: string
	isProfileYours: boolean
	posts: Array<PostType>

	store: any

	updateUserPhoto: (image: string) => void
	updateUserStatus: (newStatus: string) => void
	addPost: (newPostText: string) => void
	deletePost: (postId: number) => void
}

const Profile: FC<PropsType> = (props) => {

	const [isProfileEditMode, setIsProfileEditMode] = useState(false);
	
	if (!props.profile.userId) {
		return(
			<div className={styles.profile}>
				<Loader />
			</div>
		)
	}
	
  return (
    <div className={styles.profile} style={isProfileEditMode ? {overflow: "hidden"} : undefined}>
			{isProfileEditMode && <div className={styles.overlay} ></div>}
      <ProfileInfo 
				profile={props.profile} updateUserPhoto={props.updateUserPhoto}
				status={props.status} updateUserStatus={props.updateUserStatus} 
				isProfileYours={props.isProfileYours}
				isProfileEditMode={isProfileEditMode}
				setIsProfileEditMode={setIsProfileEditMode}
				store={props.store}
			/>
      <MyPosts
				profile={props.profile} 
				posts={props.posts} 
				addPost={props.addPost}
				deletePost={props.deletePost}
			/>
			
    </div>
  );
};


export default Profile;
