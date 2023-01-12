import styles from "./Profile.module.scss";
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <Description />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
