import User from "./User/User";
import Loader from "../../common/Loader/Loader";
import Pagination from "../../common/Pagination/Pagination";

import styles from "./Users.module.scss";


const Users = (props) => {
  let usersElements = props.users.map((user) => {
    return (
      <User
        key={user.id}
				id={user.id}
				avatarImg={user.photos.large}
        name={user.name}
        status={user.status}
        country={"user.location.country"}
        city={"user.location.city"}
				followed={user.followed}

				followingProgress={props.followingProgress}
				
				follow={props.follow}
				unfollow={props.unfollow}
      />
    );
  });

  return(
		<div className={styles.wrapper}>
			<h1>Users</h1>
			{props.isLoading ? <Loader /> : null}
			{usersElements}
			<Pagination
				totalCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChange={props.onPageChange}
				portionSize={10}
			/>
		</div>
	);
};

export default Users;
