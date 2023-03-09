import { authAPI, profileAPI } from "../API/api"

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO'
const SET_CAPTCHA_IMAGE = 'SET_CAPTCHA_IMAGE'
const SET_AUTH_PROFILE_PHOTO_SUCCESS = 'SET_AUTH_PROFILE_PHOTO'


let initialState = {
	login: null as string | null,
	id: null as number | null,
	email: null as string | null,
	isAuth: false,
	captchaImg: null as string | null,
	authProfilePhoto: null as string | null,
}

type StateType = typeof initialState

const authReducer = (state = initialState, action: any): StateType => {
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
      return state
  }
};

type SetAuthProfilePhotoSuccessActionType = {
	type: typeof SET_AUTH_PROFILE_PHOTO_SUCCESS,
	photo: string,
}
type SetAuthUserDataActionType = {
	type: typeof SET_AUTH_USER_INFO,
	data: {
		login: string | null,
		id: number | null,
		email: string | null,
		isAuth: boolean,
	}
}
type SetCaptchaImageActionType = {
	type: typeof SET_CAPTCHA_IMAGE,
	captchaImg: string | null,
}

const setAuthProfilePhotoSuccess = (photo: string): SetAuthProfilePhotoSuccessActionType => ({
	type: SET_AUTH_PROFILE_PHOTO_SUCCESS, photo 
});
const setAuthUserData = (
		login: string | null, id: number | null, email: string | null, isAuth: boolean
	):SetAuthUserDataActionType => ({
		type: SET_AUTH_USER_INFO, data: {login, id, email, isAuth} 
});
const setCaptchaImage = (captchaImg: string | null): SetCaptchaImageActionType => ({
	type: SET_CAPTCHA_IMAGE, captchaImg 
});

export const getAuthUserData = () => {
	return async (dispatch: any) => {
		const authResponse = await authAPI.me()
		if (authResponse.data.resultCode === 0) {
			const { login, id, email } = authResponse.data.data
			dispatch(setAuthUserData(login, id, email, true))
		}
	}
}

export const login = (
		email: string, password: string, rememberMe: boolean, 
		captcha: string , setStatus: any) => {
	return async (dispatch: any) => {
		const response = await authAPI.login(email, password, rememberMe, captcha)
		if (response.resultCode === 0) {
			dispatch(getAuthUserData());
			dispatch(setCaptchaImage(null));
		}
		else if (response.resultCode === 10) {
			return "captcha";
		}
		else {
			setStatus({ error: response.messages[0] })
		}
	}
}

export const logout = () => {
	return async (dispatch: any) => {
		const response = await authAPI.logout();
		if(response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}
}

export const getCaptcha = () => {
	return async (dispatch: any) => {
		const response = await authAPI.captcha();
		dispatch(setCaptchaImage(response.data.url))
	}
}

export const setAuthProfilePhoto = (userId: number) => {
	return async (dispatch: any) => {
		const response = await profileAPI.getProfile(userId);
		dispatch(setAuthProfilePhotoSuccess(response.photos.small))
	}
}

export default authReducer;
