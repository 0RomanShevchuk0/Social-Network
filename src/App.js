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
							<Route path="/Profile" element={<Profile store={props.store} />} />
							<Route path="/Messages/*" element={<Messages store={props.store} />} />
							<Route path="/Users" element={<UsersContainer store={props.store} />} />
							<Route path="/News" element={<News />} />
							<Route path="/Music" element={<MusicContainer store={props.store} />} />
							<Route path="/Settings" element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
