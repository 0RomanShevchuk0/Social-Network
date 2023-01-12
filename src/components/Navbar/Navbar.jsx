import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.items}>
				
        <li>
					<NavLink
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/Profile">
							Profile
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/Messages">
							Messages
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/Users">
							Users
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/News">
							News
					</NavLink>
				</li>

        <li>
					<NavLink 
						className = {navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/Music">
							Music
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/Settings">
							Settings
					</NavLink>
				</li>

      </ul>
    </nav>
  );
};

export default Navbar;
