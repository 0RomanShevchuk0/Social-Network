import { authAPI, profileAPI } from "../API/api";

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO';


let initialState = {
	login: null,
	id: null,
	email: null,
	photoURL: null,
	isAuth: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
		case SET_AUTH_USER_INFO:
			return { 
				...state, 
				...action.data
			}

    default:
      return state;
  }
};


const setAuthUserData = (login, id, email, isAuth, photoURL) => ({ type: SET_AUTH_USER_INFO, data: {login, id, email, isAuth, photoURL} });

export const me = () => {
	return (dispatch) => {
		authAPI.auth().then((authResponse) => {
			if(authResponse.data.resultCode === 0) {
				const { login, id, email } = authResponse.data.data;

				profileAPI.getProfile(id)
				.then((userData) => {
					const userPhoto = userData.photos.small ? userData.photos.small : null;
					dispatch(setAuthUserData(login, id, email, true, userPhoto));
				});
			}
		});
	}
}

export const login = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe).then(response => {
			if(response.resultCode === 0) {
				dispatch(setAuthUserData());
			}
		});
	}
}

export const logout = () => {
	return (dispatch) => {
		authAPI.logout().then(response => {
			if(response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false, null));
			}
		});
	}
}


export default authReducer;
