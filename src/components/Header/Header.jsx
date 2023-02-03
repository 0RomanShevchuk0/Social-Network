import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

import logoImage from "./../../assets/img/logo.png";
import defaultUserPhoto from "../../assets/img/DialogPersone.png";


const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImage} src={logoImage} alt="logoImage" />

			<div className={styles.login}>
				<img className={styles.userPhoto} src={props.userPhoto ? props.userPhoto : defaultUserPhoto} alt="User Photo" />
				{props.login ? props.login :
				<NavLink className={styles.toLogin} to="/login">Login</NavLink>}
			</div>
    </header>
  );
}


export default Header;