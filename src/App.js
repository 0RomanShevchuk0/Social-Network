import { Routes, Route, useNavigate } from "react-router-dom";

import styles from "./app.module.scss";


import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MusicContainer from "./components/Music/MusicContainer";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";


const App = (props) => {
	return (
			<div className={styles.App}>
				<div className={styles.wrapper}>
					<HeaderContainer store={props.store} />
					<Navbar />
					<div className={styles.appContent}>
						<Routes>
							<Route path="/login" element={<Login store={props.store} />} />
							<Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
							<Route path="/messages/*" element={<MessagesContainer store={props.store} />} />
							<Route path="/users" element={<UsersContainer store={props.store} />} />
							<Route path="/news" element={<News />} />
							<Route path="/music" element={<MusicContainer store={props.store} />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div>
	);
};

export default App;
