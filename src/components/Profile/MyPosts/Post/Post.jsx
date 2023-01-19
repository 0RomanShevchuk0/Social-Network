import styles from "./Post.module.scss";

import defaultAvatar from "./../../../../assets/img/DialogPersone.png";
import like from "./../../../../assets/img/like.png";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.mainBody}>

        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={props.profile.photos.small ? props.profile.photos.small : defaultAvatar} alt="Avatar" />
        </div>

        <div className={styles.content}>
					{props.content}
				</div>
      </div>

      <div className={styles.reactions}>
        <img className={styles.like} src={like} alt="" />{" "}
        <span className={styles.likesCount}> {props.likesCount}</span>
      </div>
			
    </div>
  );
};

export default Post;
