import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunkMiddleware from "redux-thunk";

import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";


let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messageReducer,
	usersPage: usersReducer,
	musicPage: musicReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
	
window.store = store;

export default store;