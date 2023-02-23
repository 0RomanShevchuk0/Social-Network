import { connect } from "react-redux";
import { useEffect } from "react";

import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingProgress, 
	getIsLoading, getPageSize, getTotalUsersCount, 
	getUsersSelector } from "../../redux/users-selectors";
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
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingProgress: getFollowingProgress(state),
  };
};


export default connect(mapStateToProps, { getUsers, follow, unfollow })(UsersContainer);
