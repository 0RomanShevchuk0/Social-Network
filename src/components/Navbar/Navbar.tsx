import { FC } from "react";
import styles from "./Navbar.module.scss";
import SideBarLink from "./SideBarLink";


const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.items}>
				<SideBarLink to="profile" name="Profile" />
				<SideBarLink to="messages" name="Messages" />
				<SideBarLink to="users" name="Users" />
				<SideBarLink to="music" name="Music" />
      </ul>
    </nav>
  );
};


export default Navbar;
