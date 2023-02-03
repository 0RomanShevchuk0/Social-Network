import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import thunkMiddlevare from "redux-thunk";

import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reducer";


let redusers = combineReducers({
	profilePage : profileReducer,
	messagesPage : messageReducer,
	usersPage : usersReducer,
	musicPage : musicReducer,
	auth: authReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddlevare));
	
window.store = store;

export default store;