import styles from "./Profile.module.scss";
import DescriptionContainer from "./Description/DescriptionContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <DescriptionContainer store={props.store} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};


export default Profile;
