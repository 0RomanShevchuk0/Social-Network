import { NavLink } from "react-router-dom";

import logoImage from "./../../assets/img/logo.png";
import defaultUserPhoto from "../../assets/img/DialogPersone.png";
import logoutIcon from "./../../assets/img/logout-icon.png";

import styles from "./Header.module.scss";
import { FC } from "react";

type PropsType = {
	login: string | null
	isAuth: boolean
	authProfilePhoto: string | null
	logout: () => void
}

const Header: FC<PropsType> = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImage} src={logoImage} alt="logoImage" />

			<div className={styles.loginWrapper}>
				{props.isAuth ? <AuthUserInfo {...props} /> : <NavLink className={styles.toLogin} to="/login">Log in</NavLink> }
			</div>
    </header>
  );
}

const AuthUserInfo: FC<PropsType> = (props) => {
	return (
		<div className={styles.login}>
			<img 
				className={styles.userPhoto} 
				src={props.authProfilePhoto ? 
					props.authProfilePhoto :
					defaultUserPhoto
				} 
				alt="User" 
			/>
			{props.login}
			<button 
				onClick={props.logout}
				className={styles.logOut}
				title="Log out" 
			>
				<img src={logoutIcon} alt="Log out" />
			</button>
		</div>
	)
}


export default Header;