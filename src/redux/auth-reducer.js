import { authAPI, profileAPI } from "../API/api";

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO';
const SET_CAPTCHA_IMAGE = 'SET_CAPTCHA_IMAGE';
const SET_AUTH_PROFILE_PHOTO_SUCCESS = 'SET_AUTH_PROFILE_PHOTO';


let initialState = {
	login: null,
	id: null,
	email: null,
	isAuth: false,
	captchaImg: null,
	authProfilePhoto: null
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
		case SET_AUTH_USER_INFO:
			return { 
				...state, 
				...action.data
			}

		case SET_CAPTCHA_IMAGE:
			return { 
				...state, 
				captchaImg: action.captchaImg
			}

		case SET_AUTH_PROFILE_PHOTO_SUCCESS:
			return { 
				...state, 
				authProfilePhoto: action.photo
			}

    default:
      return state;
  }
};


const setAuthProfilePhotoSuccess = (photo) => ({ type: SET_AUTH_PROFILE_PHOTO_SUCCESS, photo });
const setAuthUserData = (login, id, email, isAuth) => ({ type: SET_AUTH_USER_INFO, data: {login, id, email, isAuth} });
const setCaptchaImage = (captchaImg) => ({ type: SET_CAPTCHA_IMAGE, captchaImg });

export const getAuthUserData = () => {
	return async (dispatch) => {
		const authResponse = await authAPI.me();
		if (authResponse.data.resultCode === 0) {
			const { login, id, email } = authResponse.data.data;
			dispatch(setAuthUserData(login, id, email, true));
		}
	}
}

export const login = (email, password, rememberMe, captcha , setStatus) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe, captcha);
		if (response.resultCode === 0) {
			dispatch(getAuthUserData());
			dispatch(setCaptchaImage(null));
		}
		else if (response.resultCode === 10) {
			return "captcha";
		}
		else {
			setStatus({ error: response.messages[0] });
		}
	}
}

export const logout = () => {
	return async (dispatch) => {
		const response = await authAPI.logout();
		if(response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false, null));
		}
	}
}

export const getCaptcha = () => {
	return async (dispatch) => {
		const response = await authAPI.captcha();
		dispatch(setCaptchaImage(response.data.url));
	}
}

export const setAuthProfilePhoto = (userId) => {
	return async (dispatch) => {
		const response = await profileAPI.getProfile(userId);
		dispatch(setAuthProfilePhotoSuccess(response.photos.small));
	}
}

export default authReducer;
