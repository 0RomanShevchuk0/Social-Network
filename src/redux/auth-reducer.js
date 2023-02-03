import { authAPI, profileAPI } from "../API/api";

const SET_AUTH_USER_INFO = 'SET-AUTH-USER-INFO';


let initialState = {
	login: null,
	id: null,
	email: null,
	photoURL: null,
	isLoading : false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
		case SET_AUTH_USER_INFO:
			return ({ ...state, ...action.data })

    default:
      return state;
  }
};


export const setAuthUserData = (login, id, email, photoURL) => ({ type: SET_AUTH_USER_INFO, data: {login, id, email, photoURL} });

export const auth = () => {
	return (dispatch) => {
		authAPI.auth().then((authResponse) => {
			if(authResponse.data.resultCode === 0) {
				const { login, id, email } = authResponse.data.data;

				profileAPI.getProfile(id)
				.then((userData) => {
					const userPhoto = userData.photos.small ? userData.photos.small : null;
					dispatch(setAuthUserData(login, id, email, userPhoto));
				});
			}
		});
	}
}


export default authReducer;
