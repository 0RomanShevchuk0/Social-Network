import styles from "./User.module.scss";
import defaultPhoto from "./../../../assets/img/DialogPersone.png";
import { NavLink } from "react-router-dom";
import { FC } from "react";


type PropsType = {
	id: number
	avatarImg: string | null
	name: string
	status: string
	followed: boolean
	followingProgress: Array<number>
	
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

const User: FC<PropsType> = (props) => {
  const onFollow = () => props.follow(props.id);
  const onUnfollow = () => props.unfollow(props.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <NavLink to={`/profile/${props.id}`}>
          <img
            className={styles.avatarimg}
            src={props.avatarImg ? props.avatarImg : defaultPhoto}
						title="View profile"
            alt="Avatar"
          />
        </NavLink>
      </div>
      <div className={styles.general}>
        <div className={styles.info}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.status}>{props.status ? props.status : "status"}</div>
        </div>
        <div className={styles.buttonWrapper}>
          {props.followed ?
					(<button 
							onClick={onUnfollow} 
							className={styles.unfollowButton} 
							disabled={props.followingProgress.some((id: number) => id === props.id)}
						>
              Unfollow
            </button>) 
            : 
						(<button 
							onClick={onFollow} 
							className={styles.followButton} 
							disabled={props.followingProgress.some((id: number) => id === props.id)}
						>
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
