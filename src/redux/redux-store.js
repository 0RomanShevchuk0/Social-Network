import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import musicReducer from "./music-reducer";


let redusers = combineReducers({
	profilePage : profileReducer,
	messagesPage : messageReducer,
	usersPage : usersReducer,
	musicPage : musicReducer,
});

let store = createStore(redusers);
	
window.store = store;

export default store;