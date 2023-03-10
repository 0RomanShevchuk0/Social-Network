import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
import thunkMiddleware from "redux-thunk";

import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";


let RootReducer = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messageReducer,
	usersPage: usersReducer,
	musicPage: musicReducer,
	auth: authReducer
});

type RootReducerType = typeof RootReducer
export type GlobalStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.__store__ = store;

export default store;