import { connect } from "react-redux";
import { FC, useEffect } from "react";

import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingProgress, 
	getIsLoading, getPageSize, getTotalUsersCount, 
	getUsersSelector } from "../../redux/users-selectors";
import Users from "./Users";
import { UserType } from "../../types/types";
import { GlobalStateType } from "../../redux/redux-store";


type MapStatePropsType = {
	users: Array<UserType>
	totalUsersCount: number
	pageSize: number
	currentPage: number
	isLoading: boolean
	followingProgress: Array<number>
}
type MapDispatchPropsType = {
	getUsers: (currentPage: number, pageSize: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: FC<PropsType> = (props) => {
  useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChange = (pageNumber: number) => props.getUsers(pageNumber, props.pageSize);
	const follow = (userId: number) => props.follow(userId);
	const unfollow = (userId: number) => props.unfollow(userId);

  return (
    <Users {...props} onPageChange={onPageChange} follow={follow} unfollow={unfollow} />
  );
};

const mapStateToProps = (state: GlobalStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingProgress: getFollowingProgress(state),
  };
};


export default connect<MapStatePropsType, MapDispatchPropsType, null, GlobalStateType>(
	mapStateToProps, { getUsers, follow, unfollow })(UsersContainer);
