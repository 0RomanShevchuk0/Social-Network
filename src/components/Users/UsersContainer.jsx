import { connect } from "react-redux";
import { useEffect } from "react";

import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import Users from "./Users";


const UsersContainer = (props) => {
  useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChange = pageNumber => props.getUsers(pageNumber, props.pageSize);
	const follow = userId => props.follow(userId);
	const unfollow = userId => props.unfollow(userId);

  return (
    <Users {...props} onPageChange={onPageChange} follow={follow} unfollow={unfollow} />
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(mapStateToProps, { getUsers, follow, unfollow })(UsersContainer);
