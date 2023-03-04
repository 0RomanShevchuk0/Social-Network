import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getAuthUserData, setAuthProfilePhoto } from "./redux/auth-reducer";
import { initialize } from "./redux/app-reducer";

import styles from "./app.module.scss";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import Loader from "./common/Loader/Loader";
const Login = React.lazy(() => import("./components/Login/Login"));


const App = (props) => {

	useEffect(() => {
		props.initialize();
		if(props.userId) props.setAuthProfilePhoto(props.userId);
	}, [props.isAuth]);
	
	if(!props.initialized) return <Loader />

	return (
			<div className={styles.App}>
				<div className={styles.wrapper}>
					<HeaderContainer store={props.store} />
					<Navbar />
					<div className={styles.appContent}>
						<Routes>
							<Route path="/login" element={<Suspense fallback={<Loader />}><Login store={props.store} /></Suspense>} />
							<Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
							<Route path="/messages/*" element={<MessagesContainer store={props.store} />} />
							<Route path="/users" element={<UsersContainer store={props.store} />} />
							<Route path="/music" element={<MusicContainer store={props.store} />} />
						</Routes>
					</div>
				</div>
			</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		initialized: state.app.initialized,
		userId: state.auth.id,
	}
}

export default connect(mapStateToProps, { getAuthUserData, initialize, setAuthProfilePhoto })(App);
