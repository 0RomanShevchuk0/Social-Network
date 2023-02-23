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
	me() {
		return instance.get('auth/me');
	},

	async login(email, password, rememberMe) {
		const response = await instance.post('auth/login', {email, password, rememberMe});
		return response.data;
	},

	logout() {
		return instance.delete('auth/login');
	}
};
export const profileAPI = {
	async getProfile(userId) {
		const response = await instance.get(`profile/${userId}`);
		return response.data;
	},

	async getStatus(userId) {
		const response = await instance.get(`profile/status/${userId}`);
		return response.data;
	},

	updateStatus(status) {
		return instance.put('profile/status', {status: status});
	},

	updateAvatar(image) {
		const formData = new FormData();
		formData.append("image", image);
		return instance.put('profile/photo', formData);
	}
};

