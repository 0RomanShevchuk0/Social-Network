import { authAPI } from "../API/api";

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO';


let initialState = {
	login: null,
	id: null,
	email: null,
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


const setAuthUserData = (login, id, email, isAuth) => ({ type: SET_AUTH_USER_INFO, data: {login, id, email, isAuth} });

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

export const login = (email, password, rememberMe, setStatus) => {
	return (dispatch) => {
		return authAPI.login(email, password, rememberMe).then(response => {
			if(response.resultCode === 0) {
				dispatch(setAuthUserData());
			}
			else {
				setStatus({error: response.messages[0]})
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
