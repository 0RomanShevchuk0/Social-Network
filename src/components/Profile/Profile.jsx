import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import Description from "./Description/Description";


const Profile = (props) => {
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
