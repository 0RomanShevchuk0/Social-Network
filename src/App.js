import { Routes, Route } from "react-router-dom";

import styles from "./app.module.scss";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Messages from "./components/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MusicContainer from "./components/Music/MusicContainer";
import Settings from "./components/Settings/Settings";

const App = (props) => {		
	return (
			<div className={styles.App}>
				<div className={styles.wrapper}>
					<HeaderContainer store={props.store} />
					<Navbar />
					<div className={styles.appContent}>
						<Routes>
							<Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
							<Route path="/messages/*" element={<Messages store={props.store} />} />
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
