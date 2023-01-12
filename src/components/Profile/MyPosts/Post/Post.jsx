import styles from "./Post.module.scss";

import avatar from "./../../../../assets/img/panda.jpg";
import like from "./../../../../assets/img/like.png";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.mainBody}>

        <div className={styles.avatarWrapper}>
          <img className={styles.avatar} src={avatar} alt="Avatar" />
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
