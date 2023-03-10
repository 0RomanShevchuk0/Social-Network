import { GlobalStateType } from './redux-store';
import { createSelector } from '@reduxjs/toolkit'


function getUsers(state: GlobalStateType) {
	return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users) => {
	return users.filter( u => true);
})

export function getTotalUsersCount(state: GlobalStateType) {
	return state.usersPage.totalUsersCount;
}

export function getPageSize(state: GlobalStateType) {
	return state.usersPage.pageSize;
}

export function getCurrentPage(state: GlobalStateType) {
	return state.usersPage.currentPage;
}

export function getIsLoading(state: GlobalStateType) {
	return state.usersPage.isLoading;
}

export function getFollowingProgress(state: GlobalStateType) {
	return state.usersPage.followingProgress;
}