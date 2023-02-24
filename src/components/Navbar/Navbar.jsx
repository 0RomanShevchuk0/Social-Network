import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.items}>
				
        <li>
					<NavLink
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/profile">
							Profile
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/messages">
							Messages
					</NavLink>
				</li>

        <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/users">
							Users
					</NavLink>
				</li>

        {/* <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/news">
							News
					</NavLink>
				</li> */}

        <li>
					<NavLink 
						className = {navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/music">
							Music
					</NavLink>
				</li>

        {/* <li>
					<NavLink 
						className={navData => navData.isActive ? [styles.item,styles.active].join(' ') : styles.item} 
						to="/settings">
							Settings
					</NavLink>
				</li> */}

      </ul>
    </nav>
  );
};

export default Navbar;
