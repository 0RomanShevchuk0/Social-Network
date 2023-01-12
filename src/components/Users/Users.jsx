import styles from "./Users.module.scss";

import User from "./User/User";


const Users = (props) => {
  let usersElements = props.users.map((user) => {
    return (
      <User
        key={user.id}
				id={user.id}
				avatarImg={user.avatarImg}
        fullName={user.fullName}
        status={user.status}
        country={user.location.country}
        city={user.location.city}
				followed={user.followed}
				
				follow={props.follow}
				unfollow={props.unfollow}
      />
    );
  });

  return(
		<div className={styles.wrapper}>
			<h1>Users</h1>
			{usersElements}
		</div>
	);
	

};

export default Users;
