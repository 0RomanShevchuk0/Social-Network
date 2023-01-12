import styles from "./User.module.scss";


const User = (props) => {
	const onFollow = () => props.follow(props.id);

	const onUnfollow = () => props.unfollow(props.id);

	
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar}>
				<img className={styles.avatarimg} src={props.avatarImg} alt="Avatar" />
			</div>
			<div className={styles.general}>
				<div className={styles.info}>
					<div className={styles.name}>{props.fullName}</div>
					<div className={styles.location}>{props.country}, {props.city}</div>
					<div className={styles.status}>{props.status}</div>
				</div>
				<div className={styles.buttonWrapper}>
					{props.followed ? 
					<button onClick={onUnfollow} className={styles.unfollowButton}>Unfollow</button> : 
					<button onClick={onFollow} className={styles.followButton}>Follow</button>}	
				</div>
			</div>
		</div>
	)
}

export default User;