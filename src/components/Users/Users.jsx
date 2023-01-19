import styles from "./Users.module.scss";

import User from "./User/User";
import Loader from "../../common/Loader/Loader";


const Users = (props) => {
	
	let pages = [];
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	for(let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	let pagesVision = [];
	props.currentPage < 6 ?
		pagesVision = pages.slice(0, 10) :
		pagesVision = pages.slice(props.currentPage - 6 ,props.currentPage + 5);
	
	let paggination = pagesVision.map(pageNumber =>
		<span key={pageNumber}
			className={props.currentPage === pageNumber ?
				[styles.paggination, styles.currentPage].join(" ") : styles.paggination}
			onClick={() => props.onPageChange(pageNumber)}>
			{pageNumber}
		</span>);

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
				
				follow={props.follow}
				unfollow={props.unfollow}
      />
    );
  });

  return(
		<div className={styles.wrapper}>
			<h1>Users</h1>
			{props.isLoading === true ? <Loader /> : null}
			{usersElements}
			<div className={styles.pagginationContainer}>
				{paggination}
			</div>
		</div>
	);
};

export default Users;
