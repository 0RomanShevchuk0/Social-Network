import styles from "./Profile.module.scss";

import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";
import Loader from "../../common/Loader/Loader";


const Profile = (props) => {
	if (!props.profile) {
		return(
			<div className={styles.profile}>
				<Loader />
			</div>
		)
	}
  return (
    <div className={styles.profile}>
      <Description profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPosts
				profile={props.profile} 
				posts={props.posts} 
				addPost={props.addPost}
			/>
    </div>
  );
};


export default Profile;
