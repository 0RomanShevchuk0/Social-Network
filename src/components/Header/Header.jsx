import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

import logoImage from "./../../assets/img/logo.png";
import defaultUserPhoto from "../../assets/img/DialogPersone.png";


const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImage} src={logoImage} alt="logoImage" />

			<div className={styles.loginWrapper}>
				{props.isAuth ? <LoggedIn {...props} /> : <NavLink className={styles.toLogin} to="/login">Log In</NavLink> }
			</div>
    </header>
  );
}

const LoggedIn = (props) => {
	return (
		<div className={styles.login}>
			<img className={styles.userPhoto} src={props.profile ? 
				props.profile.photos.small :
				defaultUserPhoto} alt="User Photo" 
			/>
			{props.login}
			<button className={styles.logOut} onClick={props.logout}>Log Out</button>
		</div>
	)
}


export default Header;