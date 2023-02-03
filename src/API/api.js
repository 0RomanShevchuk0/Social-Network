import axios from "axios"


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "69dc706f-a4d8-4209-b047-dac8e18eb869"
	}
});

export const usersAPI = {
	async getUsers(pageNumber, pageSize) {
		const response = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
		return response.data;
	},

	async follow(userId) {
		const response = await instance.post(`follow/${userId}`);
		return response.data;
	},
	
	async unfollow(userId) {
		const response = await instance.delete(`follow/${userId}`);
		return response.data;
	},
};
export const authAPI = {
	auth() {
		return instance.get('auth/me');
	}
};
export const profileAPI = {
	async getProfile(userId) {
		const response = await instance.get(`profile/${userId}`);
		return response.data;
	}
};
