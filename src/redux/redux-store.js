import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
	
window.__store__ = store;

export default store;