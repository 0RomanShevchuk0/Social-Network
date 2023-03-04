import { useState } from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Loader from "../../common/Loader/Loader";

import styles from "./Profile.module.scss";


const Profile = (props) => {

	const [isProfileEditMode, setIsProfileEditMode] = useState(false);
	
	if (!props.profile) {
		return(
			<div className={styles.profile}>
				<Loader />
			</div>
		)
	}
	
  return (
    <div className={styles.profile} style={isProfileEditMode ? {overflow: "hidden"} : null}>
			{isProfileEditMode && <div style={{position:"absolute", height:"100vh", width:"100%", background:"rgba(0,0,0,0.5)", zIndex:"2", boxSizing:"border-box", top:0, left:0}}></div>}
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
