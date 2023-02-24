import { authAPI } from "../API/api";

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO';
const SET_CAPTCHA_IMAGE = 'SET_CAPTCHA_IMAGE';


let initialState = {
	login: null,
	id: null,
	email: null,
	isAuth: false,
	captchaImg: null
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

    default:
      return state;
  }
};


const setAuthUserData = (login, id, email, isAuth) => ({ type: SET_AUTH_USER_INFO, data: {login, id, email, isAuth} });
const setCaptchaImage = (captchaImg) => ({ type: SET_CAPTCHA_IMAGE, captchaImg });

export const getAuthUserData = () => {
	return (dispatch) => {
		return authAPI.me().then((authResponse) => {
			if(authResponse.data.resultCode === 0) {
				const { login, id, email } = authResponse.data.data;
					dispatch(setAuthUserData(login, id, email, true));
			}
		});
	}
}

export const login = (email, password, rememberMe, captcha , setStatus) => {
	return (dispatch) => {
		return authAPI.login(email, password, rememberMe, captcha).then(response => {
			if(response.resultCode === 0) {
				dispatch(getAuthUserData());
				dispatch(setCaptchaImage(null));
			}
			else if(response.resultCode === 10) {
				return "captcha"
			}
			else {
				setStatus({error: response.messages[0]});
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

export const getCaptcha = () => {
	return (dispatch) => {
		return authAPI.captcha().then((response) => {
			dispatch(setCaptchaImage(response.data.url));
		})
	}
}


export default authReducer;
