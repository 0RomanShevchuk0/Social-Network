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
      <Description profile={props.profile} />
      <MyPosts
				profile={props.profile} 
				posts={props.posts} 
				newPostText={props.newPostText}
				
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
    </div>
  );
};


export default Profile;
