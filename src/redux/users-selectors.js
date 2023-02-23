import { createSelector } from '@reduxjs/toolkit'


function getUsers(state) {
	return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users) => {
	return users.filter( u => true);
})

export function getTotalUsersCount(state) {
	return state.usersPage.totalUsersCount;
}

export function getPageSize(state) {
	return state.usersPage.pageSize;
}

export function getCurrentPage(state) {
	return state.usersPage.currentPage;
}

export function getIsLoading(state) {
	return state.usersPage.isLoading;
}

export function getFollowingProgress(state) {
	return state.usersPage.followingProgress;
}