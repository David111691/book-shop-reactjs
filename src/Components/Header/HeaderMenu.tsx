import styles from "./HeaderMenu.module.css";

function HeaderMenu({ children }) {
  return <div className={styles["header__menu-container"]}>{children}</div>;
}

export default HeaderMenu;
