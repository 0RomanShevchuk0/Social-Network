import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./app.module.scss";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MusicContainer from "./components/Music/MusicContainer";
import Settings from "./components/Settings/Settings";

const App = (props) => {		
	return (
		<BrowserRouter>
			<div className={styles.App}>
				<div className={styles.wrapper}>
					<Header />
					<Navbar />
					<div className={styles.appContent}>
						<Routes>
							<Route path="/profile/*" element={<Profile store={props.store} />} />
							<Route path="/messages/*" element={<Messages store={props.store} />} />
							<Route path="/users" element={<UsersContainer store={props.store} />} />
							<Route path="/news" element={<News />} />
							<Route path="/music" element={<MusicContainer store={props.store} />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
