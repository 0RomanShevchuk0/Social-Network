import defaultAvatar from "./../../../../assets/img/DialogPersone.png";
import like from "./../../../../assets/img/like.png";
import trashCan from "./../../../../assets/img/deletePost.png";

import styles from "./Post.module.scss";


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

			<div className={styles.manage}>
				<button onClick={() => props.deletePost(props.id)} className={styles.deletePostButton} >
					<img src={trashCan} alt="deletePost" />
				</button>
				<div className={styles.reactions}>
					<img className={styles.like} src={like} alt="" />{" "}
					<span className={styles.likesCount}> {props.likesCount}</span>
				</div>
			</div>
    </div>
  );
};

export default Post;
