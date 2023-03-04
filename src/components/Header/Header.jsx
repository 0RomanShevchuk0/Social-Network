import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

import logoImage from "./../../assets/img/logo.png";
import defaultUserPhoto from "../../assets/img/DialogPersone.png";
import logoutIcon from "./../../assets/img/logout-icon.png";


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
			<img 
				className={styles.userPhoto} 
				src={props.authProfilePhoto ? 
					props.authProfilePhoto :
					defaultUserPhoto
				} 
				alt="User Photo" 
			/>
			{props.login}
			<button 
				onClick={props.logout}
				className={styles.logOut}
				title="LogOut" 
			>
				<img src={logoutIcon} alt="LogOut" />
			</button>
		</div>
	)
}


export default Header;