import logoImage from "./../../assets/img/logo.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImage} src={logoImage} alt="logoImage" />
    </header>
  );
}

export default Header;